import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpClientModule } from '@angular/common/http'
import { map } from "rxjs/operators";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  
  users: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("hola");
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users = res;
    })
  }

  getUsers(){
    return this.http
    .get("assets/files/productos.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }

}
