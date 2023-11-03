import { List } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function NavbarAdmin() {
  return (
    <nav className="w-screen flex items-center p-4 bg-verde">
      <ul className="lg:flex items-center gap-6 hidden">
        <li>
          <Link
            to={"/admin/doador"}
            className="text-white hover:text-zinc-200 transition-all font-semibold "
          >
            Doador
          </Link>
        </li>
        <li>
        <Link
            to={"/admin/doacao"}
            className="text-white hover:text-zinc-200 transition-all font-semibold "
          >
            Doação
          </Link>
        </li>
        <li>
        <Link
            to={"/admin/tipo_de_doacao"}
            className="text-white hover:text-zinc-200 transition-all font-semibold "
          >
            Tipos de Doação
          </Link>
        </li>
        <li>
        <Link
            to={"/admin/fotos"}
            className="text-white hover:text-zinc-200 transition-all font-semibold "
          >
            Fotos
          </Link>
        </li>
        <li>
        <Link
            to={"/admin/admin_user"}
            className="text-white hover:text-zinc-200 transition-all font-semibold "
          >
            Administradores
          </Link>
        </li>
      </ul>

      <div className="w-full justify-between items-center flex text-lg text-white font-semibold lg:hidden">
        <h1>Casa Do Léo</h1>
        <List size={28} />
      </div>
    </nav>
  );
}

export default NavbarAdmin;
