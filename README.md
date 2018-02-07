XORcrypt is a WIP and may not be secure. Use With Caution.

# XORcrypt
XORcrypt is an encryption library for javascript used in [EncrHat](https://github.com/cyandev/chat-example "EncrHat on Github"). XORcrypt uses the XOR ([exclusive or](https://en.wikipedia.org/wiki/Exclusive_or "Wikipedia Link")) model of encryption to make uncrackable ciphers (with limitations) that only use one key. The encrypt(plaintext,key) and decrypt(ciphertext,key) fuctions are the  main functions of XORcrypt. XORcrypt contains many other well commented parts for you to use. These in the XORcrypt.js file. For the cipher to be unbreakable the key has to be at least as long as the plaintext, making it so that the key is not repeated and therefore impossible to crack. The key also may never be repeated for maximum security.   

## How to Use XORcrypt
To use XORcrypt in your project, embed the javascript in HTML with the ```<script>``` tag shown down below.
```HTML
<script src="https://cdn.rawgit.com/cyandev/XORcrypt/0b3e88c6/XORcrypt.js"></script>
```
Then, use the ```encrypt(plaintext,key)``` and ```decrypt(plaintext,key)``` functions to encrypt and decrypt any ascii text in your project. Here is an example for you to understand how it works.
```HTML
<!DOCTYPE html>
<html>
<body>

<p>this is an example</p>
<script src="https://cdn.rawgit.com/cyandev/XORcrypt/0b3e88c6/XORcrypt.js"></script>
<script>
  var key = "qwerty1234"
  var ciphertext = encrypt("hi mom",key)
  console.log(ciphertext)
  console.log(decrypt(ciphertext,key))
</script>
  
</body>
</html>
```
