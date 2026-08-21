import { Server } from "./http/server.js";
import { v1Router } from "./http/routes/v1/router.js";

const server = new Server()
server.startServer().createGlobalPrefix("api").registerRoutes("v1", v1Router);
