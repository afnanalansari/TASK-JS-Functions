
const num = [1, 2, 3];
// num.forEach(el => { console.log(el)});
num.map(function c(el) { console.log(el +2)})

console.log(num.find(el =>el === 3)? 'found it!': 'opps, not found'); //find w/ conditional if :)


/////-------Thursday Challenge-------//////////
function addMorroco(gulf)
{
    gulf.splice(gulf.length/2,0,'Morroco');
    return gulf;
}

console.log(addMorroco(['Kuwait', 'KSA', 'Qatar', 'Bahrain', 'Oman']));



const gulf = ['Kuwait', 'KSA', 'Qatar', 'Bahrain', 'Oman'];

//non-iterative
let index = gulf.indexOf('KSA'); 
gulf.splice(index,1);
console.log(gulf);

//iterative
let inx = 0;
gulf.forEach(el =>{ el === 'Qatar'? gulf.splice(inx,1): inx++ }); //remove Qatar using iterative
console.log(gulf);



////return a word using the first letter from every name (iterative)+split+join
let char = '';
let word = '';
gulf.forEach(el =>{
    char = el.split('');
    word += char[0];
 });
console.log(word);

//create an object with an array that has the key is the country & the value is the population
const obj = {
    'Kuwait':4318211,
    'Qatar':2720658,
    'KSA': 37055520,
};
console.log(obj);
console.log('Kuwait population is ' + obj['Kuwait']);

//create an array of objects & console lof the country and the value
const arrGulf = [{'Kuwait':4318211},{ 'Qatar':2720658},{ 'KSA': 37055520}];
let number = 0;
let key = '';
let population = '';
let tempObj = {};
while(number < arrGulf.length)
{
    tempObj = arrGulf[number]; //hold the object
    key = Object.keys(arrGulf[number]) //assuming we dont know the key value
    population = tempObj[key];
    console.log(`In ${key} the population is: ${population}`);
    number++;
}
