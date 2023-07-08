import { ElementProps } from "../../types/types";
import Link from "next/link";
import Image from "next/image";

const Element: React.FC<ElementProps> = ({ id, data }) => {
  return (
    <Link href={`/${id}`}>
      <div className="element">
        <Image src={data.logo} alt={data.name} width={100} height={80} className="logo"></Image>
        <p className="label">{data.name}</p>
      </div>
    </Link>
  );
}

export default Element;