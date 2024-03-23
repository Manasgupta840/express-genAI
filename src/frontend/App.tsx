import React, { useLayoutEffect } from "react";

const App = () => {
  useLayoutEffect(() => {
    const updateRemSize = () => {
      const fontSizeInPercent = (document.body.clientWidth * 100) / 1440;
      if (fontSizeInPercent < 100) {
        document.documentElement.style.fontSize = `${fontSizeInPercent}%`;
      }
    };
    updateRemSize();
    window.addEventListener("resize", updateRemSize);
    return () => window.removeEventListener("resize", updateRemSize);
  }, []);
  return (
    <div className="flex h-screen relative ">
      <img src="pexels-lukas-317356.jpg" className="w-screen h-screen -z-10" />
      <button className="z-10 px-3 py-4 h-fit absolute top-[35%] left-[30%]">Todos</button>
      <button className="z-10 px-3 py-4 h-fit absolute bottom-[20%] left-[55%]">Notes</button>
    </div>
  );
};
export default App;
