import React from "react";
import Meanings from "./Meanings";

export default function Response(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Response mt-4">
        <h2 className="mb-4">{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
