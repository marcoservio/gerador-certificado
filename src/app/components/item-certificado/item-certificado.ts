import { Component } from '@angular/core';
import { SecundaryButton } from "../secundary-button/secundary-button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  id: number = 1;

  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', this.id]);
  }
}
