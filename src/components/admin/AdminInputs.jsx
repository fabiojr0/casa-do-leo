/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Button from "../Button";

function AdminInputs({
  infos,
  handleClickInfos,
  inputs,
  page,
  values,
  setValues,
  submit,
  doacoesInfos,
}) {
  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    infos ? setValues(infos) : setValues({});
  }, [infos]);

  function infosCompleted() {
    const valor = Object.keys(values);
    const itemsToRemove = page[0] === "Doações" ? 3 : 1
    if (inputs.length === (infos ? valor.length - itemsToRemove : valor.length)) {
      const isEveryFieldFilled = Object.values(values).every(
        (value) => value !== null && value !== '' 
        );
        setButtonDisable(!isEveryFieldFilled);
      return
    }
    setButtonDisable(true);
  }

  useEffect(() => {
    infosCompleted();
  }, [values]);

  return (
    <div className="flex flex-col items-center lg:items-start w-screen md:w-[80vw] lg:w-[50vw] h-full p-4 lg:px-16 pt-6 gap-6">
      <h1 className="text-2xl">{page && page[0]}</h1>

      <form
        className="flex flex-col gap-8 f-full items-center lg:items-start"
        onSubmit={submit}
      >
        <h2 className="text-xl">
          {infos ? "Atualizar" : "Cadastrar"} {page && page[1]}
        </h2>
        {inputs &&
          inputs.map((item) => {
            if (item.type === "select") {
              return (
                <div className="inputGroup" key={item.label}>
                  <select
                    id={item.label}
                    value={values[item.label] || ""}
                    onChange={(e) =>
                      setValues({ ...values, [item.label]: e.target.value })
                    }
                  >
                    {doacoesInfos && item.label === "doador"
                      ? doacoesInfos.doadores?.map((doador, index) => {
                          return (
                            <React.Fragment key={index}>
                              {index === 0 && (
                                <option key={index}>Selecione um doador</option>
                              )}

                              <option value={doador.id}>{doador.nome}</option>
                            </React.Fragment>
                          );
                        })
                      : doacoesInfos.tipo_doacoes?.map((tipo, index) => {
                          return (
                            <React.Fragment key={index}>
                              {index === 0 && (
                                <option>Selecione um Tipo</option>
                              )}
                              <option value={tipo.id}>{tipo.nome}</option>
                            </React.Fragment>
                          );
                        })}
                  </select>
                  <label htmlFor={item.label}>{item.label}</label>
                </div>
              );
            }
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
                  key={item.label}
                />
                <label htmlFor={item.label}>{item.label}</label>
              </div>
            );
          })}

        <div className="flex w-full flex-row-reverse gap-2">
          <Button disabled={buttonDisable} click={() => console.log('a')}>
            {infos ? "Atualizar" : "Cadastrar"}
          </Button>
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
