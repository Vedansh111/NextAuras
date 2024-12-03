import React, { useState } from 'react'
import playButtonIcon from "../assets/play-button.png";
const VideoAndVoiceSelection = ({selectedVoice,setSelectedVoice,aspectRatio,setAspectRatio}) => {

//   const [selectedVoice, setSelectedVoice] = useState("");
//   const [aspectRatio, setAspectRatio] = useState("");
    const voices = [
        { name: "Voice 1", sample: "Hello, this is Voice 1." },
        { name: "Voice 2", sample: "Hi, this is Voice 2." },
        { name: "Voice 3", sample: "Greetings from Voice 3." },
      ];
    
      const aspectRatios = ["16:9", "4:3", "1:1"];
      const playVoiceSample = (sample) => {
        const utterance = new SpeechSynthesisUtterance(sample);
        window.speechSynthesis.speak(utterance);
      };
  return (
    <div>
       <div className="flex items-center gap-4">
                <label className="text-white">Select Voice:</label>
                <select
                  className="p-2 rounded-lg bg-black"
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                >
                  <option value="">Choose a voice</option>
                  {voices.map((voice, index) => (
                    <option key={index} value={voice.sample}>
                      {voice.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() =>
                    playVoiceSample(
                      voices.find((v) => v.sample === selectedVoice)?.sample
                    )
                  }
                  className=" px-4 py-2 rounded-lg text-white"
                >
                  <img src={playButtonIcon} className='h-10 w-10 ' alt="" />
                </button>
              </div>

              {/* Aspect Ratio Selection */}
              <div className="flex items-center gap-4 my-4">
                <label className="text-white">Select Aspect Ratio:</label>
                <select
                  className="p-2 rounded-lg bg-black"
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(e.target.value)}
                >
                  <option value="">Choose aspect ratio</option>
                  {aspectRatios.map((ratio, index) => (
                    <option key={index} value={ratio}>
                      {ratio}
                    </option>
                  ))}
                </select>
              </div>
    </div>
  )
}

export default VideoAndVoiceSelection
