import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }
  
  getNumeroClientes():number{
    return this.clientesService.getNumeroClientes();
  }
}
