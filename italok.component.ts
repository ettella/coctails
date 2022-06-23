import { Component, Input, Output, EventEmitter, ɵɵqueryRefresh } from '@angular/core';

@Component({
  selector: 'app-italok',
  templateUrl: './italok.component.html',
  styleUrls: ['./italok.component.scss']
})
export class ItalokComponent {

  @Input() coctails: string[] = [];
  @Output() EE = new EventEmitter<any>();

  @Input() k: any;
  //@Output() ktorol: EventEmitter<any> = new EventEmitter();

  aktivGomb: boolean = true;
  koktelNev: string = "";
  //$index: string = "";


  Hozzaadas(koktelok: string){
    this.EE.emit(koktelok)
   // return this.koktelNev
  }

  //ktorol() {
    //this.ktorol.emit();
  //}

  //TorolKoktel(koktelok: string) {
    //const index: number = this.coctails.indexOf(koktelok);
    //if ( index !== -1) {
     // this.coctails.splice(index,1);
    //}
 // }

 ktorol(k: string) {
   this.coctails = this.coctails.filter( i => i != k );
   
 }
}


