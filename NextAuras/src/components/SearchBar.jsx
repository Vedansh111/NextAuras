import { useState } from "react";
import SubmitButton from "./SubmitButton";
import Cookies from "js-cookie";
import TextInput from "./TextInput";
import UploadPdfInput from "./UploadPdfInput";
import LoadingButton from "./LoadingButton";
import axios from 'axios'
function SearchBar({ setContent, content,setSearch }) {
  const [waitButton, setWaitButton] = useState(false);

  const handleInput = (e) => {
    setContent(e.target.innerText);

    const range = document.createRange();
    range.selectNodeContents(event.target);
    range.collapse(false);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleSubmit = () => {
    console.log("CLicked")
    setWaitButton(true);
    setSearch(true)
    
  };

  return (
    <div className="w-full flex flex-1 flex-col justify-center max-w-4xl mx-auto">
      <div className="file-drop-target">
        <div
          className="relative flex justify-between items-end w-full bg-white/15 rounded-[28px]"
          style={{
            border: "1px solid rgba(255, 255, 255, 0)",
          }}
        >
          <TextInput content={content} handleInput={handleInput} />
          {/* <UploadPdfInput /> */}

          {!waitButton && (
            <SubmitButton handleSubmit={handleSubmit} content={content} />
          )}
          {waitButton && <LoadingButton />}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
