import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }
  function handleResponse(response) {
    setResult(response.data);
    let photoApiKey = "f388b055e9fa4ta275o3155340404ccb";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${photoApiKey}`;

    axios.get(photoApiUrl).then(handleImages);
  }

  function search() {
    let apiKey = "f388b055e9fa4ta275o3155340404ccb";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <label>What word do you want to look up?</label>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              onChange={handleKeywordChange}
            />
          </form>
          <small className="hint">i.e. paris, wine, yoga, coding</small>
        </section>
        <Response results={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
