import cl from "./Input.module.css";

const Input = ({
  type = "text",
  placeholder,
  width,
  changeHandler,
  pushEnter,
  color = "#757575",
}) => {
  return (
    <input
      style={{ width, color }}
      className={cl.input}
      type={type}
      placeholder={placeholder}
      onChange={(e) => changeHandler(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          pushEnter(e.target.value);
        }
      }}
    />
  );
};

export default Input;
