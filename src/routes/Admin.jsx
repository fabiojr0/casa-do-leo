import React, {useState, useRef, useContext} from 'react'
import Button from "../components/Button";
import axios from '../api/axios';
const LOGIN_URL = '/admins/login/'
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        try{
            
            const response = await axios.post(LOGIN_URL, JSON.stringify({email,password}), 
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            
            console.log(JSON.stringify(response?.data))
            navigate('/admin/doador');
        }catch(err) {
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
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="h-[70vh] w-[90vw] max-w-[400px] flex flex-col items-center justify-center gap-12 bg-white shadow-lg border-4 border-verde rounded-xl" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-verde">Casa do Léo</h1>
        <h2 className="text-xl font-semibold">Login de Administrador</h2>
        <div className="inputGroup">
          <input
            type="text"
            required=""
            id="Usuário"
            autoComplete="off"
            placeholder="marco_antonio"
            onChange={e => setEmail(e.target.value)}
            className='max-w-[300px]'
          />
          <label htmlFor="Usuário">Usuário</label>
        </div>
        <div className="inputGroup">
          <input
            type="password"
            required=""
            id="Senha"
            autoComplete="off"
            placeholder="********"
            onChange={e => setPassword(e.target.value)}
            className='max-w-[300px]'

          />
          <label htmlFor="Senha">Senha</label>
        </div>
        <button type="submit"
        className={
          "bg-verde px-4 py-2 text-white rounded-md text-sm hover:bg-green-700 transition-all flex items-center sm:text-lg active:translate-y-1"
        }
      >
        Entrar
      </button>
      </form>
    </div>
  );
}

export default Admin;
