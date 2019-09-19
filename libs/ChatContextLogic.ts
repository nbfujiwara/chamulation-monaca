import { IBasicState } from '../store/types'

export interface IChatBalloon {
  type: number
  serif?: string
  question?: IQuestion
}
export interface IChoice {
  value: number
  label: string
}
export interface IQuestion {
  id: number
  question: string
  inputType: number
  choices?: IChoice[]
  minValue?: number
  maxValue?: number
  defaultValue?: number
  unit?: string
}

export default class ChatContextLogic {
  public static TYPE_SELF: number = 1
  public static TYPE_BOT: number = 2
  public static TYPE_INPUTS: number = 3
  public static TYPE_FINISH: number = 9

  public static INPUT_TYPE_CHOICE: number = 1
  public static INPUT_TYPE_SLIDER: number = 2

  public static QUESTION_ID_SEX: number = 1
  public static QUESTION_ID_AGE: number = 2
  public static QUESTION_ID_MARRIAGE: number = 3
  public static QUESTION_ID_INCOME: number = 4

  private answers: any = {}
  private ctxIndex = 0
  private currentQuestionId: number = 0

  constructor() {
    this.ctxIndex = -1
    this.answers = {}
  }

  public getNext(): IChatBalloon {
    this.ctxIndex++
    const contextData = this.getStaticContextData()
    let idx: number = 0
    for (const obj of contextData) {
      if (obj.questionId) {
        if (idx === this.ctxIndex) {
          this.currentQuestionId = obj.questionId
          return {
            type: ChatContextLogic.TYPE_BOT,
            serif: this.getCurrentQuestion().question
          }
        } else if (idx + 1 === this.ctxIndex) {
          return {
            type: ChatContextLogic.TYPE_INPUTS,
            question: this.getCurrentQuestion()
          }
        } else if (idx + 2 === this.ctxIndex) {
          return {
            type: ChatContextLogic.TYPE_SELF,
            serif: this.getCurrentAnswerString()
          }
        } else {
          idx = idx + 3
        }
      } else if (idx === this.ctxIndex) {
        return {
          type: ChatContextLogic.TYPE_BOT,
          serif: obj.serif
        }
      } else {
        idx++
      }
    }
    return { type: ChatContextLogic.TYPE_FINISH }
  }
  private getCurrentAnswerString(): string {
    return this.getAnswerString(
      this.currentQuestionId,
      this.answers[this.currentQuestionId]
    )
  }
  private getAnswerString(qid: number, value: any): string {
    const q = this.getQuestion(qid)
    if (q.inputType === ChatContextLogic.INPUT_TYPE_CHOICE) {
      // @ts-ignore
      for (const choice of q.choices) {
        if (choice.value === value) {
          return choice.label
        }
      }
    } else if (q.inputType === ChatContextLogic.INPUT_TYPE_SLIDER) {
      if (q.unit) {
        return value + q.unit
      } else {
        return value
      }
    }
    return ''
  }
  private getCurrentQuestion(): IQuestion {
    return this.getQuestion(this.currentQuestionId)
  }

  private getStaticContextData() {
    return [
      { serif: 'よろしくお願いします。\nまずはあなたの基本情報を教えて下さい' },
      { questionId: ChatContextLogic.QUESTION_ID_SEX },
      { questionId: ChatContextLogic.QUESTION_ID_AGE },
      { questionId: ChatContextLogic.QUESTION_ID_MARRIAGE },
      { questionId: ChatContextLogic.QUESTION_ID_INCOME }
    ]
  }
  private getQuestion(qid: number): IQuestion {
    switch (qid) {
      case ChatContextLogic.QUESTION_ID_SEX:
        return {
          id: qid,
          question: 'あなたの性別を教えて下さい',
          inputType: ChatContextLogic.INPUT_TYPE_CHOICE,
          choices: [{ value: 1, label: '男性' }, { value: 2, label: '女性' }]
        }
      case ChatContextLogic.QUESTION_ID_AGE:
        return {
          id: qid,
          question: '年齢を教えて下さい',
          inputType: ChatContextLogic.INPUT_TYPE_SLIDER,
          minValue: 18,
          maxValue: 60,
          defaultValue: 30,
          unit: '才'
        }
      case ChatContextLogic.QUESTION_ID_MARRIAGE:
        return {
          id: qid,
          question: '結婚していますか？',
          inputType: ChatContextLogic.INPUT_TYPE_CHOICE,
          choices: [{ value: 0, label: 'いいえ' }, { value: 1, label: 'はい' }]
        }
      case ChatContextLogic.QUESTION_ID_INCOME:
        return {
          id: qid,
          question: 'おおよその年収（額面）は何万円くらいですか？',
          inputType: ChatContextLogic.INPUT_TYPE_SLIDER,
          minValue: 0,
          maxValue: 2000,
          defaultValue: 300,
          unit: '万円'
        }
      default:
        throw new Error('unknown question id' + qid)
    }
  }

  public putAnswer(ans: any) {
    this.answers[this.currentQuestionId] = ans
  }
  public getAllAnswer(): IBasicState {
    return {
      age: this.answers[ChatContextLogic.QUESTION_ID_AGE],
      sex: this.answers[ChatContextLogic.QUESTION_ID_SEX],
      marriage: this.answers[ChatContextLogic.QUESTION_ID_MARRIAGE],
      income: this.answers[ChatContextLogic.QUESTION_ID_INCOME]
    }
  }
}
