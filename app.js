// console.log("Hello world");
// console.log('welcome to class');
// //console.log('good morning');

// // JS VARIABLES AND VALUES (var, let and const)
// // let x =2;
// // const y =4;
// // console.log(x);
// // console.log(y);

// // Conventions and rules in naming var
// // have a logical var name
// // const d ='Shehu'
// // const firstName = 'Shehu'

// // compound names - camelcasing
// // const lastName ='Toyosi'
// // illegal way for naming (you can not start any name with number but you can start with _ and $)
// // const 1year = 2005
// // const $year = 333

// // const country = 'Nigeria'
// // let State = 'Lagos'
// // console.log(country);
// // console.log(State);
// // State = 'Oyo'
// // console.log(State);

// // JS DATA TYPE-(Primitive and complex data type)
// // primitive are string, number, boolen, null and undefined.
// // string are text inside qoutes mark. eg
// const firstName = 'Shehu'
// const lastName = 'adekunmi'
// const middlename = 'Inioluwa'
// const currentJob = 'web dev'
// const year = '2005'
// const Email = 'abc@gmail.com'
// // string Concatenation/joining +.
// const fullname = firstName + ' ' + lastName + ' ' + year
// console.log(fullname);
// // const fullname = firstName + ' ' + lastName + ' ' + year
// // My name is Shehu and i work as a wed dev
// const description = 'my name is ' + firstName + ' i work as a ' + currentJob
// console.log(description);
// // you can message me on this email, abc@gmail.com
// const message = ' you can message me on this email ' + Email
// console.log(message);

// // Getting Characters- js is zero base it start counting from 0
// console.log(firstName[3]);
// console.log(middlename[6]);

// // string length .length eg
// console.log(firstName.length);
// console.log(description.length);

// // string methode= transform eg
// console.log(fullname.toUpperCase());
// console.log(fullname.toLowerCase());
// console.log(fullname.toLocaleUpperCase());

// // extracting parts of a string- slice or substring eg
// console.log(Email.slice(0, 4));
// console.log(Email.slice(5, 11));
// console.log(Email.slice(-1, -6));

// // string substraction(start, count or xters eg
// console.log(Email.substr(0, 4));

// // replace string content- replace or replaceAll eg
// console.log(firstName.replace('S', 's'));
// console.log(firstName.replace('h', '$'));
// console.log(Email.replaceAll ('m', '$'));

// // includes, indexOf, lastIndexOf, trim, concat,
// // trimStart, trimend, startsWith, EndsWith

// console.log(Email.includes('@'));
// console.log(Email.indexOf('m'));
// console.log(Email.lastIndexOf('m'));

// const user = '      Shehu     '
// console.log(user.length);
// const formatteduser = user.trim()
// console.log(formatteduser.length);
// const password = '    1234567853   '
// console.log(password.length);
// const formattedpassword = password.trimStart()
// console.log(formattedpassword.length);
// const ab = 'ahehuadekunmi'
// console.log(ab.startsWith('S'));


// // cooncat -appendix end eg
// const job = 'frontend' 
// // frontend developer
// console.log(job.concat(' ', 'developer', ' ', 'rera'));

// const author = 'Chinua Achebe';
// const book = 'Things Fall Apart';
// const yearr = 1996;
// // The book things fall apart was written by Chinua Achebe in the year 1996
// const des = 'The ' + book + ' was written by ' + author + ' in the ' + yearr
// console.log(des);


// // template literals
// const des2 = `The book ${book} was written by ${author} in the ${yearr}`
// console.log(des2);

// // my favourite author is Chinua Achebe
// const fav = `my favourite author is ${author}`
// console.log(fav);

// console.log(`my email is ${Email}`);



// DRY = do not repeat yourself


// number- 4 5.5 4300
//  math operators - + * / % **
// console.log( 6 % 2); //0
// console.log(5 % 2);  //1

// // order of operation - bodmas, pemdas
//  let balance = 500
//  const t1 = 20
//  const t2 = 100
//  const d1 = 200
//  const remine = balance - t1 - t2 + d1
//  console.log(remine);
//  let total = 50
// //  increase the value of total by 10
//  total = total + 10
//  console.log(total);

// //  or shortcut
// total += 10
// total -= 5

//  let post = 20
//  post += 5
//  post += 10
//  post -= 5
//  post *= 2
//  console.log(post);
// //  console.log(4 >= '4'); true
 
// // Boolean - true and false
//  const continent = 'Africa'
//  const country = 'Nigeria'
//  let population = 2000000 
//  console.log(continent, country, population);
//  const island = false
//  const language = 'English' 
// population /= 2
// console.log(population);

