// // console.log("Hello world");
// // console.log('welcome to class');
// // //console.log('good morning');

// // // JS VARIABLES AND VALUES (var, let and const)
// // // let x =2;
// // // const y =4;
// // // console.log(x);
// // // console.log(y);

// // // Conventions and rules in naming var
// // // have a logical var name
// // // const d ='Shehu'
// // // const firstName = 'Shehu'

// // // compound names - camelcasing
// // // const lastName ='Toyosi'
// // // illegal way for naming (you can not start any name with number but you can start with _ and $)
// // // const 1year = 2005
// // // const $year = 333

// // // const country = 'Nigeria'
// // // let State = 'Lagos'
// // // console.log(country);
// // // console.log(State);
// // // State = 'Oyo'
// // // console.log(State);

// // // JS DATA TYPE-(Primitive and complex data type)
// // // primitive are string, number, boolen, null and undefined.
// // // string are text inside qoutes mark. eg
// // const firstName = 'Shehu'
// // const lastName = 'adekunmi'
// // const middlename = 'Inioluwa'
// // const currentJob = 'web dev'
// // const year = '2005'
// // const Email = 'abc@gmail.com'
// // // string Concatenation/joining +.
// // const fullname = firstName + ' ' + lastName + ' ' + year
// // console.log(fullname);
// // // const fullname = firstName + ' ' + lastName + ' ' + year
// // // My name is Shehu and i work as a wed dev
// // const description = 'my name is ' + firstName + ' i work as a ' + currentJob
// // console.log(description);
// // // you can message me on this email, abc@gmail.com
// // const message = ' you can message me on this email ' + Email
// // console.log(message);

// // // Getting Characters- js is zero base it start counting from 0
// // console.log(firstName[3]);
// // console.log(middlename[6]);

// // // string length .length eg
// // console.log(firstName.length);
// // console.log(description.length);

// // // string methode= transform eg
// // console.log(fullname.toUpperCase());
// // console.log(fullname.toLowerCase());
// // console.log(fullname.toLocaleUpperCase());

// // // extracting parts of a string- slice or substring eg
// // console.log(Email.slice(0, 4));
// // console.log(Email.slice(5, 11));
// // console.log(Email.slice(-1, -6));

// // // string substraction(start, count or xters eg
// // console.log(Email.substr(0, 4));

// // // replace string content- replace or replaceAll eg
// // console.log(firstName.replace('S', 's'));
// // console.log(firstName.replace('h', '$'));
// // console.log(Email.replaceAll ('m', '$'));

// // // includes, indexOf, lastIndexOf, trim, concat,
// // // trimStart, trimend, startsWith, EndsWith

// // console.log(Email.includes('@'));
// // console.log(Email.indexOf('m'));
// // console.log(Email.lastIndexOf('m'));

// // const user = '      Shehu     '
// // console.log(user.length);
// // const formatteduser = user.trim()
// // console.log(formatteduser.length);
// // const password = '    1234567853   '
// // console.log(password.length);
// // const formattedpassword = password.trimStart()
// // console.log(formattedpassword.length);
// // const ab = 'ahehuadekunmi'
// // console.log(ab.startsWith('S'));


// // // cooncat -appendix end eg
// // const job = 'frontend' 
// // // frontend developer
// // console.log(job.concat(' ', 'developer', ' ', 'rera'));

// // const author = 'Chinua Achebe';
// // const book = 'Things Fall Apart';
// // const yearr = 1996;
// // // The book things fall apart was written by Chinua Achebe in the year 1996
// // const des = 'The ' + book + ' was written by ' + author + ' in the ' + yearr
// // console.log(des);


// // // template literals
// // const des2 = `The book ${book} was written by ${author} in the ${yearr}`
// // console.log(des2);

// // // my favourite author is Chinua Achebe
// // const fav = `my favourite author is ${author}`
// // console.log(fav);

// // console.log(`my email is ${Email}`);



