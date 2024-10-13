import React from "react";
import Meanings from "./Meanings";
import "./Response.css";

export default function Response(props) {
  if (props.results) {
    return (
      <div className="Response">
        <section>
          <h1>{props.results.word}</h1>
          <h2 className="phonetic">{props.results.phonetic}</h2>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meanings={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
