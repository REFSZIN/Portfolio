import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { Forma } from './formulario.component';

describe('Form', () => {
  let component: Forma;
  let fixture: ComponentFixture<Forma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule,MatIconModule,MatGridListModule,MatToolbarModule,MatSlideToggleModule,MatCardModule,MatButtonModule, HttpTestingController,HttpClientTestingModule,HttpClientModule],
      declarations: [ Forma ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(Forma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
