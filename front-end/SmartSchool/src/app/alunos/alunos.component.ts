import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  alunoForm!: FormGroup;
  titulo = 'Alunos';

  alunoSelecionado?: Aluno;

  textoSimples?: string;

  alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: '332255' },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: '332255' },
    { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: '332255' },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: '332255' },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: '332255' },
    { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: '332255' },
    { id: 7, nome: 'Paulo', sobrenome: 'José', telefone: '332255' },
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit(): void {}

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['',  Validators.required],
      telefone: ['',  Validators.required]
    });
  }

  alunoSubmit(){
      console.log("Olá")
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm?.patchValue(aluno)
  }

  voltar() {
    this.alunoSelecionado = undefined;
  }
}
