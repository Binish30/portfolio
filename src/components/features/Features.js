// import React from "react";
// import { FaTerminal, FaTools, FaNetworkWired } from "react-icons/fa";
// import Title from "../layouts/Title";
// import Card from "./Card";

// const Features = () => {
//   return (
//     <section
//       id="features"
//       className="w-full py-20 border-b-[1px] border-b-black"
//     >
//       <Title title="Features" des="What I Do" />
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
//         <Card
//           title="Developer of Engaging Web Applications"
//           des="I specialize in ReactJS, NodeJS, and MongoDB to build responsive web applications, aiming to create functional and visually appealing user experiences."
//           icon={<FaTerminal />}
//         />

//         <Card
//           title="Adaptable Team Player"
//           des="I excel in adaptability and collaboration, ensuring smooth integration into diverse teams and contributing to project success."
//           icon={<FaNetworkWired />}
//         />

//         <Card
//           title="Focused on Practical Solutions"
//           des="I solve problems by improving performance and enhancing user experience, using smart and effective approaches to address challenges efficiently."
//           icon={<FaTools />}
//         />
//       </div>
//     </section>
//   );
// };

// export default Features;

import React from "react";
import { FaTerminal, FaTools, FaNetworkWired } from "react-icons/fa";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Developer of Engaging Web Applications"
          des="I specialize in ReactJS, NodeJS, and MongoDB to build responsive web applications, aiming to create functional and visually appealing user experiences."
          icon={<FaTerminal />}
        />

        <Card
          title="Adaptable Team Player"
          des="I excel in adaptability and collaboration, ensuring smooth integration into diverse teams and contributing to project success."
          icon={<FaNetworkWired />}
        />

        <Card
          title="Focused on Practical Solutions"
          des="I solve problems by improving performance and enhancing user experience, using smart and effective approaches to address challenges efficiently."
          icon={<FaTools />}
        />
      </div>
    </section>
  );
};

export default Features;
