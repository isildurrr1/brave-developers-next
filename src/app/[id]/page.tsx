// import Form from "@/components/Form"
'use client'
import '@/app/page.sass'
import { apiOperators } from '@/data/api'
import OperatorElement from "@/components/OperatorElement";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface Props {
  params: {
    id: number
  }
}

type Inputs = {
  phone: string
}

export const Operator = ({ params }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ mode: "all" });
  const navigate = useRouter()
  const onSubmit = (data: any) => {
    console.log(data.phone.length);
  }
  return (
    <div className="App">
      <h1 className="title">Введите данные</h1>
      <OperatorElement data={apiOperators[params.id]} />
      <form onSubmit={handleSubmit(onSubmit)} action="#" className="form">
        <IMaskInput className="input"
          noValidate
          mask={"{+7}(000)000-00-00"}
          unmask={true}
          placeholder='Номер телефона'
          {...register("phone", {
            required: "Error",
            minLength: { value: 17, message: "Error222" }
          })}
        />
        {errors?.phone && <span>{errors.phone.message}</span>}
        <button type="submit" className='button submit' name='submitButton'>Пополнить</button>
        <button onClick={() => navigate.push('/')} className='button backButton'>Назад</button>
      </form>
    </div>
  )
}
export default Operator

