import { useContext } from "react";
import { Pcontext } from "../pcontexts/Pcontext";
import axios from "axios";
// let urltofetch = "https://cleanuri.com/api/v1/shorten";
let urltofetch =
  "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten";

function Urlshortner() {
  let { longurl, setlongurl, shorturl, setshorturl, urllist, seturllist } =
    useContext(Pcontext);
  return (
    <div
      className="urls p-4 flex flex-row justify-center items-center rounded-lg
    gap-5 w-[60%] m-auto"
    >
      <input
        className="border-2 border-gray-300 rounded-md p-2 m-2 text-black shadow-md bg-white w-3/4"
        type="text"
        placeholder="Enter long url"
        value={longurl}
        onChange={(e) => setlongurl(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 m-2 rounded-md shadow-md 
        cursor-pointer hover:bg-blue-600 transition-all duration-300"
        onClick={() => {
          shortener(longurl, seturllist);
        }}
      >
        Shorten it!
      </button>
    </div>
  );
}

async function shortener(longurl, seturllist) {
  try {
    let response = await axios.post(
      urltofetch,
      new URLSearchParams({ url: longurl })
    );
    console.log(response.data);
    seturllist((prev) => [
      ...prev,
      { surl: response.data.result_url, lurl: longurl },
    ]);
  } catch (error) {
    console.log(error);
  }
}

export default Urlshortner;
