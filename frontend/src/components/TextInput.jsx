function TextInput({ content, handleInput }) {
  return (
    <div className="w-full flex-1 pl-[58px] mt-0">
      <div className="relative">
        {!content && (
          <div
            className="absolute top-0 left-0 text-gray-400 pointer-events-none py-[16px] pr-[16px]"
            style={{
              opacity: 0.333,
            }}
          >
            Type some text with statistical data
          </div>
        )}

        <div
          role="textbox"
          aria-multiline="true"
          className="outline-none text-[17px] py-[16px] pr-[16px] relative whitespace-pre-wrap break-words min-h-[54.1px]"
          contentEditable="true"
          onInput={handleInput}
          suppressContentEditableWarning={true}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default TextInput;
