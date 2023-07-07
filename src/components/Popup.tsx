import { PopupProps } from "@/types/types";
import Image from "next/image";
import { apiRes } from "@/data/api";

export const Popup: React.FC<PopupProps> = ({ isOpened, response }) => {
  return (
    <div className={`popup ${isOpened ? 'opened' : ''}`}>
      <div className="popup__container">
        <Image
          width={80}
          height={80}
          src={response ? apiRes[0].logo : apiRes[1].logo}
          alt={response ? apiRes[0].name : apiRes[1].name}
          className="resultIcon" />
        <p className="subtitle">{response ? apiRes[0].name : apiRes[1].name}</p>
      </div>
    </div>
  );
}

export default Popup;