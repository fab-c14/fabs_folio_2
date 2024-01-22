import React from 'react';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'tachyons';

class Contact extends Component {
  render() {
    const skills = [
      { name: 'React', logo: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
      { name: 'JavaScript', logo: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
      { name: 'HTML', logo: 'https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
      { name: 'CSS', logo: 'https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
      { name: 'Bootstrap', logo: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white' },
      { name: 'Node.js', logo: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' },
      { name: 'Express.js', logo: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' },
      { name: 'MongoDB', logo: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
      { name: 'AWS', logo: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white' },
      { name: 'Azure', logo: 'https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white' },
      { name: 'Python', logo: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
      { name: 'NumPy', logo: 'https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white' },
      { name: 'Pandas', logo: 'https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white' },
      { name: 'Matplotlib', logo: 'https://img.shields.io/badge/Matplotlib-3776AB?style=for-the-badge&logo=python&logoColor=white' },
      { name: 'Seaborn', logo: 'https://img.shields.io/badge/Seaborn-013243?style=for-the-badge&logo=python&logoColor=white' },
      { name: 'Tachyons', logo: 'https://img.shields.io/badge/Tachyons-008080?style=for-the-badge&logo=tachyons&logoColor=white' },
      { name: 'jQuery', logo: 'https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white' },
      { name: 'C', logo: 'https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white' },
      { name: 'C++', logo: 'https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white' },
      { name: 'SQL', logo: 'https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white' },
      { name: 'MySQL', logo: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
      // Add more skills and their logos
    ];

    return (
      <>
        <Row className="mt-5">
          <Col className="text-center">
            <h2 className="mb-4">My Skills</h2>
            <div className="flex flex-wrap justify-center">
              {skills.map((skill, index) => (
                <article key={index} className="mw5 bg-white br3 pa3 ma2 shadow-5">
                  <img src={skill.logo} className="db w-100 br2 mb2" alt={skill.name} />
                  <h4 className="f5 mb2 red">{skill.name}</h4>
                </article>
              ))}
            </div>
            <hr/>
          </Col>
        </Row>
      </>
    );
  }
}

export default Contact;
