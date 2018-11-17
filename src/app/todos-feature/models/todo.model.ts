export class Todo {

  public id: string;
  // tslint:disable-next-line:no-inferrable-types
  public complete: boolean = false;

  constructor(public title: string, public description: string) { }
}
