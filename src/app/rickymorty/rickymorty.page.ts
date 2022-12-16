import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-rickymorty',
  templateUrl: './rickymorty.page.html',
  styleUrls: ['./rickymorty.page.scss'],
})
export class RickymortyPage implements OnInit {

  data: any;

  constructor(private oferta:OfertasService ) { }

  ngOnInit() {
    this.getIndicadores();
    
    }

    getIndicadores(){
      this.oferta.getIndicadores().then(respuesta => {
        this.data = respuesta;
        console.log(this.data);
      },
      (err) => {
        console.error(err)
      }
      )
    }

  

 }
