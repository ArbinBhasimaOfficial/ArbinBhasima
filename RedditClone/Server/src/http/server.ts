import express, { type Router, type Express, type Request, type Response, type NextFunction } from "express"
import { postRouter } from "../modules/post/routes.js";
import { ErrorHandler } from "./error/handler.js";
import { sendResponse } from "./response/index.js";

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

  registerRequireMiddleware() {
    this.app.use(express.json());
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

  registerModuleRouter(version: string, prefix: string, router: Router) {
    this.app.use(`/api/${version}/${prefix}`, router);
    return this;
  }

  registerRequestErrorHandler() {
    this.app.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        const handledError = new ErrorHandler(err);
        const responsePayload = handledError.handle();
        return sendResponse({
          res,
          ...responsePayload,
        });
      },
    );
    return this;
  }
}
