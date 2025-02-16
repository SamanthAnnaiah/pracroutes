import { createContext, useState } from "react";

export let Pcontext = createContext();

function PcontextProvider({ children }) {
  let [longurl, setlongurl] = useState("");
  let [shorturl, setshorturl] = useState("");
  //   let [urllist, seturllist] = useState([{ surl: "", lurl: "" }]);
  let [urllist, seturllist] = useState([]);

  return (
    <Pcontext.Provider
      value={{
        longurl,
        setlongurl,
        shorturl,
        setshorturl,
        urllist,
        seturllist,
      }}
    >
      {children}
    </Pcontext.Provider>
  );
}

export default PcontextProvider;
