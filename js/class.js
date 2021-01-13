'user strict';
// class: template
// object: instance of a class

// 1. Claas declarations
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log('%this.name}: hello!');
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setter
class User {
    cosntructor(firstName, lastNAme, age) {
        this.firstName = firstName;
        this.lastNAme = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, pivate)
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicFeild);
console.log(experiment.privateField);


// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
//console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher;


// 5. Inheritance
// a way for one class to exten another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`); 
    }

    getArea(){
        return this.width * this.height;
    }

    toString() {
        return `Triangle: color: &{this.color}`
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log('🔼');
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Calss checing: instanceOf
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(rectangle instanceof Object); //t
console.log(triangle.toString());
