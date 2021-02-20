
export default class CRUD<T> {
  const url = '';
  create (item:T):Promise<T> {
    return axios.get<T>(url)
  }
}

interface Creator
{
  name:string,
  email:string,
}

export class CreatorsService extends CRUD<Creator> {
  constructor () {
    super()
  }
}
