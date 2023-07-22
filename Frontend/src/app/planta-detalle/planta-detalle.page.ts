import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamaraService } from '../servicio/camara.service';

@Component({
  selector: 'app-planta-detalle',
  templateUrl: './planta-detalle.page.html',
  styleUrls: ['./planta-detalle.page.scss'],
})
export class PlantaDetallePage implements OnInit {

  predecir : any 
  lista : Array<any> = [];

  constructor(private servicio:CamaraService,  private route: ActivatedRoute) { 
    this.predecir = this.route.snapshot.queryParamMap.get('respuesta');
  }
  
  ngOnInit() {
    this.DetalleImg()
  }

  DetalleImg (){
    this.servicio.ObtnerDetalle(this.predecir).subscribe(data=>{
    this.predecir = data
    })
  }

  Guardar(): void{
   this.servicio.GuardarPlanta(this.predecir)
  }

}
