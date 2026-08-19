import { Router } from "express";

const V1Router = Router()

V1Router.get("/", (req, res) => {
  console.log("Hello World")
  res.send("Hello World")
})

export { V1Router }
