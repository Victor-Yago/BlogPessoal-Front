import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };


  getAllPostagens(): Observable<Post[]> {
    return this.http.get<Post[]>(
      'https://blogdoyago.herokuapp.com/postagens',
      this.token
    );
  }

  getByIdPostagem(id: number): Observable<Post> {
    return this.http.get<Post>(
      `https://blogdoyago.herokuapp.com/postagens/${id}`,
      this.token
    );
  }

  getByTituloPostagem(titulo: string): Observable<Post[]> {
    return this.http.get<Post[]>(
      `https:https://blogdoyago.herokuapp.com/postagens/tema/${titulo}`,
      this.token
    );
  }

  postPostagem(postagem: Post): Observable<Post> {
    return this.http.post<Post>(
      'https://blogdoyago.herokuapp.com/postagens',
      postagem,
      this.token
    );
  }

  putPostagem(postagem: Post): Observable<Post> {
    return this.http.put<Post>(
      'https://blogdoyago.herokuapp.com/postagens',
      postagem,
      this.token
    );
  }

  deletePostagem(id: number) {
    return this.http.delete(
      `https://blogdoyago.herokuapp.com/postagens/${id}`,
      this.token
    );
  }
}
