import Button from "../components/Button";
import Navbar from "../components/Navbar";

function Forms() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Navbar />
      <span className="flex flex-col items-center p-4 max-lg:gap-2 w-full text-center text-sm lg:text-xl">
        <p>
          Este formulário pode ser usado para tirar dúvidas ou caso queira ser
          doador.
        </p>
        <p>Preencha as informações a seguir e aguarde nosso contato.</p>
      </span>
      <div className="flex max-lg:flex-col gap-14 lg:gap-6 text-sm lg:text-base">
        <span className="flex-col flex gap-14">
          <div className="inputGroup">
            <input
              type="text"
              required=""
              id="Nome"
              autoComplete="off"
              placeholder="Marco Antônio"
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
            />
            <label htmlFor="Mensagem">Mensagem</label>
          </div>
          <span className="w-full flex flex-row-reverse">
            <Button>Enviar</Button>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Forms;
