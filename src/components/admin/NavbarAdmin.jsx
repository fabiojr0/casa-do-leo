import { List } from "@phosphor-icons/react";

function NavbarAdmin() {
  return (
    <nav className="w-screen flex items-center p-4 bg-verde">
      <ul className="lg:flex items-center gap-6 hidden">
        <li>
          <a
            href="#"
            className="text-white hover:text-zinc-900 transition-all font-semibold "
          >
            Doador
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-zinc-900 transition-all font-semibold "
          >
            Doação
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-zinc-900 transition-all font-semibold "
          >
            Tipo de Doação
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-zinc-900 transition-all font-semibold "
          >
            Fotos
          </a>
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
