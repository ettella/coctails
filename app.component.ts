import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Koktélok';
  koktelok = ['Mojito', 'Cuba Libre', 'Tequila Sunrise'];

  kpush(k:string) {
    this.koktelok.push(k)
  }

  constructor()
{
  this.koktelok = ['Mojito', 'Cuba Libre', 'Tequila Sunrise'];
}  

/*onkTorol(k: any) {
  var index = this.koktelok.findIndex((kok) => (kok===k));
  if (index != -1) {
    this.koktelok.splice(index,1);
  }
}*/

//ktorol(c:string){
    //this.koktelok.splice(c, 1)
  //}
}


