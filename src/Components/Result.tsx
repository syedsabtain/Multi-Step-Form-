import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

const Result = () => {
  const { state } = useStateMachine(updateAction);

  return (
    <div className="container result">
      <h2>Result</h2>
      <pre className='result'>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Result;
