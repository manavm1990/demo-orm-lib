import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.post("/seed", (_, res) => {
  controller
    .seed()
    .then(() => {
      res.json({ message: "Seeded books" });
    })
    .catch((err) => {
      // 500: Internal Server Error
      res.status(500).json({ message: err.message });
    });
});

// GET /api/books
router.get("/", (_, res) => {
  controller
    .index()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      // 500: Internal Server Error
      res.status(500).json({ message: err.message });
    });
});

export default router;
