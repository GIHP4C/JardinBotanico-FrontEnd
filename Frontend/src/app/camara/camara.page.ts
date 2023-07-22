import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CamaraService } from '../servicio/camara.service';
import { ToastController } from '@ionic/angular';
import { Predecir } from '../model/predecir';
import { Enviar } from '../model/enviar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})

export class CamaraPage {

  lugarimg: any;
  predecir: Predecir = new Predecir;
  enviar: Enviar= new Enviar;
  constructor(private servicio: CamaraService, public toastController:ToastController) {}

  ngOnInit(): void {
    
    this.predecir = new Predecir();
  
    (async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    
    this.lugarimg = image.dataUrl ;
    let enviar={'imagen':this.lugarimg}
    this.enviar.imagen = image.dataUrl || "";
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        
      }
    })
    Toast.fire({
      imageUrl: '../../assets/icon/loader.gif',
      title: 'Prediciendo...',
      color: 'darkslategrey',
      background: '#EBEDEF',
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'GIF'
    });
    
    this.servicio.ObtnerPredic(this.enviar)
      .then(data => {
        this.predecir = data;
        Swal.close()
    }).catch(error => {
      this.presentToast()
    });
  })();
}

async presentToast(){
    const toast = await this.toastController.create({
      message:'Ups, SERVER ERROR',
      duration : 2500,
      position:"middle"
    });
    toast.present()
  }

}   
