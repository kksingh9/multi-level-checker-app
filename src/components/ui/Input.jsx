const Input = ({className,placeholder,type}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} w-full h-12 rounded-xl border border-gray-200 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-300`}
    />
  );
};
export default Input;