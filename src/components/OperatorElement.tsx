import { OperatorElementProps } from "../types/types";
import Image from "next/image";

const OperatorElement:React.FC<OperatorElementProps> = ({data}) => {
  return (
    <div className="operator">
      <div className="operator__element">
        <Image src={data.logo} alt={data.name} className="logo" width={100} height={80}></Image>
        <p className="label">{data.name}</p>
      </div>
    </div>
  )
}

export default OperatorElement;