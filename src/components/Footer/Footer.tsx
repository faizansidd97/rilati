import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import footerLogo from "../../assets/images/footer-logo.png";
import {
  FaFacebookF,
  RiTwitterFill,
  SiInstagram,
  MdLocalPhone,
  HiMail,
} from "react-icons/all";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="footer__section d-flex align-items-center pt-4 pt-md-0">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={4}>
              <div
                className="footer__section__logo d-flex flex-column align-items-md-start align-items-center
              "
              >
                <a href="/">
                  <img src={footerLogo} alt="logo" />
                </a>
                <p className="pt-4 pb-3">
                  This is dummy copy. It is not meant to be read. It has been
                  placed here solely to demonstrate.
                </p>
                <div className="footer__socailicons d-flex justify-content-start ">
                  <div className="footer__socailicons--icons">
                    <a href="https://facebook.com/">
                      <FaFacebookF size={20} />
                    </a>
                  </div>
                  <div className="footer__socailicons--icons">
                    <a href="https://twitter.com/">
                      <RiTwitterFill size={20} />
                    </a>
                  </div>
                  <div className="footer__socailicons--icons">
                    <a href="https://www.instagram.com/">
                      <SiInstagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={2} md={3} xs={6}>
              <div className="footer__quicklinks h-100 d-flex justify-content-center flex-column pt-3 pt-md-0">
                <h2 className="pb-3">Quick Links</h2>
                <div className="footer__navlinks d-flex justify-content-center flex-column align-items-start">
                  <ul className="m-0 p-0">
                    <li className="active">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Stories</a>
                    </li>
                    <li>
                      <a href="#">Articles/Blogs</a>
                    </li>
                    <li>
                      <a href="#">Forum</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} md={3} xs={6}>
              <div className="footer__navlinks d-flex justify-content-around flex-column align-items-center h-100">
                <ul className="m-0 p-0 pt-5">
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={12} sm={12}>
              <div className="footer__newsletter d-flex justify-content-center align-items-md-start flex-column pt-4 ">
                <h2 >Join Our Newsletter</h2>
                <p >
                  Join our newsletter to see all the new stories and chapters.
                </p>
                <form>
                  <Row className="m-0">
                    <Col lg={8} md={8} sm={8} className="px-0 mb-2 mb-md-0">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        className="w-100 "
                      />
                    </Col>
                    <Col lg={4} md={4} sm={4} className="px-0">
                      <button type="button" name="submit" className="w-100" disabled>
                        Submit
                      </button>
                    </Col>
                  </Row>
                </form>
                <div className="footer__iconlist d-flex pt-3 flex-column align-items-center flex-md-row align-items-md-center pt-4">
                  <div className="footer__iconlist__wrapper d-flex align-items-center">
                    <div className="icon">
                      <MdLocalPhone />
                    </div>
                    <a href="tel:000-000-0000">000-000-0000</a>
                  </div>
                  <div className="footer__iconlist__wrapper  d-flex align-items-center">
                    <div className="icon">
                      <HiMail />
                    </div>
                    <a href="mailto:info@goldenroom.com">info@goldenroom.com</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer__copyrights d-flex align-items-center">
        <Container>
          <Row>
            <Col>
              <p className="footer__copyrights--text text-center m-0">
                © Copyright 2021{" "}
                <span>
                  <a href="/">Golden Room</a>
                </span>{" "}
                All Rights Reserved. Designed & Developed By Dallas Web Design
                Company{" "}
                <span>
                  <a href="https://www.appverticals.com/" target="_blank">
                    AppVerticals
                  </a>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
