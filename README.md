XORcrypt is a WIP and may not be secure. Use With Caution.

# XORcrypt

A javascript encryption library using XOR (exclusive or https://en.wikipedia.org/wiki/Exclusive_or). This is a one time pad type of encryption where each key can only be used once, creating proven, uncrackable encryption. This is for use in web proojects that would benefit from end to end encryption, adding another level of security.

## How to Use XORcrypt
To use XORcrypt in your project, embed the javascript in HTML with the ```<script>``` tag shown down bel0w.
```HTML
<script src="https://cdn.rawgit.com/cyandev/XORcrypt/0b3e88c6/XORcrypt.js"></script>
```
Then, use the encrypt(plaintext,key) and decrypt(plaintext,key) functions to encrypt and decrypt any ascii text in your project. Here is an example for you to understand how it works.
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
