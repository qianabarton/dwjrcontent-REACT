import React, {Component} from 'react';

import main from '../images/head-1.jpeg'
import Footer from '../components/Footer'


export default class Home extends Component {
    render() {
        return (
            <div className="page center">
                <img className="main-image" src={main}/>
                <div className="text-block special-desktop">
                    <p>Marketing
                        <span class="roboto"> & </span>
                        Strategy Professional
                        <br/>Generative Writer | Storyteller | Liaison</p>
                </div>

                <div className="text-block special-mobile ">
                    <p>Marketing
                        <span className="roboto"> & </span>
                        Strategy Pro
                        <br/>Generative Writer
                        <br/>Storyteller | Liaison</p>
                </div>

                <hr className="divider"/>

                <div className="text-block ">
                    <h2>Characteristics:</h2>
                    <ul className="block-list ">
                        <li>Southside Chicago Native</li>
                        <li>Red-West High School Basketball (Whitney Young HS)</li>
                        <li>Former Big-12 and MAAC Conference Basketball Athlete</li>
                        <li>University of Missouri and Niagara University (NY)</li>
                        <li>MBA Graduate (Strategic Marketing and Commerce)</li>
                        <li>1 Year Professional Basketball Athlete (China)</li>
                        <li>10+ Years Marketing Professional</li>
                    </ul>
                </div>

                <div className="text-block ">
                    <h3>Maximizing Marketing Strategies Professionally Since 2010</h3>
                </div>

                <hr className="divider "/>

                <div className="text-block ">
                    <h2>Expertise:</h2>
                    <ul className="block-list ">
                        <li>Ideation of Marketing Strategies</li>
                        <li>Writing Versatile Business Treatments</li>
                        <li>Producing Marketing Campaigns</li>
                        <li>Project Management</li>
                        <li>User Experience, User Research</li>
                        <li>Cultural Initiatives</li>
                    </ul>
                </div>

                <hr className="divider "/>

                <div className="text-block ">
                    <p>There’s always a need for a liaison/ambassador to connect the dots in any
                        revenue producing industry. Key is maintaining authenticity of the final
                        product. Respecting and staying true to the game. The best teacher is
                        experience. Understand business strategy, trends and functions to always
                        maximize exposure, propelling profitability.
                    </p>
                </div>

                <hr className="divider "/>

                <div className="text-block ">
                    <h3>Always Show Up ϟ Move with Conviction</h3>
                </div>

                <hr className="divider"/>

                <div className="text-block ">
                    <h2>Commitment</h2>
                    <p>Versatility. Committed to helping consumers experience storytelling in a new
                        way. My prowess has a range from professional athlete to exceptional performance
                        in business development, relationship building and brand marketing. A true
                        passion for details, organization and execution while also thinking outside the
                        box and working with a multitude of individuals.
                        <br/><br/>Self-starter. Deliver numbers. Potential maximizer. Integrity holder.
                    </p>
                </div>

                <hr className="divider"/>

                <div className="text-block">
                    <h3>The intent of this
                        <span className="accent "> shareable platform </span>
                        is to have a digital destination composed of foregoing work as reference for
                        potential partnerships and opportunities in marketing</h3>
                </div>
                <Footer/>
            </div>
        );
    }
}
