import { useState, useEffect } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const TIPO_DOACAO_URL = "/tipo_doacao/";

function AdminTipoDeDoação() {
  const [tipoDoacao, setTipoDoacao] = useState(-1);
  const [tipoDoacoes, setTipoDoacoes] = useState([]);
  const [newTipoDoacao, setNewTipoDoacao] = useState(-1);
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const inputs = [
    {
      type: "text",
      label: "nome",
      placeholder: "Vestimenta",
    },
    
  ];

  useEffect(() => {
    async function getTipos() {
      try {
        const response = await axios.get(TIPO_DOACAO_URL, {
          withCredentials: true,
        });
        console.log(JSON.stringify(response?.data));
        setTipoDoacoes(response?.data);
      } catch (err) {
        // navigate("/admin");
      }
    }
    getTipos();
  }, [newTipoDoacao]);

  const handlePost = async (e) => {
    e.preventDefault();
    const ok = confirm("Deseja adicionar um novo tipo de doação?");
    if (ok) {
      try {
        const response = await axios.post(
          TIPO_DOACAO_URL,
          JSON.stringify(values),
          {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': cookies.get('csrftoken'),
            },
            withCredentials: true
          }
        );
        
        setNewTipoDoacao(newTipoDoacao + 1);
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
    const ok = confirm("Deseja atualizar este tipo de doação?");
    if (ok) {
      try {
        const response = await axios.put(
          `${TIPO_DOACAO_URL}${tipoDoacoes[tipoDoacao].id}/`,
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setNewTipoDoacao(newTipoDoacao + 1);
        setValues({});
        setTipoDoacao(-1);
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
    const ok = confirm("Deseja deletar este tipo de doação?");
    const config = {
      headers: {
        'X-CSRFToken': cookies.get('csrftoken'), // Adicione o token CSRF ao cabeçalho
      },
      withCredentials: true, // Permite o envio de cookies
    };

    if (ok) {
      try {
        const response = await axios.delete(
          `${TIPO_DOACAO_URL}${tipoDoacoes[id].id}/`, config);
        setNewTipoDoacao(newTipoDoacao + 1);
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

  function handleClickTipoDoacao(index) {
    setTipoDoacao(index);
  }

  return (
    <div className="w-screen h-full flex items-center flex-col">
      <NavbarAdmin />
      <div className="w-screen h-full flex items-center max-lg:flex-col">
        <AdminInputs
          infos={tipoDoacao !== -1 && tipoDoacoes[tipoDoacao]}
          handleClickInfos={handleClickTipoDoacao}
          inputs={inputs}
          
          values={values}
          setValues={setValues}
          page={["Tipos de Doações", "Tipos de Doação"]}
          submit={tipoDoacao === -1 ? handlePost : handlePut}
        />
        <AdminList
          infos={tipoDoacoes}
          indexInfos={tipoDoacao}
          handleClickInfos={handleClickTipoDoacao}
          showInfos={["nome"]}
          page={"Tipos de Doações"}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default AdminTipoDeDoação;
