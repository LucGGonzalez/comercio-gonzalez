import React, { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../Icons/MainLogo';
import NavbarElem from './NavbarElem';
import CartWidget from './CartWidget';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const sectionData = [
    { name: 'Todos los componentes', id: 'all' },
    { name: 'Ofertas', id: 'ofertas' },
    { name: 'Últimas unidades', id: 'ultimasunidades' },
    { name: 'Contacto', id: 'contacto' },
  ];
  const navElems = [];

  sectionData.map((e) => navElems.push(<NavbarElem name={e.name} id={e.id} key={e.id} />));

  return (
    <header className="min-h-[9vh]">
      <nav className="bg-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-3 md:px-6 lg:px-8">
          <Link className="inline-flex items-center py-2" to="/">
            <Logo width={60} height={60} />
            <h2 className="text-xl font-semibold text-white">Smith Store</h2>
          </Link>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-center gap-4">
                  {navElems}
                  <CartWidget />
                </div>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:bg-gray-900"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <IconContext.Provider value={{ size: '1.5rem' }}>
                  {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navElems}
              <CartWidget mobile="true" />
            </div>
          </div>
        </Transition>
      </nav>
    </header>
  );
};

export default Navbar;
