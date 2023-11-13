import { useState, useEffect } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import axios from "../api/axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const ADMIN_URL = "/admins/";
const REGISTER_URL = "/admins/register/";

function AdminUser() {
  const [user, setUser] = useState(-1);
  const [users, setUsers] = useState([]);
  const [newAdmin, setNewAdmin] = useState(-1);
  const [values, setValues] = useState({});

  const inputs = [
    {
      type: "text",
      label: "nome",
      placeholder: "Marco Antônio",
    },
    {
      type: "text",
      label: "email",
      placeholder: "usuario@email.com",
    },
    {
      type: "password",
      label: "password",
      placeholder: "********",
    },
  ];

  // const users = [
  //   {
  //       Nome: "Flávio Júlior",
  //       CPF: "123.123.123-01",
  //   },
  // ];

  useEffect(() => {
    async function getAdmins() {
      try {
        const response = await axios.get(ADMIN_URL, {
          withCredentials: true,
        });
        setUsers(response?.data);
      } catch (err) {
        // navigate("/admin");
      }
    }
    getAdmins();
  }, [newAdmin]);

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(values);
    const ok = confirm("Deseja adicionar um novo tipo de doação?");
    if (ok) {
      try {
        const response = await axios.post(
          REGISTER_URL,
          JSON.stringify(values),
          {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': cookies.get('csrftoken'),
            },
            withCredentials: true
          }
        );

        setNewAdmin(newAdmin + 1);
        setValues({});
      } catch (err) {
        if (!err?.response) {
          console.log("No server Response");
        } else if (err.response?.status === 400) {
          console.log("Misssing username or password");
        } else if (err.response?.status === 401) {
          console.log("Unauthorized");
        } else {
          console.log("failed");
        }
      }
    }
    return;
  };

  const handlePut = async (e) => {
    e.preventDefault();
    const ok = confirm("Deseja atualizar este doador?");
    if (ok) {
      try {
        const response = await axios.put(
          `${ADMIN_URL}${users[user].id}/`,
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setNewAdmin(newAdmin + 1);
        setValues({});
        setUser(-1);
      } catch (err) {
        if (!err?.response) {
          console.log("No server Response");
        } else if (err.response?.status === 400) {
          console.log("Misssing username or password");
        } else if (err.response?.status === 401) {
          console.log("Unauthorized");
        } else {
          console.log("Login failed");
        }
      }
    }
  };

  const handleDelete = async (id) => {
    const ok = confirm("Deseja deletar este doador?");
    const config = {
      headers: {
        'X-CSRFToken': cookies.get('csrftoken'), // Adicione o token CSRF ao cabeçalho
      },
      withCredentials: true, // Permite o envio de cookies
    };

    if (ok) {
      try {
        const response = await axios.delete(
          `${ADMIN_URL}${users[id].id}/`, config);
        setNewAdmin(newAdmin + 1);
      } catch (err) {
        if (!err?.response) {
          console.log("No server Response");
        } else if (err.response?.status === 400) {
          console.log("Misssing username or password");
        } else if (err.response?.status === 401) {
          console.log("Unauthorized");
        } else {
          console.log("Login failed");
        }
      }
    }
  };

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
          values={values}
          setValues={setValues}
          submit={user === -1 ? handlePost : handlePut}
          />
        <AdminList
          infos={users}
          indexInfos={user}
          handleClickInfos={handleClickUser}
          showInfos={["nome"]}
          page={'Administradores'}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default AdminUser;
