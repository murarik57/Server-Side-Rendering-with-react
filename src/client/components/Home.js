import React from "react";

const Home = () => {
  // console.log(window);
  // console.log(document);

  return (
    <div>
      <h1>Home page</h1>
      <button
        onClick={() => {
          console.log("clicked");
          alert("yeee");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Home;
