import { useState, useEffect } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";

import axios from "../api/axios";

const DOADORES_URL = "/doadores/";

function AdminDoador() {
  const [doador, setDoador] = useState(-1);
  const [doadores, setDoadores] = useState([]);
  const [newDoador, setNewDoador] = useState(-1);
  const [values, setValues] = useState({});

  const inputs = [
    {
      type: "text",
      label: "cpf",
      placeholder: "123.123.123-01",
    },
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
      type: "text",
      label: "endereco",
      placeholder: "Rua Gastão Gonçalves",
    },
    {
      type: "text",
      label: "telefone",
      placeholder: "21 912341234",
    },
  ];

  useEffect(() => {
    async function getDoadores() {
      try {
        const response = await axios.get(DOADORES_URL, {
          withCredentials: true,
        });
        console.log(JSON.stringify(response?.data));
        setDoadores(response?.data);
      } catch (err) {
        if (!err?.response) {
          console.log("No server Response");
        } else if (err.response?.status === 401) {
          console.log("a");
        } else {
          console.log("Login falhou");
        }
      }
    }
    getDoadores();
  }, [newDoador]);

  const handlePost = async (e) => {
    e.preventDefault();
    const ok = confirm("Deseja adicionar um novo doador?");
    if (ok) {
      try {
        const response = await axios.post(
          DOADORES_URL,
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        setNewDoador(newDoador + 1);
        setValues({});
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
    return;
  };

  const handlePut = async (e) => {
    e.preventDefault();
    const ok = confirm("Deseja atualizar este doador?");
    if (ok) {
      try {
        const response = await axios.put(
          `${DOADORES_URL}${doadores[doador].id}/`,
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setNewDoador(newDoador + 1);
        setValues({});
        setDoador(-1);
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
    const ok = confirm("Deseja atualizar este doador?");
    if (ok) {
      try {
        const response = await axios.delete(
          `${DOADORES_URL}${doadores[id].id}/`
        );

        setNewDoador(newDoador + 1);
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

  function handleClickDoador(index) {
    setDoador(index);
  }

  return (
    <div className="w-screen h-full flex items-center flex-col">
      {console.log(doador)}
      <NavbarAdmin />
      <div className="w-screen h-full flex items-center max-lg:flex-col">
        <AdminInputs
          infos={doador !== -1 && doadores[doador]}
          handleClickInfos={handleClickDoador}
          inputs={inputs}
          page={["Doadores", "Doador"]}
          values={values}
          setValues={setValues}
          submit={doador === -1 ? handlePost : handlePut}
        />
        <AdminList
          infos={doadores}
          indexInfos={doador}
          handleClickInfos={handleClickDoador}
          showInfos={["nome", "cpf"]}
          page={"Doadores"}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default AdminDoador;
