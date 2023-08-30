var CryptoJS = require("crypto-js");
let responseKeys = process.argv[2];
n = responseKeys;

e = JSON.parse(atob(n));
t = e.ciphertext;
r = CryptoJS.enc.Hex.parse(e.salt);
i = CryptoJS.enc.Hex.parse(e.iv);
n = CryptoJS.PBKDF2(e.passphrase, r, {
    hasher: CryptoJS.algo.SHA512,
    keySize: 8,
    iterations: 999
});
keys = CryptoJS.AES.decrypt(t, n, {
    iv: i
}).toString(CryptoJS.enc.Utf8);

console.log(keys);