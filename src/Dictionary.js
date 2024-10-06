import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "f388b055e9fa4ta275o3155340404ccb";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
        />
      </form>
      <Response results={result} />
    </div>
  );
}
