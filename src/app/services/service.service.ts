import { Injectable } from '@angular/core';
import { Cliente } from '../components/clientes/shared/cliente';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private cliente: Cliente = new Cliente;
  constructor() { }
  
  setCliente(cliente: Cliente) {
  this.cliente = cliente;
  }
  
  getCliente() {
  return this.cliente;
  }
}