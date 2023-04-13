const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/

//1. Создать поверхностую  копию user
let userCopy = {...user}
//Проверки
/*
console.log(user===userCopy) //ожидаем false
console.log(user.friends===userCopy.friends) // ожидаем true
*/

//2. Полная (глубокая) копия student
const deepCopyStudent = {...user,
    friends: [...user.friends]}
/*
console.log(user===deepCopyStudent) //ожидаем false
console.log(user.friends===deepCopyStudent.friends) // ожидаем false
*/

//3. Поверхностная копия students
const shallowCopyStudents =[...students]
/*
console.log(shallowCopyStudents===students) // ожидаем false
console.log(shallowCopyStudents[0]===students[0]) // ожидаем true
*/

//4*. Полная (глубокая) копия students
const deepCopyStudents = students.map(st=> {
        return {...st}
    })

/*console.log(students === deepCopyStudents);
console.log(students[0] === deepCopyStudents[0]);
console.log(students);
console.log(deepCopyStudents);*/
//Далее все преобразования выполняем не модифицируя исходный массив students
//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
// console.log(deepCopyStudents.sort((a,b) =>b.scores-a.scores))

//5a. Отсортируйте студентов по алфавиту
function sortByName (a,b) {
    switch (a.name > b.name) {
        case true:
            return 1;
        case false:
            return -1
        default:
            return 0
    }
}

//console.log(deepCopyStudents.sort(sortByName))

//6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = deepCopyStudents.filter(st => {
    return st.scores >=100
})


// функция для сортировки по успеваемости
function sortByScore (a,b) {
    switch (a.scores > b.scores) {
        case true :
            return 1;
        case false:
            return -1;
        default:
            return 0
    }
}

/*console.log(bestStudents)
console.log(deepCopyStudents)
console.log(bestStudents===deepCopyStudents)*/

//6a.Сформируйте массив из трёх лучших студентов
//сделала копию с отсортированными студентами до 100
const bestThreeStudents = bestStudents.map(el=>{
    return {...el}}).splice(0,3)
//console.log(bestThreeStudents)

//6b. Объедините массивы deepCopyStudents и bestThreeStudents так,
// чтоб сохранился порядок сортировки
//TODO:Исправить баг

const newDeepCopyStudents ={...bestStudents,...deepCopyStudents}
//console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов
const notMarriedStudents = deepCopyStudents.filter(st => !st.isMarried)
//console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов
const studentNames =deepCopyStudents.map(st => st.name)
//console.log(studentNames)
//8a. Сформируйте строку из имён студентов, разделённых

const nameWithSpace = studentNames.join(" ");
//console.log(nameWithSpace);
const namesWithComma = studentNames.join(", ");
//console.log(namesWithComma);

//9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudent = deepCopyStudents.map(el=> {
    return {...el,isStudent:true}
})
//console.log(trueStudent)

//10. Nick женился. Выполните преобразование массива students
let studentsWithMarriedNick = students.map(el =>
el.name==='Nick' ? {...el, isMarried:true} : el)

console.log(studentsWithMarriedNick)

//11. Найдите Студентку по имени Ann
const findAnn = students.filter(st => {
    return st.name==='Ann'
})
//console.log(findAnn)


//12. Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, st) => {
    return acc.scores > st.scores ? acc : st;
});
console.log(bestStudent);
//12a. Найдите 2 студента с самым высоким баллом
let bestStudent = students[0];
let bestStudent2 = students[1];
for (let i=1; i < students.length; i++) {
    if (bestStudent.scores > bestStudent2.scores) {
        if (students[i].scores > bestStudent2.scores) {
            bestStudent2 = students[i];
        }
    }  else {
        if (students[i].scores > bestStudent.scores) {
            bestStudent = students[i];
        }
    }

}
let best1 = students[0]
let best2 = students[0]

for (let i = 0; i < students.length; i++) {
    if (students[i].scores > best1.scores) {
        best1 = students[i]

    } else  if (students[i].scores > best2.scores ){
        best2 = students[i]
    }

}


//13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, st) => acc + st.scores, 0);
console.log(scoresSum);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

// function addFriends(students) {
//     const studentsNames = students.map(st => st.name)
//     function getFriendsList(student){
//         const friendsList = studentsNames.filter(name => student.name !== name)
//         return friendsList
//     }
//     const studentsWithFriends = students.map(st => {
//         return {...st, friends: getFriendsList(st)}
//     })
//     return studentsWithFriends

// }
const addFriends = (sts) => {
    return sts.map((st) => ({
        ...st,
        friends: sts.map((st) => st.name).filter((name) => name !== st.name),
    }));
};

console.log(addFriends(students))
