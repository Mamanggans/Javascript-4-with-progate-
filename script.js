// 1 object 

const animal  = {
  name : "Leo", age : 3,greet : () => {
    console.log("Halo");
  }
}
console.log(animal.name);
animal.greet();

// 2 class simple 
class Animal {

}

// 3 new instance (blueprint baru)

class Animal {
}

const animal = new Animal();

console.log(animal);

// 4 construktor 

class Animal {
  constructor (){
    console.log("Membuat instance baru");
  }
}
const animal = new Animal();

class suhu {
  constructor (x){
    if(x > 100){
      console.log('Mendidih');
    }else if(x <= 0){
      console.log('Membeku');{}
    }else{
      console.log('Cair');
    }
  }
  
}
const suhu = new suhu(10);

const animal = new Animal();

// 5 menambahkan property dan nilai dalam constroktor 

class Animal {
  constructor() {
  this.name= "Leo";
  this.age= 3;
  }
}

const animal = new Animal();
console.log(`Nama:${animal.name}`);
console.log(`Usia:${animal.age}`);

// 6 argument di dalam construktor 

class Animal {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}

const animal = new Animal("mocha",8);

console.log(`Nama: ${animal.name}`);
console.log(`Usia: ${animal.age}`);

// 7 method sederhana 
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log("Halo");
  }
}

const animal = new Animal("Leo", 3);

console.log(`Nama: ${animal.name}`);
console.log(`Usia: ${animal.age}`);

animal.greet();

// 8 nilai di dalam method 
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  info(){ //method 
    console.log(`Nama saya adalah ${this.name}`); // nilai 
    console.log(`Saya berusia ${this.age} tahun`);
  }
  
}
const animal = new Animal("Leo", 3);
animal.greet();
animal.info();

// 9 method di dalam method 

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Halo"); // METHOD 1 
  }
  info() {  
    this.greet(); // MENGGUNAKAN METHOD DI DALAM METHOD 
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berumur ${this.age} tahun`);
  }
}

const animal = new Animal("Leo", 3);

animal.info();

// 10 inheritance 

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berumur ${this.age} tahun`);
  }
}

class Dog extends Animal{

} // dog inheritance dari animal 



const animal = new Animal("Leo", 3);
animal.info();

// 11 menggunakan inheritance class 
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

class Dog extends Animal {
}
const dog = new Dog("Leo",4); // instance class dog untuk dimasukin ke dog


dog.info(); // memanggil method info dari constant dog

// 12 menambahkan method 
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

class Dog extends Animal {
  // Tambahkan method getHumanAge
  getHumanAge(){
    return this.age *7;
  }// method tambahan dari atas jd ini yg ketiga dr method info 
  
}

const dog = new Dog("Leo", 4);
dog.info();


const humanAge = dog.getHumanAge(); // memanggil gethumanage milik instance dog
console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`) // mengeprint 「Saya berusia __ tahun dalam umur manusia」

//13 overriding 

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

class Dog extends Animal {
  info(){
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
    
    const humanAge = this.getHumanAge();
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }
  
  
  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("Leo", 4);
dog.info();

// 14 OVERRIDING an constroktor 
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

class Dog extends Animal {
  // Tambahkan constructor
    constructor(name,age,breed){
    super(name,age); // ini ngambil dari parent nya si (animal yang diatas)
    this.breed = breed; 
    }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    // Print 「Saya adalah seekor ____」
    console.log(`Saya adalah seekor ${this.breed}`);
    
    console.log(`Saya berusia ${this.age} tahun`);
    const humanAge = this.getHumanAge();
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

// Tetapkan "Chihuahua" sebagai nilai argument
const dog = new Dog("Leo", 4,"Chihuahua"); // masukin data ke name age dan breed 
dog.info();
