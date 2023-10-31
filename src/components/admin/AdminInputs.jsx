function AdminInputs() {
  return (
    <div className="flex flex-col w-[50vh] h-full px-16 pt-6 gap-6">
      <h1 className="text-2xl">Doadores</h1>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Adicionar Doador</h2>

        <div className="inputGroup">
          <input
            type="text"
            required=""
            autoComplete="off"
            className="placeholder:text-zinc-600"
            placeholder="123.123.123-01"
          />
          <label htmlFor="name">CPF</label>
        </div>
        <div className="inputGroup">
          <input
            type="text"
            required=""
            autoComplete="off"
            className="placeholder:text-zinc-600"
            placeholder="Marco Antônio"
          />
          <label htmlFor="name">Nome</label>
        </div>
        <div className="inputGroup">
          <input
            type="text"
            required=""
            autoComplete="off"
            className="placeholder:text-zinc-600"
            placeholder="usuario@email.com"
          />
          <label htmlFor="name">Email</label>
        </div>
        <div className="inputGroup">
          <input
            type="text"
            required=""
            autoComplete="off"
            className="placeholder:text-zinc-600"
            placeholder="Rua Gastão Gonçalves"
          />
          <label htmlFor="name">Endereço</label>
        </div>
        <div className="inputGroup">
          <input
            type="text"
            required=""
            autoComplete="off"
            className="placeholder:text-zinc-600"
            placeholder="21 912341234"
          />
          <label htmlFor="name">Telefone</label>
        </div>
      </div>
    </div>
  );
}

export default AdminInputs;
