import React, { useRef } from 'react';

function TextInputWithFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();  // Focus the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default TextInputWithFocus;
