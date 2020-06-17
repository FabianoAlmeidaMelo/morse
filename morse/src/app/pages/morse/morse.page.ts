import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morse',
  templateUrl: './morse.page.html',
  styleUrls: ['./morse.page.scss'],
})
export class MorsePage implements OnInit {

  codigoMorse: string = ''
  texto: string = ''
  tabelaMorse: object = {'A': '.-', 'À': '.-', 'Á': '.-', 'Â': '.-',
                         'B': '-...', 'C': '-.-.', 'Ç': '-.-.',
                         'D': '-..', 'E': '.', 'É': '.', 'Ê': '.',
                         'F': '..-.', 'G': '--.', 'H': '....', 'I': '..',
                         'Í': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
                         'M': '--', 'N': '-.', 'O': '---', 'Ó': '---','Ô': '---', 
                         'P': '.--.', 'Q': '--.-', 'R': '.-.',
                         'S': '...', 'T': '-', 'U': '..-', 'Ú': '..-', 'Ü': '..-',
                         'V': '...-', 'W': '.--', 'X': '-..-',
                         'Y': '-.--', 'Z': '--..', 
                         ' ': ' ', ',': ' ', ';': ' ', ':': ' ',
                         '1': '.----', '2': '..---', '3': '...--',
                         '4': '....-', '5': '.....', '6': '-....',
                         '7': '--...', '8': '---..', '9': '----.', '0': '-----'}
  constructor() { }

  ngOnInit() {
  }

  codificar(texto: string){
    let aCodificar = texto.toUpperCase()
    let codigo = ''
    console.log("A codar", aCodificar)
    for (let index = 0; index < aCodificar.length; index++) {
      codigo += this.tabelaMorse[aCodificar[index]];
    }
    this.codigoMorse = codigo;
    console.log("result: ", this.codigoMorse)
  }

  limpar(){
    this.codigoMorse = ''
    this.texto = ''
  }
}
