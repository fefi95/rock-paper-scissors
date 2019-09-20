import { NextFunction, Request, Response } from "express";
import { botPlay, getGameOver, Hand, handStringToEnum } from "./models/Hand";

export const gameOver = (req: Request, res: Response, next: NextFunction) => {
  try {
    const playerHand: Hand = handStringToEnum[req.query.player];
    const botHand: Hand = handStringToEnum[req.query.bot];
    if (playerHand === undefined || botHand === undefined) {
      throw(Error("Not correct type"));
    }
    res.send({ result: getGameOver(playerHand, botHand) });
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
