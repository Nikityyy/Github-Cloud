// ==UserScript==
// @name         Aternos Anti Anti-adblock
// @namespace    r0630hh1edcuum5397kimyc0ucwy2h3psn4c6r1u4j
// @version      0.1.21
// @description  Fuck anti-adblock from the free hosting minecraft servers Aternos.org. Parry this you filthy casual!
// @author       Angry Developer against excessive ADs
// @source       https://gist.github.com/DvilMuck/f2b14f3f65e8f22974d781277158f82a
// @supportURL   https://gist.github.com/DvilMuck/f2b14f3f65e8f22974d781277158f82a
// @updateURL    https://gist.github.com/DvilMuck/f2b14f3f65e8f22974d781277158f82a/raw/aternosAntiAntiadblock.user.js
// @downloadURL  https://gist.github.com/DvilMuck/f2b14f3f65e8f22974d781277158f82a/raw/aternosAntiAntiadblock.user.js
// @match        *://aternos.org/*
// @icon         https://aternos.org/favicon.ico
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @grant        GM_addStyle
// @grant        GM.addStyle
// @run-at       document-start
// @noframes
// ==/UserScript==

// Sorry for the obfuscated version
/* Changelog
 * Fixed file explorer
 *
 * Known issues:
 * - Elements not updating nor removed after clicking on them (eg. trash bin button, Share access UI)
 * - Sometimes events will not be added to elements
 * - Unable to work with Use Script API based userscripts managers
*/

'use strict';

