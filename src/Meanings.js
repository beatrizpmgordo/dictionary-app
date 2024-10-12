import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.meanings.definition}
        <br />
        <Example example={props.meanings.example} />
        <br />
        <Synonyms synonyms={props.meanings.synonyms} />
      </p>
    </div>
  );
}
