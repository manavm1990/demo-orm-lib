import Book from "./model.js";

export default {
  index() {
    return Book.findAll();
  },
};
