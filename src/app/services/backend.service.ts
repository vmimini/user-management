import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}) 
  };

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    const userUrl = `${this.usersUrl}/${id}`;
    return this.httpClient.get<User>(userUrl);
  }

  updateUser(user: User): Observable<User> {
    const userUrl = `${this.usersUrl}/${user.id}`;
    return this.httpClient.post<User>(userUrl, user, this.httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.usersUrl, user, this.httpOptions);
  }

  deleteUser(user: User): Observable<User> {
    const userUrl = `${this.usersUrl}/${user.id}`;
    return this.httpClient.delete<User>(userUrl);
  }

 }