// // DRY = do not repeat yourself


// // number- 4 5.5 4300
// //  math operators - + * / % **
// // console.log( 6 % 2); //0
// // console.log(5 % 2);  //1

// // // order of operation - bodmas, pemdas
// //  let balance = 500
// //  const t1 = 20
// //  const t2 = 100
// //  const d1 = 200
// //  const remine = balance - t1 - t2 + d1
// //  console.log(remine);
// //  let total = 50
// // //  increase the value of total by 10
// //  total = total + 10
// //  console.log(total);

// // //  or shortcut
// // total += 10
// // total -= 5

// //  let post = 20
// //  post += 5
// //  post += 10
// //  post -= 5
// //  post *= 2
// //  console.log(post);
// // //  console.log(4 >= '4'); true
 
// // // Boolean - true and false
// //  const continent = 'Africa'
// //  const country = 'Nigeria'
// //  let population = 2000000 
// //  console.log(continent, country, population);
// //  const island = false
// //  const language = 'English' 
// // population /= 2
// // console.log(population);

// // population += 1
// // console.log(population);
// // // Nigeria is in africal with the population of about 20000000
// // const des = `${country} is in ${continent} with the population of about ${population} people, speaking ${language} `
// // console.log(des);
// // // des1 = Nigeria is a country speak majorly english
// //  const des1 = `${country} is a country speak majorly ${language}`
// //  console.log(des1);

// // // Boolean - true and false
// // //  comparesion operator - <> <= >= == eg
// // console.log(6 > 3);
// // console.log(5 >= 5.0);

// // // logical operators  = and && or ||  not !
// // console.log(5 > 6 && 2 == 2);
// // console.log(6 > 7 || 2===2);

// // // typeof
// // console.log(typeof 5);
// // console.log(typeof 'abe');
// // console.log(typeof true);

// // // const sh = '      Shehu'
// // // const hs = sh.trim()
// // // console.log(hs.length);
// // // const ad = '      adex      toyosi    '
// // // const da = ad.trim()
// // // console.log(da.length);

// // // type conversion and type coercion

// // // string to number 
// // const str = '90'
// // console.log(typeof str);
// // const converted = Number(str)
// // console.log(typeof converted);

// // // number to string
// // const num = 20000;
// // console.log(typeof num);
// // const converted2 = String(num);
// // console.log(typeof converted2);

// // // type of corecion
// // const num1 = 8 
// // const num2 = '9'
// // const res = 'num1 + num2' 

// // Null = null or nothing
// // let agee = null
// // console.log(agee, agee + 4, `my agee is ${agee}`);

// // // undefined
// // let year;
// // console.log(year);
// // console.log(year, year + 4, `the year is ${year}`);

// // // truthy value are string, num, expect 0 
// // console.log(Boolean('2'));

// // // false values 0, null and undifined


// // // control flow== conditional statment
// //                 // conditional statment
// //                 //  if (condition){code} eg
// //   const password1 = '12453476'   
// //   if (password1.length > 6){console.log('your password is strong');} 
  
// //             //  if else formular
// //         if (condition){code 1
// //         }else{code2
// //         } eg
// //             const password2 = '124'   
// //   if (password2.length > 6){console.log('your password is strong');
// // } else{console.log('your password is weak');
// // }

// // // if (true && true && true) eg
// // const password = '124@12345'   
// //   if (password.length > 6 && password.includes('@')){console.log('your password is strong');
// // } else{console.log('your password is weak');
// // }

// // const country = 'Qatar'
// //  const continent = 'Asian'
// //  const population = 21
// //  const isIsland = false
// //  const language = 'Arabic'
// // //  Sarah speaks english has less than 50 people and is not an island
// // // you should live in Qatar
// // // Qatar does not meet your criteria
// // if(language === 'English' && population < 50 && isIsland) {console.log(`you should live in ${country}`);
// // }else {console.log(`${country} does not meet criteria`);
// // }

