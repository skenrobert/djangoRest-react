import { Form, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AppContex } from "../../contex/AppContext";
import MainMenu from "../Shared/MainMenu";
import TopHeader from "../Shared/TopHeader";
import BottomHeader from "../Shared/BottomHeader";

export default function Usuario() {
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const { url_backend, url_img, seccion } = useContext(AppContex);
  const navigate = useNavigate();

  if (seccion.access_token == "") {
    navigate("/", { replace: true });
  }

  const [user, setUser] = useState({
    id: "",
    email: "",
    imagen: "",
    estatus: true,
    msgEstatus: "",
    creador_id: "",
    persona_id: "",
    nombres: "",
    apellidos: "",
    razonsocial: "",
    representantelegal: "",
    identificacion: "",
    direccion: "",
    direccion2: "",
    celular: "",
    cumpleanios: "",
    contactocelular: "",
    tipoidentificacione: "",
  });

  useEffect(() => {
    if (isLoading) {
      let url = url_backend + "users/" + userId;
      async function fetchData() {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + seccion.access_token,
              contentType: "application/x-www-form-urlencoded",
              processData: false,
              dataType: "json",
            },
          });
          if (response.ok) {
            const res = await response.json();
            setImageUrl(url_img + "users/" + res.data.imagen);
            setError(null);
            setIsLoading(false);


            const resUser = {
              id: res.data.id,
              email: res.data.email,
              estatus: true,
              msgEstatus: "",
              creador_id: "",
              persona_id: "",
              nombres: res.data.persona.nombres,
              apellidos: res.data.persona.apellidos,
              //   razonsocial: res.data.persona.razonsocial,
              //   representantelegal: res.data.persona.representantelegal,
            //   tipoidentificacione:res.data.persona.tipoidentificacione.descripcion,
              identificacion: res.data.persona.identificacion,
              direccion: res.data.persona.direccion,
              //   direccion2: res.data.persona.direccion2,
              celular: res.data.persona.celular,
              //   cumpleanios: res.data.persona.cumpleanios,
              contactocelular: res.data.persona.contactocelular,
            };

            setUser(resUser);
          } else {
            setError("Hubo un error al obtener el usuario");
          }
        } catch (error) {
          console.log(error)
          setError("No pudimos hacer la solicitud para obtener el usuario");
        }
      }
      fetchData();
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="User">
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="User">
        <h1>{error}</h1>
        <button onClick={() => history.back()}>Volver a intentarlo</button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="mb-8 text-3xl font-bold">Test React Farmart</h1>

        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <MainMenu className="flex-shrink-0 hidden w-36 p-12 overflow-y-auto bg-indigo-800 md:block" />
            <div className="w-full px-4 py-20 overflow-hidden overflow-y-auto ms-12">
              <div key={user.id} className="text-left">
                <div className="bg-indigo-800 text-white p-4 rounded-md">
                  <h1 className="text-3xl font-bold capitalize text-center">
                    Detalles de Usuario
                  </h1>
                  <br />
                  <img
                    className="float-right"
                    src={imageUrl}
                    alt="Imagen del usuario"
                  />
                  <div className="text-xl font-bold capitalize">
                    Email: {user.email}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Nombres: {user.nombres}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Apellidos: {user.apellidos}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Tipo Identificacion: {user.tipoidentificacione}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Identificacion: {user.identificacion}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Razonsocial: {user.razonsocial}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Representante legal: {user.representantelegal}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Direccion: {user.direccion}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Direccion 2: {user.direccion2}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    Celular: {user.celular}
                  </div>
                  <div className="text-xl font-bold capitalize">
                    cumpleaños: {user.cumpleanio}
                  </div>
                  <button
                    className="bg-lime-700 px-2 py-1 rounded-md hover:bg-lime-400 float-right"
                    onClick={() => history.back()}
                  >
                    Volver{" "}
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
