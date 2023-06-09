import "styled-components";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable, { createTheme } from "react-data-table-component";
import React, { useState, useEffect, useContext } from "react";
import { AppContex } from "../../contex/AppContext";

import "../../../src/App.css";

import MainMenu from "../Shared/MainMenu";
// import FlashMessages from '../Shared/FlashMessages';
import TopHeader from "../Shared/TopHeader";
import BottomHeader from "../Shared/BottomHeader";

import { FcSearch, FcEmptyTrash, FcEditImage, FcPlus} from "react-icons/fc";

const Button = ({ id }) => (
  <button className="btn btn-primary" type="button" onClick={() => alert(id)}>
    Editar
  </button>
);

export default function Factura () {
  //1- Configurar los hooks
  const [facturas, setFacturas] = useState([]);
  const { url_backend, seccion } = useContext(AppContex);
  const navigate = useNavigate();

  //2- Funcion para mostrar los datos con fetch
  const URL = url_backend + "formulas ";

  if (seccion.access_token == "") {
    navigate('/', { replace: true });
}

  const showData = async () => {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + seccion.access_token,
        contentType: "application/x-www-form-urlencoded",
        processData: false,
        dataType: "json",
      },
    });
    const data = await response.json();
    // console.log(data)
    setFacturas(data.data);
  };

  useEffect(() => {
    showData();
  }, []);

  const deleteData = async (id) => {
    const URL = url_backend + "formulas /" + id;

    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization: 'Bearer ' + seccion.access_token,
        contentType: "application/x-www-form-urlencoded",
        processData: false,
        dataType: "json",
      },
    })
      .catch((error) => console.error("Error:", error))
      .then((res) => {
        let value = res.json();
        console.log(value);
        alert("se borro con exito la Factura");
        showData();
      });
  };

  //3- Configuramos las columns para Datatables

  const columns = [
    {
      name: "Codigo",
      selector: (row) => row.codigo,
      center: true,
      sortable: true,
      type: "numeric",
    },
    {
      name: "Factura",
      sortable: true,
      selector: (row) => row.factura,
      grow: 2,
    },
    {
      name: "Vence",
      sortable: true,
      selector: (row) => row.fechavence,
      style: {
        // backgroundColor: "rgba(63, 195, 128, 0.9)",
        // color: "white",
      },
    },
    {
      name: "Consecutivo DIAN",
      sortable: true,
      selector: (row) => row.consecutivodian,
      style: {
        // backgroundColor: "rgba(63, 195, 128, 0.9)",
        // color: "white",
      },
    },
    {
        name: "Observacion",
        sortable: true,
        selector: (row) => row.observacion,
        style: {
          // backgroundColor: "rgba(63, 195, 128, 0.9)",
          // color: "white",
        },
      },
    {
      name: "Acciones",
      selector: "Acciones",
      button: true,
      grow: 3,
      cell: (row) => (
        <div className="text-center">
          <Link to={''}>
              <FcSearch className="w-8 h-8 mb-0 p-0 float-left" />
            </Link>

          <FcEmptyTrash
            className="w-8 h-8 mb-0 p-0 float-right"
            onClick={() =>{
              if (confirm('¿Estás seguro de que quieres eliminar esta Factura?')) {
                //deleteData(row.id)
                }
              }}
          />

          <Link to={''}>
              <FcEditImage className="w-8 h-8 mb-0 p-0 float-left" />
            </Link>

        </div>
      ),
    },
  ];

  //tema

  // createTheme creates a new theme named solarized that overrides the build in dark theme
  createTheme(
    "custom",
    {
      text: {
        primary: "#FFFFFF",
        secondary: "#2aa198",
      },
      background: {
        default: "rgb(56, 48, 163)",
      },
      context: {
        background: "#000000",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      Header: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
  );

  // paginacion en español
  const paginacionOpciones = {
    rowsPerpageText: "Filas por Pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  //4- Mostramos la data en Datatable
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="mb-8 text-3xl font-bold">Test React Farmart </h1>

        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <MainMenu className="flex-shrink-0 hidden w-36 p-12 overflow-y-auto bg-indigo-800 md:block" />
            
            <div className="w-full h-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12">

            <div className="table-responsive">
                <Link to={''}>
                     <FcPlus className="w-8 h-8 mb-0 p-0 float-right" />
                </Link>
            </div>

              <div className="table-responsive">
                <DataTable
                  title="Lista de formulas "
                  columns={columns}
                  data={facturas}
                  theme="custom"
                  pagination
                  paginationComponentOptions={paginacionOpciones}
                  fixedHeader
                  fixedHeaderScrollHeight="400px"
                  // selectableRows
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
