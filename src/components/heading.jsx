const Heading = ({currentStep}) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold text-gray-900">Step {currentStep}</h2>
        <span className="text-[10px] font-bold bg-gradient-to-r from-blue-500 to-green-500 text-[white] rounded px-1.5 py-0.5">
          NEW!
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        The sub text heading comes here...
      </p>
    </>
  );
};

export default Heading;
