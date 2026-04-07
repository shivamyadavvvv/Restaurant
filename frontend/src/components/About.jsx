import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              We are dedicated to serving delicious, high quality food crafted with fresh ingredients and authentic flavors. Our restaurant focuses on exceptional service, a welcoming atmosphere, and customer satisfaction, ensuring every visit is enjoyable, memorable, and filled with great taste, comfort, and hospitality for all guests.
            </p>
            <Link to="qualities" spy={true} smooth={true} duration={500}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;