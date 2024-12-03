import { useState, useEffect, useRef } from "react";
import H1 from "./H1";
import Cookies from "js-cookie";
import ResponseDiv from "./ResponseDiv";
import SearchBar from "./SearchBar";
import axios from "axios";
import { motion } from "framer-motion";
import VideoAndVoiceSelection from "./VideoAndVoiceSelection";


function Main() {
  const [content, setContent] = useState();
  const text = Cookies.get("text");
  const [search, setSearch] = useState(false);
  const [link,setLink]=useState("")
  const [apiResponse, setApiResponse] = useState("");
  const bottomRef = useRef(null);
  const [goAhead,setGoAhead]=useState(false);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [aspectRatio, setAspectRatio] = useState("");

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
    setApiResponse("This is the response from the API, typed dynamically. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut similique, ex earum aspernatur recusandae cum sit debitis sunt expedita repellendus?");
    
    }
  },[search])

  useEffect(() => {}, [text]);

  const TypewriterEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");
  
    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length-1) {
          setDisplayedText((prev) => prev + text[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust speed of the typing
      return () => clearInterval(interval);
    }, [text]);
  
    return <p className="text-white text-lg">{displayedText}</p>;
  };

  const regenerateResponse = () => {
    setSearch(true);
    setApiResponse(""); // Clear previous response
    // handleSubmit();
  };
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setGoAhead(true);
  };

  return (
    <main className="flex-1 p-8 w-full h-full">
      <div className="pt-[180px] max-sm:pt-[280px] pb-[180px] max-h-svh h-full">
        <div className="flex flex-col gap-[100px] items-center pb-[150px]">
          {search===false ? <SearchBar content={content} setContent={setContent} setSearch={setSearch} />
          : <>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="flex flex-row w-full h-full gap-4"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex-1 bg-gray-800 rounded-[28px] p-4"
          >
            <p className="text-white font-semibold mb-2">Your Input:</p>
            <p className="text-gray-300">{content}</p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex-1 bg-gray-900 rounded-[28px] p-4"
          >
            <p className="text-white font-semibold mb-2">Your Requirement:</p>
            {apiResponse ? (
              <>
              <TypewriterEffect text={apiResponse} />
              <div className="flex gap-4 mt-6">
                <button
                  onClick={regenerateResponse}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                >
                  Regenerate
                </button>
                <button
                  onClick={scrollToBottom}
                  className="bg-purple-400 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
                >
                  Move Forward to Video
                </button>
              </div>
              
              </>
            ) : (
              <p className="text-gray-400">Loading...</p>
            )}
          </motion.div>
          
        </motion.div>
          </>
          }

          {goAhead && <>
            <div ref={bottomRef} className="mt-16 w-full">
              <VideoAndVoiceSelection
              setAspectRatio={setAspectRatio}
              aspectRatio={aspectRatio}
              setSelectedVoice={setSelectedVoice}
              selectedVoice={selectedVoice}
              />
            </div>
            </>}
          {/* {text && (
            <div className="flex flex-col items-center w-full mx-10">
              <H1 />
              <ResponseDiv link={link} />
            </div>
          )} */}
        </div>
      </div>
    </main>
  );
}

export default Main;
