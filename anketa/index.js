const questions = {
    surname: 'Какая ваша фамилия?',
    name: 'Какое ваше имя?',
    middleName: 'Какое ваше отчество?',
    age: 'Какой ваш возраст?',
    isGender: 'Ваш пол мужской?'
}
const defaultValues = {
    surname: 'Иванов',
    name: 'Иван',
    middleName: 'Иванович',
    age: 0,
}

let age;
let isPension = ''

function getInput(question, defaultValue) {
    let input;
    do {
        input = prompt(question, defaultValue)
    } while (!input || !isNaN(input) || input.includes(' '));
    return input;
}
let surname = getInput(questions.surname, defaultValues.surname);
let name = getInput(questions.name, defaultValues.name);
let middleName = getInput(questions.middleName, defaultValues.middleName);


// while(!isNaN(surname) || surname.includes(' ')) {
//     surname = (prompt(questions.surname, defaultValues.surname))
// }
// while(!isNaN(name) || name.includes(' ')) {
//     name = (prompt(questions.name, defaultValues.name))
// }
// while(!isNaN(middleName) || middleName.includes(' ')) {
//     middleName = (prompt(questions.middleName, defaultValues.middleName))
// }

while(true) {
    age = (prompt(questions.age, defaultValues.age))
    if (age !== null && age.trim() !== "" && !isNaN(age) && Number(age) >= 0) {
        break; 
    }
}

let isMale = confirm(questions.isGender)
let gender = isMale ? 'мужской' : 'женский'

if(isMale && age >= 63 || !isMale && age >=58) {
   isPension = 'да' 
} else {
    isPension = 'нет'
}

alert(`
    Ваше ФИО: ${surname} ${name} ${middleName}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${age*365}
    Через 5 лет вам будет: ${+age + 5}
    Ваш пол: ${gender}
    Вы на пенсии: ${isPension}
    `)




