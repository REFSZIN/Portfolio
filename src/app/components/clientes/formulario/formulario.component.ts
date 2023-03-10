import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
// ...
@Injectable()
@Component({
  selector: 'app-forma',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class Forma implements OnInit {
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  myGroup: FormGroup;
  
  ngOnInit() {
    this.createForm(new Cliente());
  }
  
  createForm(cliente: Cliente) {
    this.myGroup = this.fb.group({
      subject_matter: new FormControl(cliente.subject_matter),
      comment: new FormControl(cliente.comment),
      contact: this.fb.group({
        name: new FormControl(cliente.contact.name),
        tel: new FormControl(cliente.contact.tel),
        email: new FormControl(cliente.contact.email)
      })
    });
  }
  onSubmit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const url = 'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';
    console.log(url, this.myGroup.value, headers)
    try {
      this.postData().subscribe((response) => {
        console.log("Email: " + response);
      }, (error) => {
        console.error("Erro ao enviar e-mail: ", error);
      });
    } catch (error) {
      console.error("Erro ao enviar e-mail: ", error);
    }
    this.myGroup.reset(new Cliente());
  }
  
  postData() {
    const url = 'http://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post<any>(url, this.myGroup.value, { headers });
  }
}