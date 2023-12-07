import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    return (
      <>
        <nav className="pa3 pa4-ns">
          <a className="link dim white dib mr3" href="#" title="Home">Home</a>
          <a className="link dim white dib mr3" href="#" title="About">About</a>
          <a className="link dim white dib mr3" href="#" title="Skills">Skills</a>
          <a className="link dim white dib mr3" href="#" title="Projects">Projects</a>
          <a className="link dim white dib" href="#" title="Contact">Contact</a>
        </nav>

        <div className="tc pa4 white">
          <ParticlesBg bg={true} type="lines" zIndex={"-1"} />
          <h1 className="f1">
            Hi, My Name Is{" "}
            <strong className="f2">Faisal</strong> | Full Stack Web Developer
          </h1>
          <hr className="mw3 bb bw1 b--white-10" />
          <div className="f3">
            <span>simple but different</span>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
