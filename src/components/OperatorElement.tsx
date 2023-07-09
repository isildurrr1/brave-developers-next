import { OperatorElementProps } from "../types/types";
import Image from "next/image";
import { styled } from "styled-components";

const ElementStyled = styled.div`
  border-radius: 10px;
  height: 80px;
  width: 35%;
  display: flex;
  margin: 20px auto 0 auto;
  user-select: none;
  @media (max-width: 475px) {
    width: 50%
  }
`;

const Label = styled.p`
  font-style: italic;
  font-size: 30px;
  color: #FF8552;
  margin: auto;
  @media (max-width: 613px) {
    font-size: 25px;
  }
`;

const OperatorElement: React.FC<OperatorElementProps> = ({ data }) => {
  return (
    <ElementStyled>
      <Image
        src={data.logo}
        alt={data.name}
        className="logo"
        width={100}
        height={80}
        style={{
          boxSizing: 'border-box',
          padding: '5px',
          objectFit: 'contain',
          borderRadius: '10px',
          margin: 'auto 0 auto 0'
        }}
      />
      <Label>{data.name}</Label>
    </ElementStyled>
  )
}

export default OperatorElement;