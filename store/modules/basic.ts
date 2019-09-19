import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'
import store from '~/store/store'
import { IBasicState } from '~/store/types'

@Module({ dynamic: true, store, name: 'basic', namespaced: true })
class Basic extends VuexModule implements IBasicState {
  // state
  age = 30
  sex = 1
  marriage = true
  income = 400
  valuesForWait = ''
  // mutation (Publicにして直接Callもできるが、非同期の場合はつかっちゃだめで必ずActionとかあるので常にAction経由としておく)
  @Mutation
  private SET_AGE(val: number) {
    this.age = val
  }
  @Mutation
  private SET_SEX(val: number) {
    this.sex = val
  }
  @Mutation
  private SET_MARRIAGE(val: boolean) {
    this.marriage = val
  }
  @Mutation
  private SET_INCOME(val: number) {
    this.income = val
  }
  @Mutation
  private SET_VALUES_FOR_WAIT(val: string) {
    this.valuesForWait = val
  }

  @Action({})
  public setBasic(data: IBasicState) {
    this.SET_AGE(data.age)
    this.SET_SEX(data.sex)
    this.SET_MARRIAGE(data.marriage)
    this.SET_INCOME(data.income)
  }
  @Action({})
  public setAge(val: number) {
    this.SET_AGE(val)
    this.updateValuesForWait()
  }
  @Action({})
  public setSex(val: number) {
    this.SET_SEX(val)
    this.updateValuesForWait()
  }
  @Action({})
  public setMarriage(val: boolean) {
    this.SET_MARRIAGE(val)
    this.updateValuesForWait()
  }
  @Action({})
  public setIncome(val: number) {
    this.SET_INCOME(val)
    this.updateValuesForWait()
  }
  @Action({})
  private updateValuesForWait() {
    this.SET_VALUES_FOR_WAIT(
      [this.age, this.sex, this.marriage, this.income].join('_')
    )
  }
}

export const basicStateModule = getModule(Basic)
