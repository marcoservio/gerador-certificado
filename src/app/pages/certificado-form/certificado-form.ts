import { Component } from '@angular/core';
import { PrimaryBotton } from "../../components/primary-botton/primary-botton";
import { SecundaryButton } from "../../components/secundary-button/secundary-button";

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButton, PrimaryBotton],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

}
