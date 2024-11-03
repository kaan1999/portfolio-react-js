import { Intro } from "../Intro/Intro";
import { Work } from "../Work/Work";

import imgWork1 from "../../assets/CaseStudies/work-1.png";
import imgWork2 from "../../assets/CaseStudies/work-2.png";
import imgWork3 from "../../assets/CaseStudies/work-3.png";


import "./CaseStudies.scss";
export const CaseStudies = () => {
  return (
    <>
      <section className="case-studies" id="case-studies">
        <div className="case-studies__container">
          <Intro
            title="Case Studies"
            text="Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            className="case-studies__intro"
            titleClassName="title--dark"
          />
          <div className="case-studies__works">
            <Work
              className="case-studies__work"
              title="Work name here"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
              tagContent="FinTech"
              tagClass="tag__orange"
              btnText="View case study"
              btnClass="btn__smaller btn__bg-orange"
              img={imgWork1}
            />
            <Work
              className="case-studies__work work--column"
              tagContent="EdTech"
              tagClass="tag__blue"
              title="Work name here"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
              imgClassName="work__img--left"
              btnText="View case study"
              btnClass="btn__smaller btn__bg-blue"
              img={imgWork2}
            />
            <Work
              className="case-studies__work"
              tagContent="Pharma"
              tagClass="tag__teal"
              title="Work name here"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
              btnText="View case study"
              btnClass="btn__smaller btn__bg-teal"
              img={imgWork3}
            />
          </div>
        </div>
      </section>
    </>
  );
};
