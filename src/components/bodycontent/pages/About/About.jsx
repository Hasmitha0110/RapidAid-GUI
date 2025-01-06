import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='wrapper'>
            <div className='content'>
            <h1>About RapidAid</h1>
            <p>
                RapidAid is a comprehensive disaster management and emergency response system designed to provide quick and efficient assistance during emergencies. Our platform leverages advanced technology to ensure timely and effective response to various types of disasters, including natural calamities, accidents, and other emergencies.
            </p>
            <p>
                Our mission is to minimize the impact of disasters by providing real-time information, coordination, and resources to first responders, government agencies, and affected communities. RapidAid integrates various tools and features to streamline communication, resource allocation, and decision-making processes during critical situations.
            </p>
            <p>
                Key features of RapidAid include:
            </p>
            <ul>
                <li>Real-time disaster monitoring and alerts</li>
                <li>Resource management and allocation</li>
                <li>Communication and coordination tools</li>
                <li>Emergency response planning and simulation</li>
                <li>Data analytics and reporting</li>
            </ul>
            <p>
                At RapidAid, we are committed to enhancing disaster preparedness and response capabilities to save lives and reduce the impact of emergencies. Join us in our mission to create a safer and more resilient world.
            </p>
            </div>
        </div>
    );
};

export default About;