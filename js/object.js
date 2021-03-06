//developer.mozilla.org

//Objects = { key : value };


// 1. Literals and Properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}


const ellie = { name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true; // 동적인 JS만의 특징
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); 
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
//    console.log(obj.key);
    console.log(obj[key]);

}
printValue(ellie, 'name');


// 3. Property value shorthand
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age){
    return {
        name,
        age,
    };
}

// 4. Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie){
    console.log(key);
}

// for (value of iterable) : 배열같이 순차적으로 접근
const array = [1, 2, 3, 4];
for(let i =0 ; i< array.length; i++){
    console.log(array[i]);
}
for(value of array){
    console.log(value);
}


// 7. Fun cloning
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name - 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);


// Object.assign(dest, [obj1, obj2, obj3...])
const user4 = {};
Object.assign(user4, user);
//const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'red', size: 'big'};
const mixed = Object.assign({}. fruit1, fruit2); // 겹치는 속성이 있다면 뒤 객체가 계속 덮어쓰기 함
console.log(mixed.color);
console.log(mixed.size);
