import { useRef } from "react";

function Video({link}) {
  const videoRef = useRef(null);
  if (!link && !Cookies.get('link')) {
    return <div className="text-white">Loading video...</div>;
  }

  if(!link){
    console.log("Here")
    link=Cookies.get('link')
  }

  return (
    <div className="white-box relative flex items-center justify-center bg-white bg-opacity-10 rounded-[16px] overflow-hidden w-[350px] sm:w-[500px] md:w-[700px]">
      <a
        href="https://lumalabs.ai/dream-machine/creations/5cbcf88a-caf1-42cf-95ab-cf691b5d4830"
        className="w-full"
      >
        <div
          className="w-full flex items-center justify-center"
          style={{
            aspectRatio: 1.80851 / 1,
          }}
        >
          {/* <img
            src="https://storage.cdn-luma.com/dream_machine/bb3cf46b-b406-4ce6-91fb-9385fa0132b9/58197acf-9c7f-430d-93ce-53c80554f988_video_0_thumb.jpg"
            alt="Video generated"
            className="w-full h-full absolute"
          /> */}
          { link && (
            <video
            ref={videoRef}
            src={link}
            className="w-full h-full absolute z-10 opacity-0 hover:opacity-100"
            loop
            playsInline
            controls
            // onMouseOut={() => videoRef.current?.pause()}
          />

          )}
          
        </div>
      </a>
    </div>
  );
}

export default Video;
