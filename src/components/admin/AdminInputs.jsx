/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../Button";

function AdminInputs({ infos, handleClickInfos, inputs, page, values, setValues, submit }) {

  useEffect(() => {
    infos ? setValues(infos) : setValues({});
  }, [infos]);

  return (
    
    <div className="flex flex-col items-center lg:items-start w-screen md:w-[80vw] lg:w-[50vw] h-full p-4 lg:px-16 pt-6 gap-6">
      <h1 className="text-2xl">{page && page[0]}</h1>

      <form className="flex flex-col gap-8 f-full items-center lg:items-start" onSubmit={submit}>
        <h2 className="text-xl">{infos ? "Atualizar" : "Cadastrar"} {page && page[1]}</h2>
        {inputs &&
          inputs.map((item) => {
            return (
              <div className="inputGroup" key={item.label}>
                <input
                  type={item.type}
                  required=""
                  id={item.label}
                  autoComplete="off"
                  placeholder={item.placeholder}
                  value={values[item.label] || ""}
                  onChange={(e) =>
                    setValues({ ...values, [item.label]: e.target.value })
                  }
                />
                <label htmlFor={item.label}>{item.label}</label>
              </div>
            );
          })}

        <div className="flex w-full flex-row-reverse gap-2">
          <Button click={() => console.log("a")}>{infos ? "Atualizar" : "Cadastrar"}</Button>
          {infos && (
            <Button cancel click={() => handleClickInfos(-1)}>
              Cancelar
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AdminInputs;