function U() {
    const mz = ['\x73\x75\x62\x74\x72\x65\x65', '\x6c\x65\x6d\x65\x6e\x74', '\x3a\x20\x2d\x31\x20\x21\x69\x6d\x70\x6f', '\x6c\x6d\x61\x52\x7a', '\x73\x6a\x76\x5a\x4f', '\x61\x69\x61', '\x09\x7a\x2d\x69\x6e\x64\x65\x78\x3a\x20', '\x77\x72\x69\x74\x61\x62\x6c\x65', '\x20\x21\x69\x6d\x70\x6f\x72\x74\x61\x6e', '\x75\x7a\x76\x44\x64', '\x38\x38\x72\x5a\x75\x45\x56\x65', '\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e', '\x76\x74\x4d\x4e\x42', '\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d', '\x64\x69\x76\x5b\x73\x72\x63\x5d', '\x61\x65\x5a\x78\x62', '\x39\x34\x35\x36\x36\x63\x70\x4b\x66\x47\x58', '\x65\x6e\x74', '\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20', '\x77\x6f\x72\x6c\x64', '\x63\x6d\x2d\x67\x75\x74\x74\x65\x72', '\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75', '\x73\x69\x62\x6c\x65\x20\x21\x69\x6d\x70', '\x63\x6f\x6d\x70\x6c\x65\x74\x65', '\x63\x6f\x6e\x74\x65\x6e\x74', '\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69', '\x63\x6d\x2d\x73\x63\x72\x6f\x6c\x6c\x65', '\x3d\x27\x23\x46\x36\x32\x34\x35\x31\x27', '\x74\x79\x70\x65', '\x65\x72\x74\x79', '\x70\x61\x72\x65\x6e\x74\x45\x6c\x65\x6d', '\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74', '\x6d\x61\x69\x6e', '\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63', '\x61\x74\x74\x72\x69\x62\x75\x74\x65\x46', '\x63\x6d\x2d\x73\x65\x6c\x65\x63\x74\x69', '\x6c\x6f\x67', '\x63\x68\x69\x6c\x64\x45\x6c\x65\x6d\x65', '\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29', '\x6c\x69\x73\x74', '\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73', '\x69\x73\x41\x63\x74\x69\x76\x65', '\x57\x53\x61\x61\x69', '\x70\x6c\x61\x79\x65\x72', '\x31\x38\x33\x35\x39\x36\x37\x6e\x7a\x6e\x64\x7a\x76', '\x46\x43\x64\x7a\x66', '\x31\x31\x30\x65\x74\x6a\x43\x6d\x77', '\x36\x31\x31\x31\x37\x30\x55\x58\x79\x66\x64\x5a', '\x73\x65\x72\x76\x65\x72', '\x77\x61\x72\x6e', '\x6f\x70\x61\x63\x69\x74\x79', '\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65', '\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75', '\x6e\x6f\x64\x65\x4e\x61\x6d\x65', '\x49\x46\x52\x41\x4d\x45', '\x64\x69\x76', '\x6f\x76\x65\x72\x66\x6c\x6f\x77', '\x45\x6c\x65\x6d\x65\x6e\x74', '\x6e\x6f\x6e\x65', '\x68\x65\x61\x64\x65\x72', '\x6f\x6e\x65\x20\x21\x69\x6d\x70\x6f\x72', '\x66\x69\x6c\x65\x73', '\x62\x6f\x64\x79', '\x6d\x70\x6f\x72\x74\x61\x6e\x74\x3b\x0a', '\x69\x6e\x66\x6f', '\x30\x30\x33\x34\x37\x34\x38\x30\x39\x32', '\x74\x6f\x53\x74\x72\x69\x6e\x67', '\x62\x61\x63\x6b\x75\x70', '\x77\x69\x64\x74\x68', '\x09\x09\x09\x7a\x2d\x69\x6e\x64\x65\x78', '\x69\x6e\x63\x6c\x75\x64\x65\x73', '\x63\x6d\x2d\x6c\x61\x79\x65\x72', '\x61\x70\x70\x65\x6e\x64', '\x73\x6f\x6d\x65', '\x43\x68\x61\x72\x61\x63\x74\x65\x72\x44', '\x74\x61\x6e\x74\x3b\x0a\x09\x09\x09\x76', '\x66\x46\x53\x6e\x51', '\x23\x73\x74\x61\x72\x74', '\x63\x6d\x2d\x67\x75\x74\x74\x65\x72\x45', '\x63\x68\x69\x6c\x64\x72\x65\x6e', '\x63\x68\x61\x72\x61\x63\x74\x65\x72\x44', '\x69\x6f\x75\x6f\x75', '\x72\x65\x70\x6c\x61\x63\x65', '\x73\x65\x61\x72\x63\x68', '\x23\x72\x65\x61\x64\x2d\x6f\x75\x72\x2d', '\x4e\x45\x67\x6e\x48', '\x4f\x62\x6a\x65\x63\x74', '\x61\x67\x6d\x65\x6e\x74', '\x65\x72\x72\x6f\x72', '\x62\x69\x6c\x69\x74\x79\x3a\x20\x76\x69', '\x47\x45\x74\x75\x42', '\x72\x61\x6e\x64\x6f\x6d', '\x69\x6e\x64\x65\x78\x4f\x66', '\x33\x33\x70\x43\x56\x65\x68\x71', '\x61\x74\x61', '\x74\x70\x73\x3a\x2f\x2f\x73\x75\x70\x70', '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75', '\x68\x65\x61\x64', '\x63\x6c\x69\x63\x6b', '\x63\x68\x69\x6c\x64\x4c\x69\x73\x74', '\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c', '\x63\x73\x73\x54\x65\x78\x74', '\x65\x65\x65\x42\x4d', '\x63\x6f\x6e\x73\x6f\x6c\x65', '\x73\x6c\x69\x63\x65', '\x74\x6f\x72', '\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73', '\x73\x2e\x6f\x72\x67\x2f\x68\x63\x2f\x61', '\x68\x65\x69\x67\x68\x74', '\x66\x6f\x72\x45\x61\x63\x68', '\x69\x6f\x61\x72\x70', '\x75\x75\x6e\x6b\x61', '\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65', '\x31\x34\x34\x4d\x49\x41\x5a\x75\x57', '\x73\x74\x79\x6c\x65', '\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f', '\x6f\x70\x74\x69\x6f\x6e\x73', '\x73\x6f\x66\x74\x77\x61\x72\x65', '\x39\x32\x31\x36\x30\x6a\x68\x77\x4c\x65\x78', '\x6c\x65\x6e\x67\x74\x68', '\x65\x75\x7a\x53\x79', '\x65\x78\x63\x65\x70\x74\x69\x6f\x6e', '\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70', '\x66\x51\x4b\x48\x7a', '\x20\x7b\x0a\x09\x09\x09\x76\x69\x73\x69', '\x69\x44\x56\x58\x77', '\x73\x74\x61\x72\x74', '\x61\x63\x65', '\x23\x74\x65\x78\x74', '\x70\x72\x65\x70\x65\x6e\x64', '\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65', '\x74\x6b\x56\x6c\x6b', '\x31\x30\x31\x34\x73\x6e\x77\x49\x4a\x68', '\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c', '\x70\x75\x73\x68', '\x33\x34\x32\x31\x38\x66\x65\x49\x49\x49\x61', '\x61\x70\x70\x6c\x79', '\x73\x74\x65\x6e\x65\x72', '\x6a\x6c\x56\x55\x66', '\x6b\x74\x69\x68\x4b', '\x74\x65\x78\x74\x2f\x63\x73\x73', '\x4d\x70\x7a\x54\x5a', '\x6f\x6e\x4c\x61\x79\x65\x72', '\x73\x75\x62\x73\x74\x72\x69\x6e\x67', '\x61\x74\x74\x72\x69\x62\x75\x74\x65\x4e', '\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c', '\x64\x69\x76\x5b\x73\x74\x79\x6c\x65\x5d', '\x74\x61\x62\x6c\x65', '\x70\x6c\x75\x67\x69\x6e', '\x69\x6c\x74\x65\x72', '\x72\x65\x6d\x6f\x76\x65', '\x68\x69\x64\x64\x65\x6e', '\x6e\x74\x43\x6f\x75\x6e\x74', '\x63\x6d\x2d\x67\x75\x74\x74\x65\x72\x73', '\x63\x68\x61\x6e\x67\x65', '\x63\x6d\x2d\x6c\x69\x6e\x65', '\x64\x69\x73\x70\x6c\x61\x79', '\x6f\x70\x61\x63\x69\x74\x79\x3a\x20\x31', '\x74\x6f\x73\x20\x7b\x0a\x09\x09\x09\x64', '\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75', '\x6f\x62\x73\x65\x72\x76\x65', '\x4b\x58\x67\x72\x6b', '\x66\x70\x61\x56\x56', '\x72\x74\x61\x6e\x74\x3b\x0a\x09\x7d\x0a', '\x69\x64\x20\x21\x69\x6d\x70\x6f\x72\x74', '\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x3a', '\x31\x32\x38\x32\x36\x38\x61\x6b\x7a\x55\x54\x68', '\x64\x69\x76\x5b\x73\x74\x79\x6c\x65\x2a', '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65', '\x74\x6f\x72\x41\x6c\x6c', '\x61\x75\x74\x6f\x20\x21\x69\x6d\x70\x6f', '\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28', '\x20\x68\x69\x64\x64\x65\x6e\x20\x21\x69', '\x66\x69\x6c\x74\x65\x72', '\x74\x69\x6f\x6e', '\x63\x6d\x2d\x63\x6f\x6e\x74\x65\x6e\x74', '\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65', '\x6f\x62\x6a\x65\x63\x74', '\x76\x61\x6c\x75\x65', '\x74\x72\x61\x63\x65'];
    U = function() {
        return mz;
    };
    return U();
}

function C(I, u) {
    const m = U();
    return C = function(V, c) {
        V = V - (-0x22 * 0x87 + 0x450 + 0xc7 * 0x13);
        let L = m[V];
        return L;
    }, C(I, u);
}
const mt = C;
(function(I, u) {
    const mO = C,
        m = I();
    while (!![]) {
        try {
            const V = parseInt(mO(0x1ce)) / (0xec5 + -0x16b0 + 0x152 * 0x6) + parseInt(mO(0x128)) / (-0x2f * 0x65 + 0x2d3 * 0x4 + 0x741) + -parseInt(mO(0x12b)) / (0x1 * -0x807 + 0xc2b + 0x7 * -0x97) * (-parseInt(mO(0x162)) / (0x5 * -0x69a + -0x20d0 + -0x2 * -0x20eb)) + parseInt(mO(0x186)) / (-0x7b5 * 0x1 + -0x17 * 0xe3 + 0x17 * 0x139) * (-parseInt(mO(0x168)) / (0x1ff5 + 0x76e * 0x3 + -0x3639)) + -parseInt(mO(0x184)) / (0x1 * -0xd3d + -0x6 * 0x2a9 + 0x1d3a) + -parseInt(mO(0x1c9)) / (-0x1e9 + -0x12 * 0x1f + 0x41f) * (-parseInt(mO(0x14a)) / (0x1 * -0xeb4 + -0x3f * -0x40 + -0x103 * 0x1)) + parseInt(mO(0x187)) / (0x1 * -0x6ab + -0x20d * -0x13 + -0x2042) * (parseInt(mO(0x1b5)) / (0xaff + -0xe6 * -0x2 + -0xcc0));
            if (V === u) break;
            else m['push'](m['shift']());
        } catch (c) {
            m['push'](m['shift']());
        }
    }
}(U, 0x92 * 0x8d4 + -0x15e3b * 0x3 + 0x14 * 0x162a));
let m6 = null,
    m7 = null,
    m8 = [],
    m9 = ![];
