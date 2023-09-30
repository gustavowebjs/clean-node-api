export class User {
  public id: string;
  public username: string;
  public password: string;

  constructor(id: string, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
