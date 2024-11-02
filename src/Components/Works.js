import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Project from "../Assets/Project";
import Row from "react-bootstrap/Row";
import { Fade } from "react-awesome-reveal";

// Utility function to generate dates
const generateDates = (startDate, count) => {
  const dates = [];
  let currentDate = new Date(startDate);
  for (let i = 0; i < count; i++) {
    const randomDays = Math.floor(Math.random() * 19) - 6; // Generates a number between -6 and +12
    currentDate.setMonth(currentDate.getMonth() + 1);
    currentDate.setDate(currentDate.getDate() + randomDays);
    dates.push(new Date(currentDate).toLocaleDateString());
  }
  return dates;
};

const projectDates = generateDates("11/2/2023", 6); // Generate 6 dates starting from 11/2/2023
projectDates.push(new Date().toLocaleDateString()); // Add today's date for the FLAME project

class Works extends Component {
  render() {
    const { style } = this.props;

    // List of project data
    const projects = [
      {
        name: 'FLAME Project',
        desc: 'FLAME is a comprehensive web application designed to streamline the process of learning and mastering new programming languages. It offers a variety of tools and resources to help users track their progress and stay motivated.',
        sourceCode: 'https://github.com/fab-c14/FLAME',
        liveLink: '',
        picAlt: 'https://picsum.photos/370/160?random=7',
        date: projectDates[6],
      },
      {
        name: 'Image Scrapper',
        desc: 'ImageScrapper is a versatile Python-based web scraping tool designed for fetching and downloading images from various websites. Leveraging the power of Flask, Requests, Flask-CORS, Logging, and Beautiful Soup, ImageScrapper provides a robust and efficient solution for your image scraping needs.',
        sourceCode: 'https://github.com/fab-c14/ImageScraper.git',
        liveLink: '',
        picAlt: 'https://picsum.photos/370/160?random=1',
        date: projectDates[0],
      },
      {
        name: 'React Node Auth App',
        desc: 'A full-stack authentication app built with React and Node. This app allows users to securely authenticate and access protected resources.',
        sourceCode: 'https://github.com/your-github-username/react-node-auth-app-repo',
        liveLink: 'https://reactauthapp1.netlify.app',
        picAlt: 'https://picsum.photos/370/160?random=6',
        date: projectDates[1],
      },
      {
        name: 'Review Scrapper',
        desc: 'ReviewScrapper is a web scraping tool built using Python to extract and analyze reviews from websites. It utilizes Flask, Requests, Flask-CORS, Logging, and Beautiful Soup to provide an effective solution for scraping and processing review data.',
        sourceCode: 'https://github.com/fab-c14/review-scrapper.git',
        liveLink: '',
        picAlt: 'https://picsum.photos/370/160?random=2',
        date: projectDates[2],
      },
      {
        name: 'Css Linear Gradient Background Generator',
        desc: 'Background Generator is a CSS linear gradient background code generator with live preview, which you can also use for your website and generate beautiful backgrounds in seconds and save your time.',
        sourceCode: 'https://github.com/fab-c14/fab-c14.github.io/tree/master/igb',
        liveLink: 'https://fab-c14.github.io/igb/index.html',
        picAlt: 'https://picsum.photos/370/160?random=3',
        date: projectDates[3],
      },
      {
        name: 'Images Gallery',
        desc: 'Image Gallery is a beautiful Js based Project Which You Can also try. If You are Beginner in web Development.',
        sourceCode: 'https://github.com/fab-c14/fab-c14.github.io/tree/master/Image_gallery',
        liveLink: 'https://fab-c14.github.io/Image_gallery/index.html',
        picAlt: 'https://picsum.photos/370/160?random=4',
        date: projectDates[4],
      },
      {
        name: 'Recognizer',
        desc: 'Recognizer is A tool which tells about what an image contains.',
        sourceCode: 'https://github.com/fab-c14/fab-c14.github.io/tree/master/Recognizer',
        liveLink: 'https://fab-c14.github.io/Recognizer',
        picAlt: 'https://picsum.photos/370/160?random=5',
        date: projectDates[5],
      },
    ];

    return (
      <>
        <div>
          <Container>
            <h1 className='f1 ttu tc b' style={{ color: this.style, fontFamily: 'Roboto, sans-serif' }}>
              Projects
            </h1>
            <Row className="d-flex justify-content-center">
              {projects.map((project, index) => (
                <Fade
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  duration={1500} // Increased duration for a slower animation
                >
                  <Project
                    name={project.name}
                    pic={project.pic}
                    desc={project.desc}
                    sourceCode={project.sourceCode}
                    liveLink={project.liveLink}
                    picAlt={project.picAlt}
                    date={project.date}
                  />
                </Fade>
              ))}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Works;
