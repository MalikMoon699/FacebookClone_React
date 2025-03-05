import React, { useEffect, useState } from "react";

const Loader = () => {
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    const imgTimeout = setTimeout(() => {
      setShowImg(false);
    }, 3000);

    return () => clearTimeout(imgTimeout); 
  }, []);

  return (
    <div className="height-100vh">
      {showImg ? (
        <img src="/Ripple@1x-1.0s-200px-200px.svg" alt="Loading..." />
      ) : (
        <div className="flex height-100vh">
          <h2>Account rejistered successful!</h2>
        </div>
      )}
    </div>
  );
};

export default Loader;
