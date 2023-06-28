'use client'
import '@/app/page.sass'
import List from '@/components/List';
import { IElement } from '@/types/types';
import { useState } from 'react';

export default function Home() {

  const [operator, setOperator] = useState<IElement | null>(null);

  const operatorChoice = (data: IElement) => {
    setOperator(data);
  };

  return (
    <div className="App">
      <List operatorChoice={operatorChoice} />
    </div>
  )
}
