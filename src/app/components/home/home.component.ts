import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {EnviaFormularioService} from '../../services/envia-formulario.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-home',
  imports: [
    NgIf,
    CommonModule,
    AppComponent
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
  listOfIds = [{id: 1}, {id: 2}]


  @Input("name") infoDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  updateBoolean(value: boolean) {
    this.myBoolean = true;
  }

  submit() {
    this.emitindoValorName.emit(this.name);

    this.enviaFormularioService.enviaInformacaoParaBackend("enviando informacao");
  }
}
