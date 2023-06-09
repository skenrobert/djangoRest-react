import { useState, useContext, useEffect } from "react";
import { AppContex } from "../../contex/AppContext";
import TextInput from "../Shared/TextInput";
import { Form, useParams, useNavigate } from "react-router-dom";


import MainMenu from "../Shared/MainMenu";
// import FlashMessages from '../Shared/FlashMessages';
import TopHeader from "../Shared/TopHeader";
import BottomHeader from "../Shared/BottomHeader";

function Usuariose({}) {

  const [email, setEmail] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const { url_backend, url_img, seccion } = useContext(AppContex);

  if (seccion.access_token == "") {
    navigate('/', { replace: true });
}

  const [user, setUser] = useState(
    {
      id: '',
      nombres: '',
      apellidos: '',
      imagen: '',
      razonsocial: '',
      representantelegal: '',
      identificacion: '',
      direccion: '',
      direccion2: '',
      celular: '',
      email: '',
      cumpleanios: '',
      contactocelular: '',
      tipoidentificacione_id: '',
      }
  );


  function handleSubmit(e) {
    e.preventDefault();
    editData();
  }

  const editData = async () => {
    let URL = url_backend + "users/" + userId

    const data = new FormData();
    data.append("email", email);
    data.append('_method', 'PUT');

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

  useEffect(() => {
    if (isLoading) {
      let url = url_backend + "users/" + userId
      async function fetchData() {
        try {
          const response = await fetch(url, {
                method: "GET",
                headers: {
                  Authorization: 'Bearer ' + seccion.access_token,
                  contentType: "application/x-www-form-urlencoded",
                  processData: false,
                  dataType: "json",
                },
              });
          if (response.ok) {
            const res = await response.json();
            setImageUrl(url_img + 'users/' + res.data.imagen);
            setError(null);
            setIsLoading(false);

            setEmail(email => res.data.email);

          } else {
            setError("Hubo un error al obtener el usuario");
          }
        } catch (error) {
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
        <button onClick={ () => history.back() }>Volver a intentarlo</button>
      </div>
    );
  }



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
                    Editar Usuario
                  </h1>

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

export default Usuariose;
