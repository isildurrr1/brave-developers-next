'use client'
import { apiOperators } from '@/data/api'
import OperatorElement from "@/components/OperatorElement";
import Form from '@/components/Form';
import Popup from '@/components/Popup';
import { useState } from 'react';
import { styled } from 'styled-components';

const App = styled.main`
  width: 700px;
  height: 550px;
  background-color: #e6e6e6;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 14px 2px #39393a;
  overflow: auto;
  @media screen and (max-width: 800px) {
    width: 100vw;
    box-shadow: none;
    height: 100vh;
    border-radius: 0;
  }
  @media (max-width: 475px){
    width: 100vw;
    height: 100vh;
  }
`;

const Title = styled.h1`
  font-style: italic;
  font-size: 50px;
  color: #FF8552;
  margin: 30px auto 0 auto;
  text-align: center;
`;

interface Props { params: { id: number } }

export default function Operator({ params }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [apiResult, setApiResult] = useState<boolean | undefined>()
  return (
    <App>
      <Popup isOpened={isOpened} response={apiResult} />
      <Title>Введите данные</Title>
      <OperatorElement data={apiOperators[params.id]} />
      <Form setIsOpened={setIsOpened} response={setApiResult} />
    </App>
  )
};
