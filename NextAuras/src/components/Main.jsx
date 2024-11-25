import { useState, useEffect } from "react";
import H1 from "./H1";
import Cookies from "js-cookie";
import ResponseDiv from "./ResponseDiv";
import SearchBar from "./SearchBar";
import axios from "axios";

function Main() {
  const [content, setContent] = useState();
  const text = Cookies.get("text");
  const [search, setSearch] = useState(false);
  const [link,setLink]=useState("")

  useEffect(()=>{
    if(search==true){
      axios
    .post('http://localhost:8080/score', {
      text: content, // Include content as text in the request body
    })
    .then((response) => {
      console.log("Response:", response.data);
      setLink(response.data.video_output)
      Cookies.set("text", content);
      Cookies.set("link",response.data.video_output)
      
      setContent("");
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    
    }
  },[search])

  useEffect(() => {}, [text]);

  return (
    <main className="flex-1 p-8 w-full h-full">
      <div className="pt-[180px] max-sm:pt-[280px] pb-[180px] max-h-svh h-full">
        <div className="flex flex-col gap-[100px] items-center pb-[150px]">
          <SearchBar content={content} setContent={setContent} setSearch={setSearch} />
          {text && (
            <div className="flex flex-col items-center w-full mx-10">
              <H1 />
              <ResponseDiv link={link} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
