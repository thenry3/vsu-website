import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  display: flex;
  width: 85%;
  justify-content: space-between;
  margin-bottom: 70px;
  margin-top: 20px;
`;

const Col = styled("div")`
  width: 47%;
  display: flex;
  flex-direction: column;
`;

const Section = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled("p")`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0px;
`;

const SectionText = styled("p")`
  border-left: #e93739 4px solid;
  padding-left: 50px;
  word-spacing: 0.2em;
  font-size: 15px;
  line-height: 1.5em;
`;

export default function LandingInfo() {
  return (
    <>
      <Wrapper>
        <Col>
          <Section>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionText>
              The Vietnamese Student Union (VSU), established in 1977, is the
              official voice of all Vietnamese students at UCLA through its
              advocacy for the cultural, educational, political, and social
              welfare of the Vietnamese community at large.
            </SectionText>
          </Section>
          <Section>
            <SectionTitle>General Meetings</SectionTitle>
            <SectionText>
              We hold general meetings every two weeks! Time and location vary,
              so keep up with us on Facebook to find out more. <br />
              Zoom link: zoom.us/link
            </SectionText>
          </Section>
        </Col>
        <Col>
          <Section>
            <SectionTitle>Our Vision</SectionTitle>
            <SectionText>
              “The Vietnamese Student Union (VSU) at the University of
              California, Los Angeles strives to build a resilient and empowered
              community that is committed to solidarity with other marginalized
              communities of color. <br /> <br /> Though physically separated by
              the pandemic, we hope to create a safe and welcoming space where
              members may be united virtually through community-conscious
              programs and projects that serve our needs at this time. <br />{" "}
              <br />
              In light of the current political climate, we aim to promote civic
              engagement by equipping members with the skills and resources
              necessary to advocate for our community’s needs while closely
              collaborating with other communities in the fight for equity and
              justice. <br /> <br />
              By embracing our cultural heritage as well as our refugee and
              immigrant experiences, we will continue to shed light on our
              unique Vietnamese culture and history both on and off campus.”{" "}
              <br />{" "}
            </SectionText>
          </Section>
        </Col>
      </Wrapper>
    </>
  );
}
