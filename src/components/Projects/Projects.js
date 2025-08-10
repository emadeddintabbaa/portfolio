import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
// Import new project images (using chatify as placeholder until you add the actual images)
import qshot from "../../Assets/Projects/qshot.png";
import talks100 from "../../Assets/Projects/100talks.png";
import radiolingo from "../../Assets/Projects/radiolingo.png";
import checkapp from "../../Assets/Projects/checkapp.png";
import protocol from "../../Assets/Projects/protocol.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few mobile applications I've developed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qshot || chatify}
              title="QShot"
              description="A bio QR creator mobile application that allows users to create personalized QR codes for their social media profiles and contact information. Available on both Android and iOS platforms with a modern, user-friendly interface."
              playStoreLink="https://play.google.com/store/apps/details?id=linkinbio.qshot.com"
              appStoreLink="https://apps.apple.com/us/app/qshot-bio-qr-creator/id6587578534"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talks100 || chatify}
              title="100Talks"
              description="A comprehensive communication platform that enables users to engage in meaningful conversations and discussions. Available on both Android and iOS, featuring real-time messaging and community features."
              playStoreLink="https://play.google.com/store/apps/details?id=com.talks100.talks100&hl=en"
              appStoreLink="https://apps.apple.com/us/app/100-talks/id1611894088"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radiolingo || chatify}
              title="RadioLingo"
              description="An innovative language learning app that uses radio content to help users learn new languages through immersive audio experiences. Available on both Android and iOS platforms."
              playStoreLink="https://play.google.com/store/apps/details?id=org.neronet.learnEnglish100Radio&hl=en"
              appStoreLink="https://apps.apple.com/us/app/radiolingo-learn-languages/id1277631223"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={checkapp || chatify}
              title="CheckApp"
              description="A utility application designed to help users with various checking and verification tasks. Available on both Android and iOS platforms with a clean, intuitive interface."
              playStoreLink="https://play.google.com/store/apps/details?id=com.raysan.check&hl=en"
              appStoreLink="https://apps.apple.com/sa/app/checkapp/id1585545105"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protocol || chatify}
              title="Protocol"
              description="A specialized application focused on protocol management and communication standards. Available on both Android and iOS platforms, designed for professional use cases."
              playStoreLink="https://play.google.com/store/apps/details?id=com.raysan.app.raysan&hl=ar"
              appStoreLink="https://apps.apple.com/br/app/protocol/id1639732168?l=en-GB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Bbrain"
              description="A comprehensive mobile application available on both Android and iOS platforms. Bbrain is an AI-powered app that provides intelligent assistance and brain training features. Built with modern mobile development technologies including React Native and native Android/iOS development."
              playStoreLink="https://play.google.com/store/apps/details?id=com.askbrain2.app&hl=en"
              appStoreLink="https://apps.apple.com/us/app/bbrain/id6448963886"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Zumi"
              description="A feature-rich mobile application for movies and entertainment content. Available on both Android and iOS, Zumi provides users with access to movies, TV shows, and action content. Developed using cross-platform technologies for optimal performance."
              playStoreLink="https://play.google.com/store/apps/details?id=com.herogram.animereel&hl=en"
              appStoreLink="https://apps.apple.com/ae/app/zumi-movies-and-action/id6476808915"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Forsa"
              description="A mobile application focused on opportunities and career development. Available on Android platform, Forsa helps users discover and connect with various opportunities. Built with native Android development using Java/Kotlin."
              playStoreLink="https://play.google.com/store/apps/details?id=com.sy.forsa&hl=en"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