// // const age = 18
// // //  >=18 
 
// // if(age >= 18){console.log('you are an adult');} else {console.log('you are not an adult');}

// // // if (condition){} else if (another condi){} else if (cond){} else{}   eg
// // const password3 = '12345678@ysdr'
// // // recommended >7 and is include @, strong >7 and weak
// // if (password3.length >= 7 && password3.includes ('@')) {console.log('your password is recommended');
// // } else if (password3.length >=7){console.log('your password is strong');
// // }else{console.log('your password is weak');}

// // const num1 = 0
// // if (num1 > 0 ){console.log('your num is positive');
// // }else if (num1 < 0) {console.log('your num is negative');
// // }else {console.log('undefined');}

// // // even or odd
// // const num2 =55
// // if (num2 % 2 === 0 ){console.log('its even number');
// // }else {console.log('its odd number');}

// // const agea = 50
// // if ( agea < 18){console.log('Welcome to the baby section');
// // } else if (agea >= 18 && agea <= 50){console.log('welcome to the club');
// // }else {console.log('welcone to the vip section');}

// //             //    OR
// //             const age1 = 55
// //             if ( age1 < 18){console.log('Welcome to the baby section');
// //             } else if (age1 <= 50){console.log('welcome to the club');
// //             }else {console.log('welcone to the vip section');}


// //                        // switch statment
// //    const day = 1
// //    switch (day) {
// //     case 1:
// //         console.log('MONDAY');
// //         break;
// //         case 2:
// //         console.log('TUEDAY');
// //         break;
// //         case 3:
// //         console.log('WEDNESDAY');
// //         break;
// //         case 4:
// //         console.log('THURSDAY');
// //         break;
// //         case 5:
// //         console.log('FRIDAY');
// //         break;
// //         case 6:
// //         console.log('SARTURDAY');
// //         break;
   
// //     default:
// //         console.log('not a fai');
// //         break;
// //    }       
   
// //    const grade = 'D'
// //    switch (grade) {
// //     case 'A':
// //         case 'a':
// //         console.log('EXCELLENT');
// //         break;
// //         case 'B':
// //             case 'b':
// //         console.log('VERY GOOD');
// //         break;
// //         case 'C':
// //         console.log('GOOD');
// //         break;
// //         case 'D':
// //         console.log('FAIR');
// //         break;
// //         case 'F':
// //         console.log('FAIL');
// //         break;
   
// //     default:
// //         console.log('NOT A FALID GRADE');
// //         break;
// //    }
   
// // let a =[];
// // let b = a;
// // console.log(a==b);
// // console.log(a===b);
//     //   assingment
// // let markweight = 78
// // let markheight = 1.69
// // let markBMI = markweight/markheight**2

// // let johnweight = 92
// // let johnheight = 1.95
// //  let jonhBMI =johnweight/johnheight**2
// // //  console.log(BMI1);
// // //  console.log(BMI2);
// // //  console.log(BMI1 > BMI2);
// // let markweight2 = 78
// // let markheight2 = 1.69
// // let markBMI2 = markweight2/markheight2**2

// // let johnweight2 = 92
// // let johnheight2 = 1.95
// //  let jonhBMI2 =johnweight2/johnheight2**2
// // //  console.log(BMI1);
// // console.log(Boolean(markBMI > jonhBMI));
// // console.log(Boolean(markBMI < jonhBMI));
// // if (markBMI > jonhBMI) {
// //     console.log('Mark\'s BMI is higher than jonh\'');
// // } else if ( markBMI < jonhBMI){
// //     console.log('jonh\'sBMI is higher than mark\'BMI');
// // }else {console.log('they are equal');} 

// // console.log(`'Mark\'s BMI ${markBMI} is higher than jonh\''BMI ${jonhBMI}`);


