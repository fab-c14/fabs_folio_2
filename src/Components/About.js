import React,{Component} from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import '../Assets/About.css'
import sample_resume from '../Assets/sample_resume.pdf';
import 'tachyons'
import {Slide,Rotate,Zoom,Fade} from 'react-reveal'
import back from '../Assets/back.jpg';
class About extends Component{
    render(){
        return (
            <>
	<Fade duration={3000} cascade>
                <div className="f3 tc w-100 mt3" id="about_back">
                <h1 className="ttu shadow-1 hover-bg-green br3"> About Me </h1>
                <Container>
                        <Row className="w-100">
                            <Col >
                                <Container className="w-100">
                                    <Col xs sm md lg>
                                        <Row >
                                            <Col xs sm>
                                                <div className="pa2 ma1 right">
                                                    <Slide left cascade duration={2000}> 
                                                    <Container>
                                                    <img src={back} alt="ImageNotFound" className="h-auto w5 grow tr shadow-2  br3 mw5 mw-6-ns v-mid center"/>
                                                    </Container>
                                                    </Slide>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Container>
                            </Col>
                        
                            <Col sm xs lg md>
                                <Row className="w-100">
                                    <Col>
                                    <Zoom left cascade duration={2000}>
                                        <div className="code left mt3 mb4 v-mid mw6 b fw6 f2"> 
                                    
                                            <p className="f5">I am a  Full Stack Web Developer and Programmer. </p>
                                           
                                            <p className="f5">i am self learned guy who is ingenious and cordial, adaptive person</p>
                                            <p className="f5">Who Profoundly relishes to Learn More and More</p>
                                            
                                            <a className="btnFillup liquidbg f5" target="_blank" href={sample_resume}>View Resume</a>
                                            
                                    </div>
                                    </Zoom>
                                    </Col>
                                </Row>
                            </Col>
                           
                        </Row>
                        <br/>
                    </Container>
                </div>
 		</Fade>
            </>
        )
    }
}

export default About;