import React from "react";
import "./Blog.css";
import Career from "./Career";


// const Blogcard = ({CareerQuestion, CareerAnswer,BeautyQuestion, BeautyAnswer, PersonalQuestion, PersonalAnswer, FashionQuestion, FashionAnswer, BTSQuestion, BTSAnswer }) => {
//   return(
//     <div className="Blogcard">
//       <div className="item">
//         <h1>Career and Industry Insights</h1>
//         <div className="title">
//           <h2>{CareerQuestion}</h2>
//           <span> + </span>
//         </div>
//         <div>{CareerAnswer}</div>
//       </div>
//       <div className="item">
//         <h1>Beauty and Skincare Tips</h1>
//         <div className="title">
//           <h2>{BeautyQuestion}</h2>
//           <span>+</span>
//         </div>
//         <div>{BeautyAnswer}</div>
//       </div>
//       <div className="item">
//         <h1>Personal Life and Hobbies</h1>
//         <div className="title">
//           <h2>{PersonalQuestion}</h2>
//           <span>+</span>
//         </div>
//         <div>{PersonalAnswer}</div>
//       </div>
//       <div className="item">
//         <h1>Fashion and Style Advice</h1>
//         <div className="title">
//           <h2>{FashionQuestion}</h2>
//           <span>+</span>
//         </div>
//         <div>{FashionAnswer}</div>
//       </div>
//       <div className="item">
//         <h1>Behind-the-Scenes Experiences</h1>
//         <div className="title">
//           <h2>{BTSQuestion}</h2>
//           <span>+</span>
//         </div>
//         <div>{BTSAnswer}</div>
//       </div>
//     </div>
//   )
// }

function Blog() {
  return (
    <div className="Blog">
      <div className="blogHeader">
        <h1>Know More About Beth:</h1>
      </div>
      <div className="statDetails">
        <h3>My parameters</h3>
        <br />
        <ul>
          <li>
            <span className="stat">
              <b>HEIGHT</b> &#8594; 178 = 5'10'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "80%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>BUST</b> &#8594; 82 32'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "70%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>WAIST</b> &#8594; 62 24'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "40%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>HIPS</b> &#8594; 88 35'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "90%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>SHOE SIZE</b> &#8594; 39 - 6'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "70%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>HAIR COLOR</b> &#8594; red{" "}
            </span>
            <span className="percent">
              <div className="hair" style={{ width: "100%" }}></div>
            </span>
          </li>
        </ul>
      </div>

      <div className="accordionwrapper">
        {/* {blog.map((current, i) =>(
          <Blogcard
          key={i}
          CareerQuestion={current.CareerQuestion}
          CareerAnswer={current.CareerAnswer}
          BeautyQuestion={current.BeautyQuestion}
          BeautyAnswer={current.BeautyAnswer}
          PersonalQuestion={current.PersonalQuestion}
          PersonalAnswer={current.PersonalAnswer}
          FashionQuestion={current.FashionQuestion}
          FashionAnswer={current.FashionAnswer}
          BTSQuestion={current.BTSQuestion}
          BTSAnswer={current.BTSAnswer}
          />
        ))} */}
        <h2> Q&A section</h2>
        <Career/>
      </div>
    </div>
  );
}

export default Blog;
