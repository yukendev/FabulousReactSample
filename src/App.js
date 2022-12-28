import { useState } from "react";
import axios from "axios";

// Ajax周辺のツールを使ってみる用
const AjaxSample = () => {
  const [xhrResponse, setXhrResponse] = useState();
  const [fetchResponse, setFetchResponse] = useState();
  const [axiosResponse, setAxiosResponse] = useState();

  // ピカチュウの情報を取得
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // XMLHttpRequestsを利用してリクエストを送る
  const requestWithXHR = () => {
    function reqListener() {
      console.log("response from XHR", this.responseText);
      setXhrResponse("get from XHR");
    }
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", url);
    req.send();
  };

  // fetch APIを利用してリクエストを送る
  const requestWithFetch = () => {
    fetch(url).then((response) => {
      console.log("response from fetch", response);
      setFetchResponse("get from fetch");
    });
  };

  // axiosを利用してリクエストを送る
  const requestWithAxios = () => {
    axios.get(url).then((response) => {
      console.log("response from axios", response);
      setAxiosResponse("get from axios");
    });
  };

  return (
    <>
      <>
        <button onClick={requestWithXHR}>XHR</button>
        <div>{xhrResponse}</div>
      </>
      <>
        <button onClick={requestWithFetch}>fetch</button>
        <div>{fetchResponse}</div>
      </>
      <>
        <button onClick={requestWithAxios}>axios</button>
        <div>{axiosResponse}</div>
      </>
    </>
  );
};

function App() {
  return <AjaxSample />;
}

export default App;
