import { Router } from "express";
const v1Router = Router();

v1Router.use("/v1", (req, res, next) => {
  next();
})

export { v1Router };
