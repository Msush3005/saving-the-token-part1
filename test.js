const { encrypt, decrypt } = require('./script.js');


const testPayload = {
    userId: '12345',
    username: 'testuser',
    role: 'admin'
};

const token = encrypt(testPayload);
console.log('Encrypted Token:', token);


const decryptedPayload = decrypt(token);
console.log('Decrypted Payload:', decryptedPayload);


const invalidToken = 'invalid.token.here';
const invalidResult = decrypt(invalidToken);
console.log('Invalid Token Result:', invalidResult);

if (decryptedPayload && decryptedPayload.userId === testPayload.userId) {
    console.log('Success: Token encryption and decryption working correctly!');
} else {
    console.log('Error: Token encryption and decryption failed!');
} 