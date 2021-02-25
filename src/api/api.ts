import http from '@/config/http'
import { RequestOptions } from '@/models/RequestOptions'

export abstract class API<T> {
  // Variables
  url:string; // URL from endpoint
  constructor (protected externalURl:string) {
    this.url = externalURl
  }

  abstract createItem(params:unknown):T

  /**
   * Creates a new Item
   * @param item
   */
  create (item: T): Promise <T> {
    return http.post <T>(this.url, item).then(response => {
      return this.createItem(response.data)
    })
  }
  /**
   * Return a Promise with a list of items
   * @param options options for request
   */

  get (options: RequestOptions):Promise<T[]> {
    return http.get<T[]>(this.url, {
      params: options.getRequestParams()
    }).then((response) => {
      return response.data.map(item => {
        return this.createItem(item)
      })
    }
    )
  }
}
