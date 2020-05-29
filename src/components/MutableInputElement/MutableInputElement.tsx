import React, { useState, useRef } from 'react';

export const MutableInputElement: React.FC<{}> = ({ children }) => {
  const [content, setContent] = useState('input text');
  const [editable, setMode] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const modeChangeHandler = () => {
    setMode(!editable);
  };
  const onChangeHandler = () => {
    if (!ref || !ref.current) return;
    setContent(ref.current.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setMode(false);
    }
  };

  return (
    <div onDoubleClick={modeChangeHandler}>
      {editable ? (
        <input
          ref={ref}
          onChange={onChangeHandler}
          value={content}
          onKeyDown={onKeyDown}
        />
      ) : (
        <>{children}</>
      )}
    </div>
  );
};
