import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as errorHandler from "errorhandler";
import * as express from "express";
import expressValidator = require("express-validator");
import * as path from "path";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env.example" });

/**
 * Routes
 */
import apiRouter from "./api/routes";

class App {

  // ref to Express instance
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.launchConf();

  }
  private middleware(): void {
    this.express.set("port", process.env.PORT || 3000);
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(expressValidator());
    this.express.use(express.static(`${__dirname}/dist/frontend`));
  }
  /**
   * Primary app routes.
   */
  private routes(): void {
    this.express.use("/api", apiRouter);
    // All other routes will be resolved by the angular routing module
    this.express.get("*", (req, res) => res.sendFile(path.join(__dirname, "/frontend", "index.html")));
  }

  private launchConf() {
    this.express.use(errorHandler());

    /**
     * Start Express server.
     */
    this.express.listen(this.express.get("port"), () => {
      // tslint:disable-next-line:no-console
      console.log(("  App is running at http://localhost:%d \
      in %s mode"), this.express.get("port"), this.express.get("env"));
      // tslint:disable-next-line:no-console
      console.log("  Press CTRL-C to stop\n");
    });
  }
}

export default new App().express;
