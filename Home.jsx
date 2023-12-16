import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Book Store Project</h1>
        <h2>Name:Harshal hingankar</h2>
        <h2>Roll No.:43</h2>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <div>
            <Link to="/books">
              <button class="btn">
                <i class="animation"></i>Get Books<i class="animation"></i>
              </button>
            </Link>
          </div>
          <div>
            <Link to="/author">
              <button class="btn">
                <i class="animation"></i>Get Authors<i class="animation"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
