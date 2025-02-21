import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Icadastro } from '../Icadastro/Icadastro';
import { ServiceService } from 'src/app/service/service.service';
import { ApiResponse } from 'src/app/ApiResponse/ApiResponse';
import { HttpErrorResponse } from '@angular/common/http';
 
@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent {

  messageSuccessCadastro: String | undefined | null;
  messageErrorCadastro: String | undefined | null;
 
  
  constructor(private service: ServiceService){}

 enviarCadastro(form: NgForm) {

  const data: Icadastro = {
    titular: form.value.titularVeiculoInput,
    cpfProprietario: form.value.cpfTitularInput,
    contato: form.value.contatoInput,
    senha: form.value.senhaInput
  } 
      this.service.enviarCadastro(data).subscribe(
        res => {
          this.messageSuccessCadastro = res.message;
          this.messageErrorCadastro = null;
          }, HttpErrorResponse => {
            this.messageErrorCadastro = HttpErrorResponse.error.message;
            this.messageSuccessCadastro = null;
             
        }
      )

      console.log("Dados disponiveis para cadastro:", data)

}


  
}
