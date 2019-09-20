import { Router } from "express";
import { bot, gameOver } from "./controllers";

class Api {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init() {
    this.router.get("/play", gameOver);
    this.router.get("/bot", bot);
  }
}

const apiRoutes = new Api();
export default apiRoutes.router;