(function mA() {
    const ma = C,
        u = {
            '\x72': function(V, c) {
                return V === c;
            },
            '\x54': '\x6e\x61\x6d\x65',
            '\x6f': function(V, c) {
                return V !== c;
            },
            '\x4a': '\x63\x6c\x61\x73\x73',
            '\x6e': function(V, c) {
                return V !== c;
            },
            '\x66': function(V, c) {
                return V !== c;
            },
            '\x59': ma(0x12e),
            '\x42': ma(0x155),
            '\x5a': function(V, c) {
                return V === c;
            },
            '\x64': function(V, c) {
                return V === c;
            },
            '\x7a': '\x64\x65\x66\x61\x75\x6c\x74',
            '\x65': '\x55\x6c\x63\x6d\x41',
            '\x50': function(V, c) {
                return V === c;
            },
            '\x68': function(V, c) {
                return V === c;
            },
            '\x79': function(V, c) {
                return V === c;
            },
            '\x58': ma(0x1d0),
            '\x45': ma(0x1d5),
            '\x67': function(V, c) {
                return V === c;
            },
            '\x49\x30': function(V, c) {
                return V(c);
            },
            '\x49\x31': ma(0x1d8),
            '\x49\x32': function(V, c) {
                return V === c;
            },
            '\x49\x33': ma(0x12f),
            '\x49\x34': function(V, c) {
                return V(c);
            },
            '\x49\x35': ma(0x192),
            '\x49\x36': function(V, c) {
                return V !== c;
            },
            '\x49\x37': ma(0x145),
            '\x49\x38': ma(0x131),
            '\x49\x39': '\x49\x46\x52\x41\x4d\x45',
            '\x49\x49': ma(0x15c),
            '\x49\x75': ma(0x182),
            '\x49\x6d': ma(0x1a0),
            '\x49\x56': ma(0x129) + '\x64',
            '\x49\x55': ma(0x1bc) + '\x64',
            '\x49\x43': '\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70' + '\x65\x72\x74\x79',
            '\x49\x63': '\x63\x6d\x2d\x65\x64\x69\x74\x6f\x72',
            '\x49\x4c': ma(0x1a6) + ma(0x159),
            '\x49\x51': ma(0x172) + '\x72',
            '\x49\x41': ma(0x13d),
            '\x49\x73': ma(0x196),
            '\x49\x53': ma(0x178),
            '\x49\x4f': ma(0x170),
            '\x49\x61': ma(0x188),
            '\x49\x6a': ma(0x1cc),
            '\x49\x4d': '\x63\x6f\x6e\x73\x6f\x6c\x65',
            '\x49\x62': ma(0x17c),
            '\x49\x47': ma(0x1cd),
            '\x49\x4b': ma(0x138),
            '\x49\x44': ma(0x16b),
            '\x49\x6c': ma(0x19b),
            '\x49\x4e': ma(0x17f)
        };
    var m;
    try {
        m = u['\x49\x32'](typeof unsafeWindow, ma(0x155)) ? unsafeWindow : window;
    } finally {
        const V = Object[ma(0x14c)][ma(0x1cb) + '\x72'][ma(0x1d2) + ma(0x175)];
        Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70' + ma(0x175)](m[ma(0x1ae)]['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][ma(0x1cb) + '\x72'], u['\x49\x43'], {
            '\x77\x72\x69\x74\x61\x62\x6c\x65': ![],
            '\x49\x46': ![],
            '\x49\x6b': !![],
            '\x76\x61\x6c\x75\x65': function b() {
                const mj = ma;
                try {
                    if (arguments[0x2382 + 0x1fc * -0x8 + -0x1 * 0x13a2][mj(0x1cf)] === -0x863 + 0xe8 * 0xd + 0x3e * -0xe && u['\x72'](arguments[-0x92d + 0x1 * -0x21a8 + 0x2ad6], u['\x54']) && u['\x6f'](arguments[-0x2df * -0xd + 0x1 * 0x1829 + 0x1ebe * -0x2]['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[mj(0x133)](-0x6ae + -0x19 * 0x105 + 0x87 * 0x3d, -0x1be * 0x16 + 0x3e0 * -0x1 + 0x2a39), u['\x4a'])) {
                        var G, K;
                        if (u['\x6e'](G = arguments[-0x3 * -0xd + 0x98a + -0x9b1], null) && G !== void(0x1 * 0x1433 + 0x21 * 0xf2 + -0x3b * 0xdf) && G[mj(0x181)]) {
                            if (u['\x66'](mj(0x1b2), u['\x59'])) arguments[0x4 * -0x669 + -0x388 + 0x1d2c][mj(0x181)] = () => {
                                return !![];
                            };
                            else return;
                        } else u['\x72'](typeof arguments[-0x11b * 0x1d + 0x31 * -0xf + 0x1 * 0x22f0], u['\x42']) && u['\x5a'](u['\x5a'](K = arguments[0x69d + 0x377 * -0x3 + -0x1e5 * -0x2], null) || u['\x64'](K, void(-0x6f0 + 0xac6 + 0x2 * -0x1eb)) ? void(-0x1a24 + 0x137 * -0x1 + 0x1 * 0x1b5b) : K[mj(0x156)], u['\x7a']) && (arguments[0x3 * 0xc9c + 0x5 * 0x192 + -0x3 * 0xf3a] = () => {
                            return !![];
                        });
                    }
                    return V[mj(0x12c)](this, arguments);
                } catch (l) {}
            }
        });
        const c = {};
        c[ma(0x156)] = function() {
            const mM = ma;
            if (u['\x65'] === mM(0x164)) arguments[-0x9d * -0x29 + 0xa * -0xe9 + -0x100b] = () => {
                return !![];
            };
            else return !![];
        }, c[ma(0x15f)] = ![], c['\x49\x6b'] = !![], c['\x49\x46'] = ![], Object[ma(0x1d2) + ma(0x175)](m, ma(0x15d), c), m9 = !![];
        const L = Element[ma(0x14c)][ma(0x13a)] || CharacterData['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x72\x65\x6d\x6f\x76\x65'] || DocumentType[ma(0x14c)][ma(0x14c)][ma(0x13a)],
            Q = Element['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c' + '\x64'] || CharacterData['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][ma(0x1bc) + '\x64'] || DocumentType[ma(0x14c)][ma(0x1bc) + '\x64'],
            A = [ma(0x1d7), '\u037c\x74', u['\x49\x63'], u['\x49\x4c'], ma(0x13f), ma(0x153), u['\x49\x51'], ma(0x16c), u['\x49\x41'], ma(0x19f), ma(0x17b) + ma(0x132)],
            s = [u['\x49\x73'], u['\x49\x53'], u['\x49\x4f'], u['\x49\x61'], u['\x49\x6a'], u['\x49\x4d'], u['\x49\x62'], ma(0x183), u['\x49\x47'], u['\x49\x4b'], ma(0x195), u['\x49\x44'], u['\x49\x6c'], u['\x49\x4e']],
            S = G => {
                const mb = ma;
                if (!G) return ![];
                const K = A[mb(0x1a1)](D => G[mb(0x19e)](D));
                if (K) return ![];
                return s[mb(0x1a1)](D => G[mb(0x19e)](D));
            },
            O = G => {
                const mG = ma;
                var K;
                if (u['\x50'](G, document[mG(0x196)]) || S(u['\x50'](G, null) || u['\x68'](G, void(0x582 + -0x5ff * -0x1 + -0x1 * 0xb81)) ? void(-0x205 * 0x12 + -0x379 * -0x7 + 0xc0b) : u['\x68'](K = G['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65'], null) || K === void(0x1 * 0x1f58 + -0x1 * 0xa7f + 0x9 * -0x251) ? void(0x5 * -0x3a9 + -0xee2 + 0x6a3 * 0x5) : K[mG(0x154)]) || S(G === null || u['\x79'](G, void(-0x1bdd + 0x152c + -0x23b * -0x3)) ? void(-0x126b + 0x175 * -0xc + 0xd * 0x2c3) : G[mG(0x154)])) return !![];
                return ![];
            };

        function a() {
            const mD = ma;
            try {
                if (u['\x79'](u['\x58'], u['\x45'])) {
                    const K = Q ? function() {
                        const mK = C;
                        if (K) {
                            const F = K[mK(0x12c)](D, arguments);
                            return l = null, F;
                        }
                    } : function() {};
                    return a = ![], K;
                } else {
                    if (!this[mD(0x1c8)]) return;
                    if (this[mD(0x1c8)] === document[mD(0x196)] || u['\x67'](this, document[mD(0x196)])) return this['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65'];
                    if (u['\x49\x30'](O, this[mD(0x1c8)])) return this['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65'];
                    if (u['\x67'](this[mD(0x18d)], u['\x49\x31'])) return this['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65'][mD(0x1bc) + '\x64'](this);
                    if (u['\x49\x32'](arguments[mD(0x1cf)], 0x2149 * -0x1 + -0x1a * -0xde + 0xabd * 0x1)) return L['\x61\x70\x70\x6c\x79'](this);
                    return Q[mD(0x12c)](this, arguments);
                }
            } catch (K) {}
        }
        const j = Element[ma(0x14c)][ma(0x129) + '\x64'] || CharacterData[ma(0x14c)][ma(0x129) + '\x64'] || DocumentType[ma(0x14c)][ma(0x129) + '\x64'],
            M = Element[ma(0x14c)][ma(0x1a0)] || CharacterData['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][ma(0x1a0)] || DocumentType[ma(0x14c)][ma(0x1a0)];
        [m[ma(0x191)][ma(0x14c)], m[ma(0x1a2) + '\x61\x74\x61'][ma(0x14c)], m['\x44\x6f\x63\x75\x6d\x65\x6e\x74\x54\x79' + '\x70\x65'][ma(0x14c)], m['\x44\x6f\x63\x75\x6d\x65\x6e\x74\x46\x72' + ma(0x1af)][ma(0x14c)]][ma(0x151)](Boolean)[ma(0x1c5)](G => {
            const ml = ma,
                K = {
                    '\x49\x69': u['\x49\x35'],
                    '\x49\x71': function(N, F) {
                        return u['\x49\x36'](N, F);
                    },
                    '\x49\x48': function(N, F) {
                        return u['\x49\x36'](N, F);
                    },
                    '\x49\x52': function(N, F) {
                        return u['\x49\x36'](N, F);
                    },
                    '\x49\x57': '\x46\x43\x64\x7a\x66',
                    '\x49\x76': function(N, F) {
                        return u['\x49\x32'](N, F);
                    },
                    '\x49\x74': u['\x49\x37'],
                    '\x49\x77': u['\x49\x38'],
                    '\x49\x78': function(N, F) {
                        return u['\x49\x32'](N, F);
                    },
                    '\x49\x70': u['\x49\x39'],
                    '\x49\x72': function(N, F) {
                        return u['\x49\x32'](N, F);
                    },
                    '\x49\x54': function(N, F) {
                        return u['\x49\x32'](N, F);
                    },
                    '\x49\x6f': function(N, F) {
                        return N < F;
                    },
                    '\x49\x4a': function(N, F) {
                        return N instanceof F;
                    },
                    '\x49\x6e': function(N, F) {
                        return u['\x49\x36'](N, F);
                    },
                    '\x49\x66': u['\x49\x49'],
                    '\x49\x59': u['\x49\x75']
                };
            Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70' + ml(0x175)](G, u['\x49\x6d'], {
                '\x77\x72\x69\x74\x61\x62\x6c\x65': ![],
                '\x49\x46': ![],
                '\x49\x6b': !![],
                '\x76\x61\x6c\x75\x65': function N() {
                    const mN = ml,
                        F = {
                            '\x49\x42': function(R, W) {
                                return K['\x49\x71'](R, W);
                            },
                            '\x49\x5a': function(R, W) {
                                return K['\x49\x48'](R, W);
                            },
                            '\x49\x64': mN(0x1ca),
                            '\x49\x7a': mN(0x174)
                        };
                    if (K['\x49\x52'](mN(0x185), K['\x49\x57'])) {
                        let W = arguments[0x1e3c + 0xbe5 + -0x2a21][V];
                        if (W instanceof c) {
                            var v;
                            if (F['\x49\x42'](W, null) && F['\x49\x42'](W, void(0x22b2 * -0x1 + 0xf * -0xdb + 0x2f87)) && F['\x49\x5a'](v = W[mN(0x1c8)], null) && v !== void(0xea6 + -0x5 * -0x2e1 + -0x1d0b * 0x1) && v['\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65']) {
                                if (A['\x73\x6f\x6d\x65'](t => W[mN(0x1c8)][mN(0x154)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](t))) return this[mN(0x1c8)];
                            }
                        }
                    } else try {
                        if (K['\x49\x76'](K['\x49\x74'], K['\x49\x77'])) {
                            if (c) {
                                const v = s[mN(0x12c)](S, arguments);
                                return O = null, v;
                            }
                        } else {
                            if (arguments[mN(0x1cf)] === -0x9 * 0x34 + -0xdd * -0xd + 0x1 * -0x965) return;
                            if (arguments[0x1 * -0x185 + -0xb22 + 0xca7] instanceof HTMLElement) {
                                if (K['\x49\x76'](mN(0x146), mN(0x146))) {
                                    var k, q;
                                    if ((K['\x49\x76'](k = arguments[-0xb * 0xed + -0x1 * -0x26 + 0xa09], null) || K['\x49\x78'](k, void(0x5e * 0x4e + -0x2425 + 0x781)) ? void(-0x205 * 0x6 + 0x7 * -0x1f6 + 0x19d8) : k[mN(0x18d)]) === K['\x49\x70'] || K['\x49\x72']((q = arguments[0x16e * -0x11 + -0x1902 * -0x1 + -0xb3]) === null || K['\x49\x54'](q, void(0x419 * 0x1 + 0x42 + -0x45b)) ? void(0x1631 + 0x1 * -0x2051 + 0xa20) : q[mN(0x18d)], K['\x49\x70'])) return;
                                } else l[mN(0x13b)] = !![], V[mN(0x1ca)][mN(0x140)] = K['\x49\x69'];
                            }
                            for (let t = 0x1c86 + 0x348 + -0x1fce; K['\x49\x6f'](t, arguments[-0x7d3 + 0x9a3 + 0x4 * -0x74][mN(0x1cf)]); t++) {
                                let w = arguments[-0x2606 + 0xfe9 + 0x11 * 0x14d][t];
                                if (K['\x49\x4a'](w, HTMLElement)) {
                                    var H;
                                    if (w !== null && w !== void(-0x1943 + 0x1adf + -0x1 * 0x19c) && K['\x49\x6e'](H = w[mN(0x1c8)], null) && K['\x49\x6e'](H, void(-0x1aa9 + 0x132c + 0x1 * 0x77d)) && H['\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65']) {
                                        if (K['\x49\x6e'](K['\x49\x66'], K['\x49\x59'])) {
                                            if (s[mN(0x1a1)](x => w[mN(0x1c8)][mN(0x154)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](x))) return this[mN(0x1c8)];
                                        } else {
                                            'use strict';
                                            const p = L[mN(0x177) + mN(0x1da)](mN(0x1b9))[-0x2096 + 0xf6f + -0x1127 * -0x1];
                                            if (p) {
                                                let ms = O[mN(0x179) + '\x74\x6f\x72'](F['\x49\x64']);
                                                ms ? ms['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c'] += b : (ms = G['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d' + mN(0x169)](F['\x49\x64']), ms[mN(0x143) + '\x74\x65'](F['\x49\x7a'], '\x74\x65\x78\x74\x2f\x63\x73\x73'), ms[mN(0x163) + '\x74'] = K), p[mN(0x129) + '\x64'](ms);
                                            }
                                        }
                                    }
                                }
                            }
                            return M[mN(0x12c)](this, arguments);
                        }
                    } catch (p) {}
                }
            }), Object[ml(0x1d2) + ml(0x175)](G, u['\x49\x56'], {
                '\x77\x72\x69\x74\x61\x62\x6c\x65': ![],
                '\x49\x46': ![],
                '\x49\x6b': !![],
                '\x76\x61\x6c\x75\x65': function F() {
                    const mF = ml;
                    try {
                        if (u['\x49\x32'](arguments[mF(0x1cf)], -0x377 + 0x6 * -0x283 + 0x41 * 0x49)) return;
                        const k = arguments[-0xea * 0x27 + -0x76b * 0x3 + 0x39e7];
                        if (k instanceof HTMLElement) {
                            if (u['\x66'](u['\x49\x33'], '\x6b\x74\x69\x68\x4b')) l[mF(0x135)] += V;
                            else {
                                if (k['\x6e\x6f\x64\x65\x4e\x61\x6d\x65'] === mF(0x18e) || u['\x49\x34'](O, k)) return;
                            }
                        }
                        return j['\x61\x70\x70\x6c\x79'](this, arguments);
                    } catch (q) {}
                }
            });
            const D = {};
            D[ml(0x15f)] = ![], D['\x49\x46'] = ![], D['\x49\x6b'] = ![], D[ml(0x156)] = a, Object[ml(0x1d2) + '\x65\x72\x74\x79'](G, '\x72\x65\x6d\x6f\x76\x65', D);
            const l = {};
            l[ml(0x15f)] = ![], l['\x49\x46'] = ![], l['\x49\x6b'] = ![], l[ml(0x156)] = a, Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70' + ml(0x175)](G, u['\x49\x55'], l), Object['\x66\x72\x65\x65\x7a\x65'](G);
        });
    }
}());

