export interface IRootState {
  basic: IBasicState
  appendix: IAppendixState
}
export interface IBasicState {
  age: number
  sex: number
  marriage: boolean
  income: number
  valuesForWait: string
}

export interface IAppendixState {
  outRate: number
  retireAge: number
  fortune: number
  dieAge: number
  valuesForWait: string
}
