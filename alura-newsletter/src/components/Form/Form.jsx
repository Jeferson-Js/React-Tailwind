import Input from "../Input/Input";

const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };
  return (
    <form onSubmit={safeSubmit} className="h-full flex flex-col justify-center gap-10 items-center -mt-20 mx-5">
      <Input type="text"  name="name" required placeholder="Digite o seu nome..." />
      <Input type="email" name="email" required placeholder="Digite o seu email..." />
      <button type="submit" className="py-1 pl-5 w-full max-w-sm outline-none bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 px-5 uppercase">Seguir</button>
    </form>
  );
};

export default Form;
