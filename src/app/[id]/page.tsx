'use client'
import '@/app/page.sass'
import { apiOperators } from '@/data/api'
import OperatorElement from "@/components/OperatorElement/OperatorElement";
import Form from '@/components/Form/Form';
import Popup from '@/components/Popup/Popup';
import { useState } from 'react';

interface Props { params: { id: number } }

export const Operator = ({ params }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [apiResult, setApiResult] = useState<boolean | undefined>()
  return (
    <div className="App">
      <Popup isOpened={isOpened} response={apiResult} />
      <h1 className="title">Введите данные</h1>
      <OperatorElement data={apiOperators[params.id]} />
      <Form setIsOpened={setIsOpened} response={setApiResult} />
    </div>
  )
}
export default Operator

