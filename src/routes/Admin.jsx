import Button from "../components/Button";

function Admin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="h-[70vh] w-[90vw] max-w-[400px] flex flex-col items-center justify-center gap-12 bg-white shadow-lg border-4 border-verde rounded-xl">
        <h1 className="text-2xl font-semibold text-verde">Casa do Léo</h1>
        <h2 className="text-xl font-semibold">Login de Administrador</h2>
        <div className="inputGroup">
          <input
            type="text"
            required=""
            id="Usuário"
            autoComplete="off"
            placeholder="marco_antonio"
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
          />
          <label htmlFor="Senha">Senha</label>
        </div>
        <Button>Entrar</Button>
      </div>
    </div>
  );
}

export default Admin;
