import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

const url = 'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';

@Component({
  selector: 'app-forma',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})

export class Forma implements OnInit {
  Group:any = FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.createForm(new this.Group());
    this.Group.controls.proof.patchValue(this.Group);
  }
  createForm(cliente: Cliente) {
    this.Group = this.formBuilder.group({
      subject_matter: new FormControl([cliente.subject_matter], Validators.minLength(2)),
      comment: new FormControl([cliente.subject_matter], Validators.minLength(2)),
      contact: {
        name: new FormControl([Cliente.contact.name], Validators.minLength(2)),
        tel: new FormControl([Cliente.contact.tel], Validators.minLength(2)),
        email: new FormControl([Cliente.contact.email], Validators.minLength(2))
      }
    })
  }
  onSubmit() {
    this.http.post(url, this.Group, { headers }).subscribe((response) => {
      console.log("Email: " + response);
    });
    this.Group.reset(new Cliente());
  }
}