// // const dolphins_score = (96 + 96 + 96)/3
// // const koalas_score = (96 + 96 + 96)/3
// //  if( dolphins_score > koalas_score)
// //  {console.log(`dolphins_score is the winner with the average score of ${dolphins_score}`);
// // } else if (koalas_score >  dolphins_score)
// // {console.log(`koalas_score is the winner with the average score of ${koalas_score}`);
// // } else {
// //     console.log('the two have the same average score');
// // }

 
// // 05-06-23
// //  ternary operator(another way of writting conditional statement it used for two choics)
// // formula   = condition ? action 1 : action 2 eg
// // 15 > 2 ? console.log('yes') : console.log('no');
// // const num = 42
// // num % 2 === 0
// // ? console.log('this is even number') 
// // : console.log('this is odd number');

// // //  loops = repitive tasks - -for, -while, do. while loop
// // // for (initialaizer let i = 0; condition i < 5; increment i++){code} eg
// // for (let i = 0; i< 5; i++){
// //     console.log(`in the loop ${i}`);
// // }
// // console.log('outside of the loop');

// // let sum = 0
// // for (let i = 0; i <= 100; i++){
// //     sum += i
// // }
// // console.log(sum);

// // // for while = while(condition){code increment} eg
// // let x = 0;
// // while(x < 20){
// //     console.log('hello');
// //     x++;
// // }
// // // do while will do it first b4 writing the condition eg
// // let y = 0
// // do {console.log('HEY');
// //     y++
// // } while (y < 5);


// // funcation are block  of code desigh to perform a particulary task. we have 3 ways of writing function
// // a function declaration eg
// // function myFunction(){
// //     console.log('HELLO');
// //     console.log('YOU ARE WELCOME');
// // }
// // myFunction()

// // function greet(){
// //     console.log('welcome');
// // }
// // greet()

// // function greet(name){
// //     console.log('welcome' + name);
// // }
// // greet('toyosi')
// // greet('ola')
// // // for anomanous wit age 
// // function greet(name = 'user',  age = 23){
// //     console.log('welcome' + name + age);
// // }
// // greet()
// // greet('ade', 55)
// // greet('abe', 45)
// // greet('lola', 24)

// // // calculate the age of user (2003- year) 
// // function calcage(year) {
// //     const age = 2023 - year;
// //     console.log(`Your age is ${age}`);
// // }
// // calcage(1960)
// // calcage(1990)

// // function sumnums(a, b) {
// //     console.log(`the sum of ${a} and ${b} is ${a + b}`);
// // }
// // sumnums(345, 4)

// // // class work
// // function describecountry(country, population, capitalcity) {
// //     console.log(`${country} has ${population} millon people and its capital city is ${capitalcity}`);
// // }
// // describecountry('france', 12, 'paris')
// // describecountry('Belgium', 4, 'Brussels')
// // describecountry('Russia', 68, 'Moscow')


// // // checking email
// // checkemail('abcd@gmail.com');

// // function checkemail(email) {
// //     if (email.includes('@')){
// //         console.log(`${email} is a valid email address`);
// //     } else {console.log(`${email} is not a valid email`);
// // }
// // }
// // checkemail('fgd')

// // // function expression
// // const myFunction2 = function(a, b) {
// //     console.log('anything');
// //     console.log(a + b);
// // }
// // myFunction2(4, 5)
 
// // //   return keyword

// // const precious = function (a, b){
// //     return a * b
// // }

// //  const test = precious(10, 10)
// //  console.log(test);

// // //  create a functions that calc average of the two teams
// // // d = 103, 98, 89
// // // k = 110, 87, 95

// // const calcaverage = function (a, b, c) {
// //     const avg =  (a + b + c)/3
// //     // return avg.toFixed(2)
// //     return Number(avg.toFixed(3))
// // }  
// // const avgdolphin = calcaverage(143, 98, 89)
// // const avgkaola = calcaverage(110, 87, 95)
// // console.log(avgdolphin, avgkaola);

