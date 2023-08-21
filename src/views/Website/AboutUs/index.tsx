import HomeBanner from "src/components/HomeBanner";
import logo from "../../../assets/images/mainLogo.png";
import "./AboutUs.scss";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us ">
      <HomeBanner />
      <section className="about-us__content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">
                Welcome to <img src={logo} className="logo" alt="logo" /> Rilati
                - Your Path to a Bright Future!
              </h3>
              <p>
                At Rilati, we are dedicated to delivering tailored and
                personalized career counseling services to individuals in
                pursuit of a career change, advancement, or transition. Whether
                you are a recent graduate exploring various options, a seasoned
                professional seeking new opportunities, or an individual
                striving to elevate their career trajectory , our mission is to
                provide expert guidance, charting a path towards a rewarding and
                prosperous future.
              </p>

              <h3 className="text-center">Why is Career Guidance Important?</h3>
              <p>
                Choosing the right career path is a significant decision that
                can shape your entire life. We understand that the proce ss can
                be overwhelming, with numerous career options available. Our
                primary focus is to assist you in exploring not only the careers
                you are already familiar with but also those that you may not
                even know exist. We go beyond traditional career options and
                utilize extensive resources to uncover new and exciting
                opportunities tailored to your interests, strengths, and
                aspirations.
              </p>

              <h3 className="text-center">Why Choose Rilati?</h3>
              <ul className="list-items">
                <li>
                  Personalized Approach: Our dedicated team of counselors takes
                  the time to understand your unique qualities, int erests, and
                  goals. We provide personalized guidance, ensuring that you
                  receive the support you need to embark on a successful career
                  journey
                </li>
                <li>
                  Comprehensive Career Exploration: At Rilati, we are passionate
                  about offering you a wide range of career options t o explore.
                  Our vast database and resources help uncover new pathways that
                  match your individuality and potential.
                </li>
                <li>
                  Expert Insights: Our experienced counselors stay up - to -
                  date with the latest trends in education and the job market.
                  We provide you with expert insights and valuable information
                  to make well - informed decisions about your future.
                </li>
                <li>
                  College and University Planning: We guide you through the
                  process of selecting the right educational institutions that
                  align with your academic and career goals.
                </li>
                <li>
                  Ongoing Support: Our commitment to your success doesn't end
                  with a single session. We provide continuous support and
                  assistance as you progress towards achieving
                </li>
                <li>Your career aspirations</li>
              </ul>
              <h5 className="my-4">Take the First Step Towards Success</h5>
              <p>
                Empower yourself with the knowledge and guidance needed to
                embark on a fulfilling and successful career journey. At Rilati,
                we are here to help you explore a world of possibilities and
                discover the perfect path for you. Contact us today to start
                your journey towards a bright and promising futur e!
              </p>
              <p>
                Let Rilati be your guiding light as you embark on your exciting
                career exploration!
              </p>
              <span>
                Please click{" "}
                <Link style={{ color: "red" }} to={"/terms-conditions"}>
                  here{" "}
                </Link>
                to read our terms and conditions
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
