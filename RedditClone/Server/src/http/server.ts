import express from "express"
import type { Express } from "express"
import { V1Router } from "./v1/router.js";

export function createServer() {
  const app = express()
  app.use(express.json())
  registerRoutes(app)
  return app
}

export function listen(app: Express) {
  app.listen(1570, () => {
    console.log(`Server is running on port ${1570}`)
  })
}

export function registerRoutes(app: Express) {
  app.use("api/v1", V1Router)
}
