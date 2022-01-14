// 1. Incorrect

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log(`${this.name} can walk`);
//   }

//   fly() {
//     console.log(`${this.name} can fly`);
//   }

//   swim() {
//     console.log(`${this.name} can swim`);
//   }
// }

// class Dog extends Animal {

//   fly() {
//     return null;
//   }
// }

// class Eagle extends Animal {

//   swim() {
//     return null;
//   }
// }

// class Whale extends Animal {

//   walk() {
//     return null
//   }

//   fly() {
//     return null
//   }
// }

// const dog = new Dog('Rex');
// const eagle = new Eagle('Tommy');
// const whale = new Whale('Blue man');

// dog.walk();
// dog.swim();
// eagle.fly();
// eagle.walk();
// whale.swim();

// 2. Correct

class Animal {
  constructor(name) {
    this.name = name
  }
}

class Dog extends Animal { }
class Eagle extends Animal { }
class Whale extends Animal { }

const walker = {
  walk() {
    console.log(`${this.name} can walk`);
  }
}

const flier = {
  fly() {
    console.log(`${this.name} can fly`);
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  }
}

Object.assign(Dog.prototype, walker, swimmer);
Object.assign(Eagle.prototype, walker, flier);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Rex');
const eagle = new Eagle('Tommy');
const whale = new Whale('Blue man');

dog.walk();
dog.swim();
eagle.fly();
eagle.walk();
whale.swim();
