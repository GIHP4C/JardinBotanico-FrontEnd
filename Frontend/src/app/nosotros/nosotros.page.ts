import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage {
 
  constructor() { }

  slides = [
    {
      img: 'assets/icon/UPS.png',
      titulo:'Universidad Politécnica Salesiana'
  },
    {
      img: '/assets/icon/GrupoInves.png',
      titulo:'Grupo de Investigación'
  },
    {
    img: '/assets/icon/Jardin.png',
    titulo:'Jadín Botánico de Cuenca'
  }
];
}
