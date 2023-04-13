// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object
let man = {
    name: 'John',
    age: 28
};
//solve
let manFullCopy  = {...man}

/*
console.log(man === manFullCopy)
manFullCopy.name='Jack'
console.log(man.name)
console.log(manFullCopy.name)
*/

// 2. Array of primitives
let numbers = [1, 2, 3];
//solve
/*let numbersFullCopy  = numbers.map(el=>el)
console.log(numbers === numbersFullCopy)
numbersFullCopy.push(4)
console.log(numbers.length)
console.log(numbersFullCopy.length)*/

// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};
//solve
/*let man1FullCopy = {
    ...man1, mother:{
        ...man1.mother}
}
console.log(man1===man1FullCopy)
console.log(man1.mother)
man1FullCopy.mother = {
    name: 'Jane',
    age: 42
}
console.log(man1FullCopy.mother)
console.log(man1)
console.log(man1FullCopy)*/


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};
//solve
/*
let man2FullCopy = {
    ...man2,
    friends: [...man2.friends.map(el=>el)]
}

console.log(man2)
console.log(man2FullCopy)
console.log(man2===man2FullCopy)
man2FullCopy.friends.push('Alice')
console.log(man2FullCopy.friends.length)
console.log(man2.friends.length)*/


// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];
//solve

let peopleFullCopy = people.map((el) => {
    return {...el}})
/*console.log(people === peopleFullCopy)
peopleFullCopy = [...peopleFullCopy,{name: "Mary", age: 23}]
console.log(people)
console.log(peopleFullCopy)*/

// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

//solve

let man3FullCopy = {
    ...man3,
    friends:[...man3.friends]
}
/*console.log(man3 === man3FullCopy)
//
man3FullCopy = {...man3FullCopy,
name: man3FullCopy.name= 'Jasper'}
//
man3FullCopy = {...man3FullCopy,
friends: [...man3FullCopy.friends,{name: "Mary", age: 23}]}
//
console.log(man3FullCopy.friends)
console.log(man3.friends)*/


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};
//solve
let man4FullCopy = {
    ...man4,
     mother: {...man4.mother,
        work: {...man4.mother.work}
    }
}
/*

console.log(man4FullCopy===man4)
man4FullCopy.mother.work.position = 'hairdresser'
man4FullCopy.mother.work.experience =7
console.log(man4FullCopy.mother.work)
console.log(man4.mother.work)
*/


// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};
//solve
let man5FullCopy = {
    ...man5,
    mother: {...man5.mother,
        work:{...man5.mother.work},
        parents:[...man5.mother.parents.map(el => {
            return {...el}
        })]
    }
}
/*console.log(man5===man5FullCopy)
man5FullCopy.mother.parents[0].name= 'Sam'
man5FullCopy.mother.parents[0].age= 75
console.log(man5FullCopy.mother.parents)
console.log(man5.mother.parents)
console.log()*/


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};
//solve
let man6FullCopy  = {
    ...man6,
    mother: {...man6.mother,
        work: {...man6.mother.work},
        parents:[...man6.mother.parents.map(el => {
            return {...el}
    })]}
}

/*
console.log(man6===man6FullCopy)
console.log(man6.mother.parents[0].favoriteDish)
man6FullCopy.mother.parents[0].favoriteDish.title = 'Cesar'
console.log(man6FullCopy.mother.parents[0].favoriteDish)
*/


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};
//solve
/*let man7FullCopy = structuredClone(man7)*/
//or
let man7FullCopy = {
    ...man7,
    mother: {
        ...man7.mother,
        work: {...man7.mother.work},
        parents: man7.mother.parents.map(parent => ({
            ...parent,
            favoriteDish: {
                ...parent.favoriteDish,
                ingredients: [...parent.favoriteDish.ingredients]
            }
        }))
    }}


console.log(man7FullCopy)
console.log(man7)
console.log(man7.mother.parents[0].favoriteDish.ingredients === man7FullCopy.mother.parents[0].favoriteDish.ingredients)
man7FullCopy.mother.parents[0].favoriteDish.title='Vine'
console.log(man7FullCopy.mother.parents[0].favoriteDish.title)
console.log(man7.mother.parents[0].favoriteDish.title)
