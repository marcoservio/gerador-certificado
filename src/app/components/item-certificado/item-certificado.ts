import { Component } from '@angular/core';
import { SecundaryButton } from "../secundary-button/secundary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButton, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  id: number = 1;
}
