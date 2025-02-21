import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icadastro } from '../component/novousuario/Icadastro/Icadastro';
import { Observable } from 'rxjs';
import { ApiResponse } from '../ApiResponse/ApiResponse';
import { environments } from 'src/environments/environments';
import { Ilogin } from '../component/homepage/Ilogin/Ilogin';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  private apiLogin = environments.apiUsuarioLogin;
  private apiCadastrar = environments.apiUsuarioCadastrar;

  public loginUsuario(data:Ilogin):Observable<ApiResponse>{
    return this.http.post<any>(`${this.apiLogin}`, data);
  }

  public enviarCadastro(data: Icadastro):Observable<ApiResponse>{
    return this.http.post<any>(`${this.apiCadastrar}`, data);
  }



}
