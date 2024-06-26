"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Loader() {
  const [body, setBody] = useState<HTMLElement>();
  useEffect(() => {
    !body && setBody(document.body);
  }, []);
  return (
    <>
      {body &&
        ReactDOM.createPortal(
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-50">
            <div className="absolute w-36 h-36 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full border-t-8 border-r-8 border-b-8 border-l-8 border-l-transparent rounded-full animate-spin"></div>
            </div>
          </div>,
          body
        )}
    </>
  );
}

export default Loader;
