const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };
  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col justify-center gap-10 items-center -mt-20 mx-5">
      <input type="text" className="py-1 pl-5 w-full max-w-lg dark: bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400;" required placeholder="Digite o seu nome..." />
      <input type="email" className="py-1 pl-5 w-full max-w-lg dark: bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400;" required placeholder="Digite o seu email..." />
      <button
        type="submit"
        className="py-1 px-5 w-full max-w-sm bg-alura-100 dark: bh-dark-200 rounded-full text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black">
        Seguir
      </button>
    </form>
  );
};

export default Form;
