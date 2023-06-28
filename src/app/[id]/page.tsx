// import Form from "@/components/Form"
import { usePathname } from "next/navigation";
import { useRouter } from 'next/router'
import '@/app/page.sass'
import { apiOperators } from '@/data/api'
import OperatorElement from "@/components/OperatorElement";
import { IElement } from "@/types/types";
import { GetServerSidePropsContext } from 'next';

const Operator = ({lol}: IElement) => {
  console.log(lol)
  return(
    <div className="App">
      <h1 className="title">lol</h1>
      <OperatorElement data={apiOperators[0]}/>
    </div>
  )
}
export default Operator

Operator.getServerSideProps = async (context: GetServerSidePropsContext): Promise<{ props: IElement }> => {
  const lol = apiOperators[0]
  console.log(context)
  return { props: { lol } };
}