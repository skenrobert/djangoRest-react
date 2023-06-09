import { useState, useContext } from "react";
import { AppContex } from "../../contex/AppContext";
import TextInput from "../Shared/TextInput";
import { Form, useParams, useNavigate } from "react-router-dom";

import MainMenu from "../Shared/MainMenu";
// import FlashMessages from '../Shared/FlashMessages';
import TopHeader from "../Shared/TopHeader";
import BottomHeader from "../Shared/BottomHeader";

function Usuariosi({}) {
  const { url_backend, seccion } = useContext(AppContex);
  const [email, setEmail] = useState("");
  const [nombres, setNombre] = useState("");
  const [apellidos, setApellido] = useState("");
  const [tipoidentificacione, setTipoIdentificacion] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [razonsocial, setRazonsocial] = useState("");
  const [representantelegal, setRepresentantelegal] = useState("");
  const [direccion, setDireccion] = useState("");
  const [direccion2, setDireccion2] = useState("");
  const [celular, setCelular] = useState("");
  const [cumpleanio, setCumpleanio] = useState("");
  const navigate = useNavigate();

  if (seccion.access_token == "") {
    navigate('/', { replace: true });
  }

  function handleSubmit(e) {
    e.preventDefault();
    insertarData();
  }

  const insertarData = async () => {
    let URL = url_backend + "users";

    const data = new FormData();
    data.append("email", email);
    data.append("nombres", nombres);
    data.append("apellidos", apellidos);
    data.append("tipoidentificacione", tipoidentificacione);
    data.append("identificacion", identificacion);
    data.append("razonsocial", razonsocial);
    data.append("representantelegal", representantelegal);
    data.append("direccion", direccion);
    data.append("direccion2", direccion2);
    data.append("celular", celular);
    data.append("cumpleanio", cumpleanio);

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: 'Bearer ' + seccion.access_token,
        contentType: "application/x-www-form-urlencoded",
        processData: false,
        dataType: "json",
      },
      body: data,
    })
      .catch((error) => console.error("Error:", error))
      .then((res) => {
        let value = res.json();
        console.log(value);
        navigate("/usuarios", { replace: true });
      });

  };

  return (
    <div>
      <div className="flex flex-col">
      <h1 className="mb-8 text-3xl font-bold">
        <span className="font-medium text-indigo-600"> Test React Farmart</span>
        </h1>

        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <MainMenu className="flex-shrink-0 hidden w-36 p-12 overflow-y-auto bg-indigo-800 md:block" />
            <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto ">
              <div className="max-w-5xl mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="bg-indigo-900 p-10 mb-4 rounded shadow"
                >
                  <h1 className="text-2xl text-white mb-3 font-bold">
                    Insertar Persona
                  </h1>

                  <div className="md:flex md:items-start">
                    <div class="md:w-1/3">
                      <TextInput
                        className="p-0 max-w-full mb-2"
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="email"
                        autoFocus
                        //   errors={errors.password}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Nombres"
                        name="nombres"
                        type="text"
                        placeholder="nombres"
                        //   errors={errors.password}
                        value={nombres}
                        onChange={(e) => {
                          setNombre(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Apellidos"
                        name="apellidos"
                        type="text"
                        placeholder="apellidos"
                        //   errors={errors.password}
                        value={apellidos}
                        onChange={(e) => {
                          setApellido(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Tipo Iden."
                        name="tipoidentificacione"
                        type="text"
                        placeholder="Tipo Identificacione"
                        //   errors={errors.password}
                        value={tipoidentificacione}
                        onChange={(e) => {
                          setTipoIdentificacion(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Identificacion"
                        name="identificacion"
                        type="text"
                        placeholder="identificacion"
                        //   errors={errors.password}
                        value={identificacion}
                        onChange={(e) => {
                          setIdentificacion(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Razon Social"
                        name="razonsocial"
                        type="text"
                        placeholder="Razon Social"
                        //   errors={errors.password}
                        value={razonsocial}
                        onChange={(e) => {
                          setRazonsocial(e.target.value);
                        }}
                      />
                    </div>
                    <div class="md:w-2/3  float-right">
                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Representante Legal"
                        name="representantelegal"
                        type="text"
                        placeholder="Representante Legal"
                        //   errors={errors.password}
                        value={representantelegal}
                        onChange={(e) => {
                          setRepresentantelegal(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Direccion"
                        name="direccion"
                        type="text"
                        placeholder="Direccion"
                        //   errors={errors.password}
                        value={direccion}
                        onChange={(e) => {
                          setDireccion(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Direccion 2"
                        name="direccion2"
                        type="text"
                        placeholder="Direccion 2"
                        //   errors={errors.password}
                        value={direccion2}
                        onChange={(e) => {
                          setDireccion2(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Celular"
                        name="celular"
                        type="text"
                        placeholder="Celular"
                        //   errors={errors.password}
                        value={celular}
                        onChange={(e) => {
                          setCelular(e.target.value);
                        }}
                      />

                      <TextInput
                        className="p-0 w-full mb-2"
                        label="Cumpleaño"
                        name="cumpleanio"
                        type="text"
                        placeholder="Cumpleanio"
                        //   errors={errors.password}
                        value={cumpleanio}
                        onChange={(e) => {
                          setCumpleanio(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <button className="bg-green-700 px-2 py-1 text-white">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuariosi;
