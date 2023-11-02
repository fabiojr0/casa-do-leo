import { useState } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";

function AdminUser() {
  const [user, setUser] = useState(-1);

  const inputs = [
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
      type: "password",
      label: "Senha",
      placeholder: "********",
    },
  ];

  const users = [
    {
        Nome: "Flávio Júlior",
        CPF: "123.123.123-01",
    },
  ];

  function handleClickUser(index) {
    setUser(index);
  }
  return (
    <div className="w-screen h-full flex items-center flex-col">
      <NavbarAdmin />
      <div className="w-screen h-full flex items-center max-lg:flex-col">
        <AdminInputs
          infos={user !== -1 && users[user]}
          handleClickInfos={handleClickUser}
          inputs={inputs}
          page={['Administradores', 'Administrador']}
          />
        <AdminList
          infos={users}
          indexInfos={user}
          handleClickInfos={handleClickUser}
          showInfos={["Nome"]}
          page={'Administradores'}
        />
      </div>
    </div>
  );
}

export default AdminUser;
