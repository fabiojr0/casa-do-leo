import { useState, useEffect } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import axios from "../api/axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const FOTOS_URL = "/fotos/";

function AdminFotos() {
  const [foto, setFoto] = useState(-1);
  const [fotos, setFotos] = useState([]);
  const [values, setValues] = useState({});
  const [newFoto, setNewFoto] = useState(-1);

  const inputs = [
    {
      type: "date",
      label: "data",
      placeholder: "dd/mm/yyyy",
    },
    {
      type: "text",
      label: "titulo",
      placeholder: "Campanha do agasalho",
    },
    {
      type: "text",
      label: "desc",
      placeholder: "Campanha para arrecadação de cobertores e casacos",
    },
    {
      type: "file",
      label: "link1",
      placeholder: "Nenhum arquivo escolhido",
    },
  ];

  // const fotos = [
  //   {
  //     Descrição: "Campanha do Agasalho",
  //   },
  //   {
  //     Descrição: "Campanha do sei la oque",
  //   },
  //   {
  //     Descrição: "Doação de amilemntos",
  //   },
  // ];

  useEffect(() => {
    async function getFotos() {
      try {
        const response = await axios.get(FOTOS_URL, {
          withCredentials: true,
        });
        setFotos(response?.data);
      } catch (err) {
        // navigate("/admin");
      }
    }
    getFotos();
  }, [newFoto]);

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(values);
    const ok = confirm("Deseja adicionar uma nova foto para galeria?");
    if (ok) {
      const formData = new FormData();
      formData.append("link1", values.link1);
      formData.append("titulo", values.titulo);
      formData.append("data", values.data);
      formData.append("desc", values.desc);

      try {
        const response = await axios.post(FOTOS_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRFToken": cookies.get("csrftoken"),
          },
          withCredentials: true,
        });

        setNewFoto(newFoto + 1);
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
    const ok = confirm("Deseja atualizar esta foto da galeria?");
    if (ok) {
      const formData = new FormData();
      formData.append("link1", values.link1);
      formData.append("titulo", values.titulo);
      formData.append("data", values.data);
      formData.append("desc", values.desc);
      try {
        const response = await axios.put(
          `${FOTOS_URL}${fotos[foto].id}/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setNewFoto(newFoto + 1);
        setValues({});
        setFoto(-1);
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
    const ok = confirm("Deseja deletar esta foto?");
    const config = {
      headers: {
        'X-CSRFToken': cookies.get('csrftoken'), // Adicione o token CSRF ao cabeçalho
      },
      withCredentials: true, // Permite o envio de cookies
    };

    if (ok) {
      try {
        const response = await axios.delete(
          `${FOTOS_URL}${fotos[id].id}/`, config);
        setNewFoto(newFoto + 1);
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
          page={["Fotos", "Foto"]}
          submit={foto === -1 ? handlePost : handlePut}
        />
        <AdminList
          infos={fotos}
          indexInfos={foto}
          handleClickInfos={handleClickFoto}
          showInfos={["titulo", "data"]}
          page={"Fotos"}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default AdminFotos;
