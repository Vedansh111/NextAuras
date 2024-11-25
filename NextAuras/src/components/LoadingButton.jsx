function LoadingButton() {
  return (
    <div className="flex justify-center items-center pointer-events-none m-[10px] animate-pulse">
      <button
        aria-label="Stop streaming"
        data-testid="stop-button"
        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary bg-black text-white dark:bg-white dark:text-black disabled:bg-[#D7D7D7]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-lg"
        >
          <rect
            x="7"
            y="7"
            width="10"
            height="10"
            rx="1.25"
            fill="currentColor"
          ></rect>
        </svg>
      </button>
    </div>
  );
}

export default LoadingButton;
