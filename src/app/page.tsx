'use client'
import List from '@/components/List';
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

export default function Home() {
  return (
    <App>
      <List />
    </App>
  )
}