// population += 1
// console.log(population);
// // Nigeria is in africal with the population of about 20000000
// const des = `${country} is in ${continent} with the population of about ${population} people, speaking ${language} `
// console.log(des);
// // des1 = Nigeria is a country speak majorly english
//  const des1 = `${country} is a country speak majorly ${language}`
//  console.log(des1);

// // Boolean - true and false
// //  comparesion operator - <> <= >= == eg
// console.log(6 > 3);
// console.log(5 >= 5.0);

// // logical operators  = and && or ||  not !
// console.log(5 > 6 && 2 == 2);
// console.log(6 > 7 || 2===2);

// // typeof
// console.log(typeof 5);
// console.log(typeof 'abe');
// console.log(typeof true);

// // const sh = '      Shehu'
// // const hs = sh.trim()
// // console.log(hs.length);
// // const ad = '      adex      toyosi    '
// // const da = ad.trim()
// // console.log(da.length);

// // type conversion and type coercion

// // string to number 
// const str = '90'
// console.log(typeof str);
// const converted = Number(str)
// console.log(typeof converted);

// // number to string
// const num = 20000;
// console.log(typeof num);
// const converted2 = String(num);
// console.log(typeof converted2);

// // type of corecion
// const num1 = 8 
// const num2 = '9'
// const res = 'num1 + num2'

// Null = null or nothing
let agee = null
console.log(agee, agee + 4, `my agee is ${agee}`);

// undefined
let year;
console.log(year);
console.log(year, year + 4, `the year is ${year}`);

// truthy value are string, num, expect 0 
console.log(Boolean('2'));

// false values 0, null and undifined


// control flow== conditional statment
                // conditional statment
                //  if (condition){code} eg
  const password1 = '12453476'   
  if (password1.length > 6){console.log('your password is strong');} 
  
            //  if else
            // if (condition){code 1
        // }else{code2
        // } eg
            const password2 = '124'   
  if (password2.length > 6){console.log('your password is strong');
} else{console.log('your password is weak');
}

// if (true && true && true) eg
const password = '124@12345'   
  if (password.length > 6 && password.includes('@')){console.log('your password is strong');
} else{console.log('your password is weak');
}

const country = 'Qatar'
 const continent = 'Asian'
 const population = 21
 const isIsland = false
 const language = 'Arabic'
//  Sarah speaks english has less than 50 people and is not an island
// you should live in Qatar
// Qatar does not meet your criteria
if(language === 'English' && population < 50 && isIsland) {console.log(`you should live in ${country}`);
}else {console.log(`${country} does not meet criteria`);
}

const age = 18
//  >=18 
 
if(age >= 18){console.log('you are an adult');} else {console.log('you are not an adult');}

// if (condition){} else if (another condi){} else if (cond){} else{}   eg
const password3 = '12345678@ysdr'
// recommended >7 and is include @, strong >7 and weak
if (password3.length >= 7 && password3.includes ('@')) {console.log('your password is recommended');
} else if (password3.length >=7){console.log('your password is strong');
}else{console.log('your password is weak');}

const num1 = 0
if (num1 > 0 ){console.log('your num is positive');
}else if (num1 < 0) {console.log('your num is negative');
}else {console.log('undefined');}

// even or odd
const num2 =55
if (num2 % 2 === 0 ){console.log('its even number');
}else {console.log('its odd number');}

const agea = 50
if ( agea < 18){console.log('Welcome to the baby section');
} else if (agea >= 18 && agea <= 50){console.log('welcome to the club');
}else {console.log('welcone to the vip section');}

            //    OR
            const age1 = 55
            if ( age1 < 18){console.log('Welcome to the baby section');
            } else if (age1 <= 50){console.log('welcome to the club');
            }else {console.log('welcone to the vip section');}


                       // switch statment
   const day = 1
   switch (day) {
    case 1:
        console.log('MONDAY');
        break;
        case 2:
        console.log('TUEDAY');
        break;
        case 3:
        console.log('WEDNESDAY');
        break;
        case 4:
        console.log('THURSDAY');
        break;
        case 5:
        console.log('FRIDAY');
        break;
        case 6:
        console.log('SARTURDAY');
        break;
   
    default:
        console.log('not a fai');
        break;
   }       
   
   const grade = 'D'
   switch (grade) {
    case 'A':
        case 'a':
        console.log('EXCELLENT');
        break;
        case 'B':
            case 'b':
        console.log('VERY GOOD');
        break;
        case 'C':
        console.log('GOOD');
        break;
        case 'D':
        console.log('FAIR');
        break;
        case 'F':
        console.log('FAIL');
        break;
   
    default:
        console.log('NOT A FALID GRADE');
        break;
   }
   
let a =[];
let b = a;
console.log(a==b);
console.log(a===b);
 








