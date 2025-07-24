import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primary-botton',
  imports: [CommonModule],
  templateUrl: './primary-botton.html',
  styleUrl: './primary-botton.css'
})
export class PrimaryBotton {
  @Input() textoBotao: string = '';
  @Input() disabled: boolean = false;
}
