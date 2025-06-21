import React from "react";
import styles from "@/styles/Home.module.scss";
import { Row, Col } from "react-bootstrap";
interface Props {
  scrollRef: any;
}
const Experience: React.FC<Props> = (props: any) => {
  const { scrollRef } = props;
  return (
    <>
      <Col className={styles.experienceHeadingDiv}>
        <p>Experience :</p>
      </Col>
      <Row className={styles.experienceMainDiv} ref={scrollRef}>
        <Col className={styles.experienceCardsContainer}>
          <li className={`${styles.expSubDetails} ${styles.experienceCard}`}>
            <p className={styles.year}>2024 to present,</p>
            <p className={styles.companyOrInstitute}>
              The Modern Data Company, Hyderabad,
            </p>
            <p>Role: Senior Software Developer</p>
            <p className={styles.education}>
              I have worked as a software developer in Modern Data Company, to
              develop web applications for DataOS platform. I have developed the
              pages like home, metis, data product hub in NX mono repo.
              <span style={{ fontWeight: 600, marginLeft: "10px" }}>
                DataOS 2.0, Data Product Hub, Metis, Home-app
              </span>{" "}
              projects by using React Js, Node Js, Express Sql Server.
            </p>
          </li>
          <li className={`${styles.expSubDetails} ${styles.experienceCard}`}>
            <p className={styles.year}>2022 to 2024,</p>
            <p className={styles.companyOrInstitute}>
              KC Overseas Education Pvt Ltd, Hyderabad,
            </p>
            <p>Role: Software Engineer</p>
            <p className={styles.education}>
              I have worked as a software developer in KC Overseas, to develop
              web applications for partners, admins, staff. I have developed the
              pages like
              <span style={{ fontWeight: 600, marginLeft: "10px" }}>
                KC LEARNING, INVOICE MANAGEMENT, COMMISSION NOTE
              </span>{" "}
              projects by using React Js, Next Js, Node Js, Express Sql Server.
            </p>
          </li>
          <li className={`${styles.expSubDetails} ${styles.experienceCard}`}>
            <p className={styles.year}>2019-2021,</p>
            <p className={styles.companyOrInstitute}>
              Quess Corp Ltd, Chennai,
            </p>
            <p>Role: Software Engineer</p>
            <p className={styles.education}>
              I have worked as a front end React Developer in Quess, we have
              developed and maintained web applications using React.js, Next.js,
              and integrated RESTful APIs.
            </p>
          </li>
          <li className={`${styles.expSubDetails} ${styles.experienceCard}`}>
            <p className={styles.year}>2019(6 months)</p>
            <p className={styles.companyOrInstitute}>
              Nxt Wave Disruptive Learnings, Hyderabad,
            </p>
            <p className={styles.education}>
              I have developed my own projects like Tasty Kitchen application,
              Jobby App application, Wiki Search application for my knowledge in
              React Js using class components.
            </p>
          </li>
        </Col>
      </Row>
    </>
  );
};

export default Experience;
