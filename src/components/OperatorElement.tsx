import { OperatorElementProps } from "../types/types";

const OperatorElement:React.FC<OperatorElementProps> = ({data}) => {
  return (
    <div className="operator">
      <div className="operator__element">
        <img src={data.logo} alt={data.name} className="logo" />
        <p className="label">{data.name}</p>
      </div>
    </div>
  )
}

export default OperatorElement;