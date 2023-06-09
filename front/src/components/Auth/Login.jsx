import { useState, useContext } from "react";
import Logo from "../Shared/Logo";
import LoadingButton from "../Shared/LoadingButton";
import TextInput from "../Shared/TextInput";
import { AppContex } from "../../contex/AppContext";
import { Route, Routes, useNavigate } from 'react-router-dom';

export default () => {

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [remember, setRemember] = useState("");
  const { url_backend, setSeccion } = useContext(AppContex);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    showData();
  }

  const showData = async () => {
    const URL = url_backend + "login";

    const data = new FormData();
    data.append('email', inputEmail);
    data.append('password', inputPassword);

   const response = await fetch(URL, {
          method: "POST",
          headers: {
            contentType: "application/x-www-form-urlencoded",
            processData: false,
            dataType:"json",
          },
          body: data,
    })
      // .then((res) => value = res.json())
      .catch((error) => console.error("Error:", error));

      const value = await response.json()

      if(value.data){
            const LoginUsuario = {
              id: value.data.id,
              email: value.data.email,
              imagen: value.data.imagen,
              estatus: value.data.estatus,
              msgEstatus: value.data.msgEstatus,
              email_verified_at: value.data.email_verified_at,
              creador_id: value.data.creador_id,
              persona_id: value.data.persona_id,
              access_token: value.access_token,
            }
            setSeccion(seccion => LoginUsuario)
            navigate('/personas', { replace: true });

      }else{
        alert(value.message)
        setInputEmail("")
        setInputPassword("")
      }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-900 overflow-hidden max-w-full">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
        >
          <div className="px-10 py-12">
            <h1 className="text-3xl font-bold text-center">Bienvenido!</h1>
            <div className="w-24 mx-auto mt-6 border-b-2" />
            <TextInput
              className="mt-10"
              label="Email"
              name="email"
              type="text"
              // errors={errors.email}
              value={inputEmail}
              autoFocus
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
            />
            <TextInput
              className="mt-6"
              label="Password"
              name="password"
              type="password"
              // errors={errors.password}
              value={inputPassword}
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
            />
            <label
              className="flex items-center mt-6 select-none"
              htmlFor="remember"
            >
              <input
                name="remember"
                id="remember"
                className="ml-36"
                type="checkbox"
                // checked={data.remember}
                onChange={e => {setRemember(e.target.checked);
                  console.log(e.target.checked);}}
              />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>
          <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
            <a className="hover:underline" tabIndex="-1" href="#reset-password">
              Olvido su Contraseña?
            </a>
            <LoadingButton
              type="submit"
              // loading={processing}
              className="bg-indigo-900 px-2 py-1 text-white">
              Login
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};
