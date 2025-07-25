import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';
import { BaseUi } from "./components/base-ui/base-ui";
import { RouterModule } from '@angular/router';
import { CertificadoService } from './services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, RouterModule, BaseUi,],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
