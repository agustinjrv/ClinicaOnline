import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-usuario',
  templateUrl: './generar-usuario.component.html',
  styleUrls: ['./generar-usuario.component.css']
})
export class GenerarUsuarioComponent implements OnInit {

  public titulo:string='PACIENTES';

  constructor() { }

  ngOnInit(): void {
  }

}