// // function checkwinner(teamA, teamB) {
// //     if (teamA > teamB) {
// //         console.log('teamA won');
// //     }else if (teamB > teamA) { 
// //         console.log('teamB won');
// //     } else {
// //         console.log('No winners');
// //     }
// // }
// // checkwinner(avgdolphin, avgkaola)
 
// // //    06-06-23
// // // ARROW FUNCTION  formula = name = ()=>{}    eg

// // const logger = (a, b, c) => {
// //     const total = a + b + c
// //     return total;
// // }
// // console.log(logger(4, 5, 6));
// // // we could arrow function for 1 line return eg
// // const diff = (a, b) => a - b
// // console.log(diff(45, 33));

// // const calcavg = (a, b, c) => {
// //     const avg = (a + b + c)/3
// //     return Number(avg.toFixed(2))
// // }
// // console.log(calcavg(23, 44, 67));


// // // variable scoping is where var accessing from, we've 2 types - global and local var
// // // global var can be access everywhere eg 'ade', while local can only be access inside a block of code eg {ade}


// // //  arrays are use to store more than 1 value inside a var. it denoted by [element, element, etc]
// // const std = ['mofe', 'precious', 'shehu']
// // console.log(std);

// // // getting elemnt in arr eg
// // console.log(std[2]);
// // // getting the last element
// // console.log(std[std.length - 1]);

// // // converting an array to a string - tostring and join eg
// // console.log(std.toString());
// // console.log(std.join(' + ')); 

// // // adding element to an Array - push(add element at back) and unshift(add element to the front) eg
// // std.push('nike,') 
// // std.push('lola')
// // console.log(std);

// // std.unshift('ebuka')
// // console.log(std);

// // // remove element - pop(remove from back) and shift(remove from front) eg
// // std.pop()
// // std.shift()
// // console.log(std);

// // // sort arrange element alph while reverse turn it upside down eg
// // std.sort()
// // std.reverse()
// // console.log(std);

// // console.log(std.includes('@'));
// // console.log(std.includes('shehu'));
// // //  concat eg
// // const std2 = ['sola', 'solo']
// // console.log(std.concat(std2));
// // console.log(std.concat(std2, ['ade', 'ty']));

// // //       slice
// // console.log(std.slice(0, 2));

// // // class work
// // const Countries = ['Nigeria', 'Qatar', 'Kuwait', 'Estonia']
// // console.log(Countries.length);
// // Countries.length > 5 ? console.log('the countries is more than 5') : console.log('its less than 5');

// // let savings = 30000
// // const transactions = [5000, -10000,  -100]
// // transactions.push(-2000)
// // transactions.push(5000)
// // transactions.push(-3000)
// // transactions.pop(3000)
// // let debit = 0
// // let credit = 0
// // // console.log(transactions);

// // for(i = 0; i < transactions.length; i++){
// //     // console.log(transactions[i]);
// //     savings += transactions[i]
// //     if (transactions[i] < 0) {
// //         debit += transactions[i]
// //         console.log(`You have been debited ${transactions[i]}`);
// //     }else {
// //         credit += transactions[i]
// //         console.log(`You have been credited ${transactions[i]}`);
// //     }
// // }
// // console.log(`your account balance is ${savings}`);
// // console.log(`the total debit is ${debit}`);
// // console.log(`the total credit is ${credit}`);
// // // arrays ppties and methods 
// // // methods are includes, sort, pop, push, shift, unshift, slice, splice, concat, join, toString etc

// // // filter, find, map, forEach
// // // higher order function, callback func
// //  const friends = ['jonh', 'lola', 'adam', 'tunde', 'ade' ]
// //  friends.forEach((friend) => {
// //     console.log(`the name of my friend is ${friend}`);
// //  })

// //  friends.forEach((f, index) => {
// //     console.log(f, index);
// //  })

// // //  map - map and foreach are worknthe same way
// // friends.map((val) =>{
// //     if (val === 'lola' || val === 'adam') {
// //         console.log(`${val} is my best friend`);
// //     } else{
// //         console.log(`${val} is just my friend`);
// //     }
// // })
 