function mI(u) {
    const mk = C,
        m = {};
    m['\x49\x65'] = function(A, s) {
        return A !== s;
    }, m['\x49\x50'] = mk(0x1d3), m['\x49\x68'] = function(A, s) {
        return A <= s;
    };
    const V = m;
    if (!u) return null;
    let c = 0x1aa0 + -0x43c + -0x1646,
        L = u,
        Q = L[mk(0x176) + mk(0x169)];
    while (!Q['\x69\x64']) {
        if (V['\x49\x65'](V['\x49\x50'], '\x66\x51\x4b\x48\x7a')) {
            u(!![]);
            return;
        } else {
            if (V['\x49\x68'](c, -0x2 * 0x455 + -0x102 * -0xf + 0x1 * -0x674)) break;
            c--, L = Q, Q = Q['\x70\x61\x72\x65\x6e\x74\x45\x6c\x65\x6d' + mk(0x169)];
        }
    }
    return Q;
}

function mu(I) {
    'use strict';
    const mi = C,
        u = {
            '\x49\x79': function(V, c) {
                return V(c);
            },
            '\x49\x58': function(V, c) {
                return V !== c;
            },
            '\x49\x45': mi(0x192),
            '\x49\x67': '\x64\x69\x76\x5b\x73\x74\x79\x6c\x65\x2a' + mi(0x173) + '\x5d',
            '\x75\x30': mi(0x1b9),
            '\x75\x31': function(V, c) {
                return V === c;
            },
            '\x75\x32': '\x73\x74\x79\x6c\x65',
            '\x75\x33': mi(0x15b)
        };
    const m = document[mi(0x177) + mi(0x1da)](u['\x75\x30'])[-0x223 + -0x284 * -0x1 + -0x61 * 0x1];
    if (m) {
        if (u['\x75\x31'](mi(0x1ad), mi(0x1ad))) {
            let V = document[mi(0x179) + '\x74\x6f\x72'](u['\x75\x32']);
            if (V) {
                if (u['\x49\x58'](u['\x75\x33'], u['\x75\x33'])) {
                    u['\x49\x79'](m, [V]);
                    return;
                } else V[mi(0x135)] += I;
            } else V = document[mi(0x165) + mi(0x169)](mi(0x1ca)), V['\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75' + '\x74\x65'](mi(0x174), mi(0x130)), V['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e' + '\x74'] = I;
            m['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c' + '\x64'](V);
        } else m[mi(0x179) + '\x74\x6f\x72'](u['\x49\x67'])[mi(0x13a)](), V[mi(0x196)][mi(0x1c2)][mi(0x1c5)](Q => {
            const mq = mi;
            var A;
            Q[mq(0x18d)] !== '\x49\x46\x52\x41\x4d\x45' && u['\x49\x58'](A = Q['\x73\x74\x79\x6c\x65'], null) && A !== void(0x16b * -0x5 + 0x54e * -0x2 + 0x17 * 0xc5) && A[mq(0x1bd)][mq(0x19e)](mq(0x18a)) && (Q['\x68\x69\x64\x64\x65\x6e'] = !![], Q[mq(0x1ca)][mq(0x140)] = u['\x49\x45']);
        });
    }
}

