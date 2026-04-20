import React from "react";
import AboutPage from "../about/page";

export default async function Blog() {
  
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return (
    <div>
      <div>
        <a href="#">Title 1</a>
        <img src="https://placehold.co/400" alt="" />
      </div>
      <br />
      <br />

      <div>
        <a href="#">Title 2</a>
        <img src="https://placehold.co/400" alt="" />
          </div>
          
          <AboutPage/>
    </div>
  );
}
