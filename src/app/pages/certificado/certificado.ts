import { Component } from '@angular/core';
import { SecundaryButton } from "../../components/secundary-button/secundary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [SecundaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado {

}
