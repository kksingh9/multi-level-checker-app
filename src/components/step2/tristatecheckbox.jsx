import React ,{ useRef,useEffect } from "react"
const TriStateCheckbox = React.memo(({ state, onToggle }) => {
    const inputRef = useRef(null)
  
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = state === 'indeterminate'
      }
    }, [state])
  console.log(inputRef);
  
    return (
      
      <input
        ref={inputRef}
        type="checkbox"
        checked={state === 'checked'}
        onChange={() => onToggle(state !== 'checked')}
        className="h-4 w-4 accent-blue-500 rounded border-gray-300 cursor-pointer"
      />
    )
  })

  export default TriStateCheckbox;