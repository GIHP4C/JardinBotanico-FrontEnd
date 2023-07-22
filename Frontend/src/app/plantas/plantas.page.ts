import { Camera } from '@capacitor/camera';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamaraService } from '../servicio/camara.service';
import { log } from 'console';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
})
export class PlantasPage implements OnInit {

  lista: any[] = [];
  
  constructor(private servicio:CamaraService){
    
   }
  
  ngOnInit() {
    this.lista = this.servicio.ObtenerPlanta();
    
  }
 
  eliminar(index:any){
    let ind  = this.lista.indexOf(this.lista[index]);

   console.log(ind)
   if (ind > -1){
    this.lista.splice(ind, 1);
   }
   localStorage.setItem("lista",JSON.stringify(this.lista));
 }

}