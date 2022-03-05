import { useRef } from "react";

export default function Start({ setUsername }) {
  const username = useRef();
  const handelClick = () => {
    setUsername(username.current.value);
  };

  return (
    <div className="start">
      <input type="text" className="startInput" ref={username} />
      <button className="startButton" onClick={handelClick}>
        Start
      </button>
    </div>
  );
}
