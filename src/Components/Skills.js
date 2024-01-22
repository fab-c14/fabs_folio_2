import React from 'react';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'tachyons';
import { Slide, Fade, Rotate } from 'react-awesome-reveal';

class Contact extends Component {
  render() {
    return (
      <>
        <Rotate bottom right cascade>
          <Row>
            <div className='tc Consolas' id="contact">
              <Col>
                <Fade>
                  <h1 className='ttu f1 fw6'>Contact Us</h1>
                </Fade>
                <Slide bottom cascade duration={2000}>
                  <div>
                    <h2 className='f3 code fw4'>Want To Connect With Me? Hit The Below Button</h2>
                    <hr width={'30%'} className="center washed-red" />
                    <a className="f4 link dim ph3 pv2 mb2 black bg-white dib fw6 br3 ma2" href="mailto:plesim18@gmail.com?subject=SweetWords&body=Please send me a copy of your new program!" target='_new'>
                      Contact Me
                    </a>
                  </div>
                </Slide>
              </Col>
            </div>
          </Row>
        </Rotate>
      </>
    );
  }
}

export default Contact;
