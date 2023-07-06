import { PopupProps } from "@/types/types";
import Image from "next/image";

export const Popup: React.FC<PopupProps> = ({isOpened, response}) => {
  return (
    <div className={`popup ${isOpened ? 'opened' : ''}`}>
      <div className="popup__container">
        <Image src={response.logo} alt={response.name} className="resultIcon" />
        <p className="subtitle">{response.name}</p>
      </div>
    </div>
  );
}

export default Popup;