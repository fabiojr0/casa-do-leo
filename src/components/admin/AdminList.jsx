/* eslint-disable react/prop-types */
import { X } from "@phosphor-icons/react";
import Button from "../Button";

function AdminList({ doadores, handleClickDoador, indexDoador }) {
  return (
    <div className="flex flex-col items-center justify-center w-[50vw] h-full px-16 pt-6 gap-6">
      <div className="bg-verde h-[70vh] w-full rounded-md p-8 flex flex-col gap-2">
        <h2 className="text-white">Doadores Cadastrados</h2>
        <div className="h-full text-xl flex flex-col gap-2">
          {doadores &&
            doadores.map((item, index) => {
              return (
                <div
                  className={`bg-white flex items-center justify-between px-2 py-1 text-sm rounded gap-2 cursor-pointer ${index === indexDoador ? "border-2 border-zinc-900" : "border-2 border-transparent"}`}
                  key={index}
                  onClick={() => handleClickDoador(index)}
                >
                  <p>{index + 1}.</p>
                  <p className="flex-1">
                    {item.nome} - {item.cpf}
                  </p>
                  <X />
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex w-full flex-row-reverse gap-2">
        <Button>Salvar</Button>
        <Button bg="bg-zinc-200" text="text-zinc-900" hover="hover:bg-zinc-300">
          Cancelar
        </Button>
      </div>
    </div>
  );
}

export default AdminList;
