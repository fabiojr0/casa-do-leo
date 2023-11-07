import { useState } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";

function AdminFotos() {
  const [foto, setFoto] = useState(-1);
  const [values, setValues] = useState({});


  const inputs = [
    {
      type: "date",
      label: "Data",
      placeholder: "dd/mm/yyyy",
    },
    {
      type: "text",
      label: "Descrição",
      placeholder: "Campanha do agasalho",
    },
    {
      type: "file",
      label: "Link 1",
      placeholder: "Nenhum arquivo escolhido",
    },
    {
      type: "file",
      label: "Link 2",
      placeholder: "Nenhum arquivo escolhido",
    },
    {
      type: "file",
      label: "Link 3",
      placeholder: "Nenhum arquivo escolhido",
    },
    
  ];

  const fotos = [
    {
      Descrição: "Campanha do Agasalho",
    },
    {
      Descrição: "Campanha do sei la oque",
    },
    {
      Descrição: "Doação de amilemntos",
    },
  ];

  function handleClickFoto(index) {
    setFoto(index);
  }
  return (
    <div className="w-screen h-full flex items-center flex-col">
      <NavbarAdmin />
      <div className="w-screen h-full flex items-center max-lg:flex-col">
        <AdminInputs
          infos={foto !== -1 && fotos[foto]}
          handleClickInfos={handleClickFoto}
          inputs={inputs}
          values={values}
          setValues={setValues}
          page={['Fotos', 'Foto']}
          />
        <AdminList
          infos={fotos}
          indexInfos={foto}
          handleClickInfos={handleClickFoto}
          showInfos={["Descrição"]}
          page={'Fotos'}
        />
      </div>
    </div>
  );
}

export default AdminFotos;
