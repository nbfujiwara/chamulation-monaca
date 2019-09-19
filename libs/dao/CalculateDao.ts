import { basicStateModule } from '~/store/modules/basic'
import { appendixStateModule } from '~/store/modules/appendix'

class Params {
  public static startOldAge: number = 60
  public static normalDieAge: number = 80
  public static normalOutcomePerYear: number = 450
  public static startPensionAge: number = 65
  public static simplePension: number = 6.5 * 12 // 国民年金
  public static kouseiBasePension: number = 9.0 * 12 // 厚生年金
  public static oldIncome: number = 300 // 老後でまだ働いてるときの年収
  public static baseOtherIncome: number = 100 //
}

export default class CalculateDao {
  public static getBalance(): IBalance {
    return {
      outcome: CalculateDao.getOutcome(
        basicStateModule.marriage,
        appendixStateModule.outRate,
        appendixStateModule.dieAge
      ),
      incomePension: CalculateDao.getPension(
        basicStateModule.marriage,
        appendixStateModule.dieAge,
        basicStateModule.income,
        basicStateModule.age
      ),
      incomeSaving: CalculateDao.getSaving(
        basicStateModule.age,
        basicStateModule.income,
        basicStateModule.marriage,
        appendixStateModule.retireAge,
        appendixStateModule.fortune
      ),
      incomeOther: CalculateDao.getOther(appendixStateModule.retireAge)
    }
  }
  private static getOutcome(
    marriage: boolean,
    outcomeRate: number,
    dieAge: number
  ): number {
    let totalOutcome = 0

    for (let age = Params.startOldAge; age <= dieAge; age++) {
      let isCouple = false
      if (marriage) {
        if (age <= Params.normalDieAge) {
          isCouple = true
        }
      }
      let outcome = Params.normalOutcomePerYear
      if (isCouple) {
        outcome = outcome * 1.5
      }
      outcome = (outcome * (outcomeRate + 100)) / 100
      totalOutcome += outcome
    }
    return Math.round(totalOutcome)
  }
  private static getPension(
    marriage: boolean,
    dieAge: number,
    income: number,
    currentAge: number
  ): number {
    let totalPension = 0
    const maxYearIncome = CalculateDao.getMaxYearIncome(income, currentAge)
    for (let age = Params.startPensionAge; age <= dieAge; age++) {
      let isCouple = false
      if (marriage) {
        if (age <= Params.normalDieAge) {
          isCouple = true
        }
      }
      let pension = Params.simplePension
      if (isCouple) {
        pension += Params.simplePension
      }

      let kouseiRate = 1
      if (marriage) {
        kouseiRate = kouseiRate * 1.5
      }
      if (maxYearIncome < 500) {
        kouseiRate = kouseiRate * 0.5
      } else if (maxYearIncome > 2000) {
        kouseiRate = kouseiRate * 1.5
      } else {
        kouseiRate =
          kouseiRate *
          (0.5 + ((1.5 - 0.5) * (maxYearIncome - 500)) / (2000 - 500))
      }
      pension += kouseiRate * Params.kouseiBasePension
      totalPension += pension
    }

    return Math.round(totalPension)
  }
  private static getMaxYearIncome(income: number, currentAge: number) {
    for (let age = currentAge; age <= 55; age++) {
      income += 15
    }
    return income
  }
  private static getSaving(
    currentAge: number,
    income: number,
    marriage: boolean,
    retireAge: number,
    fortune: number
  ): number {
    let totalSaving = 0
    let outcome = Params.normalOutcomePerYear
    for (let age = currentAge; age < Params.startOldAge; age++) {
      if (age >= retireAge) {
        income = 0
        outcome = Params.normalOutcomePerYear
      } else if (income < 500) {
        outcome = income
      } else {
        outcome = income * 0.9
      }

      let profit = income - outcome
      if (marriage && profit > 0) {
        profit = profit * 0.5
      }
      totalSaving += profit
      income += 15
    }
    totalSaving += fortune
    if (totalSaving < 0) {
      totalSaving = 0
    }

    return Math.round(totalSaving)
  }
  private static getOther(retireAge: number): number {
    let totalOther = Params.baseOtherIncome
    for (let age = Params.startOldAge; age < retireAge; age++) {
      totalOther += Params.oldIncome
    }
    return Math.round(totalOther)
  }
}

export interface IBalance {
  outcome: number
  incomePension: number
  incomeSaving: number
  incomeOther: number
}
