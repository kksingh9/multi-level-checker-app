const Label = ({text,className}) => {
    return (
        <>
         <label className={`${className} block text-sm font-medium text-gray-700 mb-1`}>
            {text}<span className="text-red-500">*</span>
          </label>
        </>
    )
}

export default Label;