import { useState } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";

function AdminDoador() {
  const [doador, setDoador] = useState(-1);

  const doadores = [
    {
      nome: "Flávio Júlior",
      cpf: "123.123.123-01",
    },
    {
      nome: "Rafuel rudin",
      cpf: "696.969.666-69",
    },
    {
      nome: "Biel Hesmelinguido",
      cpf: "123.125.123-01",
    },
    {
      nome: "Guido Lanches",
      cpf: "123.123.127-01",
    },
    {
      nome: "Renata Ingrata",
      cpf: "152.123.523-01",
    },
  ];

  function handleClickDoador(index) {
    setDoador(index);
  }
  return (
    <div className="w-screen h-full flex items-center flex-col">
      <NavbarAdmin />
      <div className="w-screen h-full flex items-center ">
        <AdminInputs doador={doador !== -1 && doadores[doador]} handleClickDoador={handleClickDoador}/>
        <AdminList doadores={doadores} indexDoador={doador} handleClickDoador={handleClickDoador}/>
      </div>
    </div>
  );
}

export default AdminDoador;
