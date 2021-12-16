import { Topic } from './Topic';
import { User } from './User';

export class Post {
  public id: number;
  public titulo: string;
  public texto: string;
  public date: Date;
  public tema: Topic;
  public usuario: User;
}