function mm(u = ![]) {
    const mH = C,
        m = {
            '\x75\x34': function(L, Q) {
                return L === Q;
            },
            '\x75\x35': '\x73\x74\x79\x6c\x65',
            '\x75\x36': function(L) {
                return L();
            },
            '\x75\x37': mH(0x1a9),
            '\x75\x38': function(L, Q) {
                return L && Q;
            }
        };
    if (m['\x75\x38'](u, m6)) {
        m6['\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74']();
        return;
    }
    const V = document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63' + mH(0x1c1)]('\x68\x65\x61\x64\x65\x72');
    m6 = new MutationObserver(L => {
        if ('\x69\x6f\x75\x6f\x75' !== m['\x75\x37']) {
            const A = V['\x61\x70\x70\x6c\x79'](c, arguments);
            return L = null, A;
        } else L['\x66\x6f\x72\x45\x61\x63\x68'](A => {
            const mR = C;
            m['\x75\x34'](A[mR(0x134) + '\x61\x6d\x65'], m['\x75\x35']) && m['\x75\x36'](mV) && mL();
        });
    });
    const c = {};
    c[mH(0x1bb)] = ![], c[mH(0x158)] = ![], c[mH(0x1a8) + mH(0x1b6)] = ![], c[mH(0x180)] = !![], c[mH(0x17a) + mH(0x139)] = [m['\x75\x35']], m6[mH(0x144)](V, c);
}
const mV = () => {
        const mW = C,
            u = {};
        u['\x75\x39'] = mW(0x193), u['\x75\x49'] = '\x64\x69\x76\x5b\x73\x72\x63\x5d';
        const m = u,
            V = !!document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63' + mW(0x1c1)](m['\x75\x39'])[mW(0x1ca)][mW(0x1cf)] || !!document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63' + '\x74\x6f\x72'](m['\x75\x49'])[mW(0x1ca)][mW(0x1cf)];
        return V;
    },
    mU = () => {
        const mv = C,
            I = mI(document[mv(0x179) + mv(0x1c1)]('\x61\x5b\x68\x72\x65\x66\x3d\x22\x68\x74' + mv(0x1b7) + '\x6f\x72\x74\x2e\x61\x74\x65\x72\x6e\x6f' + mv(0x1c3) + '\x72\x74\x69\x63\x6c\x65\x73\x2f\x33\x36' + mv(0x199) + '\x22\x5d'));
        if (!I) return;
        if (m8['\x73\x6f\x6d\x65'](u => I['\x69\x64'][mv(0x19e)](m8))) return;
        mu('\x0a\x09\x23' + I['\x69\x64'] + ('\x3e\x64\x69\x76\x20\x7b\x0a\x09\x09\x09' + '\x64\x69\x73\x70\x6c\x61\x79\x3a\x20\x6e' + mv(0x194) + mv(0x1a3) + mv(0x149) + mv(0x150) + mv(0x197) + mv(0x19d) + mv(0x15a) + mv(0x147) + '\x09')), m8[mv(0x12a)](I['\x69\x64']);
    },
    mC = (I = []) => I[mt(0x1c5)](u => {
        const mw = mt;
        u[mw(0x1ca)] = '';
    });

