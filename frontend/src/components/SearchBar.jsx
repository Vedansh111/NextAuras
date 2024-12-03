import { useState, useEffect } from "react";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";
import UploadPdfInput from "./UploadPdfInput";
import LoadingButton from "./LoadingButton";
import MicButton from "./MicButton";

function SearchBar({ setContent, content, setSearch }) {
  const [waitButton, setWaitButton] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleInput = (e) => {
    setContent(e.target.innerText.replace(/\n/g, ""));

    const range = document.createRange();
    range.selectNodeContents(event.target);
    range.collapse(false);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleSubmit = () => {
    console.log("CLicked");
    setWaitButton(true);
    setSearch(true);
  };

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.log("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let finalTranscript = "";
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        } else {
          interimTranscript += result[0].transcript;
        }
      }
      setContent(finalTranscript || interimTranscript);
    };

    recognition.addEventListener("error", (event) => {
      console.error(`Speech recognition error detected: ${event.error}`);
    });

    const startListening = () => {
      setIsListening(true);
      recognition.start();
    };

    const stopListening = () => {
      setIsListening(false);
      recognition.stop();
    };

    if (isListening) {
      startListening();
    } else {
      stopListening();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, setContent]);

  return (
    <div className="w-full flex flex-1 flex-col justify-center max-w-4xl mx-auto">
      <div className="file-drop-target">
        <div
          className="relative flex justify-between items-end w-full bg-white/15 rounded-[28px]"
          style={{
            border: "1px solid rgba(255, 255, 255, 0)",
          }}
        >
          <TextInput content={content} handleInput={handleInput} waitButton={waitButton}/>
          <UploadPdfInput />

          {!waitButton && !isListening && (
            <SubmitButton
              handleSubmit={handleSubmit}
              content={content}
              isListening={isListening}
            />
          )}
          {!waitButton && (
            <MicButton
              onClick={() => setIsListening((prevState) => !prevState)}
              isListening={isListening}
            />
          )}
          {waitButton && <LoadingButton setWaitButton={setWaitButton} />}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
