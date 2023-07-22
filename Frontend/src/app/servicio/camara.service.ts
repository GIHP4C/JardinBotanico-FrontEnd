import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { promises } from 'dns';


@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  private lista: any[] = [];

  getData() {
    throw new Error('Method not implemented.');
  }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

ObtnerPredic(img:any):Promise<any>{
  return this.http.post(environment.url_server+"predict",img,{headers:this.httpHeaders}).toPromise()
}

 ObtnerDetalle(nombre : any):Observable<any>{
  return this.http.get(environment.url_server+"detalle/"+nombre)
 }

 GuardarPlanta(planta: any): void {
  this.lista.push(planta);
  localStorage.setItem('lista', JSON.stringify(this.lista));
}
 ObtenerPlanta(): any[] {
  const tokenString = localStorage.getItem("lista");
  if (typeof tokenString === "string") {
    this.lista = JSON.parse(tokenString);
  }
  return this.lista
}

}
