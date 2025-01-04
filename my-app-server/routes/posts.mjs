// Load the /posts routes
import db from "../db/conn.mjs";
import express from "express";
// const express = require("express");
const app = express();

const posts = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// app.use("/posts", posts);

// Get a list of 50 posts
app.get("/", async (req, res) => {
  let collection = await db.collection("movies");
  let results = await collection.find({}).limit(50).toArray();
  console.log("resuuuu", results);
  res.send(results).status(200);
});
