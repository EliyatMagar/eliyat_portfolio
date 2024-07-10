// import React from "react";
// import theme_pattern from "../assets/theme_pattern.svg";
// import profile_img from "../assets/about_profile.svg";
// const About = () => {
//   return (
//     <div>
//       <div className="about flex flex-col items-center justify-between gap-[80px] my-[80px] mx-[170px]">
//         <div className="about-title relative">
//           <h1 className="py-0 text-[70px] font-semibold">About me</h1>
//           <img src={theme_pattern} className="absolute bottom-0 right-0 z-[-1]" alt="" />
//         </div>


//         <div className="about-section flex gap-[80px] ">
//           <div className="about-left">
//             <img src={profile_img} alt="" />
//           </div>


//           <div className="about-right flex flex-col gap-[80px] ">
//             <div className="about-para flex flex-col gap-[20px] text-[24px] font-medium ">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
//                 cupiditate corrupti aliquid, expedita culpa modi minima eum
//                 accusantium nemo illum veniam, obcaecati ullam!
//               </p>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Laborum quia neque illum?
//               </p>
//             </div>
//             <div className="about-skills flex flex-col gap-[20px] ">
//               <div className="about-skill flex gap-[50px] items-center transition-[0.3s]">
//                 <p className="min-w-[150px] font-medium">HTML & CSS</p>
//                 <hr style={{ width: "50%" }} className="outline-none border-0 w-[50%] h-[8px] bg-gradient-to-r from-purple-500 to-pink-500" />
//               </div>

//               <div className="about-skill flex gap-[50px] items-center transition-[0.3s]">
//                 <p className="min-w-[150px] font-medium">React js</p>
//                 <hr style={{ width: "70%" }} className="outline-none border-0 w-[50%] h-[8px] bg-gradient-to-r from-purple-500 to-pink-500" />
//               </div>

//               <div className="about-skill flex gap-[50px] items-center transition-[0.3s]">
//                 <p className="min-w-[150px] font-medium">Javascript</p>
//                 <hr style={{ width: "60%" }} className="outline-none border-0 w-[50%] h-[8px] bg-gradient-to-r from-purple-500 to-pink-500" />


//               </div>
//                 <div className="about-skill flex gap-[50px] items-center transition-[0.3s]">
//                 <p className="min-w-[150px] font-medium">Next js</p>
//                 <hr style={{ width: "50%" }} className="outline-none border-0 w-[50%] h-[8px] bg-gradient-to-r from-purple-500 to-pink-500" />
//               </div>
//             </div>
//           </div>
//         </div>



//         <div className="about-achievements flex justify-around w-[100%] mb-[80px] ">

//         <div className="about-achievement flex flex-col items-center gap-[10px] transition-[0.3s] ">
//           <h1 className="text-[60px] font-semibold herotext ">2+</h1>
//           <p className="text-[22px] font-medium ">YEARS OF EXPERIENCE</p>
//         </div>
//         <hr />

//         <div className="about-achievement flex flex-col items-center gap-[10px] transition-[0.3s]">
//           <h1 className="text-[60px] font-semibold herotext ">12+</h1>
//           <p className="text-[22px] font-medium ">PROJECTS COMPLETED</p>
//         </div>
//         <hr />
//         <div className="about-achievement flex flex-col items-center gap-[10px] transition-[0.3s]">
//           <h1 className="text-[60px] font-semibold herotext ">10+</h1>
//           <p className="text-[22px] font-medium ">HAPPY CLIENTS</p>
//         </div>
//       </div>
//       </div>
      
//     </div>
//   );
// };

// export default About;



// import React from "react";
// import theme_pattern from "../assets/theme_pattern.svg";
// import profile_img from "../assets/about_profile.svg";

// const About = () => {
//   return (
//     <div>
//       <div className="about flex flex-col items-center justify-between gap-20 my-20 mx-40">
//         <div className="about-title relative text-center">
//           <h1 className="py-0 text-5xl font-semibold">About Me</h1>
//           <img
//             src={theme_pattern}
//             className="absolute bottom-0 right-0 z-[-1] w-20 h-20"
//             alt="pattern"
//           />
//         </div>

//         <div className="about-section flex gap-20">
//           <div className="about-left flex-shrink-0">
//             <img
//               src={profile_img}
//               className="rounded-full shadow-lg w-64 h-64 object-cover"
//               alt="Profile"
//             />
//           </div>

