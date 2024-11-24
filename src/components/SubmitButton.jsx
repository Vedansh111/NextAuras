function SubmitButton({ content, handleSubmit }) {
  return (
    <div className="flex justify-center items-center pointer-events-none m-[7px]">
      <button
        onClick={handleSubmit}
        className="relative w-[24px] h-[24px] flex outline-none m-[8px] aspect-square pointer-events-auto transition-opacity"
        disabled={!content}
      >
        <div
          tabIndex="0"
          className={`absolute m-auto inset-0 ${
            content ? "opacity-[0.8] hover:opacity-[1]" : "opacity-[0.3]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 25 25"
            fill="none"
            className="w-[24px] h-[24px] text-white"
          >
            <path
              fill="currentColor"
              fillOpacity="0.9"
              d="M12.5 24.492q-2.45 0-4.617-.937a12.2 12.2 0 0 1-3.809-2.59 12.2 12.2 0 0 1-2.59-3.809 11.5 11.5 0 0 1-.937-4.617q0-2.45.937-4.605a12.3 12.3 0 0 1 2.579-3.82 12.2 12.2 0 0 1 3.808-2.59 11.5 11.5 0 0 1 4.617-.938q2.45 0 4.618.937a12.2 12.2 0 0 1 3.82 2.59 12.2 12.2 0 0 1 2.59 3.82q.937 2.157.937 4.606 0 2.45-.937 4.617a12.2 12.2 0 0 1-2.59 3.809 12.2 12.2 0 0 1-3.82 2.59 11.4 11.4 0 0 1-4.606.937m.023-5.918q.398 0 .645-.246a.9.9 0 0 0 .258-.668v-6.012l-.094-2.578 1.219 1.465 1.418 1.442q.246.27.644.27.375 0 .633-.247a.86.86 0 0 0 .258-.633.88.88 0 0 0-.246-.633l-4.031-4.007q-.34-.352-.704-.352t-.703.352l-4.03 4.007a.86.86 0 0 0-.247.633q0 .375.246.633a.88.88 0 0 0 .633.246.88.88 0 0 0 .644-.27l1.43-1.44 1.207-1.454-.094 2.566v6.012q0 .41.258.668.258.246.656.246"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default SubmitButton;
