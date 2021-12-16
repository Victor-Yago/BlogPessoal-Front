import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Topic } from '../model/Topic';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };



  getAllTema(): Observable<Topic[]> {
    return this.http.get<Topic[]>(
      'https://blogdoyago.herokuapp.com/tema',
      this.token
    );
  }

  getByIdTema(id: number): Observable<Topic> {
    return this.http.get<Topic>(
      `https://blogdoyago.herokuapp.com/tema/${id}`,
      this.token
    );
  }

  getByNomeTema(nome: string): Observable<Topic[]> {
    return this.http.get<Topic[]>(
      `https://blogdoyago.herokuapp.com/tema/nome/${nome}`,
      this.token
    );
  }

  postTema(tema: Topic): Observable<Topic> {
    return this.http.post<Topic>(
      'https://blogdoyago.herokuapp.com/tema',
      tema,
      this.token
    );
  }

  putTema(tema: Topic): Observable<Topic> {
    return this.http.put<Topic>(
      'https://blogdoyago.herokuapp.com/tema',
      tema,
      this.token
    );
  }

  deleteTema(id: number) {
    return this.http.delete(
      `https://blogdoyago.herokuapp.com/tema/${id}`,
      this.token
    );
  }
}
