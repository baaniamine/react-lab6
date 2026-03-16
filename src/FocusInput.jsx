import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="demo-block">
      <input
        className="text-input"
        placeholder="Tapez ici..."
        ref={inputRef}
        type="text"
      />
      <button className="primary-button" onClick={handleClick} type="button">
        Mettre le focus
      </button>
    </div>
  );
}

export default FocusInput;
