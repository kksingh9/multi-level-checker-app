import { useRef,useEffect } from "react"
function TriStateCheckbox({ state, onToggle }) {
    const inputRef = useRef(null)
  
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = state === 'indeterminate'
      }
    }, [state])
  
    return (
      <input
        ref={inputRef}
        type="checkbox"
        checked={state === 'checked'}
        onChange={() => onToggle(state !== 'checked')}
        className="h-4 w-4 accent-blue-500 rounded border-gray-300 cursor-pointer"
      />
    )
  }

  export default TriStateCheckbox;