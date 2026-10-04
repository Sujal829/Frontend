import { useEffect, useState } from "react";

const DomParser = () => {
  const [htmlString, setHtmlString] = useState("");
  const [htmlDoc, setHtmlDoc] = useState("");

  const template = `<div>
          <h1>Welcome</h1>
          <input name="username" />
          <p>Hello</p>
      </div>`;
  useEffect(() => {
    const parse = new DOMParser();
    const doc = parse.parseFromString(template, "text/html");
    const timerId = setTimeout(() => {
      setHtmlString(doc.querySelector("h1").textContent);
      setHtmlDoc(template);
    }, 5000);
    return () => clearTimeout(timerId); //cleaning up the timer
  }, []);

  return (
    <>
      <h2>{htmlString}</h2>
      <div>{template}</div>
      <div dangerouslySetInnerHTML={{ __html: htmlDoc }}></div>
    </>
  );
};
export default DomParser;
