
import IncreaseButton from "@/components/increase-button";


import type { Metadata } from "next";


// =================== Regular Metadata ================

// <head>
//   <title>This is the title</title>
//   <meta name="description" content="metata data description" />
// </head>


// =================== NextJs Metadata ================


export const metatdata: Metadata = {
  title: "About Page",
}

function AboutPage() {

  return (
    <div>
      <p>Welcome to about page</p>
          {/* Client Leaf */}
          <IncreaseButton />
    </div>
  );
}

export default AboutPage;
