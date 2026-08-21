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
}
