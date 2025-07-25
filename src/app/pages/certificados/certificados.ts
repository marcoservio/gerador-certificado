import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from "../../components/item-certificado/item-certificado";
import { SecundaryButton } from "../../components/secundary-button/secundary-button";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';
import { CertificadoInterface } from '../../interfaces/certificado-interface';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecundaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {
  certificados: CertificadoInterface[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
      this.certificados = this.certificadoService.certificados;
  }
}
