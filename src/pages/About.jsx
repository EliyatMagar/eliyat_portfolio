// // import React from "react";
// // import theme_pattern from "../assets/theme_pattern.svg";
// // import profile_img from '../assets/profile_eliyat.png';
// // import facebook from '../assets/facebook.png'
// // import github from '../assets/github-1.png'
// // import instagram from '../assets/instagram.png'
// // import linkedin from '../assets/linkedin.png'



// // const About = () => {
// //   return (
// //     <div id="about" className="px-4 sm:px-6 lg:px-8">
// //       <div className="about flex flex-col items-center justify-between gap-20 my-20 mx-auto max-w-6xl">
// //         <div className="about-title relative text-center">
// //           <h1 className="py-0 text-4xl sm:text-5xl lg:text-6xl font-semibold">About Me</h1>
// //           <img
// //             src={theme_pattern}
// //             className="absolute bottom-0 right-0 z-[-1] w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 "
// //             alt="pattern"
// //           />
// //         </div>

// //         <div className="about-section flex flex-col lg:flex-row gap-10 lg:gap-20">
// //           <div className="about-left flex-shrink-0 flex justify-center">
// //             <img
// //               src={profile_img}
// //               className="rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover shadow-2xl shadow-cyan-500/50"
// //               alt="Profile"
// //             />
// //           </div>

// //           <div className="about-right flex flex-col gap-10 lg:gap-20">
// //             <div className="about-para flex flex-col gap-5 text-base sm:text-lg lg:text-xl font-medium text-gray-700">
// //               <p>
// //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
// //                 cupiditate corrupti aliquid, expedita culpa modi minima eum
// //                 accusantium nemo illum veniam, obcaecati ullam!
// //               </p>
// //               <p>
// //                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
// //                 Laborum quia neque illum?
// //               </p>
// //               <div className="social-icon flex gap-[20px]">
// //                 <li className="list-none"><a href="" className="decoration-none"><img src={facebook} alt="" /></a></li>
// //                 <li className="list-none"><a href=""><img src={instagram} alt="" /></a></li>
// //                 <li className="list-none"><a href=""><img src={github} alt="" /></a></li>
// //                 <li className="list-none"><a href=""><img src={linkedin} alt="" /></a></li>
// //               </div>
// //             </div>
// //             <div className="about-skills flex flex-col gap-5">
// //               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
// //                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">HTML & CSS</p>
// //                 <hr
// //                   style={{ width: "50%" }}
// //                   className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
// //                 />
// //               </div>

// //               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
// //                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">React JS</p>
// //                 <hr
// //                   style={{ width: "70%" }}
// //                   className="outline-none border-0 w-[70%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
// //                 />
// //               </div>

// //               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
// //                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">JavaScript</p>
// //                 <hr
// //                   style={{ width: "60%" }}
// //                   className="outline-none border-0 w-[60%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
// //                 />
// //               </div>

// //               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
// //                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">Next JS</p>
// //                 <hr
// //                   style={{ width: "50%" }}
// //                   className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="about-achievements flex flex-col sm:flex-row justify-around w-full mb-20 gap-10 sm:gap-0">
// //           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
// //             <h1 className="text-5xl sm:text-6xl font-semibold herotext">2+</h1>
// //             <p className="text-lg font-medium text-gray-600">Years of Experience</p>
// //           </div>
// //           <hr className="hidden sm:block h-10 w-px bg-gray-300 mx-5" />
// //           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
// //             <h1 className="text-5xl sm:text-6xl font-semibold herotext">12+</h1>
// //             <p className="text-lg font-medium text-gray-600">Projects Completed</p>
// //           </div>
// //           <hr className="hidden sm:block h-10 w-px bg-gray-300 mx-5" />
// //           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
// //             <h1 className="text-5xl sm:text-6xl font-semibold herotext">10+</h1>
// //             <p className="text-lg font-medium text-gray-600">Happy Clients</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;




// import React from "react";
// import theme_pattern from "../assets/theme_pattern.svg";
// import profile_img from '../assets/profile_eliyat.png';
// import facebook from '../assets/facebook.png';
// import github from '../assets/github-1.png';
// import instagram from '../assets/instagram.png';
// import linkedin from '../assets/linkedin.png';

// const About = () => {
//   return (
//     <div id="about" className="px-4 sm:px-6 lg:px-8">
//       <div className="about flex flex-col items-center justify-between gap-20 my-20 mx-auto max-w-6xl">
//         <div className="about-title relative text-center">
//           <h1 className="py-0 text-4xl sm:text-5xl lg:text-6xl font-semibold">About Me</h1>
//           <img
//             src={theme_pattern}
//             className="absolute bottom-0 right-0 z-[-1] w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
//             alt="pattern"
//           />
//         </div>

