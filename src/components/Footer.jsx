import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="flex min-h-[7vh] flex-col items-center justify-center gap-4 bg-gray-800 text-white md:flex-row">
      <p className="text-center">Copyright. Todos los derechos reservados. Gustavo Smith, 2022.</p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/gustavobsmith/">
          <BsLinkedin className="text-3xl" />
        </a>
        <a href="https://www.instagram.com/gusmith21/">
          <BsInstagram className="text-3xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
