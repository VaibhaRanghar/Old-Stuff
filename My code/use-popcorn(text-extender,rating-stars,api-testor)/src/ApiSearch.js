import { useEffect, useRef, useState } from "react";
import "./ApiSearch.css";
import { useLocalStorageState } from "./LocalStorage";

function ApiSearch() {
  return (
    <>
      {/* <SearchBar />
      <MoviesSearch /> */}
      <APITestor />
    </>
  );
}

// const url = "http://www.omdbapi.com/?apikey=[3f05b33e]&s=Spiderman";
function MoviesSearch() {
  const [preview, setPreview] = useState(false);
  
  const [result,setResult] = useLocalStorageState([],'result')

  const [loading, setLoading] = useState(false);

  function handlePreview() {
    setPreview(!preview);
    localStorage.setItem("result", JSON.stringify(result));
  }

  
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchAdvice = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTimeout(() => {
          console.log(data);
          setResult(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAdvice();
  }, [preview,setResult]);

  return (
    <div className="search">
      <div className="header">
        <p>"Advice Generator using API"</p>
        <p>Press button to generate advice</p>
        <>
          <button onClick={() => handlePreview()}>Generate</button>
        </>
      </div>
      {preview && (
        <div>
          {loading ? (
            <p className="result">Loading...</p>
          ) : (
            <div className="result">
              <p>{result ? result.slip.advice : "No Advice found"}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SearchBar() {
  const  inputEID = useRef(null);
  useEffect(()=>{
    function callback(e){
      if(document.activeElement === inputEID.current) return

      if(e.code === "Enter"){
        inputEID.current.focus();
      }
    }
    
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, []);
  return (
    <>
      <input type="textfield" ref={inputEID}/>
      <button>Don't Press</button>
    </>
  );
}
// http://www.omdbapi.com/?apikey=3f05b33e&t=Spiderman
function APITestor() {
  useEffect(() => {
    const fetchAPITest = async () => {
      try {
        const res = await fetch(
          `https://emoji-api.com/emojis?access_key=3218a0e3cf05cc51da39e20200c4a446bf5d7ffd`
        );
        const  data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPITest();
  });

}
export default ApiSearch;