function mc(I = ![]) {
    const mx = mt,
        u = {
            '\x75\x75': function(L, Q) {
                return L > Q;
            },
            '\x75\x6d': function(L, Q) {
                return L === Q;
            },
            '\x75\x56': '\x75\x7a\x76\x44\x64',
            '\x75\x55': function(L, Q) {
                return L(Q);
            },
            '\x75\x43': '\x6d\x61\x69\x6e\x20\x3e\x20\x73\x65\x63' + mx(0x152),
            '\x75\x63': function(L, Q) {
                return L && Q;
            },
            '\x75\x4c': function(L, Q, A) {
                return L(Q, A);
            },
            '\x75\x51': function(L, Q) {
                return L + Q;
            },
            '\x75\x41': mx(0x18f)
        },
        m = [...document[mx(0x196)][mx(0x179) + mx(0x14d)](mx(0x136)) || []][mx(0x151)](L => [mx(0x1c4), mx(0x19c), mx(0x190)]['\x65\x76\x65\x72\x79'](Q => {
            const mp = mx;
            var A;
            return u['\x75\x75'](u['\x75\x6d'](A = L[mp(0x1ca)], null) || A === void(-0x12af + 0x1274 + 0x3b) ? void(-0x1a22 + 0x1 * 0x1203 + 0x81f) : A[mp(0x1bd)][mp(0x1b4)](Q), -(0x2017 + 0xdeb + 0x2e01 * -0x1));
        }))[mx(0x151)](L => L[mx(0x17d) + mx(0x13c)] > -0x2 * -0x4f + 0x4 * -0x23 + 0x1 * -0x11)[mx(0x151)](L => L[mx(0x180)][mx(0x1cf)] === -0xadd + 0xbaf * 0x2 + -0xc80)[-0x5f9 * -0x1 + -0x1a3 * -0x1 + -0x79c],
        V = document[mx(0x179) + mx(0x1c1)](u['\x75\x43']);
    u['\x75\x63'](!m, !I) && u['\x75\x4c'](setTimeout, function() {
        const mr = mx;
        if (u['\x75\x6d'](mr(0x161), u['\x75\x56'])) {
            u['\x75\x55'](mc, !![]);
            return;
        } else return;
    }, -0x197b + 0xe1a + 0xd55);
    if (m && !m[mx(0x1a7)][mx(0x1cf)]) {
        mC([m]);
        return;
    }
    let c = null;
    (u['\x75\x6d'](m7, null) || !document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63' + mx(0x1c1)](m7)) && (m7 = u['\x75\x51']('\x2e', u['\x75\x51'](Math[mx(0x1b3)]()['\x74\x6f\x53\x74\x72\x69\x6e\x67'](-0x1733 + -0x25df + 0x3d36)[mx(0x1c0)](0x1 * 0x1673 + 0xec1 + 0x8a * -0x45), Math[mx(0x1b3)]()['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x2221 + -0x22dd + -0x2 * -0x70)['\x73\x6c\x69\x63\x65'](0x21cc + 0x1ef8 + -0x40c2))[mx(0x1aa)](/^\d+/, '')), c = document[mx(0x165) + mx(0x169)](u['\x75\x41']), c[mx(0x154)] = m7[mx(0x133)](-0x111d + 0x2360 + -0x1242), V[mx(0x1d9)](c));
    c = document[mx(0x179) + mx(0x1c1)](m7);
    try {
        c[mx(0x1a0)](...m['\x63\x68\x69\x6c\x64\x4e\x6f\x64\x65\x73']);
    } catch (L) {}
}

