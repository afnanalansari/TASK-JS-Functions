/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(name)
{
    console.log(name);
}

printName('afnan');

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear)
{
    console.log(2023-birthYear);
}

printAge(1999);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, lang)
{
    // let lang = prompt('choose a language (en, es, fr, tr):');
    lang
    let language = [`Hello ${name}`, `Hola  ${name}`, `Bonjour  ${name}`, `Merhaba  ${name}`];

    switch(lang)
    {
        case 'en':
            console.log(language[0]);
        break;
    
        case 'es':
            console.log(language[1]);
        break;
    
        case 'fr':
            console.log(language[2]);
        break;
    
        case 'tr':
            console.log(language[3]);
        break;
    
        default:
            console.log('no such language!');
    }
}

printHello('afnan', 'fr');

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(num1, num2){
    if(num1>num2){ 
        console.log(num1);
    } else{
         console.log(num2);}

}

printMax(50, 1);