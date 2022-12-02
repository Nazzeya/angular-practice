import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    const httpOptions = { //главная идея в том чтобы проверить авторизован ли юзер или нет
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer здесь должен быть уникальный ключ' 
      })
    };
    return this.http.get('https://jsonplaceholder.typicode.com/users', httpOptions) //also there are post, put, delete methods
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error');
      }));
  }
}
