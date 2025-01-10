import {Component, inject, Input} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {EnviaFormularioService} from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);


  myBoolean = false;
  deveMostrarTitulo = false;
  name = 'Olavo';
  listItems = ["Olavo", "Bruna"];

  @Input("name") minhaPropsDeFora!: string;

  updateBoolean(value: boolean) {
    this.myBoolean = true;
  }

  submit() {
    this.enviaFormularioService.enviaInformacaoParaBackend("enviando informacao");
  }
}
