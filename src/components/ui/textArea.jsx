const TextArea = ({rows,placeholder,className}) => {
  return (
    <>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className={`${className} w-full rounded-xl border border-gray-200 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-300`}
      />
    </>
  );
};

export default TextArea;
