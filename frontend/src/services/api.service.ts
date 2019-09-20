import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export enum GameOver {
  tie = "Tie",
  winner = "Winner",
  loser = "Loser",
}

export interface PlayResponse {
  result: GameOver;
}

export enum Hand {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

export interface BotResponse {
  result: Hand;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  playBot(): Observable<BotResponse> {
    return this.http
      .get<BotResponse>(`/api/bot`);
  }

  play(bot: Hand, player: Hand): Observable<PlayResponse> {
    return this.http
      .get<PlayResponse>(`/api/play/?player=${player}&bot=${bot}`);
  }
}