import React from "react";
import Layout from "../components/Layout";


function About() {
    return (
      <>
         {/* About Section Strt */}
        <Layout>
        <section className="about section ">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>About Me</h2>
                </div>
              </div>
              <div className="row">
                <div className="about-content padd-15">
                  <div className="row">
                    <div className="about-text">
                      <h3>I'm Ajay Sahu and <span>Web Developer</span></h3>
                      <p>Lorem dnbsdfbhdsbfd fdsfbdshfbd fdnfadfa dfd sf dfd fadsf adf adfa d fdsfbdshfbd
                        fdsfadfadfadfadfdfadfdfbahsbdfhbdhsbfadhbfhadf dfdsfadhfdf dfadfd fdnfadfahsdfhahdfja
                        dfhabshdfbhdsbf dfvadhfad fadfbhadbfahdfhbdf dshfbdsbfadf dshfdhf dfdsfdf dfad fad fdf adf
                        sfsfasdf dfadsfadsf adsfd afds fasf sf f adsf asd fafdsafhdfadsbfhdbfd
                        fdshfbdhsfbdbfahdfjbdhhdsbfjdbf dfadfbd.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="personal-info padd-15">
                      <div className="row">
                        <div className="info-item padd-15">
                          <p>Birthday : <span>22 jun 2000</span></p>
                        </div>
                        <div className="info-item padd-15">
                          <p>Age : <span>23</span></p>
                        </div>
                        <div className="info-item padd-15">
                          <p>Website : <span>www.domain.com</span></p>
                        </div>
                        <div className="info-item padd-15">
                          <p>Email : <span>info@gmail.com</span></p>
                        </div>
                        <div className="info-item padd-15">
                          <p>Degree : <span>BCA</span></p>
                        </div>
                        <div className="info-item padd-15">
                          <p>Phone : <span>+91 3343 32332</span></p>
                        </div>
                        <div className="info-item padd-15">
                          <p>City : <span>Delhi</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="buttons padd-15">
                          <a href="#" className="btn">Download CV</a>
                          <a href="#contact" className="btn hire-me">Hire Me</a>
                        </div>
                      </div>
                    </div>
                    <div className="skills padd-15">
                      <div className="row">
                        <div className="skill-item padd-15">
                          <h5>CSS</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ "width": "76%" }}>
                              <div className="skill-percent">76%</div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>JS</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ "width": "76%" }}>
                              <div className="skill-percent">76%</div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>HTML</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ "width": "46%" }}>
                              <div className="skill-percent">76%</div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>Bootstrap</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ "width": "96%" }}>
                              <div className="skill-percent">76%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="education padd-15">
                      <h3 className="title">Education</h3>
                      <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            {/* timeline item */}
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> 2013 - 2015
                              </h3>
                              <h4 className="timeline-tile">Master of Computer Applications</h4>
                              <p className="timeline-text">lorem sabhdbhshdbsd dsbhbasdahsvd sdbsahdb
                                shdhsbdhjsbdhsbad sdhsabdbsajdbsf safbhasbfhsba asafbsabfssfhas sfbsbf sfbs
                                sdhahsfg sfhjasfhjaf sahfga xzhjzdsf fsdhfghdjb dgfsdbfhjfbh
                                hdshdfshf.</p>
                            </div>
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> 2013 - 2015
                              </h3>
                              <h4 className="timeline-tile">Master of Computer Applications</h4>
                              <p className="timeline-text">lorem sabhdbhshdbsd dsbhbasdahsvd sdbsahdb
                                shdhsbdhjsbdhsbad sdhsabdbsajdbsf safbhasbfhsba asafbsabfssfhas sfbsbf sfbs
                                sdhahsfg sfhjasfhjaf sahfga xzhjzdsf fsdhfghdjb dgfsdbfhjfbh
                                hdshdfshf.</p>
                            </div>
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> 2013 - 2015
                              </h3>
                              <h4 className="timeline-tile">Master of Computer Applications</h4>
                              <p className="timeline-text">lorem sabhdbhshdbsd dsbhbasdahsvd sdbsahdb
                                shdhsbdhjsbdhsbad sdhsabdbsajdbsf safbhasbfhsba asafbsabfssfhas sfbsbf sfbs
                                sdhahsfg sfhjasfhjaf sahfga xzhjzdsf fsdhfghdjb dgfsdbfhjfbh
                                hdshdfshf.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="education padd-15">
                      <h3 className="title">Experience</h3>
                      <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            {/* timeline item */}
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> 2013 - 2015
                              </h3>
                              <h4 className="timeline-tile">Master of Computer Applications</h4>
                              <p className="timeline-text">lorem sabhdbhshdbsd dsbhbasdahsvd sdbsahdb
                                shdhsbdhjsbdhsbad sdhsabdbsajdbsf safbhasbfhsba asafbsabfssfhas sfbsbf sfbs
                                sdhahsfg sfhjasfhjaf sahfga xzhjzdsf fsdhfghdjb dgfsdbfhjfbh
                                hdshdfshf.</p>
                            </div>
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> 2013 - 2015
                              </h3>
                              <h4 className="timeline-tile">Master of Computer Applications</h4>
                              <p className="timeline-text">lorem sabhdbhshdbsd dsbhbasdahsvd sdbsahdb
                                shdhsbdhjsbdhsbad sdhsabdbsajdbsf safbhasbfhsba asafbsabfssfhas sfbsbf sfbs
                                sdhahsfg sfhjasfhjaf sahfga xzhjzdsf fsdhfghdjb dgfsdbfhjfbh
                                hdshdfshf.</p>
                            </div>
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> 2013 - 2015
                              </h3>
                              <h4 className="timeline-tile">Master of Computer Applications</h4>
                              <p className="timeline-text">lorem sabhdbhshdbsd dsbhbasdahsvd sdbsahdb
                                shdhsbdhjsbdhsbad sdhsabdbsajdbsf safbhasbfhsba asafbsabfssfhas sfbsbf sfbs
                                sdhahsfg sfhjasfhjaf sahfga xzhjzdsf fsdhfghdjb dgfsdbfhjfbh
                                hdshdfshf.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
          {/* About Section End */}
      </>
    );
  }
  
  export default About;
  