// // // filter - it allow us to get new array base on the filter argument. used to filter element base on command you give eg
// // const filterfriends = friends.filter((friend) => {
// //     // return friend.startsWith('a')
// //     return friend.length > 3
// // })
// // console.log(filterfriends);

// // // find - used to find 1 thing i.e the first thing it comes incontant with eg

// // const founduser = friends.find((friend) =>{
// //     return friend.startsWith('a')
// // })
// // console.log(founduser);

// // // we could use arrow fxt for filter and find becu they are just one line of code eg
 
// // const result = friends.filter((friend) => friend.length > 3)
// // const result2 = friends.find((f) => f.startsWith('a'))
// // console.log(result, result2);

// // reduce - is one of the most value array and its use with number
// //  accumulator (acc) value (val) eg

// const movement = [300, -50, 700, 400, -300]
// const total = movement.reduce((acc, val)=>{
//     return acc + val;
// }, 0)   
// console.log(`Your total bill is ${total}`);
//     //  07-06-23

// //  objects is another important array it could use to store xpl arrays and its aallow us to describle our ppties eg
// // object - ppties, methods
// const user = {
//     firstname: 'Tom',
//     surname: 'Jerry',
//     age: 34,
//     job: 'interior decoration',
//     friends: ['jj', 'yk', 'ay']
// }
// console.log(user);


// // access ppties from an obj they are of two type- dot notation and bracket
// // dot eg
// console.log(user.firstname.toUpperCase());
// console.log(user.age);

// // bracket we could use expression on bracket eg
// console.log(user['friends']);
// console.log(user['friends'].includes('kk'));

// const namekey = 'name'
// console.log(user['sur' + namekey]);

// // adding ppties to an obj eg
// user.hasacar = true
// user.status = 'Married'
// console.log(user);

// // remove ppties --delete eg
// delete user.friends
// console.log(user);

// // obj methods are fxt working on an obj

// const book = {
//     title: 'Rich dad poor dad',
//     author: 'Robert kiyosaki',
//     year: 2001,
//     pages: 204,
//     similarbooks: ['richest man in babylon', 'the monk who sold his ferrari', 'think and grow rich'],
//     publisher: 'macmillan',
//     getsummary: function (){
//         console.log('this is book summary');
//     },
//     // the title of the book is rich dad poor dad written by robert in the year 2001 (this)
//     getsummary1: function (){
//         return `the title of the book is ${this.title} written by ${this.author} in the year ${this.year}`
//     },
//     ispopular: () => {
//         console.log('this book is popular');
//     },

// }
// console.log(book);

// book.getsummary()
// book.ispopular()
// console.log(book.getsummary1());

// // obj destructuring ability pick up more than one ppties at a time in the obj eg
// // const {publisher, year, author, pages} = book
// // console.log(publisher);
// // console.log(pages, year);    
//             // or
//             const {publisher, year, ...all} = book         
// console.log(all);

// const users = [
//     {name: 'Shehu', username: 'shehu1112', password: '623gvr7', age: 33},
//     {name: 'kunmi', username: 'kunmi1112', password: '623ghvgr7', age: 23},
//     {name: 'Shola', username: 'sholi1112', password: '623y3vr7', age: 13},
//     {name: 'ton', username: 'stom1112', password: '6233vr7', age: 43},
// ]
// // age >= 18
// const canview = users.filter((user) =>{
//     return user.age >= 18;
// })
// console.log(canview);

// // staartwith
// const search = users.filter((kk) => {
//     return kk.name.startsWith('s') || kk.username.startsWith('s')
// })
// console.log(search);
// // includes 
// const search1 = users.filter((jj) =>{
//     return jj.name.includes('m') || jj.username.includes('m')
// })
// console.log(search1);


// // array destructuring are of two ways - 
// // rest work in LHS and spread works in RHS eg
// const ages = [32, 34, 65, 56, 76]
// const [...rest] = ages
// console.log(rest);

