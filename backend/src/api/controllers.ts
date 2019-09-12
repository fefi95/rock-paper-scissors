import { NextFunction, Request, Response } from "express";
import { botPlay, getGameOver } from "./models/Hand";

export const gameOver = (req: Request, res: Response, next: NextFunction) => {
  const pickedHand = Number(req.params.hand);
  try {
    res.send({ result: getGameOver(pickedHand, 0) });
  } catch (e) {
    next(e);
  }
};

export const bot = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ result: botPlay() });
  } catch (e) {
    next(e);
  }
};
