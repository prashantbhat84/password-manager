//for this we need to install npm module crypto-js
var crypto = require('crypto-js');
var secretMesage = {
          name: 'Prashant',
          secretName: '007'
};
var secretMessage = JSON.stringify(secretMesage);

var secretKey =  '123abc';
var encryptedMessage =  crypto.AES.encrypt(secretMessage,secretKey);
var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8); 
var decryptedMessageObject = JSON.parse(decryptedMessage);
console.log(encryptedMessage);
console.log(decryptedMessageObject);
console.log(decryptedMessageObject.secretName);