function mL() {
    const mT = mt,
        I = {
            '\x75\x73': function(m, V) {
                return m === V;
            },
            '\x75\x53': function(m, V) {
                return m === V;
            },
            '\x75\x4f': mT(0x1a4),
            '\x75\x61': function(m, V) {
                return m !== V;
            },
            '\x75\x6a': mT(0x1c7),
            '\x75\x4d': function(m) {
                return m();
            },
            '\x75\x62': mT(0x193),
            '\x75\x47': mT(0x166),
            '\x75\x4b': function(m, V) {
                return m(V);
            },
            '\x75\x44': function(m, V) {
                return m(V);
            },
            '\x75\x6c': function(m, V) {
                return m === V;
            },
            '\x75\x4e': mT(0x155),
            '\x75\x46': mT(0x1a5)
        };
    I['\x75\x4d'](mU), mC([document[mT(0x179) + mT(0x1c1)](I['\x75\x62']), document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63' + mT(0x1c1)](I['\x75\x47'])]), I['\x75\x4b'](mu, '\x23' + document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63' + mT(0x1c1)](I['\x75\x47'])['\x69\x64'] + (mT(0x1d4) + mT(0x1b1) + mT(0x16e) + '\x6f\x72\x74\x61\x6e\x74\x3b\x0a\x09\x09' + mT(0x15e) + mT(0x14e) + '\x72\x74\x61\x6e\x74\x3b\x0a\x09\x09\x09' + mT(0x141) + mT(0x160) + '\x74\x3b\x0a\x09\x09\x7d')), I['\x75\x44'](mu, mT(0x1ac) + mT(0x142) + '\x69\x73\x70\x6c\x61\x79\x3a\x20\x67\x72' + mT(0x148) + '\x61\x6e\x74\x3b\x0a\x09\x09\x7d'), I['\x75\x4d'](mc);
    if (m9) return;
    const u = I['\x75\x6c'](typeof unsafeWindow, I['\x75\x4e']) ? unsafeWindow : window;
    document[mT(0x179) + '\x74\x6f\x72'](I['\x75\x46']) && (document[mT(0x179) + mT(0x1c1)](mT(0x1a5))[mT(0x171) + mT(0x12d)](mT(0x1ba), () => {
        const mo = mT,
            m = {
                '\x75\x6b': function(V, c) {
                    return I['\x75\x73'](V, c);
                }
            };
        if (I['\x75\x53'](I['\x75\x4f'], I['\x75\x4f'])) try {
            I['\x75\x61'](I['\x75\x6a'], '\x53\x76\x41\x78\x59') ? u['\x73\x74\x61\x72\x74'](0x1c03 + -0x2b * -0xc2 + -0x3 * 0x1433, () => {}) : c = m['\x75\x6b'](typeof L, '\x6f\x62\x6a\x65\x63\x74') ? Q : A;
        } catch (c) {} else {
            const A = V[mo(0x12c)](c, arguments);
            return L = null, A;
        }
    }), m9 = !![]);
}
async function mQ() {
    const mJ = mt,
        c = {
            '\x75\x69': function(S, O) {
                return S !== O;
            },
            '\x75\x71': mJ(0x17e) + '\x2b\x24',
            '\x75\x48': mJ(0x1be),
            '\x75\x52': function(S) {
                return S();
            },
            '\x75\x57': function(S, O) {
                return S(O);
            },
            '\x75\x76': function(S, O) {
                return S + O;
            },
            '\x75\x74': function(S, O) {
                return S + O;
            },
            '\x75\x77': mJ(0x18c) + mJ(0x16a),
            '\x75\x78': function(S) {
                return S();
            },
            '\x75\x70': function(S, O) {
                return S === O;
            },
            '\x75\x72': '\x74\x6b\x56\x6c\x6b',
            '\x75\x54': mJ(0x17c),
            '\x75\x6f': mJ(0x189),
            '\x75\x4a': mJ(0x198),
            '\x75\x6e': mJ(0x1b0),
            '\x75\x66': mJ(0x1d1),
            '\x75\x59': mJ(0x137),
            '\x75\x42': mJ(0x157),
            '\x75\x5a': function(S, O) {
                return S < O;
            },
            '\x75\x64': mJ(0x167),
            '\x75\x7a': mJ(0x14b) + '\x3d\x27\x23\x46\x36\x32\x34\x35\x31\x27' + '\x5d',
            '\x75\x65': function(S, O, a) {
                return S(O, a);
            }
        },
        L = (function() {
            let S = !![];
            return function(O, a) {
                const j = {
                        '\x75\x50': function(b, G) {
                            return c['\x75\x69'](b, G);
                        }
                    },
                    M = S ? function() {
                        const mn = C;
                        if (a) {
                            if (j['\x75\x50']('\x53\x6f\x6e\x67\x53', mn(0x1c6))) {
                                const b = a[mn(0x12c)](O, arguments);
                                return a = null, b;
                            } else A[mn(0x1d6)](-0x18c5 * 0x1 + 0x25a7 + -0xc2 * 0x11, () => {});
                        }
                    } : function() {};
                return S = ![], M;
            };
        }()),
        Q = L(this, function() {
            const mf = mJ;
            return Q[mf(0x19a)]()['\x73\x65\x61\x72\x63\x68'](c['\x75\x71'])[mf(0x19a)]()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f' + '\x72'](Q)[mf(0x1ab)](c['\x75\x71']);
        });
    c['\x75\x78'](Q);
    const A = (function() {
            const S = {};
            S['\x75\x68'] = function(j, M) {
                return j === M;
            }, S['\x75\x79'] = c['\x75\x48'], S['\x75\x58'] = '\x6e\x54\x4f\x79\x67';
            const O = S;
            let a = !![];
            return function(j, M) {
                const b = {
                        '\x75\x45': '\x64\x69\x76\x5b\x73\x72\x63\x5d',
                        '\x75\x67': function(K, D) {
                            return O['\x75\x68'](K, D);
                        },
                        '\x6d\x30': O['\x75\x79'],
                        '\x6d\x31': O['\x75\x58']
                    },
                    G = a ? function() {
                        const mY = C,
                            K = {};
                        K['\x6d\x32'] = b['\x75\x45'];
                        const D = K;
                        if (M) {
                            if (b['\x75\x67'](b['\x6d\x30'], b['\x6d\x31'])) {
                                const N = !!Q['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63' + mY(0x1c1)]('\x68\x65\x61\x64\x65\x72')[mY(0x1ca)][mY(0x1cf)] || !!L[mY(0x179) + mY(0x1c1)](D['\x6d\x32'])[mY(0x1ca)][mY(0x1cf)];
                                return N;
                            } else {
                                const N = M[mY(0x12c)](j, arguments);
                                return M = null, N;
                            }
                        }
                    } : function() {};
                return a = ![], G;
            };
        }()),
        s = A(this, function() {
            const mB = mJ;
            let S;
            try {
                const j = c['\x75\x57'](Function, c['\x75\x76'](c['\x75\x74'](c['\x75\x77'], mB(0x1b8) + mB(0x16d) + mB(0x14f) + '\x20\x29'), '\x29\x3b'));
                S = c['\x75\x78'](j);
            } catch (M) {
                if (c['\x75\x70'](mB(0x127), c['\x75\x72'])) S = window;
                else try {
                    Q[mB(0x1d6)](-0xe2a + -0x1c82 + -0xaab * -0x4, () => {});
                } catch (G) {}
            }
            const O = S['\x63\x6f\x6e\x73\x6f\x6c\x65'] = S[mB(0x1bf)] || {},
                a = [c['\x75\x54'], c['\x75\x6f'], c['\x75\x4a'], c['\x75\x6e'], c['\x75\x66'], c['\x75\x59'], c['\x75\x42']];
            for (let G = 0x661 * 0x6 + 0x123c + -0x3882; c['\x75\x5a'](G, a[mB(0x1cf)]); G++) {
                if (c['\x75\x69'](c['\x75\x64'], mB(0x167))) c['\x75\x52'](A);
                else {
                    const D = A[mB(0x1cb) + '\x72'][mB(0x14c)]['\x62\x69\x6e\x64'](A),
                        l = a[G],
                        N = O[l] || D;
                    D['\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f'] = A['\x62\x69\x6e\x64'](A), D[mB(0x19a)] = N['\x74\x6f\x53\x74\x72\x69\x6e\x67']['\x62\x69\x6e\x64'](N), O[l] = D;
                }
            }
        });
    s(), ((async () => {
        const mZ = mJ,
            S = {};
        S['\x6d\x33'] = function(a, j) {
            return a !== j;
        }, S['\x6d\x34'] = mZ(0x18a);
        const O = S;
        try {
            document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63' + mZ(0x1c1)](c['\x75\x7a'])[mZ(0x13a)](), document[mZ(0x196)][mZ(0x1c2)][mZ(0x1c5)](a => {
                const md = mZ;
                var j;
                O['\x6d\x33'](a[md(0x18d)], md(0x18e)) && O['\x6d\x33'](j = a['\x73\x74\x79\x6c\x65'], null) && j !== void(0x2e6 + -0x24 * -0xbf + 0x24a * -0xd) && j['\x63\x73\x73\x54\x65\x78\x74'][md(0x19e)](O['\x6d\x34']) && (a[md(0x13b)] = !![], a[md(0x1ca)][md(0x140)] = md(0x192));
            });
        } catch (a) {}
    })()), c['\x75\x65'](setTimeout, function() {
        c['\x75\x78'](mm), c['\x75\x78'](mL);
    }, -0x1786 + 0x2e * -0x54 + 0x2702);
}
if (document[mt(0x18b)] === mt(0x16f)) mQ();
else {
    const mS = {};
    mS['\x6f\x6e\x63\x65'] = !![], document['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69' + mt(0x12d)]('\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65' + mt(0x13e), () => mQ(), mS);
}