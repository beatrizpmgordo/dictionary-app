import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>{props.meanings.definition}</p>
      <Example example={props.meanings.example} />
      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}