//           <div className="about-right flex flex-col gap-20">
//             <div className="about-para flex flex-col gap-5 text-lg font-medium text-gray-700">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
//                 cupiditate corrupti aliquid, expedita culpa modi minima eum
//                 accusantium nemo illum veniam, obcaecati ullam!
//               </p>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Laborum quia neque illum?
//               </p>
//             </div>
//             <div className="about-skills flex flex-col gap-5">
//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[150px] font-medium">HTML & CSS</p>
//                 <hr
//                   style={{ width: "50%" }}
//                   className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[150px] font-medium">React JS</p>
//                 <hr
//                   style={{ width: "70%" }}
//                   className="outline-none border-0 w-[70%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[150px] font-medium">JavaScript</p>
//                 <hr
//                   style={{ width: "60%" }}
//                   className="outline-none border-0 w-[60%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[150px] font-medium">Next JS</p>
//                 <hr
//                   style={{ width: "50%" }}
//                   className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="about-achievements flex justify-around w-full mb-20">
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-6xl font-semibold herotext">2+</h1>
//             <p className="text-lg font-medium text-gray-600">Years of Experience</p>
//           </div>
//           <hr className="h-10 w-px bg-gray-300 mx-5" />
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-6xl font-semibold herotext">12+</h1>
//             <p className="text-lg font-medium text-gray-600">Projects Completed</p>
//           </div>
//           <hr className="h-10 w-px bg-gray-300 mx-5" />
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-6xl font-semibold herotext">10+</h1>
//             <p className="text-lg font-medium text-gray-600">Happy Clients</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from '../assets/profile_eliyat.png';
const About = () => {
  return (
    <div id="about" className="px-4 sm:px-6 lg:px-8">
      <div className="about flex flex-col items-center justify-between gap-20 my-20 mx-auto max-w-6xl">
        <div className="about-title relative text-center">
          <h1 className="py-0 text-4xl sm:text-5xl lg:text-6xl font-semibold">About Me</h1>
          <img
            src={theme_pattern}
            className="absolute bottom-0 right-0 z-[-1] w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 "
            alt="pattern"
          />
        </div>

        <div className="about-section flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="about-left flex-shrink-0 flex justify-center">
            <img
              src={profile_img}
              className="rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover shadow-2xl shadow-cyan-500/50"
              alt="Profile"
            />
          </div>

          <div className="about-right flex flex-col gap-10 lg:gap-20">
            <div className="about-para flex flex-col gap-5 text-base sm:text-lg lg:text-xl font-medium text-gray-700">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                cupiditate corrupti aliquid, expedita culpa modi minima eum
                accusantium nemo illum veniam, obcaecati ullam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum quia neque illum?
              </p>
            </div>
            <div className="about-skills flex flex-col gap-5">
              <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
                <p className="min-w-[100px] sm:min-w-[150px] font-medium">HTML & CSS</p>
                <hr
                  style={{ width: "50%" }}
                  className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>

              <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
                <p className="min-w-[100px] sm:min-w-[150px] font-medium">React JS</p>
                <hr
                  style={{ width: "70%" }}
                  className="outline-none border-0 w-[70%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>

              <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
                <p className="min-w-[100px] sm:min-w-[150px] font-medium">JavaScript</p>
                <hr
                  style={{ width: "60%" }}
                  className="outline-none border-0 w-[60%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>

              <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
                <p className="min-w-[100px] sm:min-w-[150px] font-medium">Next JS</p>
                <hr
                  style={{ width: "50%" }}
                  className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-achievements flex flex-col sm:flex-row justify-around w-full mb-20 gap-10 sm:gap-0">
          <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
            <h1 className="text-5xl sm:text-6xl font-semibold herotext">2+</h1>
            <p className="text-lg font-medium text-gray-600">Years of Experience</p>
          </div>
          <hr className="hidden sm:block h-10 w-px bg-gray-300 mx-5" />
          <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
            <h1 className="text-5xl sm:text-6xl font-semibold herotext">12+</h1>
            <p className="text-lg font-medium text-gray-600">Projects Completed</p>
          </div>
          <hr className="hidden sm:block h-10 w-px bg-gray-300 mx-5" />
          <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
            <h1 className="text-5xl sm:text-6xl font-semibold herotext">10+</h1>
            <p className="text-lg font-medium text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
