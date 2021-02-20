
interface Filter{
    name: string,
    value: string
}

export class RequestOptions {
  page = 1;
  limit = 25;
  sort = null
  filters: Filter[] = []
  /**
   * Returns query params for url
   */
  getRequestParams ():{[k: string]: string|number|null} {
    const params :{[k: string]: string|number|null} = {
      _start: (this.page - 1) * this.limit,
      _limit: this.limit,
      _sort: this.sort
    }
    for (const filter of this.filters) {
      params[filter.name] = filter.value
    }

    return params
  }
}
