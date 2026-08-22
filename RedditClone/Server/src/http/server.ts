import express, { type Router, type Express } from "express"

export class Server {
  public app: Express;

  constructor() {
    this.app = express();
    return this;
  }

  startServer() {
    this.app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
    return this;
  }

  registerHealthCheckRoute() {
    // to check is server is properly responding
    this.app.get("/", (req, res) => {
      res.redirect("/health");
    });
    this.app.use("/health", (req, res) => {
      res.status(200).send("OK");
    });
    return this;
  }

  createGlobalPrefix(prefix: string) {
    // middleware
    this.app.use(`/${prefix}`, (req, res, next) => {
      console.log(
        `Global prefix ${prefix} applied to request: ${req.method} ${req.url}`,
      );
      next();
    });
    return this;
  }

  registerRoutes(prefix: string, router: Router) {
    this.app.use(`/api/${prefix}`, router);
    return this ;
  }

  registerModuleRouter(baseRouter: Router, moduleRouter: Router) {
    this.app.use(baseRouter, moduleRouter);
    return this;
  }

}
