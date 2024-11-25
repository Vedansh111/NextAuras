function Header() {
  return (
    <div
      className="pointer-events-none fixed top-0 left-0 right-0 z-[-1000] gradient-overlay"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      }}
    >
      <div className="flex justify-between p-[32px]">
        <div className="pointer-events-none relative z-[100] flex gap-8 font-medium  items-center justify-between w-full">
          <a
            href=""
            className="pointer-events-auto text-white h-[29px] text-opacity-50 hover:text-opacity-100 font-medium"
          >
            {/* <svg
              width="25"
              height="29"
              viewBox="0 0 25 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1784_519)">
                <path
                  d="M12.3891 28.61L0 21.4568L12.3891 14.3037L24.7781 21.4568L12.3891 28.61Z"
                  fill="white"
                  fillOpacity="0.66"
                ></path>
                <path
                  d="M0 7.15157L12.3891 0V28.611L0 21.4578V7.15157Z"
                  fill="white"
                  fillOpacity="0.66"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1784_519">
                  <rect width="25" height="29" fill="white"></rect>
                </clipPath>
              </defs>
            </svg> */}
          </a>
          <div className="flex gap-6">
            <nav className="flex items-center w-full justify-end sm:gap-8 gap-6 text-white text-opacity-60">
              <a
                className="whitespace-nowrap text-white/90 cursor-default hover:text-white transition-colors"
                href="/dream-machine/creations"
                style={{
                  pointerEvents: "auto",
                  opacity: 1,
                }}
              >
                <span className="hidden sm:block">Create</span>
                <span className="sm:hidden">Create</span>
              </a>
              
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
