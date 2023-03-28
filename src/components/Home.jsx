import React from "react";
import Header from "./header";
import Description from "./Description";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home bg-violet-100 p-3">
      <Header />
      <main>
        <Description />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
