import { useState } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";

function AdminTipoDeDoação() {
  const [tipoDoacao, setTipoDoacao] = useState(-1);

  const inputs = [
    {
      type: "text",
      label: "Nome",
      placeholder: "Vestimenta",
    },
    
  ];

  const tiposDeDoacao = [
    {
      Nome: "Ar Condicionado Velho",
    },
    {
      Nome: "Vestimenta",
    },
    {
      Nome: "Alimento",
    },
    {
      Nome: "Geladeira velha",
    },
    {
      Nome: "Cobertor",
    },
  ];

  function handleClickTipoDoacao(index) {
    setTipoDoacao(index);
  }
  return (
    <div className="w-screen h-full flex items-center flex-col">
      <NavbarAdmin />
      <div className="w-screen h-full flex items-center max-lg:flex-col">
        <AdminInputs
          infos={tipoDoacao !== -1 && tiposDeDoacao[tipoDoacao]}
          handleClickInfos={handleClickTipoDoacao}
          inputs={inputs}
          page={["Tipos de Doações", "Tipos de Doação"]}
        />
        <AdminList
          infos={tiposDeDoacao}
          indexInfos={tipoDoacao}
          handleClickInfos={handleClickTipoDoacao}
          showInfos={["Nome"]}
          page={"Tipos de Doações"}
        />
      </div>
    </div>
  );
}

export default AdminTipoDeDoação;
