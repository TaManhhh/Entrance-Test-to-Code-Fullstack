import axios from "axios";
import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [input , setInput] =useState("");
  const [data,setData] = useState({});
  const [check, setCheck] = useState(0);
  const [shortLink, setShortLink] = useState("");
  const handleInputChange=(e)=>{
    setInput(e.target.value);
  };
  const fetch = useCallback(async() =>{
    try{
      const respone = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      setData(respone.data.result);
     
    }catch(error){
      console.log(error);
    }
  },[input]);

  return (
    <div className="App">
      <h1>Link Shortener</h1>
      <form >
        <span> Enter a link</span>
        <input
         //jhgvbhujgb
          placeholder='example.com'
          value={input} onChange={handleInputChange}
        />
        <button 
          onClick={(e)=>{
            e.preventDefault();
            if (check ===1) setShortLink(data.short_link);
            else if (check ===2) setShortLink(data.short_link2);
            else if (check ===3) setShortLink(data.short_link3);
            setInput(""); 
          }}
        >
          ➙
        </button>
        <br/>
        <button 
          onClick ={(e) =>{
            e.preventDefault();
            fetch();
            setCheck(1);
          }}
        >
          shrtco.de
        </button>
        <button 
          onClick ={(e) =>{
            e.preventDefault();
            fetch();
            setCheck(2);
          }}
        >
           9qr.de
        </button>
        <button 
          onClick ={(e) =>{
            e.preventDefault();
            fetch();
            setCheck(3);
          }}
        >
           shiny.link
        </button>
      </form>
      <h3>{shortLink}</h3>
    </div>
  );
}

export default App;
