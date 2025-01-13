import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviaInformacaoParaBackend(info: string) {
    // logica backend pipipopo
    console.log("enviando para o backend");
  }

  test(integer: n) {
    console.log(n);
  }
}
