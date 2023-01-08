# Demo ORM

## Getting Started

`npm i express`
`npm i mysql2`
`npm i sequelize`
`npm i dotenv`

Add to `"scripts"`: `"start": "node --watch app/index.js". Unfortunately, you can get rid of`"test"` ✅ 🔥.

### Create a .env file

Include: `DB_USER`, `DB_PASSWORD`, `DB_NAME` (e.g. `library_db`)

### Create `app/config.js`

We only allow access to **environment variables** in this file. It has 1️⃣ job, like most good modules and only focuses on that job.

```js
import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};
```

---

Start looking at [the Sequelize Docs](https://sequelize.org/docs/v6/getting-started/). [Connect to our database](https://sequelize.org/docs/v6/getting-started/) using **Option 3** shown. Do this from `app/index.js`.

---

## Modularize the Connection

Create a file, `app/conn.js`. This is what will be responsible for creating the connection via `config.js` and `sequelize`. It will export this out for use in other files.

!['conn.js' exports out the sequelize connection using a default export](./arch.png)

## Create a `book` Model

We will [extend Model](https://sequelize.org/docs/v6/core-concepts/model-basics/#extending-model)

Next week, we learn about traditional MVC architecture 🏗️. For now, let's use something arguably better, architecture 🏗️ by feature. We will create a `book` folder in `app` and create a `model.js` file. This will be responsible for creating the `Book` model.

We will need to [synchronize the model](https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization) with the database.

## Express Routes

### Getting Started/Review Express

Clear out the contents of `app/index.js`. Get express going. Be sure to set up `json` parsing. Look 👀 back 🔙 at the [Express Docs](https://expressjs.com/en/starter/hello-world.html) if you need to and/or our [previous demo](https://github.com/manavm1990/11-express/blob/main/app/index.js).

In the `book` folder 📁, create a `routes.js` file. This will be responsible for creating the routes for the `Book` model. We will use the [Express Router](https://expressjs.com/en/guide/routing.html#express-router) to do this.

For now, just set up a single route, `GET /api/books`. Just make this say, "Hello 📚". Use Insomnia to check that this works.

You will click in the top right to create a new _Request Collection._

!['Create a new Request Collection'](./insomnia.png)

### `POST /api/books`

Create a route that will `POST` a new book. This will be responsible for creating a new book in the database. Use Insomnia to check that this works. For now, just echo back the **request body**.

![POST /api/books](./post.png)

### Seed 🌱 the Database

Create another `POST` route, `/api/books/seed`. This should seed the following 📚 into the database using [`Model.bulkCreate()`](https://sequelize.org/docs/v6/other-topics/upgrade/#modelbulkcreate).

```js
[
  {
    title: "Make It Stick: The Science of Successful Learning",
    author: "Peter Brown",
    isbn: "978-0674729018",
    pages: 336,
    edition: 1,
    is_paperback: false,
  },
  {
    title:
      "Essential Scrum: A Practical Guide to the Most Popular Agile Process",
    author: "Kenneth Rubin",
    isbn: "978-0137043293",
    pages: 500,
    edition: 1,
    is_paperback: true,
  },
  {
    title:
      "White Fragility: Why It's So Hard for White People to Talk About Racism",
    author: "Robin DiAngelo",
    isbn: "978-0807047415",
    pages: 192,
    edition: 2,
    is_paperback: true,
  },
  {
    title: "The Pragmatic Programmer: Your Journey To Mastery",
    author: "David Thomas",
    isbn: "978-0135957059",
    pages: 352,
    edition: 2,
    is_paperback: false,
  },
  {
    title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms",
    author: "Donald Knuth",
    isbn: "978-0201896831",
    pages: 672,
    edition: 3,
    is_paperback: false,
  },
  {
    title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
    author: "Safiya Umoja Noble",
    isbn: "978-1479837243",
    pages: 256,
    edition: 1,
    is_paperback: true,
  },
];
```

### Refactor ♻️ to use a Controller

Create a new file inside of `app/book`, `controller.js`. It is the gatekeeper 🉐 to the database.

`DROP` and `CREATE` the database. Run the `seed` route. Check that the data is in the database. the only difference is that we are using the `controller` now, which uses the `Book` model from Sequelize 🤓.

---

Onward with the routes!
