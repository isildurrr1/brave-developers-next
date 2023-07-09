import Link from "next/link";
import Image from "next/image";
import { ElementProps } from "../types/types";
import { styled } from "styled-components";

const ElementStyled = styled.div`
  background-color: #EADAD4;
  border-radius: 10px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover{
    transform: scale(1.02);
    opacity: 0.8;
  }
  &:active{
    transform: scale(1);
    }
`;

const Label = styled.p`
  font-style: italic;
  font-size: 30px;
  color: #FF8552;
  margin: auto;
  @media (max-width: 613px) {
    font-size: 25px
  }
`;

const Element: React.FC<ElementProps> = ({ id, data }) => {
  return (
    <Link
      href={`/${id}`}
      style={{ textDecoration: 'none' }}
    >
      <ElementStyled>
        <Image
          src={data.logo}
          alt={data.name}
          width={100}
          height={80}
          className="logo"
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
    </Link>
  );
}

export default Element;