import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ilogin } from '../Ilogin/Ilogin';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  constructor(private service: ServiceService, private rl: Router){}

  messageSuccess: string | undefined | null;
  messageError: string | undefined | null;

realizarLogin(form: NgForm) {

  const data: Ilogin = {
    cpfTitular: form.value.cpfTitular,
    senha: form.value.senhaInput
  }

  this.service.loginUsuario(data).subscribe(
    res => {
      this.messageSuccess = res.message;
      this.messageError = null;
      
        setTimeout(() => {
          alert("Estamos redicionando para a Dashboard da plataforma Localiza.AI!")
          this.rl.navigate(['/dashboard']);
        }, 1000)

    }, (HttpErrorResponse) => {
      this.messageError = HttpErrorResponse.error.message;
      this.messageSuccess = null;
    } 
  )



  console.log("Login disponível:", data);

 }

}
