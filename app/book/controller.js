import Book from "./model.js";

const SEED_DATA = [
  {
    title: "Make It Stick: The Science of Successful Learning",
    author: "Peter Brown",
    isbn: "978-0674729018",
    pages: 336,
    edition: 1,
    isPaperback: false,
  },
  {
    title:
      "Essential Scrum: A Practical Guide to the Most Popular Agile Process",
    author: "Kenneth Rubin",
    isbn: "978-0137043293",
    pages: 500,
    edition: 1,
    isPaperback: true,
  },
  {
    title:
      "White Fragility: Why It's So Hard for White People to Talk About Racism",
    author: "Robin DiAngelo",
    isbn: "978-0807047415",
    pages: 192,
    edition: 2,
    isPaperback: true,
  },
  {
    title: "The Pragmatic Programmer: Your Journey To Mastery",
    author: "David Thomas",
    isbn: "978-0135957059",
    pages: 352,
    edition: 2,
    isPaperback: false,
  },
  {
    title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms",
    author: "Donald Knuth",
    isbn: "978-0201896831",
    pages: 672,
    edition: 3,
    isPaperback: false,
  },
  {
    title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
    author: "Safiya Umoja Noble",
    isbn: "978-1479837243",
    pages: 256,
    edition: 1,
    isPaperback: true,
  },
];

export default {
  seed() {
    return Book.bulkCreate(SEED_DATA);
  },

  index() {
    return Book.findAll();
  },

  show(isbn) {
    return Book.findOne({ where: { isbn } });
  },

  update(isbn, payload) {
    return Book.update(payload, { where: { isbn } });
  },

  delete(isbn) {
    return Book.destroy({ where: { isbn } });
  },
};
