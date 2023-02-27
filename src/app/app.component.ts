import { Component, HostListener , OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: '',deploy: '', repository:''});
  innerWidth = 1024;
  title = 'Portfolio';
  isShow = false;
  topPosToStartShowing = 200;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.slides[0] = {
      id: 0,
      src: './assets/images/driven.png',
      title: 'BACK-END: DRIVENT',
      subtitle: 'NodeJs + Typescript para construir a API, Jest para testes de integração, Prisma ORM para consultas ao banco de dados e ReactJs + StyledComponents para desenhar o frontend. Usamos também o SCRUM como metodologia para gerenciar o projeto',
      repository: 'https://github.com/REFSZIN/projeto__calvs-drivent__p1',
      deploy: ''
    };
    this.slides[1] = {
      id: 1,
      src: './assets/images/driven.png',
      title: 'BACK-END: DRIVENT',
      subtitle: 'NodeJs + Typescript para construir a API, Jest para testes de integração, Prisma ORM para consultas ao banco de dados e ReactJs + StyledComponents para desenhar o frontend. Usamos também o SCRUM como metodologia para gerenciar o projeto',
      repository: 'https://github.com/REFSZIN/projeto__calvs-drivent__p1',
      deploy: ''
    }
    this.slides[2] = {
      id: 2,
      src: './assets/images/driven.png',
      title: 'BACK-END: DRIVENT',
      subtitle: 'NodeJs + Typescript para construir a API, Jest para testes de integração, Prisma ORM para consultas ao banco de dados e ReactJs + StyledComponents para desenhar o frontend. Usamos também o SCRUM como metodologia para gerenciar o projeto',
      repository: 'https://github.com/REFSZIN/projeto__calvs-drivent__p1',
      deploy: ''
    }
  }
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
