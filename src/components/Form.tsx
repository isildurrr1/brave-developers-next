'use client'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import inputMask from '@/utils/inputMask';
import { FormProps } from '@/types/types';
import { styled } from 'styled-components';

const FormStyled = styled.form`
  margin: 60px auto 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const InputStyled = styled.input`
  font-family: inherit;
  height: 30px;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid #FF8552;
  background-color: #e6e6e6;
  font-size: 17px;
  margin: 10px;
  text-align: center;
  &:focus {
    outline: 0;
    color: #212529;
    border-color: #FF8552;
  };
  @media (max-width: 475px) {
    font-size: 14px;
  }
`;

const ErrorSpan = styled.span`
  color: red;
  font-size: 15px;
  margin: -10px auto -6px auto;
`;

const SubmitButton = styled.button`
  border: none;
  width: 60%;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform .3s, opacity .3s;
  margin: 20px auto 0 auto;
  background-color: #FF8552;
  color: white;
  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
  &:active {
    transform: scale(1);
  }
  &:disabled {
    background-color: grey;
    transform: scale(1);
    opacity: 0.2;
  }
`;

const BackButton = styled(SubmitButton)`
  margin: 10px auto 0 auto;
  background-color: white;
  border: 2px solid #FF8552;
  color: #FF8552;
`;

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
    <FormStyled onSubmit={handleSubmit(onSubmit)} >
      <InputStyled
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
      {errors?.phone && <ErrorSpan>{errors.phone.message?.toString()}</ErrorSpan>}

      <InputStyled
        type="text"
        value={sum}
        className='input'
        {...register('sum', { required: "Поле не должно быть пустым" })}
        onChange={changeInputSum}
        placeholder='Сумма (от 1 до 1000руб)'
      />
      {errors?.sum && <ErrorSpan>{errors.sum.message?.toString()}</ErrorSpan>}

      <SubmitButton disabled={disabledBtn} type="submit" name='submitButton'>{textSubmitButton}</SubmitButton>
      <BackButton type="reset" onClick={() => navigate.push('/')}>Назад</BackButton>
    </FormStyled>
  );
}

export default Form;