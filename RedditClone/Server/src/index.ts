import { Server } from "./http/server.js";
import { postRouter } from "./modules/post/routes.js";


const server = new Server()
server
  .startServer()
  .registerRequireMiddleware()
  .registerHealthCheckRoute()
  .registerModuleRouter("v1", "post", postRouter)
  .registerRequestErrorHandler()
