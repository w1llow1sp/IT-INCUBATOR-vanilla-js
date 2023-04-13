//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель,
// а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.

//Создаем массив с помощью array.from, заполняем num раз через fill() и соедигяем через join
const  repeatString = (str,num,sep) =>{
    return Array.from({ length: num }, () => str).join(sep);
}
//обьединяем строку и разделитель, используем repeat для строки
//за исключением последнего разделителя
function repeatString1 (str,num,sep) {
    return (str + sep).repeat(num - 1) + str;
}
//repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
const  checkStart = (str, subStr) => {
    return str.toLowerCase().startsWith(subStr.toLowerCase())
}
function checkStart1(str, subStr) {
    return str.toLowerCase().slice(0,subStr.length) === subStr.toLowerCase()
}
const checkStart2 = (str, subStr) => {
    return str.toLowerCase().indexOf(subStr) === -1 ? false : true
}

// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
function truncateString(str,count) {
   return `${str.slice(0,count)}...`
}
const truncateString1 = (str,count) => {
    return str.length > count ? str.slice(0,count) + '...' : str
}
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении,
// если в параметрах пустая строка, то возвращает null.

function getMinLengthWord (str) {
   return str.length===0
       ? null
       : str.split(' ').sort((a,b) => a.length -b.length)[0]
}
/*
* Функция разбивает строку на массив слов с помощью метода split(),
*  затем итерируется по массиву и сравнивает длины слов с помощью условного оператора if.
*  На каждой итерации, если длина текущего слова меньше длины самого короткого слова, то самое короткое слово обновляется.
*  В конце цикла, функция возвращает самое */
const getMinLengthWord1= (str) => {
    if (!str) return null; // проверка на пустую строку
    const words = str.split(' ');
    let shortestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}

// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
//Здесь мы используем метод .charAt()
// для получения первой буквы слова и метод .slice()
// для получения остальной части слова, после чего склеиваем эти части с помощью оператора +
function setUpperCase (str) {
    return str.
        toLowerCase()
        .split( ' ')
        .map(el =>el.charAt(0).toUpperCase() + el.slice(1) )
        .join(' ')

}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase1  = (str) => {
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

function isIncludes(str, substr) {
    // Приводим строку и подстроку к нижнему регистру
    const lowerStr = str.toLowerCase();
    const lowerSubstr = substr.toLowerCase();

    // Убираем повторяющиеся символы в подстроке
    const uniqueSubstr = [...new Set(lowerSubstr)].join('');

    // Проверяем, содержатся ли все символы из подстроки в строке
    for (const char of uniqueSubstr) {
        if (!lowerStr.includes(char)) {
            return false;
        }
    }
    return true;
}


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true