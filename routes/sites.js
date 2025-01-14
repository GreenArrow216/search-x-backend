const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM sites;");
    res.json(rows); 
  } catch (err) {
    console.error("Error while querying the database:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
