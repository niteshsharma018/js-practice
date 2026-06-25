// class ComplexNumber {
//     constructor(real, imaginary){
//         this.real = real;
//         this.imaginary = imaginary;

//     }

//     add(secondCompplexNumber)
// {
//     let real = this.real + secondCompplexNumber.real;
//     let imaginary = this.imaginary + secondCompplexNumber.imaginary;

//     return new ComplexNumber(real, imaginary);
// }

// }

// // let c = new ComplexNumber(3,4);
// // console.log(c);

// let c1 = new ComplexNumber(2,4);
// let c2 = new ComplexNumber(5,6);

// let result = c1.add(c2);
// console.log(`${result.real} + ${result.imaginary}i`);


// // let result = c1.add(c2);



// // c.real();
// // c.imaginary();


// ttask 3

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hey,  I am ${this.name}`);
    }
}

class Student extends Human{
    constructor(naem, age, course){
       super(name , age)
       this.course = course;

    }
    introduce(){
        super.introduce();
        console.log(`I study ${this.course}`);
    }
}


let nage = new Human("Nitesh",19);
console.log(nage);

let stu = new Student("Nitesh",19,"B.tech(CSE)");
console.log(stu);
stu.introduce();

console.log(Human instanceof Student);
console.log(Human instanceof Human);

console.log(stu instanceof Student);
console.log(stu instanceof Human);


