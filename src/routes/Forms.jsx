import React, {useState, useRef, useContext} from 'react'
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import axios from '../api/axios';

const FORM_URL = '/contato/'

function Forms() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [assunto, setAssunto] = useState();
  const [mensagem, setMensagem] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const response = await axios.post(FORM_URL, JSON.stringify({nome,assunto,email,mensagem}), 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
    }catch(err) {
        console.error(err);
        if(!err?.response) {
            console.log('No server Response')
        } else if (err.response?.status === 400) {
            console.log('Misssing username or password')
        } else if(err.response?.status === 401) {
            console.log('Unauthorized')
        } else {
            console.log('Login failed')
        }
    }
  }


  return (
    <div className="flex flex-col items-center gap-6 pb-8">
      <Navbar />
      <span className="flex flex-col items-center p-4 max-lg:gap-2 w-full  text-center text-sm lg:text-xl">
        <p>
          Este formulário pode ser usado para tirar dúvidas ou caso queira ser
          doador.
        </p>
        <p>Preencha as informações a seguir e aguarde nosso contato.</p>
      </span>
      <form className="flex max-lg:flex-col gap-14 lg:gap-6 text-sm lg:text-base xl:h-full " onSubmit={handleSubmit}>
        <span className="flex-col flex gap-14">
          <div className="inputGroup">
            <input
              type="text"
              required=""
              id="Nome"
              autoComplete="off"
              placeholder="Marco Antônio"
              onChange={e => setNome(e.target.value)}
            />
            <label htmlFor="Nome">Nome</label>
          </div>
          <div className="inputGroup">
            <input
              type="text"
              required=""
              id="Assunto"
              autoComplete="off"
              placeholder="Dúvidas sobre como doar"
              onChange={e => setAssunto(e.target.value)}

            />
            <label htmlFor="Assunto">Assunto</label>
          </div>
          <div className="inputGroup">
            <input
              type="text"
              required=""
              id="Email"
              autoComplete="off"
              placeholder="usuario@email.com"
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="Email">Email</label>
          </div>
        </span>
        <span className="flex-col flex gap-4">
          <div className="inputGroup">
            <textarea
              className="h-80 lg:!w-[40vw]"
              type="text"
              required=""
              id="Mensagem"
              autoComplete="off"
              placeholder="Desejo tirar dúvidas a respeito de como funcionam as doações."
              onChange={e => setMensagem(e.target.value)}
            />
            <label htmlFor="Mensagem">Mensagem</label>
          </div>
          <span className="w-full flex flex-row-reverse">
            <button type="submit"
              className={
                "bg-verde px-4 py-2 text-white rounded-md text-sm hover:bg-green-700 transition-all flex items-center sm:text-lg active:translate-y-1"
              }
            >
              Enviar
            </button>
          </span>
        </span>
      </form>
    </div>
  );
}

export default Forms;
