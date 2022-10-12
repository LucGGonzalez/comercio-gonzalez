import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { DateTime } from 'luxon';

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ inputName, inputSurname, inputMail, inputMessage, inputPhone, inputZip }) => {
    Swal.fire({
      title: 'Muchas gracias por contactarnos',
      text: `Le responderemos a la brevedad, ${inputName}.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      background: '#19191a',
      color: '#fff',
    });

    const msg = {
      Nombre: `${inputName} ${inputSurname}`,
      Mail: inputMail,
      Mensaje: inputMessage,
      Teléfono: inputPhone,
      CP: inputZip || 'No tiene',
      fecha: DateTime.now().toLocaleString({ locale: 'es', ...DateTime.DATE_FULL }),
    };

    const messages = localStorage.getItem('messages') || '[]';
    const messagesArray = JSON.parse(messages);
    messagesArray.push(msg);
    localStorage.setItem('messages', JSON.stringify(messagesArray));
  };

  return (
    <section className="flex min-h-[84vh] flex-col justify-center">
      <div className="text-ktm-blue-200 my-12 flex flex-col items-center text-center">
        <h1 className="mt-4 text-4xl font-bold text-gray-700">¡Contactanos!</h1>
        <p className="text-xl font-semibold text-gray-700">Te responderemos a la brevedad.</p>
      </div>
      <form className="m-auto grid w-[60vw] grid-cols-1 gap-8 md:grid-cols-12" onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="inputName"
          className="col-span-1 flex flex-col gap-2 text-xs font-semibold text-blue-600 md:col-span-6"
        >
          Nombre*
          <input
            type="text"
            id="inputName"
            className="focus:ring-[blue-600] h-12 rounded-md border-[#d9d9d9] text-gray-700 focus:border-blue-600 focus:ring-1"
            aria-invalid={errors.inputName ? 'true' : 'false'}
            {...register('inputName', {
              required: { value: true, message: 'Ingrese su nombre.' },
              minLength: {
                value: 2,
                message: 'Su nombre debe contener al menos dos caracteres.',
              },
            })}
            placeholder="Juan"
          />
          <p>{errors?.inputName?.message}</p>
        </label>

        <label
          htmlFor="inputSurname"
          className="col-span-1 flex flex-col gap-2 text-xs font-semibold text-blue-600 md:col-span-6"
        >
          Apellido*
          <input
            type="text"
            id="inputSurname"
            className="focus:ring-[blue-600] h-12 rounded-md border-[#d9d9d9] text-gray-700 focus:border-blue-600 focus:ring-1"
            aria-invalid={errors.inputSurname ? 'true' : 'false'}
            {...register('inputSurname', {
              required: { value: true, message: 'Ingrese su apellido.' },
              minLength: {
                value: 2,
                message: 'Su apellido debe contener al menos dos caracteres.',
              },
            })}
            placeholder="Perez"
          />
          <p>{errors?.inputSurname?.message}</p>
        </label>

        <label
          htmlFor="inputMail"
          className="col-span-1 flex flex-col gap-2 text-xs font-semibold text-blue-600 md:col-span-4"
        >
          E-mail*
          <input
            type="email"
            id="inputMail"
            className="focus:ring-[blue-600] h-12 rounded-md border-[#d9d9d9] text-gray-700 focus:border-blue-600 focus:ring-1"
            aria-invalid={errors.inputMail ? 'true' : 'false'}
            {...register('inputMail', {
              required: { value: true, message: 'Ingrese su correo.' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Ingrese un correo válido.',
              },
            })}
            placeholder="ejemplo@email.com"
          />
          <p>{errors?.inputMail?.message}</p>
        </label>

        <label
          htmlFor="inputPhone"
          className="col-span-1 flex flex-col gap-2 text-xs font-semibold text-blue-600 md:col-span-4"
        >
          Teléfono*
          <input
            type="tel"
            id="inputPhone"
            className="focus:ring-[blue-600] h-12 rounded-md border-[#d9d9d9] text-gray-700 focus:border-blue-600 focus:ring-1"
            aria-invalid={errors.inputPhone ? 'true' : 'false'}
            {...register('inputPhone', {
              required: { value: true, message: 'Ingrese su teléfono.' },
              pattern: {
                value: /^[0-9]{3,10}$/,
                message: 'Ingrese un teléfono válido.',
              },
            })}
            placeholder="0123456789"
          />
          <p>{errors?.inputPhone?.message}</p>
        </label>

        <label
          htmlFor="inputZip"
          className="col-span-1 flex flex-col gap-2 text-xs font-semibold text-blue-600 md:col-span-4"
        >
          Código Postal
          <input
            type="number"
            id="inputZip"
            className="focus:ring-[blue-600] h-12 rounded-md border-[#d9d9d9] text-gray-700 focus:border-blue-600 focus:ring-1"
            aria-invalid={errors.inputZip ? 'true' : 'false'}
            {...register('inputZip', {
              pattern: {
                value: /^[0-9]{3,10}$/,
                message: 'Ingrese un código postal válido.',
              },
            })}
            placeholder="0123456789"
          />
          <p>{errors?.inputZip?.message}</p>
        </label>

        <label
          htmlFor="inputMessage"
          className="col-span-1 flex flex-col gap-2 text-xs font-semibold text-blue-600 md:col-span-12"
        >
          Mensaje*
          <textarea
            id="inputMessage"
            className="focus:ring-[blue-600] rounded-md border-[#d9d9d9] text-gray-700 focus:border-blue-600 focus:ring-1"
            rows="5"
            aria-invalid={errors.inputMessage ? 'true' : 'false'}
            {...register('inputMessage', {
              required: {
                value: true,
                message: 'Ingrese un mensaje.',
              },
              maxLength: {
                value: 200,
                message: 'Su mensaje no puede contener más de 200 caracteres.',
              },
            })}
            placeholder="Su mensaje"
          />
          <p>{errors?.inputMessage?.message}</p>
        </label>
        <button
          type="submit"
          className="col-span-1 mt-4 mb-20 h-12 rounded-full border-transparent bg-gray-700 font-bold uppercase text-white md:col-start-5 md:col-end-9 xl:col-start-6 xl:col-end-8"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
