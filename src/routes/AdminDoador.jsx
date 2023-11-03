import { useState, useEffect } from "react";
import AdminInputs from "../components/admin/AdminInputs";
import AdminList from "../components/admin/AdminList";
import NavbarAdmin from "../components/admin/NavbarAdmin";

import axios from '../api/axios';

function AdminDoador() {
  const [doador, setDoador] = useState(-1);
  const [doadores, setDoadores] = useState([]);
  const [newDoador, setNewDoador] = useState([])


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
    async function getContacts() {
        try{

            const response = await axios.get('/doadores/', {
              withCredentials:true
            });
            console.log(JSON.stringify(response?.data))
            setDoadores(response?.data)
            
        }catch(err) {
            if(!err?.response) {
                console.log('No server Response')
            } else if(err.response?.status === 401) {
                console.log("a")
            } else {
                console.log("Login falhou")
            }
        }
    }
    getContacts()
  }, [newDoador])

  // const doadores = [
  //   {
  //     Nome: "Flávio Júlior",
  //     CPF: "123.123.123-01",
  //   },
  //   {
  //     Nome: "Rafuel rudin",
  //     CPF: "696.969.666-69",
  //   },
  //   {
  //     Nome: "Biel Hesmelinguido",
  //     CPF: "123.125.123-01",
  //   },
  //   {
  //     Nome: "Guido Lanches",
  //     CPF: "123.123.127-01",
  //   },
  //   {
  //     Nome: "Renata Ingrata",
  //     CPF: "152.123.523-01",
  //   },
  // ];

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
          showInfos={["nome", "cpf"]}
          page={'Doadores'}
        />
      </div>
    </div>
  );
}

export default AdminDoador;
