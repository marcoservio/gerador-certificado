import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  ngOnInit(): void {
    this.mensagem();
  }

  mensagem() {
    console.log('Mensagem from Navbar component dentro da função');
  }
}
