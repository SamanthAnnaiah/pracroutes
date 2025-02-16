import { useContext } from "react";
import { Pcontext } from "../pcontexts/Pcontext";

function Urllister() {
  let { urllist, seturllist } = useContext(Pcontext);
  console.log(urllist);
  return urllist.length > 0 ? (
    <div className="flex flex-col justify-center items-center gap-4 m-auto mt-4">
      {urllist.map((url) => (
        <div
          key={url.surl}
          className="flex flex-row justify-between items-center w-3/4 bg-white text-sm 
          p-4 rounded-lg shadow-md gap-2"
        >
          <div className="rounded-full text-gray-800">{url.lurl}</div>
          <div className="rounded-sm bg-cyan-400 p-2">
            <a href={url.surl} target="_blank" rel="noopener noreferrer">
              {url.surl}
            </a>
          </div>
          <div
            className="rounded-full p-2 bg-red-100 text-red-800 hover:bg-red-200 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              console.log("Language:", navigator.language);
              navigator.clipboard.writeText(url.surl);
              e.target.textContent = "Copied!";
            }}
          >
            Copy
          </div>
          <div
            data-url={url.surl}
            onClick={(e) => {
              seturllist((urllistitems) => {
                return urllistitems.filter(
                  (item) => item.surl !== e.target.dataset.url
                );
              });
            }}
            className="rounded-full p-2 bg-red-100 text-red-800 hover:bg-red-200 cursor-pointer"
          >
            ❌
          </div>
        </div>
      ))}
    </div>
  ) : (
    ""
  );
}

export default Urllister;
