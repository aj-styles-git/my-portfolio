import React from "react";
import Layout from "../components/Layout";

const Home = () =>{
    return(
        <>
        {/* Home section start */}
        <Layout>
        <section className="home section ">
            <div className="container">
              <div className="row">
                <div className="home-info pad-15">
                  <h3 className="hello">Hello, my name is <span>Ajay Sahu</span></h3>
                  <h3 className="my-profession">I' m a  <span>Mern Stack Developer</span></h3>
                  <p>I'm a Mern Stack Developer with extensive experience for over 10 years.My expertise is to create and website design, graphic design, and many more...</p>
                  <a href="#contact" className="btn hire-me">Hire Me</a>
                </div>
                <div className="home-img pad-15">
                  <img src={require("../assets/images/hero.jpg")} />
                </div>
              </div>
            </div>
          </section>
        </Layout>
          {/* Home section end */}
        </>
    )
}

export default Home;