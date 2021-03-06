import React from "react";
import headshot from "../../assets/images/auburn_headshot.jpg";

function About() {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="card mt-5">
            <article className="card-body">
              <h1 className="card-title">About Me</h1>
              <hr />
              <div className="content about-me">
                <div>
                  <img src={headshot} alt="My Headshot" />
                </div>
                <p className="card-text">
                  &emsp;Hi, my name is Jared! I am a software
                  developer from Atlanta, GA. With a B.S. in Computer
                  Science, I am adept in OOP principles and committed to writing
                  clean, reusable code. Known amongst my peers for strong
                  attention to detail, responsiveness, and a grit to resolve
                  complex coding challenges in both individual and team
                  environments.
                </p>
                <p className="card-text">
                  &emsp;In my spare time, I like going to the lake and working
                  on DIY projects (home and/or tech). Please checkout my
                  projects and contact pages for more information!
                </p>
                <p className="card-text">
                  Current Position: Jr. Software Developer at <a href="https://www.inductivehealth.com/">InductiveHealth Informatics</a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
