import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Project from "../Assets/Project";
import Row from 'react-bootstrap/Row';
import ParticlesBg from "particles-bg";

class Works extends Component {
  render() {
    return (
      <>
        <div>
          <Container className="white">
            <h1 className="f1 ttu tc b">Projects</h1>
            <Row>
              <Project
                name="Image Scrapper"
                pic=""
                desc="ImageScrapper is a versatile Python-based web scraping tool designed for fetching and downloading images from various websites. Leveraging the power of Flask, Requests, Flask-CORS, Logging, and Beautiful Soup, ImageScrapper provides a robust and efficient solution for your image scraping needs."
                sourceCode='https://github.com/fab-c14/ImageScraper.git'
                liveLink=""
                picAlt='https://picsum.photos/370/160?random=1'
              />

              <Project
                name="Review Scrapper"
                pic=""
                desc="ReviewScrapper is a web scraping tool built using Python to extract and analyze reviews from websites. It utilizes Flask, Requests, Flask-CORS, Logging, and Beautiful Soup to provide an effective solution for scraping and processing review data."
                sourceCode='https://github.com/fab-c14/review-scrapper.git'
                liveLink=""
                picAlt='https://picsum.photos/370/160?random=2'
              />

              <Project
                name="Css Linear Gradient Background Generator"
                pic=""
                desc="Background Generator is a css linear gradient background code generator with live preview, which you can also use for your website and generate beautiful backgrounds in seconds and save your time."
                sourceCode='https://github.com/fab-c14/fab-c14.github.io/tree/master/igb'
                liveLink="https://fab-c14.github.io/igb/index.html"
                picAlt='https://picsum.photos/370/160?random=3'
              />

              <Project
                name="Images Gallery"
                pic=""
                sourceCode="https://github.com/fab-c14/fab-c14.github.io/tree/master/Image_gallery"
                picAlt='https://picsum.photos/370/160?random=4'
                liveLink="https://fab-c14.github.io/Image_gallery/index.html"
                desc="Image Gallery is a beautiful Js based Project Which You Can also try. If You are Beginner in web Development."
              />
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Works;
