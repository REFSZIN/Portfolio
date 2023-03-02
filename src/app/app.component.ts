import { ChangeDetectionStrategy, Component, HostListener , OnInit, ViewEncapsulation } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit{
  
  slides: any[] = new Array(10).fill({id: -1, src: '', title: '', subtitle: '',deploy: '', repository:''});
  innerWidth = 1024;
  title = 'Portfolio';
  isShow = false;
  topPosToStartShowing = 200;
  Showing= 1694;
  noShowing= 4024;
  Inverted = false;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.slides[0] = {
      id: 0,
      src: './assets/images/buzz.png',
      title: 'BuzzQuizz 🧩',
      subtitle: 'Nesse sistema,temos a experiência do Quiz em si, quanto as telas que permitem criar quizzes!',
      repository: 'https://github.com/REFSZIN/Projeto_06_BuzzQuizz',
      deploy: 'https://projeto-06-buzz-quizz-smoky.vercel.app/'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/images/parrot.png',
      title: 'Parrot 🦜',
      subtitle: 'Jogo da memória temático, efeitos e transição alem de papagaios dançantes!',
      repository: 'https://github.com/REFSZIN/Projeto_04_parrotsCardGame',
      deploy: 'https://projeto-04-parrots-card-game-chi.vercel.app'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/images/zaprecall.png',
      title: '⚡Zap Recall⚡',
      subtitle: 'Implementação de flashcards sobre programação.',
      repository: 'https://github.com/REFSZIN/projeto8zaprecall',
      deploy: 'https://zaprecallrefszin.vercel.app/'
    }
    this.slides[3] = {
      id: 3,
      src: './assets/images/eats.png',
      title: 'Driveneats 🥞',
      subtitle: 'Selecione sua refeição  e assim sera enviando o pedido por WhatsApp diretamente para o restaurante.',
      repository: 'https://github.com/REFSZIN/projeto3-driveneats',
      deploy: 'https://projeto3-driveneats-theta.vercel.app/'
    }
    this.slides[4] = {
      id: 4,
      src: './assets/images/instagram.png',
      title: 'Instagram 💗',
      subtitle: 'Aplicação completa da Home do Instagram! E bibliotecas 🙂',
      repository: 'https://github.com/REFSZIN/projeto_07instagramreact',
      deploy: 'https://instagramreactrefszin.vercel.app'
    }
    this.slides[5] = {
      id: 5,
      src: './assets/images/cineflex.png',
      title: '🎬 Cineflex 🎬',
      subtitle: 'SPA para Cinema 🎬 , usando API, Styled Components and React Router!',
      repository: 'https://github.com/REFSZIN/projeto__calvs-drivent__p1',
      deploy: 'https://projeto9cineflex.vercel.app'
    }
    this.slides[6] = {
      id: 6,
      src: './assets/images/trackit.png',
      title: 'TrackIt📈',
      subtitle: 'Aplicação completa de acompanhamento de hábitos! Com direito a cadastro, login e muitas bibliotecas 🙂',
      repository: 'https://github.com/REFSZIN/projeto10trackit',
      deploy: 'https://projeto10trackit.vercel.app'
    }
    this.slides[7] = {
      id: 7,
      src: './assets/images/boleria.png',
      title: 'La Boleria🍰',
      subtitle: 'Back-end e o banco de dados(SQL) de um gerenciador de pedidos para uma loja de bolos.',
      repository: 'https://github.com/REFSZIN/projeto-laboleria',
      deploy: 'https://github.com/REFSZIN/projeto-laboleria'
    }
    this.slides[8] = {
      id: 8,
      src: './assets/images/short.png',
      title: 'Shortly ⛓️',
      subtitle: 'Encurtador de URLs Links que cabem no bolso!',
      repository: 'https://github.com/REFSZIN/projeto16-shortly-front',
      deploy: 'https://projeto16-shortly-front-one.vercel.app'
    }
    this.slides[9] = {
      id: 9,
      src: './assets/images/tweteoo.png',
      title: 'Tweteroo 🌱',
      subtitle: 'Projeto back-end construção da JAVA Spring Boot API do Tweteroo',
      repository: 'https://github.com/REFSZIN/tweteroo-api-java',
      deploy: 'https://github.com/REFSZIN/tweteroo-api-java'
    }
    this.slides[10] = {
      id: 10,
      src: './assets/images/driven.png',
      title: 'Drivent',
      subtitle: 'NodeJs,Typescript, Jest para testes de integração, Prisma ORM para consultas ao banco de dados Usamos também o SCRUM.',
      repository: 'https://github.com/REFSZIN/projeto__calvs-drivent__p1',
      deploy: 'https://github.com/REFSZIN/projeto__calvs-drivent__p1'
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
    if (scrollPosition >= this.Showing && scrollPosition < this.noShowing ) {
      this.Inverted = true;
    } else {
      this.Inverted = false;
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
  constructor(private router: Router){
  }
  goToPage(form:string){
    this.router.navigate([`${form}`]);
  }
  ngAfterViewInit(){
    
  }
}