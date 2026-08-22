import { Server } from "./http/server.js";
import { v1Router } from "./http/routes/v1/router.js";
import { createPostRouter } from "./http/modules/post/routes.js";

const server = new Server()
server
  .startServer()
  .registerHealthCheckRoute()
  .createGlobalPrefix("api")
  .registerRoutes("v1", v1Router)
  .registerModuleRouter(v1Router, createPostRouter(v1Router))
