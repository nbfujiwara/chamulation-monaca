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
  marriage = false
  income = 400
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

  @Action({})
  public setBasic(data: IBasicState) {
    this.SET_AGE(data.age)
    this.SET_SEX(data.sex)
    this.SET_MARRIAGE(data.marriage)
    this.SET_INCOME(data.income)
  }
}

export const basicStateModule = getModule(Basic)
