import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.INTEGER,
    },
    edition: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance

    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,

    // Capitalize the model name as shown in the docs.
    modelName: "Book",

    underscored: true,
  }
);

await Book.sync().catch((err) => {
  console.error("Error syncing the database: ", err.message);
  process.exit(1);
});

export default Book;
