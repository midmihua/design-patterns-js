class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = test;
    this.modified = true;
  }

  // Incorrect implementation

  // toHTML() {
  //   return `
  //     <div>
  //       <h3>${this.title}</h3>
  //       <p>${this.text}</p>
  //     </div>
  //   `;
  // }

  // toJSON() {
  //   return JSON.stringify({
  //     title: this.title,
  //     text: this.text,
  //     modified: this.modified
  //   }, null, 2);
  // }
}

// Correct implementation

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  toHTML() {
    return `
      <div>
        <h3>${this.news.title}</h3>
        <p>${this.news.text}</p>
      </div>
    `;
  }

  toJSON() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null, 2);
  }

  toXML() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
        <modified>${this.news.modified}</modified>
      </news>
    `;
  }

}


const printer = new NewsPrinter(new News('New BMW', 'New car model was introduced'));

console.log(printer.toHTML());
console.log(printer.toJSON());
console.log(printer.toXML());