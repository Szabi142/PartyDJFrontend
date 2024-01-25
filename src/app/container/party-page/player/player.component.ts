import { Component } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  title:string = "Track title comes here";
  artist:string = "Track artist comes here";

  spotify:boolean = true;
}
