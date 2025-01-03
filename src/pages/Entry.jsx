import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { Link } from "react-router";
import { paths } from "../router/paths";

export default function Entry() {
  const [isJoin, setIsJoin] = useState(false);
  const [isValidGameCode, setIsValidGameCode] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const onJoinHandler = () => {
    setIsJoin((prev) => !prev);
  };

  const joinHandler = (value) => {
    if (value !== "qwerty") {
      setIsValidGameCode(false);
    } else {
      setIsValidGameCode(true);
    }
    //TODO: Add logic to join game
  };

  return (
    <div className="entry">
      <div className="wrapper">
        <h1>dkm-Kahoot</h1>
        <div className="button-group">
          <Button
            variant={"classic"}
            clickHandler={onJoinHandler}
            size={"170px"}
            animated={true}
          >
            Join game
          </Button>
          <Link to={paths.AUTH}>
            <Button variant={"classic2"} size={"170px"} animated={true}>
              Create game
            </Button>
          </Link>
        </div>
        {isJoin && (
          <>
            <div className="input-group">
              <Input
                placeholder={"Enter game code"}
                label={"Join"}
                width={"100%"}
                changeHandler={setInputValue}
                pushEnter={joinHandler}
              />
              <p className="join" onClick={() => joinHandler(inputValue)}>
                Join
              </p>
            </div>
            {!isValidGameCode && (
              <p className="Code-error">*Room doesn't exists</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
