import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'
import store from '~/store/store'
import { IAppendixState, IBasicState } from '~/store/types'

@Module({ dynamic: true, store, name: 'appendix', namespaced: true })
class Appendix extends VuexModule implements IAppendixState {
  // state
  outRate = 0
  retireAge = 65
  fortune = 0
  dieAge = 80
  valuesForWait = ''
  // mutation (Publicにして直接Callもできるが、非同期の場合はつかっちゃだめで必ずActionとかあるので常にAction経由としておく)
  @Mutation
  private SET_OUT_RATE(val: number) {
    this.outRate = val
  }
  @Mutation
  private SET_RETIRE_AGE(val: number) {
    this.retireAge = val
  }
  @Mutation
  private SET_FORTUNE(val: number) {
    this.fortune = val
  }
  @Mutation
  private SET_DIE_AGE(val: number) {
    this.dieAge = val
  }
  @Mutation
  private SET_VALUES_FOR_WAIT(val: string) {
    this.valuesForWait = val
  }

  @Action({})
  public setOutRate(val: number) {
    this.SET_OUT_RATE(val)
    this.updateValuesForWait()
  }
  @Action({})
  public setRetireAge(val: number) {
    this.SET_RETIRE_AGE(val)
    this.updateValuesForWait()
  }
  @Action({})
  public setFortune(val: number) {
    this.SET_FORTUNE(val)
    this.updateValuesForWait()
  }
  @Action({})
  public setDieAge(val: number) {
    this.SET_DIE_AGE(val)
    this.updateValuesForWait()
  }

  @Action({})
  private updateValuesForWait() {
    this.SET_VALUES_FOR_WAIT(
      [this.outRate, this.retireAge, this.fortune, this.dieAge].join('_')
    )
  }
}

export const appendixStateModule = getModule(Appendix)
