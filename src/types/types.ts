import { Dispatch, SetStateAction } from "react"
export interface IElement {
  'name': string,
  'logo': string,
}

export interface ElementProps {
  id: number,
  data: IElement,
}

export interface FormProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>
  response: Dispatch<SetStateAction<boolean | undefined>>
}

export interface ProtectFormProps {
  data: IElement | null,
  goHome: Function,
}

export interface OperatorElementProps {
  data: IElement,
}

export interface PopupProps {
  isOpened: boolean,
  response: boolean | undefined,
}