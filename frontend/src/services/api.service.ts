import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  playBot() {
    return this.http
      .get(`/api/bot`);
  }

  chooseHand(bot, player) {
    return this.http
    .get(`/api/pick/${player}`);
  }
}