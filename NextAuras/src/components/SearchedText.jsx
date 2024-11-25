import Cookies from "js-cookie";

function SearchedText() {
  const text = Cookies.get("text");
  return <div className="w-full gap-4 items-end text-balance">{text}</div>;
}

export default SearchedText;
