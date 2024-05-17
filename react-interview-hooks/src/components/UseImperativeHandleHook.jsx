/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react";

export default function UseImperativeHandleHook() {
  return (
    <div>
      <h3>UseImperativeHandleHook</h3>

      <ParentComponent />
    </div>
  );
}

const ParentComponent = () => {
  const childRef = useRef(null);
  return (
    <>
      <button onClick={() => childRef.current.focusInput()} >Input focus</button>
      <ChildComponent ref={childRef} />
    </>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focusInput,
    };
  });
  return <input type="text" ref={inputRef} />;
});
