import { useState } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";

function AdminDoação() {
  const [doacao, setDoacao] = useState(-1);
  const [values, setValues] = useState({});

  
  const inputs = [
    {
      type: "date",
      label: "Data",
      placeholder: "dd/mm/yyyy",
    },
    {
      type: "select",
      label: "Doador",
      placeholder: "Marco Antônio",
    },
    {
      type: "select",
      label: "Tipo de Doação",
      placeholder: "Vestimenta",
    },
    {
      type: "number",
      label: "Quantidade",
      placeholder: "1",
    },
  ];

  const doacoes = [
    {
      Doador: "Flávio Júlior",
      'Tipo de Doação': "Ar Condicionado Velho",
    },
    {
      Doador: "Rafuel rudin",
      'Tipo de Doação': "Vestimenta",
    },
    {
      Doador: "Biel Hesmelinguido",
      'Tipo de Doação': "Alimento",
    },
    {
      Doador: "Guido Lanches",
      'Tipo de Doação': "Geladeira velha",
    },
    {
      Doador: "Renata Ingrata",
      'Tipo de Doação': "Cobertor",
    },
  ];

  function handleClickDoacao(index) {
    setDoacao(index);
  }
  return (
    <div className="w-screen h-full flex items-center flex-col">
      <NavbarAdmin />
      <div className="w-screen h-full flex items-center max-lg:flex-col">
        <AdminInputs
          infos={doacao !== -1 && doacoes[doacao]}
          handleClickInfos={handleClickDoacao}
          inputs={inputs}
          page={["Doações", "Doação"]}
          values={values}
          setValues={setValues}
        />
        <AdminList
          infos={doacoes}
          indexInfos={doacao}
          handleClickInfos={handleClickDoacao}
          showInfos={["Doador", "Tipo de Doação"]}
          page={"Doações"}
        />
      </div>
    </div>
  );
}

export default AdminDoação;
