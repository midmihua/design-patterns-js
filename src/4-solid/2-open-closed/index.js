class Shape {
  area() {
    throw new Error('Area method should be implemented')
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius
  }

  area() {
    return Math.PI * (this.radius ** 2);
  }
}

class Rect extends Shape {
  constructor(h, w) {
    super();
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }
}

class AreaCalc {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => acc += shape.area(), 0);
  }
}

const toCalc = new AreaCalc([
  new Square(3),
  new Circle(2),
  new Rect(3, 4)
]);

console.log(toCalc.sum());