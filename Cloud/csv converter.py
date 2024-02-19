import csv

# Input and output file paths
input_file = 'Gemini_BTCUSD_1h.csv'
output_file = input_file + '_output.csv'

# Read the input CSV
with open(input_file, 'r') as input_csv_file:
    csv_reader = csv.reader(input_csv_file)
    
    # Skip the first two lines (header lines)
    next(csv_reader)
    next(csv_reader)
    
    # Create a list to store the data in the desired format
    output_data = []

    for row in csv_reader:
        unix, date, symbol, open_price, high, low, close, _, _ = row  # Ignore Volume EUR and Volume BTC

        # Create a new row in the desired format with decimal values
        new_row = [date, open_price, high, low, close, close]
        output_data.append(new_row)

# Write the data to the output CSV
with open(output_file, 'w', newline='') as output_csv_file:
    csv_writer = csv.writer(output_csv_file)

    # Write the header to the output CSV
    csv_writer.writerow(['Date', 'Open', 'High', 'Low', 'Close', 'Adj Close'])

    # Write the processed data to the output CSV
    csv_writer.writerows(output_data)

print(f"Data has been converted and saved to {output_file}")