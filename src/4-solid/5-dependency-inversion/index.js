class Database {
  constructor(client) {
    this.client = client
  }

  getData() {
    return this.client.clientGet()
  }
}

class Fetch {
  request() {
    return Promise.resolve(`Data from fetch`)
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request()
  }
}

class LocalStorage {
  get() {
    return `Data from LocalStorage`
  }
}

class LocalStorageClient {
  constructor() {
    this.localStogare = new LocalStorage()
  }

  clientGet() {
    return this.localStogare.get()
  }
}


const db1 = new Database(new FetchClient())
const db2 = new Database(new LocalStorageClient())

console.log(db1.getData());
console.log(db2.getData());
