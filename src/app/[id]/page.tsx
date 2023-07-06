// import Form from "@/components/Form"
'use client'
import '@/app/page.sass'
import { apiOperators } from '@/data/api'
import OperatorElement from "@/components/OperatorElement";
import Form from '@/components/Form';
import Popup from '@/components/Popup';
import { useState } from 'react';
import { IElement } from '@/types/types';

interface Props {
  params: {
    id: number
  }
}

export const Operator = ({ params }: Props) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [apiResult, setApiResult] = useState<IElement>({ name: '', logo: '' })
  return (
    <div className="App">
      <Popup isOpened={isOpened} response={apiResult}/>
      <h1 className="title">Введите данные</h1>
      <OperatorElement data={apiOperators[params.id]} />
      <Form />
    </div>
  )
}
export default Operator

