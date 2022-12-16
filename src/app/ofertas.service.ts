import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  urlEndpoint: string = 'http://127.0.0.1:8000/api/productos/';

  constructor(private httpCliente: HttpClient)  {}

  getIndicadores():Promise<any>{
    return new Promise((resolve,reject) => {
    this.httpCliente.get(this.urlEndpoint).subscribe(respuesta => {
      resolve(respuesta);
    },
    (err) => {
      reject(err)
    }
    )
    })
  }
}
