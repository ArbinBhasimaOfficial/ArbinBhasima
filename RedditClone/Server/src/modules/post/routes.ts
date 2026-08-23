import { Router } from "express";
import { postIndexHandler, postRetrieveHandler, postCreateHandler, postUpdateHandler, postDeleteHandler } from "./controller.js";
import { postCreateSchema } from "./schemas/create.schema.js";
import { postUpdateSchema } from "./schemas/update.schema.js";
import { validate } from "../../middleware/validation.middleware.js";

export const postRouter = Router()
  .get("/", postIndexHandler)
  .get("/:id", postRetrieveHandler)
  .post("/", validate(postCreateSchema), postCreateHandler)
  .patch("/:id", validate(postUpdateSchema), postUpdateHandler)
  .delete("/:id", postDeleteHandler);
