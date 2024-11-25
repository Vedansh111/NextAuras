import DownloadButton from "./DownloadButton";
import SearchedText from "./SearchedText";
import Video from "./Video";

function ResponseDiv({link}) {
  return (
    <div className="pl-[30px] bg-clip-padding w-2/3 max-w-[926px]">
      <div className="w-full mb-[30px]">
        <div className="flex flex-col gap-2 group">
          <Video link={link} />
          <div className="flex flex-col gap-2">
            <SearchedText />
            {/* <DownloadButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponseDiv;
