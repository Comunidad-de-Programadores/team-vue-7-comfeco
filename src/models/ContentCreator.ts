export class ContentCreator {
  name:string;
  category:string;
  image:unknown

  constructor (json:any) {
    this.name = json.name
    this.category = json.category
    this.image = json.image
  }
}
