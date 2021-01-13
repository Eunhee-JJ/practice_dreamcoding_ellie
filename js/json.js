// JSON
// JavaScrpt Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'),
    jump: () =>{
        console.log(`${name} can jump!`);
    }
    //함수나 심볼은 json에 포함되지 않음!
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);
//arse(json)


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key ==='birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());