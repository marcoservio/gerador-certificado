import { Component } from '@angular/core';
import { ItemCertificado } from "../../components/item-certificado/item-certificado";
import { SecundaryButton } from "../../components/secundary-button/secundary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecundaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
