import { Component } from '@angular/core';
import { PrimaryBotton } from "../../components/primary-botton/primary-botton";
import { SecundaryButton } from "../../components/secundary-button/secundary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificadoInterface } from "../../interfaces/certificado-interface";

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButton, PrimaryBotton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  atividade: string = '';

  certificado: CertificadoInterface = {
    atividades: [],
    nome: ''
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
      console.log(this.certificado);
    }
  }
}
