import { FaRegFilePdf } from "react-icons/fa";

function UploadPdfInput() {
  return (
    <div className="absolute ml-[8px] flex justify-center items-center pointer-events-none bottom-[6px]">
      <label
        className="w-[42px] h-[42px] cursor-pointer opacity-[0.8] flex items-center justify-center text-white hover:text-white rounded-full outline-none pointer-events-auto origin-center"
        tabIndex="0"
      >
        <input
          multiple
          accept="application/pdf"
          className="hidden"
          type="file"
        />
        <FaRegFilePdf size={20} />
      </label>
    </div>
  );
}

export default UploadPdfInput;
