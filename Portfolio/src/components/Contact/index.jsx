import { useForm } from 'react-hook-form'
import Styled from './styles'
import React from 'react';
import emailjs from '@emailjs/browser'
import { fadeIn } from '../../utils/FadeIn'

const EmailContact = () => {
  const SERVICE = import.meta.env.VITE_SERVICES_ID
  const TEMPLATE = import.meta.env.VITE_TEMPLATE
  const USER = import.meta.env.VITE_USER
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  console.log(errors)

  const sendEmail = (formData) => {
    emailjs
      .send(SERVICE, TEMPLATE, formData, USER)
      .then(
        (result) => {
          alert('Tu correo se a enviado con exito')
          console.log(result.user_name);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <><Styled.Section >
      <Styled.Container variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}>
        <Styled.Title id='mensaje'>Escribe a mi Email:</Styled.Title>
        <Styled.Form onSubmit={handleSubmit(sendEmail)}>

          <Styled.Label htmlFor="name">Nombre:</Styled.Label>
          <Styled.Input

            name='user_name'
            type='text'
            placeholder="nombre"
            {...register('user_name', {
              required: {
                value: true,
                message: 'Nombre es requerido'
              },
              minLength: {
                value: 2,
                message: 'Nombre debe tener almenos 2 caracteres'
              },
              maxLength: {
                value: 30,
                message: 'Nombre  debe tener maximo  30 caracteres'
              }
            })} />
          {
            errors.user_name && <Styled.Span>{errors.user_name.message}</Styled.Span>
          }


          <Styled.Label htmlFor="email">Email:</Styled.Label>
          <Styled.Input
            name='user_email'
            type='email'
            placeholder="user@user.com"
            {...register('user_email', {
              required: {
                value: true,
                message: 'Email es requerido'
              },
              pattern: {
                value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                message: 'Email no es valido'
              }
            })} />
          {
            errors.user_email && <Styled.Span>{errors.user_email.message}</Styled.Span>
          }

          <Styled.Label htmlFor="asunto">Asunto:</Styled.Label>
          <Styled.Input

            name='user_asunto'
            type='text'
            placeholder="asunto"
            {...register('user_asunto', {
              required: {
                value: true,
                message: 'Asunto Requerido'
              }
            })} />
          {
            errors.user_asunto && <Styled.Span>{errors.user_asunto.message}</Styled.Span>
          }

          <Styled.Label htmlFor="message">Mensaje:</Styled.Label>
          <Styled.Textatea
            id='message'
            name='message'
            cols={'24'}
            rows={`5`}
            placeholder="mensaje"
            {...register('message', {
              required: {
                value: true,
                message: 'El mensaje es requerido '
              }
            })} />
          {
            errors.message && <Styled.Span>{errors.message.message}</Styled.Span>
          }

          <Styled.Button value={'send'}>Enviar</Styled.Button>
        </Styled.Form>
      </Styled.Container>

    </Styled.Section>

    </>

  )

}
export default EmailContact