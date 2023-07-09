import { PopupProps } from "@/types/types";
import Image from "next/image";
import { apiRes } from "@/data/api";
import { styled } from "styled-components";

const PopupStyled = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${(props) => props.isOpen ? '1' : '0'};
  transition: visibility 0.2s, opacity 0.2s linear;
`;

const PopupContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.p`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  color: #FF8552;
`;

export const Popup: React.FC<PopupProps> = ({ isOpened, response }) => {
  return (
    <PopupStyled isOpen={isOpened}>
      <PopupContainer>
        <Image
          width={80}
          height={80}
          src={response ? apiRes[0].logo : apiRes[1].logo}
          alt={response ? apiRes[0].name : apiRes[1].name}
          style={{ margin: '30px auto' }} />
        <Subtitle>{response ? apiRes[0].name : apiRes[1].name}</Subtitle>
      </PopupContainer>
    </PopupStyled>
  );
}

export default Popup;