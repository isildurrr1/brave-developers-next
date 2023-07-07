'use client'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import inputMask from '@/utils/inputMask';
import { FormProps } from '@/types/types';

const Form: React.FC<FormProps> = ({ setIsOpened, response }) => {

  const [textSubmitButton, setTextSubmitButton] = useState<string>('Пополнить');
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)
  const [phone, setPhone] = useState('');
  const [sum, setSum] = useState('')

  const navigate = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'all' });

  const changeInputPhone = (e: React.FormEvent<HTMLInputElement>) => {
    setPhone(inputMask(e));
  }

  const changeInputSum = (event: React.FormEvent<HTMLInputElement>) => {
    const regExp = /^([1-9]|[0-9][0-9]|[0-9][0-9][0-9]|1000)$/mg
    const value = event.currentTarget.value
    if (value === '') setSum('');
    if (regExp.test(value)) setSum(value);
  }

  const loadingBtn = (boolean: boolean) => {
    if (boolean) {
      setTextSubmitButton('Пополнение...');
      setDisabledBtn(true);
    } else {
      setTextSubmitButton('Пополнить');
      setDisabledBtn(false);
    }
  }

  const onSubmit = () => {
    const myFetch = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = Math.floor(Math.random() * 2);
        if (!result) resolve('Успешно');
        else reject(new Error("Ошибка!"));
      }, 1700)
    })
    loadingBtn(true);
    myFetch()
      .then((e) => {
        loadingBtn(false);
        response(true);
        setIsOpened(true)
        setTimeout(() => { setIsOpened(false); navigate.push('/') }, 1000)
      })
      .catch((err) => {
        loadingBtn(false);
        response(false);
        setIsOpened(true)
        setTimeout(() => { setIsOpened(false) }, 1000)
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="#" className="form" >
      <input
        type="text"
        className='input'
        value={phone}
        placeholder='Номер телефона'
        {...register('phone', {
          required: "Поле не должно быть пустым",
          minLength: {
            value: phone[0] === '8' ? 17 : 18,
            message: 'Введите номер полностью'
          }
        })}
        onChange={changeInputPhone}
      />
      {errors?.phone && <span className='error'>{errors.phone.message?.toString()}</span>}

      <input
        type="text"
        value={sum}
        className='input'
        {...register('sum', { required: "Поле не должно быть пустым" })}
        onChange={changeInputSum}
        placeholder='Сумма (от 1 до 1000руб)'
      />
      {errors?.sum && <span className='error'>{errors.sum.message?.toString()}</span>}

      <button disabled={disabledBtn} type="submit" className='button submit' name='submitButton'>{textSubmitButton}</button>
      <button type="reset" onClick={() => navigate.push('/')} className='button backButton'>Назад</button>
    </form>
  );
}

export default Form;