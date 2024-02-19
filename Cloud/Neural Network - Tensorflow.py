import os
import cupy as cp
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib.ticker import MaxNLocator
from matplotlib.dates import DateFormatter, DayLocator, HourLocator, MinuteLocator
from keras.models import Sequential
from keras.layers import Dense, Dropout, LSTM, Bidirectional, BatchNormalization
from keras.optimizers import Adam
from keras.callbacks import EarlyStopping, ReduceLROnPlateau
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import tensorflow as tf
import random
import keras.backend as K
import math

gpus = tf.config.experimental.list_physical_devices('GPU')

if gpus:
    try:
        # Set memory growth to True for all available GPUs
        for gpu in gpus:
            tf.config.experimental.set_memory_growth(gpu, True)
        logical_gpus = tf.config.experimental.list_logical_devices('GPU')
        print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
    except RuntimeError as e:
        print(e)

# Set random seeds for reproducibility
seed_value = 3600  # You can use any integer as the seed value

os.environ['PYTHONHASHSEED'] = str(seed_value)

# 1. Set the seed for random (Python's built-in random module)
random.seed(seed_value)

# 2. Set the seed for NumPy
cp.random.seed(seed_value)

# 3. Set the seed for TensorFlow (if you're using GPU)
tf.random.set_seed(seed_value)

# Data loading and preprocessing
data = pd.read_csv('BTC-USD.csv')  # Assume the CSV file is in the same directory
data['Date'] = pd.to_datetime(data['Date'])
data.set_index('Date', inplace=True)
scaler = MinMaxScaler(feature_range=(0, 1))
data['Close'] = scaler.fit_transform(data[['Close']])

# Split data into training and testing sets
train_data = data.iloc[:-48]  # Keep everything except the first 30 records for training
test_data = data.iloc[-48:]  # Use the first 30 records for testing


# Function to prepare data
def PrepareData(df, n_steps):
    X, Y = [], []
    for i in range(len(df) - n_steps):
        X.append(df['Close'].values[i:i + n_steps])
        Y.append(df['Close'].values[i + n_steps])
    X = cp.array(X).get()
    Y = cp.array(Y).get()
    return X, Y

N_STEPS = 24

# Prepare data with correct sequence lengths
X_train, Y_train = PrepareData(train_data, N_STEPS)
X_test, Y_test = PrepareData(test_data, N_STEPS)

# Build and train the LSTM model
model = Sequential()
model.add(LSTM(units=4,  activation='tanh', return_sequences=False, input_shape=(X_train.shape[1], 1)))
model.add(Dense(12800, activation='gelu'))
model.add(Dense(12800, activation='gelu'))
model.add(Dense(12800, activation='gelu'))
model.add(Dense(12800, activation='gelu'))
model.add(Dense(1, activation='gelu'))

# Compile and train the model with the custom learning rate schedule
optimizer = Adam(learning_rate=0.00001)  # Adjust the initial learning rate as needed
model.compile(loss='mean_squared_error', optimizer=optimizer)

# Train the model with the custom learning rate schedule callback for 100 epochs
model.fit(X_train, Y_train, epochs=2500, batch_size=len(X_train), verbose=1)

model.summary()

# Make predictions and inverse transform
predictions = model.predict(X_test)
predictions = scaler.inverse_transform(predictions)

# Inverse transform the "Close" values in test_data
test_data.loc[:, 'Close'] = scaler.inverse_transform(test_data[['Close']])

# Create a DataFrame with dates and predicted prices
predicted_data = test_data.iloc[:N_STEPS].copy()  # Initialize with the first N_STEPS data points

# Add the predicted prices to the correct index
predicted_data['Predicted_Close'] = predictions[:N_STEPS]

# Print the DataFrame
print(predicted_data)

# Evaluate the model
mse = mean_squared_error(test_data['Close'][N_STEPS:], predictions)
rmse = cp.sqrt(mse)
mae = mean_absolute_error(test_data['Close'][N_STEPS:], predictions)
r2 = r2_score(test_data['Close'][N_STEPS:], predictions)

print(f"Root Mean Squared Error (RMSE): {rmse:.4f}")

# Expand the date range to include all days
date_range = pd.date_range(start=test_data.index[N_STEPS], periods=len(predicted_data), freq='D')

# Plot the results with every single day on the x-axis
plt.figure(figsize=(18, 6))

# Plot the actual closing prices
plt.plot(date_range, test_data['Close'][N_STEPS:], color='blue', label='Actual Prices', linewidth=1)

# Plot the predicted closing prices as a red line
plt.plot(date_range, predicted_data['Predicted_Close'], color='red', label='Predicted Prices', linewidth=1)

plt.title('BTC Price Prediction with LSTM (TensorFlow)\nRMSE: {:.4f}'.format(rmse))
plt.xlabel('Date')
plt.ylabel('Price')
plt.legend()
plt.grid(True)

plt.show()