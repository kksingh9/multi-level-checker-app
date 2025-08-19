const Button = ({ className, disabled, onClick, text, icon }) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled} className={`${className}`}>
        {text === "Next" ? <>{text} {icon}</>:<>{icon} {text} </>}
      </button>
    </>
  );
};

export default Button;
