import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morse',
  templateUrl: './morse.page.html',
  styleUrls: ['./morse.page.scss'],
})
export class MorsePage implements OnInit {

  codigoMorse: string = ''
  texto: string = ''
  codigoTraduzido: string = ''
  codigo: string = ''
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
                         " ": "  ", ",": "  ", ";": "  ", ':': "  ",
                         '1': '.----', '2': '..---', '3': '...--',
                         '4': '....-', '5': '.....', '6': '-....',
                         '7': '--...', '8': '---..', '9': '----.', '0': '-----'}
  tabelaTexto: object = {".-": "A", "-...": "B", "-.-.": "C",
                         "-..": "D", ".": "E",
                         "..-.": "F", "--.": "G", "....": "H", "..": "I",
                         ".---": "J", "-.-": "K", ".-..": "L",
                         "--": "M", "-.": "N", "---": "O", 
                         ".--.": "P", "--.-": "Q", ".-.": "R",
                         "...": "S", "-": "T", "..-": "U",
                         "...-": "V", ".--": "W", "-..-": "X",
                         "-.--": "Y", "--..": "Z", 
                         " ": " ",
                         ".----": "1", "..---": "2", "...--": "3",
                         "....-": "4", ".....":"5", "-....": "6",
                         "--...": "7", "---..": "8", "----.": "9", "-----": "0"}
  opcaoSelecionada : string = 'texto'
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event){
    console.log(event)
    this.opcaoSelecionada = event.detail.value
  }


  codificar(texto: string){
    let aCodificar = texto.toUpperCase()
    let codigo = ''
    console.log("A codar", aCodificar)
    for (let index = 0; index < aCodificar.length; index++) {
      codigo += this.tabelaMorse[aCodificar[index]] + " ";
    }
    this.codigoMorse = codigo;
    console.log("result: ", this.codigoMorse)
  }
  decodificar(code: string){
    let deCodificar = code.split(" ")
    let texto = ''
    console.log("deCodar", deCodificar)
    for (let index = 0; index < deCodificar.length; index++) {
      let temp = this.tabelaTexto[deCodificar[index]];
      if (temp == undefined) {
        temp = " "
      }
      texto += temp;
    }
    this.codigoTraduzido = texto;
    console.log("result: ", this.codigoTraduzido)
  }

  limparCodigo(){
    this.codigoMorse = ''
    this.texto = ''
  }
  limparTexto(){
    this.codigoTraduzido = ''
    this.codigo = ''
  }

}
