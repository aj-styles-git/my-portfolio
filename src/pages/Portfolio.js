import React from "react";
import Layout from "../components/Layout";

const Portfolio = () =>{
    return(
        <>
        <Layout>
        <section className="portfolio section ">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Portfolio</h2>
                </div>
              </div>
              <div className="row">
                <div className="portfolio-heading padd-15">
                  <h2>My Last Projects :</h2>
                </div>
              </div>
              <div className="row">
                {/* portfolio item start */}
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shdow-dark">
                    <div className="portfolio-img">
                      <img src={require("../assets/images/portfolio/portfolio-1.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shdow-dark">
                    <div className="portfolio-img">
                      <img src={require("../assets/images/portfolio/portfolio-2.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shdow-dark">
                    <div className="portfolio-img">
                      <img src={require("../assets/images/portfolio/portfolio-3.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shdow-dark">
                    <div className="portfolio-img">
                      <img src={require("../assets/images/portfolio/portfolio-4.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shdow-dark">
                    <div className="portfolio-img">
                      <img src={require("../assets/images/portfolio/portfolio-5.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shdow-dark">
                    <div className="portfolio-img">
                      <img src={require("../assets/images/portfolio/portfolio-6.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                {/* Portfolio item End */}
              </div>
            </div>
          </section>
        </Layout>
        </>
    )
}

export default Portfolio;