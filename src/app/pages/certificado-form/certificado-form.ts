import { Component, ViewChild, viewChild } from '@angular/core';
import { PrimaryBotton } from "../../components/primary-botton/primary-botton";
import { SecundaryButton } from "../../components/secundary-button/secundary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificadoInterface } from "../../interfaces/certificado-interface";
import { CertificadoService } from '../../services/certificado.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButton, PrimaryBotton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  constructor(private certificadoService: CertificadoService, private route: Router) { }
  @ViewChild('form') form!: NgForm;

  atividade: string = '';

  certificado: CertificadoInterface = {
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: ''
  }

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.trim() !== '';
  }

  adicionarAtividade() {
    if (this.atividade.trim() !== '') {
      this.certificado.atividades.push(this.atividade.trim());
      this.atividade = '';
    }
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (this.formValido()) {
      this.certificado.dataEmissao = this.dataAtual();
      this.certificado.id = uuid();

      this.certificadoService.adicionarCertificado(this.certificado);

      this.route.navigate(['/certificados', this.certificado.id]);

      // this.estadoInicialCertificado();
      // this.form.resetForm();
    }
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  estadoInicialCertificado() {
    this.certificado = {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: ''
    };
  }
}
