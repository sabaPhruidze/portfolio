import character1 from "../../assets/character/character (1).png";
import character2 from "../../assets/character/character (2).png";
import character3 from "../../assets/character/character (3).png";

import progress from "../../assets/growth.png";
import checkmark from "../../assets/checkmark.png";
const Introduction = () => {
  return (
    <div className="">
      <section id="top">
        <h1>Hi, I'm Saba</h1>
        <h2>React.js developer</h2>
        <p>
          Building accessible, pixel-perfect, and performant web experiences . I
          bridge the gap between design and engineering with a focus on user
          experience
        </p>
        <button>View My Work</button>
        <button>Contact Me</button>
        <div>
          <img
            src={character1}
            alt="An animated person with glasses coding"
            className="w-4 h-4 rounded-full"
          />
          <img
            src={character2}
            alt="An animated person with glasses coding"
            className="w-4 h-4 rounded-full"
          />
          <img
            src={character3}
            alt="An animated person with glasses coding"
            className="w-4 h-4 rounded-full"
          />
          <div>
            <strong>20+ Projects</strong>
            <p>Delivered succesfully</p>
          </div>
        </div>
      </section>
      <section id="bottom">
        <div>
          <div>
            <img
              src={checkmark}
              alt="check mark"
              className="w-4 h-4 rounded-full"
            />
            <div>
              <p>System Status</p>
              <p>Operational</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <p>PERFORMANCE</p>
              <img
                src={progress}
                alt="progress icon"
                className="w-4 h-4 rounded-full"
              />
            </div>
            <div></div>
            <div>
              <p>Optimization</p>
              <p>98%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
