/* eslint-disable react/prop-types */
import { Trash } from "@phosphor-icons/react";
import Button from "../Button";

function AdminList({ infos, handleClickInfos, indexInfos, showInfos, page }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen  md:w-[80vw] lg:w-[50vw] h-full p-4 lg:px-16 pt-6 gap-6">
      <div className="bg-verde h-[70vh] w-full rounded-md p-8 flex flex-col gap-2">
        <h2 className="text-white">{page && page} Cadastrados</h2>
        <div className="h-full text-xl flex flex-col gap-2">
          {infos &&
            infos.map((item, index) => {
              return (
                <div
                  className={`bg-white flex items-center justify-between px-2 py-1 rounded gap-2 cursor-pointer text-xs lg:text-sm ${
                    index === indexInfos
                      ? "border-2 border-zinc-900 text-verde font-semibold"
                      : "border-2 border-transparent"
                  }`}
                  key={index}
                  onClick={() => handleClickInfos(index)}
                >
                  <p>{index + 1}.</p>
                  <p className="flex-1">
                    {item[showInfos[0]]} {showInfos.length === 2 && `- ${item[showInfos[1]]}`}
                  </p>
                  <Trash size={24} />
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex w-full flex-row-reverse gap-2">
        <Button>Salvar</Button>
        <Button cancel>Cancelar</Button>
      </div>
    </div>
  );
}

export default AdminList;
