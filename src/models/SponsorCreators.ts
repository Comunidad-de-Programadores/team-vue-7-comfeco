import { Category } from './Category'

export class SponsorCreator {
  name:string;
  category:Category;
  image:unknown
  createdAt:string
  updatedAt:string

  constructor (json:any) {
    this.name = json.name
    this.category = json.category
    this.image = json.image
    this.createdAt = json.created_at
    this.updatedAt = json.updated_at
  }
}
