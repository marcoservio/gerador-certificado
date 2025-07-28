import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecundaryButton } from "../../components/secundary-button/secundary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';
import { CertificadoInterface } from '../../interfaces/certificado-interface';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecundaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {
  id: string | null = null;
  certificado: CertificadoInterface | undefined;

  @ViewChild('certificadoContainer') certificadoContainer!: ElementRef;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.certificado = this.certificadoService.certificados.find(item => item.id === this.id);
      }
    });
  }

  downloadCertificado() {
    if(this.certificado === undefined) {
      return;
    }

    html2canvas(this.certificadoContainer.nativeElement, {scale: 2}).then((canvas: HTMLCanvasElement) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'certificado_' + this.certificado?.nome.replaceAll(' ', '_') + '.png';
      link.click();
    });
  }
}
