console.log("Hello world");
console.log('welcome to class');
//console.log('good morning');

// JS VARIABLES AND VALUES (var, let and const)
// let x =2;
// const y =4;
// console.log(x);
// console.log(y);

// Conventions and rules in naming var
// have a logical var name
// const d ='Shehu'
// const firstName = 'Shehu'

// compound names - camelcasing
// const lastName ='Toyosi'
// illegal way for naming (you can not start any name with number but you can start with _ and $)
// const 1year = 2005
// const $year = 333

// const country = 'Nigeria'
// let State = 'Lagos'
// console.log(country);
// console.log(State);
// State = 'Oyo'
// console.log(State);

// JS DATA TYPE-(Primitive and complex data type)
// primitive are string, number, boolen, null and undefined.
// string are text inside qoutes mark. eg
const firstName = 'Shehu'
const lastName = 'adekunmi'
const middlename = 'Inioluwa'
const currentJob = 'web dev'
const year = '2005'
const Email = 'abc@gmail.com'
// string Concatenation/joining +.
const fullname = firstName + ' ' + lastName + ' ' + year
console.log(fullname);
// const fullname = firstName + ' ' + lastName + ' ' + year
// My name is Shehu and i work as a wed dev
const description = 'my name is ' + firstName + ' i work as a ' + currentJob
console.log(description);
// you can message me on this email, abc@gmail.com
const message = ' you can message me on this email ' + Email
console.log(message);

// Getting Characters- js is zero base it start counting from 0
console.log(firstName[3]);
console.log(middlename[6]);

// string length .length eg
console.log(firstName.length);
console.log(description.length);

// string methode= transform eg
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
console.log(fullname.toLocaleUpperCase());

// extracting parts of a string- slice or substring eg
console.log(Email.slice(0, 4));
console.log(Email.slice(5, 11));
console.log(Email.slice(-1, -6));

// string substraction(start, count or xters eg
console.log(Email.substr(0, 4));

// replace string content- replace or replaceAll eg
console.log(firstName.replace('S', 's'));
console.log(firstName.replace('h', '$'));
console.log(Email.replaceAll ('m', '$'));

// includes, indexOf, lastIndexOf, trim, concat,
// trimStart, trimend, startsWith, EndsWith

console.log(Email.includes('@'));
console.log(Email.indexOf('m'));
console.log(Email.lastIndexOf('m'));

const user = '      Shehu     '
console.log(user.length);
const formatteduser = user.trim()
console.log(formatteduser.length);
const password = '    1234567853   '
console.log(password.length);
const formattedpassword = password.trimStart()
console.log(formattedpassword.length);

// cooncat -appendix end eg
const job = 'frontend' 
// frontend developer
console.log(job.concat(' ', 'developer', ' ', 'rera'));

const author = 'Chinua Achebe';
const book = 'Things Fall Apart';
const yearr = 1996;
// The book things fall apart was written by Chinua Achebe in the year 1996
const des = 'The ' + book + ' was written by ' + author + ' in the ' + yearr
console.log(des);


// template literals
const des2 = `The book ${book} was written by ${author} in the ${yearr}`
console.log(des2);

// my favourite author is Chinua Achebe
const fav = `my favourite author is ${author}`
console.log(fav);

console.log(`my email is ${Email}`);






// number- 4 5.5 4300
// Boolean - true and false










9