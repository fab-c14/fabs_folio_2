import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  const legionQuotes = [
    "The living plague me with forgotten emotions",
    "The future is thrilling. And truly fascinating. The past is a burden. And the present is a torment",
    "Perhaps there is a way to redeem my vile self",
    "I am loyal to my destiny",
    "Their voices will never be silenced",
    "Cease the excruciating cacophony",
    "The shadow legion is at your command",
    "Heavy is the head that wears the crown",
    "I will forget who you are",
    "Don't let the Legion die, general",
    "Defeat me!",
    "Fall to your knees and maybe you'll be able to save your soul",
    "Glory to the eternal reign of the Shadow Legion!"
  ];

  const [visibleText, setVisibleText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const currentQuote = legionQuotes[quoteIndex];
    if (currentQuote) {
      const intervalId = setInterval(() => {
        setVisibleText((prev) => prev + currentQuote[prev.length]);
        if (visibleText.length === currentQuote.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setQuoteIndex((prevIndex) => (prevIndex + 1) % legionQuotes.length);
            setVisibleText("");
          }); // Delay before starting the next quote
        }
      }, 100); // Adjust the interval for the typing speed

      return () => clearInterval(intervalId);
    }
  }, [quoteIndex, visibleText, legionQuotes]);

  return (
    <Container fluid className="tc shadow-5 lh-title helvetica wrap pa-5" id="About">
      <Row>
        <Col xs={12}>
          <h1 className="f1 f-subheadline tracked br3 avenir wrap b">
            Hello, I'm <strong className="blue hover-light-blue">Faisal</strong> | Creative Developer
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="ttu br4 f4 code tracked-mega pa1">
            <span className="pointer hover-bg-light-blue pa1 br2">Innovative and Passionate</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <hr />
          <small style={{ fontSize: "14px", margin: "-2px", padding: "-3px",fontWeight:"bolder"}} color="green">
            {visibleText}
          </small>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
