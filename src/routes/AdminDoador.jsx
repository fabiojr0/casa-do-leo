import { useState } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";

function AdminDoador() {
  const [doador, setDoador] = useState(-1);

  const inputs = [
    {
      type: "text",
      label: "CPF",
      placeholder: "123.123.123-01",
    },
    {
      type: "text",
      label: "Nome",
      placeholder: "Marco Antônio",
    },
    {
      type: "text",
      label: "Email",
      placeholder: "usuario@email.com",
    },
    {
      type: "text",
      label: "Endereço",
      placeholder: "Rua Gastão Gonçalves",
    },
    {
      type: "text",
      label: "Telefone",
      placeholder: "21 912341234",
    },
  ];

  

  const doadores = [
    {
      Nome: "Flávio Júlior",
      CPF: "123.123.123-01",
    },
    {
      Nome: "Rafuel rudin",
      CPF: "696.969.666-69",
    },
    {
      Nome: "Biel Hesmelinguido",
      CPF: "123.125.123-01",
    },
    {
      Nome: "Guido Lanches",
      CPF: "123.123.127-01",
    },
    {
      Nome: "Renata Ingrata",
      CPF: "152.123.523-01",
    },
  ];

  function handleClickDoador(index) {
    setDoador(index);
  }
  return (
    <div className="w-screen h-full flex items-center flex-col">
      <NavbarAdmin />
      <div className="w-screen h-full flex items-center max-lg:flex-col">
        <AdminInputs
          infos={doador !== -1 && doadores[doador]}
          handleClickInfos={handleClickDoador}
          inputs={inputs}
          page={['Doadores', 'Doador']}
          />
        <AdminList
          infos={doadores}
          indexInfos={doador}
          handleClickInfos={handleClickDoador}
          showInfos={["Nome", "CPF"]}
          page={'Doadores'}
        />
      </div>
    </div>
  );
}

export default AdminDoador;
