import { useState, useEffect } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import axios from "../api/axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const DOACOES_URL = '/doacoes/'
const INFOS_URL = '/doacoes/infos/'

function AdminDoação() {
  const [doacao, setDoacao] = useState(-1);
  const [doacoes, setDoacoes] = useState([]);
  const [values, setValues] = useState({});
  const [infos, setInfos] = useState({});
  const [newInfos, setNewInfos] = useState(-1);
  const [newDoacao, setNewDoacao] = useState(-1);

  const inputs = [
    {
      type: "date",
      label: "data",
      placeholder: "dd/mm/yyyy",
    },
    {
      type: "select",
      label: "doador",
      placeholder: "Marco Antônio",
    },
    {
      type: "select",
      label: "tipo",
      placeholder: "Vestimenta",
    },
    {
      type: "number",
      label: "quantidade",
      placeholder: "1",
    },
  ];

  useEffect(() => {
    async function getInfos() {
      try {
        const response = await axios.get(INFOS_URL, {
          withCredentials: true,
        });
        setInfos(response?.data);
      } catch (err) {
        console.log(err)
        // navigate("/admin");
      }
    }
    getInfos();
  }, [newInfos]);

  useEffect(() => {
    async function getDoacoes() {
      try {
        const response = await axios.get(DOACOES_URL, {
          withCredentials: true,
        });
        setDoacoes(response?.data);
      } catch (err) {
        // navigate("/admin");
      }
    }
    getDoacoes();
  }, [newDoacao]);

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(values);
    const ok = confirm("Deseja adicionar uma nova de doação?");
    if (ok) {
      try {
        const response = await axios.post(
          DOACOES_URL,
          JSON.stringify(values),
          {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': cookies.get('csrftoken'),
            },
            withCredentials: true
          }
        );

        setNewDoacao(newDoacao + 1);
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
    const ok = confirm("Deseja atualizar esta doação?");
    if (ok) {
      try {
        const response = await axios.put(
          `${DOACOES_URL}${doacoes[doacao].id}/`,
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setNewDoacao(newDoacao + 1);
        setValues({});
        setDoacao(-1);
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
    const ok = confirm("Deseja deletar esta doação?");
    const config = {
      headers: {
        'X-CSRFToken': cookies.get('csrftoken'), // Adicione o token CSRF ao cabeçalho
      },
      withCredentials: true, // Permite o envio de cookies
    };

    if (ok) {
      try {
        const response = await axios.delete(
          `${DOACOES_URL}${doacoes[id].id}/`, config);
        setNewDoacao(newDoacao + 1);
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
          doacoesInfos={infos}
          submit={doacao === -1 ? handlePost : handlePut}
        />
        <AdminList
          infos={doacoes}
          indexInfos={doacao}
          handleClickInfos={handleClickDoacao}
          showInfos={["nome_doador", "tipo_doacao", "quantidade"]}
          page={"Doações"}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default AdminDoação;
