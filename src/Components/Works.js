import React,{Component} from "react";
import Container from "react-bootstrap/Container";
import Project from "../Assets/Project";
import Row from 'react-bootstrap/Row';
import ParticlesBg from "particles-bg";
class Works extends Component{
    render(){

        return (
            <>
                <div>
                    <Container>
                       
                        <h1 className="f1 ttu tc b"> Projects</h1>
                        <Row>
             <Project 
		name="Css Linear Gradient Background Generator" pic="" 		
		desc="Background Generator is a css linear gradient 		background code generator with live preview, which you 		can also use for your website and generate beautiful 		backgrounds in seconds and save your time" 		                        sourceCode='https://github.com/fab-c14/fab-c14.github.io/tree/master/igb'
 
                 liveLink="https://fab-c14.github.io/igb/index.html" 		picAlt='https://picsum.photos/370/160?random=1' />

	<Project 
		name="Images Gallery" 
		pic="" 						sourceCode="https://github.com/fab-c14/fab-c14.github.io/tree/master/Image_gallery" 
		picAlt='https://picsum.photos/370/160?random=2'
		liveLink="https://fab-c14.github.io/Image_gallery/index.html"
		desc="Image Gallery is a beautiful Js based Project Which You Can also try. If You are Beginner in web Development"
/>
                        </Row>
                    </Container>
                    
                </div>
            </>
        )
    }
}

export default Works;