/* eslint-disable react/prop-types */
function Button({ children, bg, hover, text }) {
  return (
    <span>
      <button
       className={`${bg ? `${bg}` : "bg-verde"} p-1.5 ${text ? `${text}` : "text-zinc-100"} rounded-md text-sm ${hover ? `${hover}` : "hover:bg-green-700"} transition-all flex items-center sm:text-lg lg:text-xl active:translate-y-1 `}
       
      >
        {children}
      </button>
    </span>
  );
}

export default Button;
