import { apiOperators } from '../data/api'
import { ListProps } from '../types/types';
import Element from './Element';

const List: React.FC<ListProps> = () => {
  return (
    <>
      <h1 className="title">Выберите оператора</h1>
      <div className="list">
        {apiOperators.map((data, i) => {
          return <Element key={Math.random()} id={i} data={data} />
        })}
      </div>
    </>
  );
}

export default List;