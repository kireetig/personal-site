import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN = 'myToken';

  constructor(private http: HttpClient) { }

  login(values){
    this.http.post(`${environment.apiUrl}/user/login`, {
      ...values,
    }).subscribe((res:any) => {
      localStorage.setItem(this.TOKEN, res.token);
    })
  }

  getToken(){
    return localStorage.getItem(this.TOKEN);
  }
}
