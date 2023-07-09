import { styled } from 'styled-components';
import { apiOperators } from '../data/api'
import Element from './Element';

const Title = styled.h1`
    font-style: italic;
    font-size: 50px;
    color: #FF8552;
    margin: 30px auto 0 auto;
    text-align: center;
    @media (max-width: 800px) {
      margin: 50px auto 0 auto;
    }
  `;

const ListDiv = styled.div`
  background-color: #E6E6E6;
  margin: auto;
  width: 90%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
  overflow: auto;
  box-sizing: border-box;
  @media (max-width: 800px) {
    padding: 20px 10px;
  }
  @media (max-width: 475px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const List: React.FC = () => {
  return (
    <>
      <Title>Выберите оператора</Title>
      <ListDiv>
        {apiOperators.map((data, i) => {
          return <Element key={Math.random()} id={i} data={data} />
        })}
      </ListDiv>
    </>
  );
}

export default List;