import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ's.scss";
import HomeBanner from "src/components/HomeBanner";

const FAQ = () => {
  return (
    <div className="faq">
      {/* <HomeBanner /> */}
      <section className="pt-3 pb-5">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="text-center">FAQ's</h3>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h6>What is “Oracle”?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Oracle is powered by a large dataset of career
                      information, including job descriptions, and educational
                      requirements. When a user fills our form, the Oracle uses
                      this dataset to generate a list of careers that may be a
                      good fit for the user. The Oracle also provides links to
                      additional resources, such as career information, that can
                      help users learn more about the careers that are suggested
                    </p>
                    <p>
                      This is a valuable tool for anyone who is looking for
                      career advice. It can help users to explore different
                      career options, learn about the requirements for different
                      jobs, and find resources to help them prepare for their
                      chosen career. The Oracle is also a great way to connect
                      with other people who are interested in the same careers
                      using the chat f unction available with each career.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h6>
                      What careers are available /ideal for people who are
                      interested in math and science?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    There are many careers available for people who are
                    interested in math and science. Some popular options
                    include:
                    <br />
                    <br /> * **Engineer:** Engine ers design, build, and test
                    machines, structures, and other products. They use their
                    knowledge of math and science to solve problems and create
                    innovative solutions.
                    <br /> <br /> * **Doctor:** Doctors diagnose and treat
                    diseases and injuries. They use their knowledge o f math and
                    science to understand the human body and to develop
                    treatment plans.
                    <br /> <br /> * **Scientist:** Scientists conduct research
                    and experiments to learn about the natural world. They use
                    their knowledge of math and science to ask questions,
                    develop hypotheses , and test their findings
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h6>
                      What careers are available for people who are interested
                      in the Arts?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    There are many careers available for people who are
                    interested in the arts. Some popular options include:
                    <br /> <br /> * **Artist:** Artists create visual works of
                    art, suc h as paintings, sculptures, and drawings. They use
                    their creativity and imagination to express themselves and
                    to communicate with others.
                    <br /> <br /> * **Musician:** Musicians create and perform
                    music. They use their musical skills to entertain others and
                    to express t hemselves creatively
                    <br /> <br /> . * **Actor:** Actors perform in plays,
                    movies, and television shows. They use their acting skills
                    to portray characters and to tell stories.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h6>
                      What careers are available for people who are interested
                      in helping others?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    There are many careers available for people who are
                    interested in helping others. Some popular options include:
                    <br /> <br /> * **Teacher:** Teachers educate children and
                    young adults. They use their knowledge and skills to help
                    students learn and to develop their potential.
                    <br />
                    <br /> * **Social worker:** Social workers help people who
                    are struggling with problems, such as poverty, homelessness,
                    and addiction. They use their knowledge and skills to
                    provide support and to help people improve their lives.
                    <br />
                    <br /> * **Nurse:** Nurses provide care to patients in
                    hospitals, clinics, and other healthcare settings. They use
                    their knowledge and skills to promote health and to provide
                    comfort to patients
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h6>How do I know what career is right for me?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    There is no one - size - fits - all answer to this question.
                    The best way to figure out what career is right for you is
                    to explore your interests, strengths, and weaknesses. You
                    can also talk to people who are in different careers and get
                    their insights.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <h6>How does my personality affect my career choices?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    Your personality can play a big role in your career choices.
                    For example, if you are an extrovert, you might be more
                    interested in careers that involve interacting with people,
                    such as sales or marketing. If you are an introvert, you
                    might be more interested in careers that involv e working
                    independently, such as research or engineering
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <h6>
                      How do I find out what my strengths and weaknesses are?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    There are many ways to find out what your strengths and
                    weaknesses are. You can take a personality test, talk to
                    your friends and family, or a sk a career counselor for help
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <h6>How do I get started in a new career?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    If you are interested in a new career, the first step is to
                    do your research. Learn about the different types of jobs
                    available in that field and the qualifications that are
                    required. Yo u can also talk to people who are already
                    working in that field to get their advice. Once you have a
                    good understanding of the field, you can start to develop a
                    plan for getting started. This might involve getting the
                    necessary education or training, netwo rking with people in
                    the field, or applying for jobs
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <h6>What are the most in - demand careers right now?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    The most in - demand careers are constantly changing, but
                    some of the most popular options include:
                    <br />
                    <br />
                    * **Software engineer:** Software engineers design, devel
                    op, and test software. They are in high demand due to the
                    rapid growth of the tech industry. <br />
                    <br />
                    * **Data scientist:** Data scientists collect, analyze, and
                    interpret data. They are in high demand due to the
                    increasing amount of data that is being generated. <br />
                    <br />* **Nurse practitioner:** Nurse practitioners are
                    advanced practice nurses who provide primary care services.
                    They are in high demand due to the aging population and the
                    shortage of primary care providers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <h6>What are the best careers for work - life balance?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    There are many careers that offer good work - life balance.
                    Some popular options include:
                    <br />
                    <br />
                    * **Teacher:** Teachers typically have summers off and can
                    work flexible hours <br />
                    <br />
                    * **Social worker:** Social workers typically have flexible
                    hours and can work from home .<br />
                    <br />* **Freelancer:** Freelancers can set their own hours
                    and work from anywhere.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    <h6>
                      How much can I expect to earn in a particular career?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    The salary range for different careers varies widely. Some
                    factors that can affect salary include the level of
                    education r equired, the experience level, and the location.
                    You can use online salary calculators to get an estimate of
                    the salary range for different careers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    <h6>
                      What are the pros and cons of different career paths?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    Every career has its own pros and cons. It is importa nt to
                    weigh the pros and cons of different career paths before
                    making a decision. Some factors to consider include:
                    <br />
                    <br />* **Salary:** How much can you expect to earn in this
                    career? <br />
                    <br />* **Job security:** How likely is it that you will be
                    able to find a job in th is field? <br />
                    <br />* **Work - life balance:** How much control do you
                    have over your work hours? <br />
                    <br /> * **Personal satisfaction:** How passionate are you
                    about this career?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    <h6>How do I get a job in a particular career?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    The best way to get a job in a particular career is to n
                    etwork with people in the field, attend industry events, and
                    apply for jobs. You can also use online job boards to find
                    job openings.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    <h6>How can I prepare for a job interview?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    There are many things you can do to prepare for a job
                    interview. You can research t he company, practice answering
                    common interview questions, and dress professionally. You
                    can also bring copies of your resume and a list of
                    references to the interview
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    <h6>How can I negotiate my salary?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    When you are offered a job, it is important to negotiate
                    your salary. You can do this by doing your research and
                    knowing your worth. You can also ask for a higher salary
                    based on your experience, skills, and education.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15">
                  <Accordion.Header>
                    <h6>How can I deal with rejection?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    Rejection is a part of life, and it is especially common in
                    th e job market. It is important to learn how to deal with
                    rejection in a positive way. You can do this by reminding
                    yourself that rejection is not a reflection of your worth.
                    You can also focus on the positive aspects of your job
                    search, such as the intervie ws you have had and the skills
                    you have learned
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="16">
                  <Accordion.Header>
                    <h6>How can I stay motivated in my job search?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    The job search can be long and challenging, but it is
                    important to stay motivated. You can do this by setting
                    goals, tracking your progress, and celebrating your su
                    ccesses. You can also network with people in your field and
                    stay up - to - date on the latest job openings.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="17">
                  <Accordion.Header>
                    <h6>How can I find a mentor?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    A mentor is someone who can provide guidance and support as
                    you navigate your career. You can find a mentor by asking
                    your frie nds, family, and colleagues for recommendations.
                    You can also attend industry events or join online forums to
                    connect with potential mentors.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="18">
                  <Accordion.Header>
                    <h6>How can I build my professional network?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    Networking is essential for your career. It is a way to meet
                    people who can help you advance your career. You can build
                    your professional network by attending industry events,
                    joining online forums, and connecting with people on
                    LinkedIn.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="22">
                  <Accordion.Header>
                    <h6>
                      How can I stay up - to - date on the latest trends in my
                      field?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    It is important to stay up - to - date on the latest trends
                    in your field. This will help you stay competitive and make
                    informed decisions about your career. You can stay up - to -
                    date on the latest trends by reading industry publications,
                    attending conferences, and following thought leaders on
                    social media.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="19">
                  <Accordion.Header>
                    <h6>How can I manage my career anxiety?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    Career anxiety is common, especially during times of change.
                    It is important to manage your career anxiety in a healthy
                    way. You can do this by setting realistic goals, practicing
                    relaxation techniques, and talking to a therapist or
                    counselor if needed.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="20">
                  <Accordion.Header>
                    <h6>How can I find a job that I am passionate about?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    It is important to find a job that you are passionate about.
                    This will make your work more enjoyable and fulfilling. You
                    can find a job that you are passionate about by exploring
                    your interests, strengths, and values. You can also talk to
                    people who are in different careers to get their insights.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="21">
                  <Accordion.Header>
                    <h6>Where did you get all the images for the site from?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    All images on the site are courtesy of the following
                    websites: <br />
                    <br />
                    <a href="https://www.pexels.com/" target="_black">
                      https://www.pexels.com/
                    </a>
                    <br />
                    <a href="https://unsplash.com/" target="_black">
                      https://unsplash.com/
                    </a>
                    <br />
                    <a href="https://www.freepik.com/" target="_black">
                      https://www.freepik.com/
                    </a>
                    <br />
                    <a href="http://www.wikipedia.com" target="_black">
                      http://www.wikipedia.com
                    </a>
                    <br />
                    <a href="https://pixabay.com/" target="_black">
                      https://pixabay.com/
                    </a>
                    <br />
                    <a href="https://www.wikipedia.com" target="_black">
                      www.wikipedia.com
                    </a>
                    <br />
                    <a href="https://www.facebook.com" target="_black">
                      www.facebook.com
                    </a>
                    <br />
                    <a href="https://www.twitter.com " target="_black">
                      www.twitter.com
                    </a>
                    <br />
                    <br />
                    All images are property of the respective copyright owners.
                    If you believe that a phot we have belongs you or is in
                    breach of any copyright law, please let us know and we will
                    remove it.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FAQ;
