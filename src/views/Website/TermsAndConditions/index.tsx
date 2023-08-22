import { Col, Container, Row } from "react-bootstrap";
import HomeBanner from "src/components/HomeBanner";
import "./TermsAndConditions.scss";

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      {/* <HomeBanner /> */}
      <section>
        <Container>
          <Row>
            <Col md={12} className="py-5">
              <div className="terms-and-conditions__content ">
                <h3>Terms and Conditions</h3>
                <p>
                  Welcome to www.rilati.com. By using this website, you agree to
                  the following terms and conditions
                </p>
              </div>
              <div className="ps-3">
                <h5>1. Intellectual Property</h5>
                <p>
                  The content of this website, including but not limited to
                  text, images, videos, and audio files, is the property of
                  www.rilati.com and is protected by copyright law. You may not
                  copy, reproduce, distribute, or modify the content of this
                  website without the express written permission of
                  www.rilati.com
                </p>
                <h5>2. Image Credits</h5>
                <p>Some of the images on this website are licensed from</p>
                <ul className="list-items">
                  <li>Pexels: https://www.pexels.com/</li>
                  <li>Unsplash: https://unsplash.com/</li>
                  <li>Freepik: https://www.freepik.com/</li>
                  <li>Wikipedia: http://www.wikipedia.com/</li>
                  <li>Pixabay: https://pixabay.com/</li>
                </ul>
                <p>
                  If you believe that any of the images on this website belong
                  to yo u, please contact us and we will remove them
                  immediately.
                </p>
                <h5>3. User Responsibility</h5>
                <p>
                  You are responsible for your own use of this website and for
                  any consequences of your use. You agree to use this website in
                  a lawful and ethical manner and to comply with all app licable
                  laws and regulations of the State of New South Wales (NSW),
                  Australia. You also agree not to use this website to:
                </p>
                <ul className="list-items">
                  <li>Harm or injure others</li>
                  <li>Spread misinformation or disinformation</li>
                  <li>Violate the privacy of others</li>
                  <li>Promote hate speech or discrimination</li>
                  <li>Engage in illegal or unethical activities</li>
                </ul>
                <h5>4. Limitation of Liability</h5>
                <p>
                  wwww.rilati.com makes no representations or warranties about
                  the accuracy or completeness of the content of this website.
                  The content of this website is provided on an "as is" basis
                  and www.r ilati.com disclaims all liability for any errors or
                  omissions in the content of this website
                </p>
                <p>
                  In addition, www.rilati.com is not liable for any damages
                  arising out of or in connection with your use of this website,
                  including but not limited to direct, indi rect, incidental,
                  consequential, or punitive damages.
                </p>
                <h5>5. Indemnification</h5>
                <p>
                  You agree to indemnify and hold harmless www.rilati.com from
                  any and all claims, losses, damages, liabilities, costs, and
                  expenses (including reasonable attorneys' fees) arising out of
                  o r in connection with your use of this website
                </p>
                <h5>6. Changes to Terms and Conditions</h5>
                <p>
                  wwww.rilati.com may modify these terms and conditions at any
                  time without notice. You are responsible for reviewing these
                  terms and conditions periodically to ensure that you are aware
                  of any changes. Your continued use of this website after any
                  changes to these terms and conditions constitutes your
                  acceptance of the changes.
                </p>
                <h5>7. Governing Law</h5>
                <p>
                  These terms and conditions are governed by the laws of the
                  State of New South Wales (NSW), A ustralia. Any disputes
                  arising out of or in connection with these terms and
                  conditions shall be subject to the exclusive jurisdiction of
                  the courts of the State of New South Wales (NSW), Australia.
                </p>
                <h5>8. Entire Agreement</h5>
                <p>
                  These terms and conditions constitute the entire agreement
                  between you and www.rilati.com with respect to your use of
                  this website. These terms and conditions supersede all prior
                  or contemporaneous communications, representations, or
                  agreements, whether oral or written.
                </p>
                <h5>9. Severability</h5>
                <p>
                  If any provis ion of these terms and conditions is held to be
                  invalid or unenforceable, such provision shall be struck from
                  these terms and conditions and the remaining provisions shall
                  remain in full force and effect.
                </p>
                <h5>10. Waiver</h5>
                <p>
                  No waiver of any provision of these terms and conditions shall
                  be effective unless in writing and signed by both parties.
                </p>
                <h5>11. Notices</h5>
                <p>
                  All notices and other communications under these terms and
                  conditions shall be in writing and shall be deemed to have
                  been duly given when delivered in person, upon the first
                  business day following deposit in the United States mail,
                  postage prepaid, certified or registered, return receipt
                  requested, addressed as follows:
                </p>
                <p>
                  www.rilati.com [Address] or to such other address as either
                  party may designate in writing from time to time
                </p>
                <h5>12. Assignment</h5>
                <p>
                  Neither party may assign these terms and conditions without
                  the prior written consent of the other party.
                </p>
                <h5>13. Headings</h5>
                <p>
                  The headings in these terms and conditions are for convenience
                  only and shall not affect their interpretation.
                </p>
                <h5>14. Counterparts</h5>
                <p>
                  These terms and conditions may be executed in one or more
                  counterparts, each of which shall be deemed an original, but
                  all of which together shall constitute one and the same
                  instrument.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TermsAndConditions;
