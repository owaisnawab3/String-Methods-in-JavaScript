//=======//Input-User-Name-And-Show-Message-to-user-Greeting//===========//
let firstName = prompt("Enter Your First Name:")
let lastName = prompt("Enter Your Last Name:")
console.log(firstName +" "+ lastName +" Greeting!")
document.write("<h2>"+firstName +" "+ lastName +" Greeting!</h2>")
//==========//Input-User-Favorite-Mobile-Phone-Model.//=============//
 var favoriteMobile = prompt("Enter your Favorite Mobile Model:")
 console.log("My favorite phone is: " + favoriteMobile)
 document.write("<h3>My favorite phone is: " + favoriteMobile + "</h3>")
 console.log("Length of string: " + favoriteMobile.length)
 document.write("<h3>Length of string: " + favoriteMobile.length + "</h3>")
 //============//Find-Index-Of-Word-"Pakistani"//=============//
 let word = "Paksitani"
 let wordString = word.indexOf("n")
 console.log("The index of letter “n” in the word'Pakistani' and display the result:")
 console.log("String: "+word)
 console.log("Index of 'n': "+ wordString)
 document.write("<h3>The index of letter “n” in the word 'Pakistani' and display the Result:</h3>")
 document.write("<h3>String: "+word+ "</h3>")
 document.write("<h3>Index of 'n': "+ wordString+ "</h3>")
  //============//Find-Last-Of-Word-"Hello-World"//=============//
  let wordHello = "Hello World"
  let wordHelloWorld = wordHello.lastIndexOf("l")
  console.log("The Last index of letter “l” in the word'Hello World' and display the result:")
  console.log("String: "+wordHello)
  console.log("Last Index of 'l': "+ wordHelloWorld)
  document.write("<h3>The Last index of letter “l” in the word 'Hello World' and display the Result:</h3>")
  document.write("<h3>String: "+wordHello+ "</h3>")
  document.write("<h3>Last Index of 'l': "+ wordHelloWorld+ "</h3>")
  //======//find-the-character-at-3rd-index-in-the-word-“Pakistani”//=====//
  document.write("<h3>find the character at 3rd index in the word “Pakistani”.</h3>")
  console.log("find the character at 3rd index in the word “Pakistani”.")
  let country = "Pakistani"
  console.log("String: "+country)
  document.write("<h3>String: "+country+"</h3>")
  let countryPakistan = country.charAt(3)
  console.log("Character at index 3 :" + countryPakistan)
  document.write("<h3>Character at index 3 :" + countryPakistan+"</h3>")
  //==============//using string concat() method.//==========//
  console.log("using Name string Greeting! concat() method.")
  document.write("<h3>using Name string Greeting! concat() method.</h3>")
  var userName = prompt("Enter Your Name:")
  var greet = ", Greeting!"
