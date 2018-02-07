/*
         ___________________________________________
        |                                           |
        |-------------------------------------------|
        | XORcrypt.js Javascript Encryption Library |
        |-------------------------------------------|
        |                                           |
        |------------------Summary------------------|
        |                                           |
        | XORcrypt is an encryption library for     |
        | javascript used in EncrHat. XORcrypt uses |
        | the XOR (exclusive or) model of           |
        | encryption to make uncrackable ciphers    |
        | (with limitations) that only use one key. |
        | The encrypt(plaintext,key) and            |
        | decrypt(ciphertext,key) fuctions are the  |
        | main functions of XORcrypt. XORcrypt      |
        | contains many other well commented parts  |
        | for you to use. These are below. For the  |
        | cipher to be unbreakable the key has to   |
        | be at least as long as the plaintext,     |
        | making it so that the key is not repeated |
        | and therefore impossible to crack. The    |
        | key also may never be repeated for        |
        | maximum security.                         |
        |                                           |
        |-----------------Changelog-----------------|
        |                                           |
        | Version: 1.0.0                            |
        |   -Encryption Library Released.           |
        |   -Contains all function and subfunctions |
        |    that go into creating the encrypt()    |
        |    and decrypt() functions.               |
        |___________________________________________|

*/

//convert a string into its bianary ascii value (eg. 10000010000001000000 = "   ")
function str2ascii(input) {
    var i = 0;
    var output = "";
    while(i < input.length) {
        //converts each character to its bianary equivlent and adds it to the end of output
    	output = output + input.charCodeAt(i).toString(2);
        i = i + 1;
    }
    return output;
}

//takes a sting and makes it into an ascii representation with equal length to the ascii representation of the plaintext
function str2key(str,plaintext) {
    var key = str2ascii(str);
    //checks how many times (n) that the keytext fits into the plaintext
    var n = Math.floor(str2ascii(plaintext).length / key.length);
    var i = 0;
    while(i < n) {
        //adds the key to itself that many times
        key = key + str2ascii(key);
        i = i + 1;
    }
    //cuts it down to the exact length of the plaintext (for easy xor encryption)
    key = key.substr(0, str2ascii(plaintext).length);
    return key;
}

//applies an xor function to two strings see https://en.wikipedia.org/wiki/Exclusive_or
function xor(v1,v2) {
    var output = "";
    var i = 0;
    while (i < v1.length) {
        //xors each character in both strings (v1 and v2) and adds it to the end of the output
        if(v1.substr(i,1) == v2.substr(i,1)) {
            output = output + "1";
        } else {
            output = output + "0";
        }
        i = i + 1;
    }
    //returns the output text
    return output;
}

//splits a string every x numbers and returns an array of the split values
function splitStr(txt,num) {
    var result = [];
    //splits the values and puts them into the result array
    for (var i = 0; i < txt.length; i += num) {
        result.push(txt.substr(i, num));
    }
    return result;
}
//uses previous fuctions to encrypt a message
function encrypt(plaintext,key) {
    var ciphertext = xor(str2ascii(plaintext),str2key(key,plaintext));
    return ciphertext;
}
//uses the given ciphertext from the encrypt function and decrypts the function
function decrypt(ciphertext,key) {
	var chars = splitStr(xor(ciphertext,key),7);
    var i = 0;
    var output = "";
    while(i < chars.length) {
    	output = output + String.fromCharCode(parseInt(chars[i],2));
        i = i + 1;
    }
    return output;
}
