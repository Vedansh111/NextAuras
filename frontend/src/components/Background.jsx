
function Background() {
  return (
    <div className="blur-[100px] pointer-events-none fixed min-w-full mt-0 h-[180%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-30">
      <div className="rounded-full absolute top-1/2 left-1/2 w-screen min-w-[1000px] h-screen transform -translate-x-1/2 -translate-y-1/2 scale-[0.6] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 overflow-hidden ColorBlobs_SpinningGradient"></div>
      </div>
    </div>
  );
}

export default Background;
