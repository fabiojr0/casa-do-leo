import { List } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar({home}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateDimension = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenWidth]);

  return (
    <nav className="w-full flex items-center justify-between p-2 shadow-lg">
      <a href="/">
        <img
          src="Logo.png"
          className="h-10 sm:h-16 final-mobile:w-14 final-mobile:h-14"
        />
      </a>
      {screenWidth >= 800 ? (
        <>
          <ul className={`items-center gap-6 ${home ? "flex" : "hidden"} xl:text-xl`}>
            <li>
              <a
                href="#hero"
                className="text-zinc-600 hover:text-verde transition-all font-semibold "
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#bem-vindo"
                className="text-zinc-600 hover:text-verde transition-all font-semibold "
              >
                Bem-Vindo
              </a>
            </li>
            <li>
              <a
                href="#quem-somos"
                className="text-zinc-600 hover:text-verde transition-all font-semibold "
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                href="#galeria"
                className="text-zinc-600 hover:text-verde transition-all font-semibold "
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-zinc-600 hover:text-verde transition-all font-semibold "
              >
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-zinc-600 hover:text-verde transition-all font-semibold "
              >
                Contato
              </a>
            </li>
          </ul>
          <Link to="/formulario">
              <Button>Seja um doador!</Button>
          </Link>
        </>
      ) : (
        <List size={32} weight="bold" />
      )}
    </nav>
  );
}

export default Navbar;
