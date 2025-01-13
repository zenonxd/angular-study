import {Component, inject, Input, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EnviaFormularioService} from './services/envia-formulario.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';

  private enviaFormularioService = inject(EnviaFormularioService);

  submit() {
    this.enviaFormularioService.enviaInformacaoParaBackend("test");
  }

  @Output("outPutInfo") outPut!: string;

  logar(event: string) {
    console.log(event)
  }

}
