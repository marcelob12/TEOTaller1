import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  imports: [CommonModule]
})
export class QuestionListComponent {
  questions = [
    {
      title: '¿Qué paradigmas soporta JavaScript?',
      description: 'Js es un lenguaje Multiparadigmas ( funcional y Orientado a objetos) ',
      tags: ['JavaScript', 'Paradigms', 'Programming'],
      votes: 20,
      answers: 4,
      image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW02dHE2MXpqd3hsajJ4YTZuNzY2ZjFsN2R6Y280azFidjAxdnV3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohfFgihu2fc02ogso/giphy.gif',
    },
    {
      title: '¿En cuestión de demanda, donde esta JS?',
      description: 'Js fue el lenguaje TOP 1 en 2024, tomando un 98% de todas las webs en el mundo.',
      tags: ['JavaScript', 'Uses', 'Web Development'],
      votes: 15,
      answers: 5,
      image: 'https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/65a57907c92d163ec99cfd74_lenguajes-mas-solicitados-vacantes.webp', // Sin imagen para esta pregunta
    },
    {
      title: '¿Qué cosas podemos hacer con JavaScript?',
      description: 'Las posibilidades de JS son infinitas, algunas de ellas son: el desarrollo front-end, back-end, aplicaciones móviles, etc.',
      tags: ['JavaScript', 'Capabilities', 'Web Development'],
      votes: 18,
      answers: 3,
      image: 'https://firebasestorage.googleapis.com/v0/b/ohbi-app.appspot.com/o/jsAll.jpeg?alt=media&token=09e6406a-bb90-4aa1-b04a-5c78b116b761'
    },
    {
      title: '¿Cuáles son los frameworks de JavaScript más populares?',
      description: 'Conoce los frameworks líderes en el mercado como React, Angular y Vue.',
      tags: ['JavaScript', 'Frameworks', 'Web Development'],
      votes: 22,
      answers: 6,
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg"
    },
  ];


}
