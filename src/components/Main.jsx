import { useState, useEffect } from "react";
import H1 from "./H1";
import Cookies from "js-cookie";
import ResponseDiv from "./ResponseDiv";
import SearchBar from "./SearchBar";

function Main() {
  const [content, setContent] = useState();
  const text = Cookies.get("text");

  useEffect(() => {}, [text]);

  return (
    <main className="flex-1 p-8 w-full h-full">
      <div className="pt-[180px] max-sm:pt-[280px] pb-[180px] max-h-svh h-full">
        <div className="flex flex-col gap-[100px] items-center pb-[150px]">
          <SearchBar content={content} setContent={setContent} />
          {text && (
            <div className="flex flex-col items-center w-full mx-10">
              <H1 />
              <ResponseDiv />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
