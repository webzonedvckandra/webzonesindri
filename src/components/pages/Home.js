import React from "react";
//import Slider from '../inc/Slider';
import { Link } from "react-router-dom";
import Vmc from "./inc/Vmc";
import Service from "./Service";
import Footer from "./Footer";

//import Service from './Service';


function Home() {
    return(
        <div>
            {/* <Slider /> */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                                <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </p>
                                
                                <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision ,Mission and Values */}
            <Vmc />
            {/* Our Service */}
            <Service />
            <br/>
            <Footer />
        </div>
            
     );
}

export default Home;