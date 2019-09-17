import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private botPlay;
  private gameOver;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  chooseHand(play) {
    // throw("soy un error");
   
    this.apiService.playBot().subscribe(bot => {
      this.botPlay = bot;
      this.apiService.chooseHand(this.botPlay, play).subscribe(response => {
        this.gameOver = response;
      })
    });
  }

}
