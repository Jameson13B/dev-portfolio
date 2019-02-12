/* global tw */
import React from "react";
import styled from "react-emotion";
import "typeface-cantata-one";
import "typeface-open-sans";
import { Parallax, ParallaxLayer } from "react-spring/dist/addons";
import SEO from "../components/SEO";
import SVG from "../components/SVG";
import ProjectCard from "../components/ProjectCard";
import {
  rotate,
  UpDown,
  UpDownWide,
  waveAnimation
} from "../styles/animations";
import { hidden } from "../styles/utils";
import { colors } from "../../tailwind";
import triangle from "../images/triangle.svg";
import avatar from "../images/avatar.jpg";
import badge from "../images/lambda_badge.png";
import "../styles/global";

const Divider = styled(ParallaxLayer)`
  ${tw("absolute w-full h-full")};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw("p-6 md:p-12 lg:p-24 justify-center items-center flex z-50")};
`;

const Hero = styled.div`
  ${tw("w-full xl:w-2/3")};
`;

const Inner = styled.div`
  ${tw("w-full xxl:w-2/3 text-center lg:text-left")};
`;

const BigTitle = styled.h1`
  ${tw("text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide")};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw(
    "text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw("text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4")};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw("flex flex-wrap justify-between mt-8")};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw("absolute pin-b w-full")};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw("relative h-full")};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw("flex flex-col lg:flex-row items-center mt-8")};
`;

const Avatar = styled.img`
  ${tw("rounded-full w-32 xl:w-48 shadow-lg h-auto")};
`;

const AboutSub = styled.span`
  ${tw("text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl")};
`;

const AboutDesc = styled.p`
  ${tw(
    "text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify"
  )};
`;

