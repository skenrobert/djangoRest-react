import React, { useState } from 'react';
import Icon from '../Shared/Icon';
import { AppContex } from "../../contex/AppContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcCollapse, FcSettings, FcPrivacy } from "react-icons/fc";

export default () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const {seccion, url_backend} = useContext(AppContex);
  const navigate = useNavigate();

      async function logout() {
          let URL = url_backend + "logout";
      
          const response = await fetch(URL, {
            method: "POST",
            headers: {
              Authorization: 'Bearer ' + seccion.access_token,
              contentType: "application/x-www-form-urlencoded",
              processData: false,
              dataType: "json",
            },
          })
            .catch((error) => console.error("Error:", error))
            .then((res) => {
              navigate("/", { replace: true });
            });
        }

  
  return (
    <div className="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:py-0 md:px-12 d:text-md">
      <div className="mt-1 mr-4">{}</div>
      <div className="relative">
        <div
          className="flex items-center cursor-pointer select-none group"
          onClick={() => setMenuOpened(true)}
        >
          <div className="mr-1 text-gray-800 whitespace-nowrap group-hover:text-indigo-600 focus:text-indigo-600">
            {/* <span>{seccion.email}</span> */}
            <span className="hidden ml-1 md:inline"> Bienvenido, {seccion.email}</span>
          </div>
          <Icon
            className="w-5 h-5 text-gray-800 fill-current group-hover:text-indigo-600 focus:text-indigo-600"
            name="cheveron-down"
          />
        </div>
        <div className={menuOpened ? '' : 'hidden'}>
          <div className="absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl">

          <Link to={'/personas'}>
              <FcSettings className="w-full h-8 mb-0 p-0 text-left hover:bg-indigo-600 hover:text-white" />
            </Link>

          <FcPrivacy className="w-full h-8 mb-0 p-0 float-left hover:bg-indigo-600 hover:text-white"  onClick={() =>  logout()   } />

            <Link to=''>
              <FcCollapse className="w-full h-8 mb-0 p-0 float-left hover:bg-indigo-600 hover:text-white" onClick={() => setMenuOpened(false)}/>
            </Link>

          </div>
          <div
            onClick={() => {
              setMenuOpened(false);
            }}
            className="fixed inset-0 z-10 bg-black opacity-25"
          ></div>
        </div>
      </div>
    </div>
  );
};