let greeting = userName.concat(greet)
console.log(greeting)
document.write(greeting)
//=========//Replace-Word-"Headerabad"-to-"Islamabad"//==========//
console.log("Replacing word 'Headerabad to Islamabad'.")
document.write("<h3>Replacing word 'Headerabad to Islamabad'.</h3>")
let hyder = "Headerabad"
let replaceWord = hyder.replace("Headerabad","Islamabad")
console.log("City: ",hyder)
console.log("After Replacement: ",replaceWord)
document.write("City: ",hyder)
document.write("<br/>After Replacement: ",replaceWord)
//====//to-replace-all-occurrences-of-“and”-in-the-string-with-“&”.//====//
console.log("To replace all occurrences of “and” in the string with “&”.")
document.write("<h3>To replace all occurrences of “and” in the string with “&”.</h3>")
var message = "Ali and Sami are best friends. They play cricket and football together.";
console.log(message)
document.write(message)
let replaceMessage = message.replaceAll("and","&")
console.log(replaceMessage)
document.write("<br/>"+replaceMessage)
//===========//converts-a-string-“472”-to-a-number-472.//============//
console.log("Converts a string “472” to a number 472.")
document.write("<h3>Converts a string “472” to a number 472.</h3>")
let number = "472"
console.log("Value: ",number)
document.write("Value: ",number)
console.log("Type: ",typeof number)
document.write("<br/>Type: ",typeof number)
console.log("Value: ",number)
document.write("<br/>Value: ",number)
var convertNumber = parseInt(number)
console.log("Type: ",typeof convertNumber)
document.write("<br/>Type: ",typeof convertNumber)
//================//User-Input-Convert-Capital-Case//===============//
console.log("User Input Convert Capital Case.")
document.write("<h3>User Input Convert Capital Case.</h3>")
let user = prompt("Enter Any Word in Small Letter")
console.log("User input: ",user )
document.write("<h3>User input: ",user+"</h3>");
var capitalWord = user.toUpperCase();
console.log("Upper Case: "+capitalWord )
document.write("<h3>Upper Case: " +capitalWord+"</h3>")
//=====//User-Input.-Convert-and-show-the-input-in-title-case.//========//
console.log("User Input Convert and show the input in title case.")
document.write("<h3>User Input Convert and show the input in title case.</h3>")
var userInput = prompt("Enter any word for convert Title case.")
console.log("User Input : "+userInput)
document.write("User Input : "+userInput)
let string = userInput.charAt(0).toUpperCase();
let rem = userInput.slice(1);
let result = string + rem;
console.log("Title case: "+result)
document.write("<br/>Title case : "+result)
//===========//converts-the-variable-num-to-string.//===========//
console.log("converts the variable num to string.")
document.write("<h3>converts the variable num to string.</h3>")
var num = 35.36
var str = num.toString();
var replace = str.replace(".",'')
console.log("Number : "+num)
console.log('Result : '+ replace)
document.write("Number : "+num)
document.write('<br/>Result : '+ replace)
//==========//user-input-and-store-username-in-a-variable.//==========//
console.log("user input and store username in a variable.")
document.write("<h3>user input and store username in a variable.</h3>")
let useName = prompt("Enter username:")
const special_symbols = ['@', '.', ',', '!'];
if(useName = special_symbols){
  console.log("Please enter a valid username")
  alert("please enter a valid username")
  document.write("please enter a valid username")
}
else{
  console.log(useName)
  document.write(useName)
  alert(useName)
}
// //=============//“search-by-user-input”//=============//
document.write("<br/><h2>Welcome to our bakery!</h2>")
console.log("Welcome to our bakery!")
A = ["cake", "apple pie", "cookie", "chips", "patties"]
userInput = prompt("Welcome to ABC Bakery. what do you want to order sir/ma'am?")
if(userInput === A[0] || userInput === "Cake" || userInput === "Cakes"){
    console.log("Cake is Available at index 2 in our bakery.")
    document.write("Cake is <b>Available</b> at index 2 in our bakery.")
}
else if(userInput === A[1] || userInput === "Apple Pie"){
    console.log("Apple Pie is Available at index 2 in our bakery.")
    document.write("Apple Pie is <b>Available</b> at index 2 in our bakery.")
}
else if(userInput === A[2] || userInput === "Cookie" || userInput === "Cookies" ){
    console.log("Cookie is Available at index 2 in our bakery.")
    document.write("Cookie is <b>Available</b> at index 2 in our bakery.")
}
else if(userInput === A[3] || userInput === "Chips"){
    console.log("Chips is Available at index 2 in our bakery.")
    document.write("Chips is <b>Available</b> at index 2 in our bakery.")
}
else if(userInput === A[4] || userInput === "Patties"){
    console.log("Patties is Available at index 2 in our bakery.")
    document.write("Patties is <b>Available</b> at index 2 in our bakery.")
}
else{
    console.log("We are Sorry. "+userInput+" is not available in our bakery")
    document.write("We are Sorry. "+userInput+" is not <b>available</b> in our bakery")
}
//==============//User-Password//==============//
console.log("User Password.")
document.write("<h3>User Password.</h3>")
let userPassword = prompt("Enter your Password\nIt should contain alphabets and numbers\nIt should not start with a number\nIt must at least 6 characters long")
if(userPassword.charAt(0)== Number){
  console.log("Enterned Password: "+userPassword)
  console.log("Password can not being a number Please enter a valid password")
  alert("Enterned Password: "+userPassword)
  alert("Password can not being a number Please enter a valid password")
}
else if(userPassword > 6){
  console.log("Enterned Password: "+userPassword)
  console.log("Password not 6 characters long please enter a valid password.")
  alert("Enterned Password: "+userPassword)
  alert("Password not 6 characters long please enter a valid password.")
}
else{
  console.log("Enterned Password: "+userPassword)
  alert("Enterned Password: "+userPassword)
}
//=======//Convet-String-Method-Split-to-University-of-Karachi//========//
console.log("Convet String Method Split to University of Karachi.")
document.write("<h3>Convet String Method Split to University of Karachi.</h3>")
var university = "University of Karachi";
var universityArray = university.split('');

console.log("String converted to an array:");
console.log(universityArray);
document.write("String converted to an array:");
document.write("<br/>"+universityArray+"<br/>");
//============//The-last-character-of-a-user-input.//============//
console.log("The last character of a user input.")
document.write("<h3>The last character of a user input.</h3>")
var input = prompt("Enter any Word:")
console.log("User Input: "+input)
document.write("User Input: "+input)
var lastchar = input.slice(-1)
console.log("Last Character of Input: "+lastchar)
document.write("<br/>Last Character of Input: "+lastchar)
//=========I have String word count "the"//===========
console.log("I have String word count 'the'.")
document.write("<h3>I have String word count 'the'.</h3>")
var stringWord = "The quick brown fox jumps over the lazy dog"
var searchTerm = "the"
var search = stringWord.toLowerCase().split(" ")

var count = 0
for(i = 0; i < search.length; i++){
if(search[i] === searchTerm){
  count++;
}
}
console.log(stringWord)
console.log("The value of "+searchTerm+" in the string is: "+count)