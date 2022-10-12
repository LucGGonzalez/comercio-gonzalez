import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { DateTime } from 'luxon';
import Swal from 'sweetalert2';

const sendEmail = async (id, customerInfo, navigate) => {
  const currencyOptions = { style: 'currency', currency: 'ARS' };
  const numberFormat = new Intl.NumberFormat('es', currencyOptions);
  let message = '';
  customerInfo.items
    .map(({ title, price, quantity }) => {
      message += `<p>${title}, Precio: $ ${numberFormat.format(price)}, Unidades: ${quantity} </p>`;
    })
    .join('\n');

  const EMAILJS_KEY = '7QxeKxJ4CF4UpwsHP';
  const mailData = {
    buyerName: customerInfo.buyer.name,
    buyerMail: customerInfo.buyer.email,
    buyerPhone: customerInfo.buyer.phone,
    buyerAddress: customerInfo.buyer.address,
    time: customerInfo.date,
    total: numberFormat.format(customerInfo.total),
    message: message,
  };

  const reqData = {
    service_id: 'checkout_service',
    template_id: 'checkout_form',
    user_id: EMAILJS_KEY,
    template_params: mailData,
  };

  const reqConfig = {
    method: 'POST',
    body: JSON.stringify(reqData),
    headers: {
      'Content-type': 'application/json',
    },
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', reqConfig);
  Swal.close();
  if (response.ok) {
    Swal.fire({
      title: 'Operación exitosa',
      html: `Se han enviado a tu correo electrónico los datos de la operación. <br> El id de la operación es ${id}.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      background: '#19191a',
      color: '#fff',
    });
  } else {
    Swal.fire({
      title: 'Error en la operación',
      text: 'No se ha podido enviar correctamente el correo.',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      background: '#19191a',
      color: '#fff',
    });
  }
  navigate('/');
};

const Checkout = () => {
  const { cart, clear, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const cartData = [];
    cart.map(({ id, title, quantity, price }) =>
      cartData.push({
        id,
        title,
        quantity,
        price,
      })
    );

    const customerInfo = {
      buyer: {
        name: data.inputName,
        email: data.inputMail,
        phone: data.inputPhone,
        address: data.inputAddress,
      },
      items: cartData,
      date: DateTime.now().toLocaleString({ locale: 'es', ...DateTime.DATE_FULL }),
      total: totalPrice(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    Swal.fire({
      title: 'Aguarde un momento...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      background: '#19191a',
      color: '#fff',
      showConfirmButton: false,
    });
    Swal.showLoading();
    addDoc(ordersCollection, customerInfo).then(({ id }) => {
      sendEmail(id, customerInfo, navigate);
      clear();
    });
  };

  return (
    <section className="flex min-h-[84vh] flex-col justify-center gap-8">
      <div className="text-ktm-blue-200 my-12 flex flex-col items-center px-8 text-center">
        <h1 className="mt-4 text-4xl font-bold text-gray-700 md:text-6xl">Checkout</h1>
        <p className="text-xl font-semibold text-gray-700 md:text-2xl">Ingresá tus datos para finalizar tu compra.</p>
      </div>
      <form className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-12" onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="inputName"
          className="col-span-1 flex flex-col gap-2 text-center text-sm font-semibold text-blue-600 md:col-span-6"
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
            placeholder="Walter Hartwell"
          />
          <p>{errors?.inputName?.message}</p>
        </label>

        <label
          htmlFor="inputMail"
          className="col-span-1 flex flex-col gap-2 text-center text-sm font-semibold text-blue-600 md:col-span-6"
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
          className="col-span-1 flex flex-col gap-2 text-center text-sm font-semibold text-blue-600 md:col-span-6"
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
          htmlFor="inputAddress"
          className="col-span-1 flex flex-col gap-2 text-center text-sm font-semibold text-blue-600 md:col-span-6"
        >
          Dirección*
          <input
            type="text"
            id="inputAddress"
            className="focus:ring-[blue-600] h-12 rounded-md border-[#d9d9d9] text-gray-700 focus:border-blue-600 focus:ring-1"
            aria-invalid={errors.inputAddress ? 'true' : 'false'}
            {...register('inputAddress', {
              required: { value: true, message: 'Ingrese su dirección.' },
              minLength: {
                value: 5,
                message: 'Su dirección debe contener al menos cinco caracteres.',
              },
            })}
            placeholder="308 Negra Arroyo Lane"
          />
          <p>{errors?.inputAddress?.message}</p>
        </label>
        <button
          type="submit"
          className="col-span-1 mb-8 flex h-12 items-center justify-center rounded-full border-transparent bg-gray-700 px-4 font-bold uppercase text-white md:col-start-5 md:col-end-9 xl:col-start-6 xl:col-end-8"
        >
          Comprar
        </button>
      </form>
    </section>
  );
};

export default Checkout;
