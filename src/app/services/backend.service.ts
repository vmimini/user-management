import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // usersUrl: online endpoint ku do te dergojme HTTP requests
  // eshte nje fake REST API, ndryshimet qe bejme nuk do te ruhen (insert, update, delete)
  // kodi/konfigurimet jane te sakta dhe te njejta me ato qe do ju duhet te shtoni ne aplikacionin tuaj me backend-in qe do te krijoni
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  // percaktojme headers qe do te na duhen per PUT/POST request
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // bejme inject HttpClient (pjese e Angular) qe na ndihmon per te derguar HttpRequest ne backend
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // marrim gjithe users array, nuk ka nevoje per parametra shtese ne url
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    // marrim vetem 1 user dhe duhet ti kalojme backend-it edhe id perkatese te user-it qe duam
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  updateUser(user: User): Observable<User> {
    // per te bere update perdorim PUT
    // duhet te dergojme url me id e user, user object dhe options ku percaktojme headers - Content-Type': 'application/json
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put<User>(url, user, this.httpOptions);
  }

  addUser(user: User): Observable<User> {
    // per te bere insert perdorim POST
    // duhet te dergojme url, user object dhe options ku percaktojme headers - Content-Type': 'application/json
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  deleteUser(user: User): Observable<User> {
    // perdorim DELETE dhe dergojme dhe id e user qe duam te bejme delete
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }
}
