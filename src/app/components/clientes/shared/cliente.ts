export class Cliente {
  subject_matter: string = '';
  comment: string = '';
  contact: {
    name: string;
    tel: string;
    email: string;
  } = {
    name: '',
    tel: '',
    email: ''
  };
} 