const ContactText = styled.p`
  ${tw("text-grey-light font-sans text-xl md:text-2xl lg:text-3xl")};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw("text-center text-grey absolute pin-b p-6 font-sans")};
  font-size: 0.65rem;
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={6}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG
            icon="triangle"
            className={hidden}
            width={48}
            stroke={colors.orange}
            left="10%"
            top="20%"
          />
          <SVG
            icon="hexa"
            width={48}
            stroke={colors.red}
            left="60%"
            top="90%"
          />
          <SVG
            icon="box"
            width={6}
            fill={colors["grey-darker"]}
            left="60%"
            top="15%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors["blue-dark"]}
            left="80%"
            top="10%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="90%"
            top="60%"
          />
          <SVG
            icon="circle"
            width={16}
            fill={colors["grey-darker"]}
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={16}
            stroke={colors["grey-darkest"]}
            left="30%"
            top="75%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors["grey-darkest"]}
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="circle"
          className={hidden}
          width={24}
          fill={colors["grey-darker"]}
          left="5%"
          top="70%"
        />
        <SVG
          icon="circle"
          width={6}
          fill={colors["grey-darkest"]}
          left="4%"
          top="20%"
        />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="50%"
          top="60%"
        />
        <SVG
          icon="upDown"
          width={8}
          fill={colors["grey-darkest"]}
          left="95%"
          top="90%"
        />
        <SVG
          icon="upDown"
          className={hidden}
          width={24}
          fill={colors["grey-darker"]}
          left="40%"
          top="80%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke={colors["grey-darker"]}
          left="25%"
          top="5%"
        />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
        <SVG
          icon="box"
          className={hidden}
          width={64}
          fill={colors.purple}
          left="5%"
          top="90%"
        />
        <SVG
          icon="box"
          width={6}
          fill={colors["grey-darkest"]}
          left="10%"
          top="10%"
        />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="40%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={16}
          stroke={colors["grey-darker"]}
          left="10%"
          top="50%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darker"]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hello, <br /> I'm Jameson Brown.
          </BigTitle>
          <Subtitle>
            I'm creating beautiful web applications and tools while continually
            learning in a tech focused world.
          </Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={1.7}
        factor={2}
      />
      <Content speed={0.4} offset={1.7} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            {/* Project */}
            <ProjectCard
              title="Team Communicators"
              link="https://www.teamcomm.app"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              A web app that helps distributed or remote teams with real-time
              document collaboration and scheduling meetings. Team Communicator
              is built with a React/Redux frontend (deployed to Netlify) and
              Node/Express backend (deployed to Heroku). Integrates third party
              APIs like Zoom, Stripe, and Socket.io.
              <br />
              <br />
              <a
                href="https://git.io/fpdlk"
                target="_blank"
                style={{ color: "white", fontWeight: "bold" }}
              >
                GitHub
              </a>
            </ProjectCard>
            {/* Project */}
            <ProjectCard
              title="Game of Life"
              link="https://gameoflife.jamesonb.com/"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              A web app that emulates John Conway’s Game of Life. A grid of
              cells(alive or dead) that can be manually populated or with
              templates. The cells then advance based on a set of rules that
              govern their replication and destruction. Includes features like
              variable speed settings, objects that reach end of screen wrap,
              and more. Created with React and CSS.
              <br />
              <br />
              <a
                href="https://git.io/fpdlq"
                target="_blank"
                style={{ color: "white", fontWeight: "bold" }}
              >
                GitHub
              </a>
            </ProjectCard>
            {/* Project */}
            <ProjectCard
              title="Connie's Country Western Pub"
              link="https://www.conniescountrywesternpub.com/"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              Connie is a hard working entrepenuer in Negril, Jamaica and one of
              my personal friends. Visiting with Connie in here pub one day she
              expressed her desire for a website for her business. As my gift to
              my friend and one of my favorite projects, this site was created.
              <br />
              <br />
              <a
                href="https://github.com/Jameson13B/connies-pub"
                target="_blank"
                style={{ color: "white", fontWeight: "bold" }}
              >
                GitHub
              </a>
            </ProjectCard>
            {/* Project */}
            <ProjectCard
              title="Da' Notes"
              link="https://da-notes.jamesonb.com/"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              Da' Notes is a web app created to create, edit, copy, and delete
              notes. All notes are served in a SQLite database so notes can be
              accessed from anywhere an internet connection is available.
              Created with React on front end and Python/Django on back end.
              <br />
              <br />
              <a
                href="https://git.io/fpdl3"
                target="_blank"
                style={{ color: "white", fontWeight: "bold" }}
              >
                GitHub: Client
              </a>
              <br />
              <a
                href="https://git.io/fpdlG"
                target="_blank"
                style={{ color: "white", fontWeight: "bold" }}
              >
                GitHub: Server
              </a>
            </ProjectCard>
            {/* Project */}
            <ProjectCard
              title="ReactJack 21"
              link="https://reactjack21.jamesonb.com/"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              A basic blackjack 21 web app created with React and the Deck of
              Cards API by Chase Roberts. Global state is currently being added
              with ReactN.
              <br />
              <br />
              <a
                href="https://git.io/fpdlO"
                target="_blank"
                style={{ color: "white", fontWeight: "bold" }}
              >
                GitHub
              </a>
            </ProjectCard>
            {/* Project */}
            <ProjectCard
              title="Hacker Noon: Publication"
              link="https://hackernoon.com/stripe-api-reactjs-and-express-bc446bf08301"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              Stripe API, ReactJS, and Express - A tutorial for integrating
              Stripe Checkout with your React/Express application.
            </ProjectCard>
            {/* Project */}
            <ProjectCard
              title="Atomic10 Components"
              link="https://www.npmjs.com/package/atomic10-components"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              Atomic10 is a React component library with clean, contemporary,
              and customizable components that will continue to grow.
              <br />
              <br />
              <a
                href="https://github.com/Jameson13B/atomic10-components"
                target="_blank"
                style={{ color: "white", fontWeight: "bold" }}
              >
                GitHub
              </a>
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.2} offset={1.3} factor={3}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG
            icon="upDown"
            width={8}
            fill={colors.teal}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors.orange}
            left="25%"
            top="5%"
          />
          <SVG
            icon="circle"
            className={hidden}
            width={24}
            fill={colors.white}
            left="17%"
            top="60%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.green}
            left="20%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="90%"
            top="30%"
          />
          <SVG
            icon="circle"
            width={16}
            fill={colors.yellow}
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            className={hidden}
            width={16}
            stroke={colors.teal}
            left="18%"
            top="75%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors.green}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors.yellow}
          left="80%"
          top="70%"
        />
      </Divider>
      <Divider
        bg="#23262b"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG
            icon="box"
            className={hidden}
            width={6}
            fill={colors.blue}
            left="50%"
            top="75%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darkest"]}
            left="25%"
            top="5%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={24}
            fill={colors.orange}
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.purple}
            left="5%"
            top="80%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              I love working with technology to help improve myself and others
              lives. Always looking to learn and implement the newest
              technologies to better myself, others, and the tools we use daily.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            As a proud born and raised Utahn, I have always had a passion for
            the outdoors, nature, and animals. Especially my black lab, Dexter.
            For about 8 years I learned and contributed to the hospitality
            industry through hotels and restaurants. I reached a point in my
            life where I wanted to make my passion for technology and building
            things my full time career. I started my adventure with a 31 week
            full time computer science and web development academy called Lambda
            School. I learned more than I could possibly imagine and am now
            looking to apply my knowledge and skills with a great team.
          </AboutDesc>
          <a
            href="https://www.youracclaim.com/badges/8006ed70-bd34-4fb7-bcc0-d2cb613b10f6/public_url"
            target="_blank"
          >
            <img src={badge} alt="lambda_badge" style={{ width: "125px" }} />
          </a>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darkest"]}
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Divider fill="#23262b" speed={0.2} offset={5}>
        <WaveWrapper>
          <InnerWave>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
            >
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={5}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:jamesonbrownm@neolivity.com">Hi</a> or find me
            on other platforms:{" "}
            <a href="https://www.linkedin.com/in/jameson-brown/">LinkedIn</a> ,{" "}
            <a href="https://twitter.com/jameson_brown">Twitter</a> &{" "}
            <a href="https://github.com/Jameson13B">Github</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2018 by Gatsby Starter Portfolio Cara.</Footer>
      </Content>
      <Divider speed={0.1} offset={5}>
        <UpDown>
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darkest"]}
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
