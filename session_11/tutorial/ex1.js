class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Call parent constructor
  }

  speak() {
    return `${super.speak()} ${this.name} barks!`;
  }
}
const dog = new Dog("Rex");
console.log(dog.speak()); // Rex makes a noise. Rex barks!

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  static info() {
    return "i am an animal class";
  }
  speak() {
    return `${super.speak()} ${this.name} meow!`;
  }
}

const cat = new Cat("cat");
console.log(cat.speak());
console.log(Cat.info());