export default class MasterDao {
  public static sexList(): ISex[] {
    return [{ id: 1, name: '男性' }, { id: 2, name: '女性' }]
  }
}

export interface ISex {
  id: number
  name: string
}
