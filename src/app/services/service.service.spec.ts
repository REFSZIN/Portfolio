import { TestBed } from '@angular/core/testing';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ServiceService } from './service.service';
import { Forma } from '../components/clientes/formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule,MatIconModule,MatGridListModule,MatToolbarModule,MatSlideToggleModule,MatCardModule,MatButtonModule,HttpClientModule,HttpClientTestingModule],
      declarations: [ Forma ]
    })
    .compileComponents();
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
