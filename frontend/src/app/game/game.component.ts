import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private botPlay;
  private result;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  chooseHand() {
    // TODO: chain calls (change number on api call)
    this.apiService.playBot().subscribe(response => {
      this.botPlay = response;
    })
    this.apiService.chooseHand('bot', 1).subscribe(response => {
      this.result = response;
    })
  }

}
