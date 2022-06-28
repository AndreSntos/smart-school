import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores';

  professorSelecionado?: Professor;

  professores = [
    { id: 1, nome: 'José Yoshi', disciplina: 'Programação web' },
    { id: 2, nome: 'Claudio Frizzarini', disciplina: 'Algoritmos' },
    { id: 3, nome: 'Kaline Barreira', disciplina: 'Socioemocional' },
    { id: 4, nome: 'Gerson Santos', disciplina: 'Engenharia de software' },
    { id: 5, nome: 'Caio Henrique', disciplina: 'Programação de APP' },
  ];

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = undefined;
  }

  constructor() {}

  ngOnInit() {}
}
