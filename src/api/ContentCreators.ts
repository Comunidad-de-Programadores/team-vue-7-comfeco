/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import URLs from '@/config/url'
import { ContentCreator } from '@/models/ContentCreator'
import { API } from './api'

export class ContentCreatorsAPI extends API<ContentCreator> {
  constructor () {
    super(URLs.CONTENT_CREATORS)
  }

  createItem (data:any): ContentCreator {
    return new ContentCreator(data)
  }
}
export default new ContentCreatorsAPI()
