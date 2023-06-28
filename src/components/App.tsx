import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.sass';
import List from './List';
import ProtectedForm from './ProtectedForm';
import { IElement } from '../types/types';

const App: React.FC = () => {
  const [operator, setOperator] = useState<IElement | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    operator ? navigate('/payment', { replace: true }) : navigate('/', { replace: true })
  }, [operator, navigate])

  const operatorChoice = (data: IElement) => {
    setOperator(data);
  };

  const goHome = () => {
    navigate('/', { replace: true })
    setOperator(null);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <List operatorChoice={operatorChoice} />
        } />
        <Route path="/payment" element={
          <ProtectedForm
            data={operator}
            goHome={goHome}
          />} />
      </Routes>
    </div>
  );
}

export default App;