//         <div className="about-section flex flex-col lg:flex-row gap-10 lg:gap-20">
//           <div className="about-left flex-shrink-0 flex justify-center">
//             <img
//               src={profile_img}
//               className="rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover shadow-2xl shadow-cyan-500/50"
//               alt="Profile"
//             />
//           </div>

//           <div className="about-right flex flex-col gap-10 lg:gap-20">
//             <div className="about-para flex flex-col gap-5 text-base sm:text-lg lg:text-xl font-medium text-gray-700">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
//                 cupiditate corrupti aliquid, expedita culpa modi minima eum
//                 accusantium nemo illum veniam, obcaecati ullam!
//               </p>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Laborum quia neque illum?
//               </p>
//               <div className="social-icon flex gap-5 sm:gap-6 lg:gap-8">
//                 <li className="list-none transform duration-300 hover:scale-105"><a href="https://www.facebook.com/eliyat.thapamagar/" ><img src={facebook} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" alt="Facebook" /></a></li>
//                 <li className="list-none transform duration-300 hover:scale-105"><a href="https://www.instagram.com/eliyat_magar79/"><img src={instagram} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" alt="Instagram" /></a></li>
//                 <li className="list-none transform duration-300 hover:scale-105"><a href="https://github.com/EliyatMagar"><img src={github} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" alt="GitHub" /></a></li>
//                 <li className="list-none transform duration-300 hover:scale-105"><a href="https://www.linkedin.com/in/eliyat-thapa-magar-ba06472b3/"><img src={linkedin} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" alt="LinkedIn" /></a></li>
//               </div>
//             </div>
//             <div className="about-skills flex flex-col gap-5">
//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">HTML & CSS</p>
//                 <hr
//                   style={{ width: "50%" }}
//                   className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">React JS</p>
//                 <hr
//                   style={{ width: "70%" }}
//                   className="outline-none border-0 w-[70%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">JavaScript</p>
//                 <hr
//                   style={{ width: "60%" }}
//                   className="outline-none border-0 w-[60%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">Next JS</p>
//                 <hr
//                   style={{ width: "50%" }}
//                   className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="about-achievements flex flex-col sm:flex-row justify-around w-full mb-20 gap-10 sm:gap-0">
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-5xl sm:text-6xl font-semibold herotext">2+</h1>
//             <p className="text-lg font-medium text-gray-600">Years of Experience</p>
//           </div>
//           <hr className="hidden sm:block h-10 w-px bg-gray-300 mx-5" />
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-5xl sm:text-6xl font-semibold herotext">12+</h1>
//             <p className="text-lg font-medium text-gray-600">Projects Completed</p>
//           </div>
//           <hr className="hidden sm:block h-10 w-px bg-gray-300 mx-5" />
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-5xl sm:text-6xl font-semibold herotext">10+</h1>
//             <p className="text-lg font-medium text-gray-600">Happy Clients</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




// import React from "react";
// import theme_pattern from "../assets/theme_pattern.svg";
// import profile_img from '../assets/profile_eliyat.png';
// import facebook from '../assets/facebook.png'
// import github from '../assets/github-1.png'
// import instagram from '../assets/instagram.png'
// import linkedin from '../assets/linkedin.png'



// const About = () => {
//   return (
//     <div id="about" className="px-4 sm:px-6 lg:px-8">
//       <div className="about flex flex-col items-center justify-between gap-20 my-20 mx-auto max-w-6xl">
//         <div className="about-title relative text-center">
//           <h1 className="py-0 text-4xl sm:text-5xl lg:text-6xl font-semibold">About Me</h1>
//           <img
//             src={theme_pattern}
//             className="absolute bottom-0 right-0 z-[-1] w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 "
//             alt="pattern"
//           />
//         </div>

//         <div className="about-section flex flex-col lg:flex-row gap-10 lg:gap-20">
//           <div className="about-left flex-shrink-0 flex justify-center">
//             <img
//               src={profile_img}
//               className="rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover shadow-2xl shadow-cyan-500/50"
//               alt="Profile"
//             />
//           </div>

//           <div className="about-right flex flex-col gap-10 lg:gap-20">
//             <div className="about-para flex flex-col gap-5 text-base sm:text-lg lg:text-xl font-medium text-gray-700">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
//                 cupiditate corrupti aliquid, expedita culpa modi minima eum
//                 accusantium nemo illum veniam, obcaecati ullam!
//               </p>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Laborum quia neque illum?
//               </p>
//               <div className="social-icon flex gap-[20px]">
//                 <li className="list-none"><a href="" className="decoration-none"><img src={facebook} alt="" /></a></li>
//                 <li className="list-none"><a href=""><img src={instagram} alt="" /></a></li>
//                 <li className="list-none"><a href=""><img src={github} alt="" /></a></li>
//                 <li className="list-none"><a href=""><img src={linkedin} alt="" /></a></li>
//               </div>
//             </div>
//             <div className="about-skills flex flex-col gap-5">
//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">HTML & CSS</p>
//                 <hr
//                   style={{ width: "50%" }}
//                   className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">React JS</p>
//                 <hr
//                   style={{ width: "70%" }}
//                   className="outline-none border-0 w-[70%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">JavaScript</p>
//                 <hr
//                   style={{ width: "60%" }}
//                   className="outline-none border-0 w-[60%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>

