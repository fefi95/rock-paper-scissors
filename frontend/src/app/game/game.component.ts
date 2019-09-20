import { Component, OnInit } from '@angular/core';
import { ApiService, Hand, GameOver } from 'src/services/api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  botPlay: Hand;
  playerSelected: string;
  gameOver: GameOver;
  playerScore = 0;
  botScore = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  chooseHand(play: string) {
    // throw('Unexpected error!!!');
    this.playerSelected = play;
    this.apiService.playBot().subscribe(bot => {
      this.botPlay = bot.result;
      this.apiService.play(this.botPlay, Hand[play]).subscribe(response => {
        this.gameOver = response.result;

        if (this.gameOver !== GameOver.loser) {
          this.playerScore = 1 + this.playerScore;
        }
        if (this.gameOver !== GameOver.winner) {
          this.botScore = this.botScore + 1;
        }
      });
    });
  }

}
