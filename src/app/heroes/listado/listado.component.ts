import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

 heroes : string[]=['Spiderman','Capitán América','Ironman','Thor','Hulk'];
 heroeBorrado: string='';
 BorrarHeroe():void{
   console.log('Borrando...');
   this.heroeBorrado=this.heroes.splice(1,1)[0];
 }
  
}