// // spread can work anywhere could be in the front, middle and back
// const newages = [2, ...ages, 32, 34, 6, 56, 76]
// console.log(newages);

// const newages1 = [...ages, 2, 3, 65, 6, 76]
// console.log(newages1);

// const newages2 = [2, 3, 4, 65, 56, 76, ...ages]
// console.log(newages2);

// // math obj - 8 math constants
// // math method - sqrt, trunc, round, random, ceil, floor eg

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(2543).toFixed(2));

// console.log(Math.trunc(56.55467));

// console.log(Math.round(34.6537));

// // ceil round up regardless while floor round down regardless
// console.log(Math.ceil(3.56));
// console.log(Math.floor(2.7541));

// // random is to generate random num btw 0 & 1, but we could xply and add to it. eg
// console.log(Math.random() * 2);
// console.log(Math.random());
// console.log(Math.random() * 2 + 1);

// const computer1 = ['rock', 'paper', 'scissor']
// const randomnum1 = Math.trunc(Math.random() * 3)
// const randomchoice1 = computer1[randomnum1]
// console.log(randomchoice1);

// const computer = ['rock', 'paper', 'scissors']
// const randomnum = Math.trunc(Math.random() * 3)
// const computerchoice = computer[randomnum]
//  const playerchioce = 'rock'

//  const checkwin = function(computer, player){
//     if (computer === player) {
//         return 'This is a tie'
//     }else if (player === 'rock'){
//         if (computer ==='scissors'){
//             return 'Rock smashes scissors, You win!'
//         }else {
//             return 'Paper covers rock, You lose!'  
//     }
//     }else if (player ==='papper'){
//         if (computer === 'rock'){
//             return 'paper covers rock, You win!'
//         }else{
//             return 'scissors cut paper, You lose!'
//         }
//     } else if (player ==='scissors'){
//         if (computer === 'paper'){
//             return 'scissors cut paper, You win'
//         }else {
//             return 'Rock smashes scissors, You lose!'
//         }
//     }
//  }
//  const result = checkwin(computerchoice, playerchioce)
// console.log(result);

// 08/06/23
// //  asybchronous js is called a non blocking code eg

// console.log('first');
// setTimeout(() => {
//     console.log('second');
// }, 3000);

// console.log('third');


// console.log('first');
// setTimeout(() => {
//     console.log('second');
// }, 3000);

//  const myInterval = setInterval(() => {
//       console.log('welcome user');
// }, 2000);

// setTimeout(() => {
//     clearInterval(myInterval)
// }, 12000);
// console.log('third');


// FETCHING DATA - APIS - application programming interface
// JSON - javascript object notation


// promise is a container for future value

const url =  "https://jsonplaceholder.typicode.com/users"
// // fetch method
// fetch(url)
// .then((response) =>{
//     return response.json();
// })
// .then((data) =>{
//     console.log(data);
// })

// what if i want to fetch xply data, and i dont want to repeat fetch method we could use reusable function eg
const getdata = (site) => {
    fetch(site)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    });
};
getdata("https://jsonplaceholder.typicode.com/albums")
getdata("https://jsonplaceholder.typicode.com/posts")

// try and catch block it used in order not to affect any other thing eg
try {
    console.log(yfgdw);
} catch (error) {
    console.log(error);
}


// fetching data with async / await another ways of fetching datas and can used to get xpl things eg

const  getdata1 = async (site) =>{
    try {
        const response = await fetch(site)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
getdata1(url)


// storage api
// local storage = setItem, getItem, removeItem, clear, length
// setItem need kay and value string eg
localStorage.setItem('name', 'Ola Ola');
localStorage.setItem('token', '23456')

const result = localStorage.getItem('name')
console.log(result);

localStorage.removeItem('token')
const len = localStorage.length
console.log(len);

// localStorage.clear() it will cleaar all your storage

 //  DOM