import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiKey = "f388b055e9fa4ta275o3155340404ccb";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    console.log(apiUrl);

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
    </div>
  );
}
