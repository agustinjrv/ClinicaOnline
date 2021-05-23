import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //public titulo:string='PACIENTES';
  public titulo:string='ESPECIALISTAS';

  public condicion=true;
  
  constructor() { 
    
  }

  ngOnInit(): void {

    
  }



}