//               <div className="about-skill flex gap-5 items-center transition-transform transform hover:scale-105">
//                 <p className="min-w-[100px] sm:min-w-[150px] font-medium">Next JS</p>
//                 <hr
//                   style={{ width: "50%" }}
//                   className="outline-none border-0 w-[50%] h-2 bg-gradient-to-r from-purple-500 to-pink-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="about-achievements flex flex-col sm:flex-row justify-around w-full mb-20 gap-10 sm:gap-0">
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-5xl sm:text-6xl font-semibold herotext">2+</h1>
//             <p className="text-lg font-medium text-gray-600">Years of Experience</p>
//           </div>
//           <hr className="hidden sm:block h-10 w-px bg-gray-300 mx-5" />
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-5xl sm:text-6xl font-semibold herotext">12+</h1>
//             <p className="text-lg font-medium text-gray-600">Projects Completed</p>
//           </div>
//           <hr className="hidden sm:block h-10 w-px bg-gray-300 mx-5" />
//           <div className="about-achievement flex flex-col items-center gap-2 transition-transform transform hover:scale-105">
//             <h1 className="text-5xl sm:text-6xl font-semibold herotext">10+</h1>
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
import facebook from '../assets/facebook.png';
import github from '../assets/github-1.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import react from '../assets/react.png';
import node from '../assets/nodejs.svg';
import mongo from '../assets/mongo.png';
import js from '../assets/js.png'
import next from '../assets/next.png';
import express from '../assets/express.png';
import mysql from '../assets/mysql.png';
import typescript from '../assets/typescript.png';

const About = () => {
  return (
    <div id="about" className="px-4 sm:px-6 lg:px-8">
      <div className="about flex flex-col items-center justify-between gap-20 my-20 mx-auto max-w-6xl">
        <div className="about-title relative text-center">
          <h1 className="py-0 text-4xl sm:text-5xl lg:text-6xl font-semibold">About Me</h1>
          <img
            src={theme_pattern}
            className="absolute bottom-0 right-0 z-[-1] w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
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

          <div className="about-right flex flex-col gap-5 lg:gap-14">
            <div className="about-para flex flex-col gap-5 text-base sm:text-lg lg:text-xl font-medium text-gray-700">
              <p>
                Hello, I'm Eliyat Thapa Magar, a dedicated MERN stack developer with a passion for creating dynamic and responsive web applications. With expertise in MongoDB,Express.js, React, and Node.js, I have 2 years of experience delivering high-quality, scalable solutions.
              </p>
              <p>
                I am constantly learning and keeping up with the latest industry trends and best practices.My goal is to deliver high-quality code and innovative solutions that meet client needs and exceed their expectations.Whether working independently or as part of a collective team,I bring a problem-solving mindset and a commitment to excellence to every project.
              </p>
              <div className="social-icon flex gap-5 sm:gap-6 lg:gap-8">
                <li className="list-none transform duration-300 hover:scale-105">
                  <a href="https://www.facebook.com/eliyat.thapamagar/"><img src={facebook} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" alt="Facebook" /></a>
                </li>
                <li className="list-none transform duration-300 hover:scale-105">
                  <a href="https://www.instagram.com/eliyat_magar79/"><img src={instagram} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" alt="Instagram" /></a>
                </li>
                <li className="list-none transform duration-300 hover:scale-105">
                  <a href="https://github.com/EliyatMagar"><img src={github} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" alt="GitHub" /></a>
                </li>
                <li className="list-none transform duration-300 hover:scale-105">
                  <a href="https://www.linkedin.com/in/eliyat-thapa-magar-ba06472b3/"><img src={linkedin} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" alt="LinkedIn" /></a>
                </li>
              </div>
            </div>
            <div className="about-skills flex flex-col gap-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Skills</h1>
              <div className="skills-image flex flex-wrap gap-4 md:gap-6">
                <li className="list-none">
                  <img src={react} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="React" />
                </li>
                <li className="list-none">
                  <img src={node} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="Node.js" />
                </li>
                <li className="list-none">
                  <img src={mongo} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="MongoDB" />
                </li>
                <li className="list-none">
                  <img src={express} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="Express" />
                </li>
                <li className="list-none">
                  <img src={js} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="Express" />
                </li>
                <li className="list-none">
                  <img src={next} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="Next.js" />
                </li>
                <li className="list-none">
                  <img src={typescript} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="TypeScript" />
                </li>
                <li className="list-none">
                  <img src={mysql} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="MySQL" />
                </li>
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




