
//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const reactIcon = () => <a href='https://reactjs.org/'><FontAwesomeIcon icon="fa-brands fa-react" size='2x' /></a>
const mySQLIcon = () => <a href='https://www.mysql.com/'><FontAwesomeIcon icon="fa-solid fa-database" size='2x' /><span>MySQL</span></a>
const nodeIcon = () => <a href='https://nodejs.org/en/'><FontAwesomeIcon icon="fa-brands fa-node-js" size='2x' /></a>
const pgSQLIcon = () => <a href='https://www.postgresql.org/'><FontAwesomeIcon icon="fa-solid fa-database" size='2x' /><span>PostgreSQL</span></a>
const awsIcon = () => <a href='https://aws.amazon.com/'><FontAwesomeIcon icon="fa-brands fa-aws" size='2x' /></a>
const firebaseIcon = () => <a href='https://firebase.google.com/'><FontAwesomeIcon icon="fa-brands fa-gripfire" size='2x' /></a>
const p5jsIcon = () => <a href='https://p5js.org/' className='p5js'>p5*</a>
const rubyIcon = () => <a href='https://www.ruby-lang.org/en/'><img className='invert-img' src="https://img.icons8.com/ios-filled/50/000000/ruby-programming-language.png" /></a>
const railsIcon = () => <a href='https://rubyonrails.org/'><img className='invert-img' src="https://img.icons8.com/windows/32/000000/ruby-on-rails.png" /></a>




export const workRelatedProjects = {
    'zeus': {
        title: 'WGAE Backend Redesign',
        subheading: <><span>8/2020 - Present</span><span style={{ marginLeft: '4rem' }}>Project is Proprietary</span></>,
        description: <><span>Interface to allow employees to manage sensitive billing data for the thousands of members of <a href='https://www.wgaeast.org/mo/'>WGAE</a>.
            Current legacy application was built in Java 20 years ago. Project Size: 50,000 Lines.</span>
            <p> Tasked with building a fresh app that mimics the functionality of the legacy application, from the ground up
                with added Twenty-First Century functionality such as:</p>
            <ul>
                <li> <strong>Query Optimization:</strong> 300% Faster on Average, </li>
                <li> <strong>Data Processing Optimization:</strong> 100,000% Measurable Performance Increase</li>
                <li> <strong>Dynamic CSV Processing</strong></li>

            </ul>
            <p><strong>Understand > Build > Test</strong></p>
            <p>Current Size: 14,000 lines. Team Size: <strong>Solo.</strong> </p>

        </>,
        css_class_name: 'zeus',
        leftOrRight: 'left',
        projectURL: 'http://localhost:8080/password',
        icons: [reactIcon(), nodeIcon(), pgSQLIcon()]


    },
    'wgae': {
        title: 'WGAE Web Improvements',
        subheading: <><span>11/2019 - 11/2020</span><span style={{ marginLeft: '4rem' }}>Project is Proprietary</span></>,
        description: <span>Interface to allow users to request to
            use a the micro AI telescope. Complete with image hosting, user log-in, security software,
            interface with AWS. AWS solutions for all database, user needs, and hosting.</span>,
        css_class_name: 'password_app',
        leftOrRight: 'right',
        projectURL: 'http://localhost:8080/password',
        icons: [rubyIcon(), railsIcon(), pgSQLIcon()]


    },

    'uccs': {
        title: 'UCCS Lyda Hill Institute Application',
        subheading: 'Stack: React, Node Backend, MySQL Relational Database',
        description: 'Small stylized password generator to build passwords in the way that you want them. With customizable options.',
        css_class_name: 'password_app',
        leftOrRight: 'left',
        projectURL: 'http://localhost:8080/password',
        icons: [reactIcon(), nodeIcon(), mySQLIcon()]

    },
    'portalver': {
        title: 'Micro AI Telescope Interface',
        description: <span>Interface to allow users to request to
            use a the micro AI telescope. Complete with image hosting, user log-in, security software,
            interface with AWS. AWS solutions for all database, user needs, and hosting.</span>,
        css_class_name: 'password_app',
        leftOrRight: 'right',
        projectURL: 'http://localhost:8080/password',
        icons: [reactIcon(), nodeIcon(), awsIcon()]


    },
    'iil': {
        title: 'Institute for International Learning',
        description: <span>Interface to allow users to request to
            use a the micro AI telescope. Complete with image hosting, user log-in, security software,
            interface with AWS. AWS solutions for all database, user needs, and hosting.</span>,
        css_class_name: 'password_app',
        leftOrRight: 'left',
        projectURL: 'http://localhost:8080/password',
        icons: [reactIcon(), nodeIcon(), pgSQLIcon()]
    },

}



export const personalProjects = {

    'password_app' : {
        title: 'Personal Password Generator',
        description: 'Small stylized password generator to build passwords in the way that you want them. With customizable options.',
        css_class_name: 'password_app',
        leftOrRight: 'left',
        backdropColor: 'backdrop_grey',
        projectURL: 'http://localhost:8080/password',
        icons: [reactIcon(), nodeIcon()]
        
    },
    'chat_app' : {
        title: 'The Chatboxx',
        description: 'Chat and Messaging application. Has the ability to create rooms and interfaces with Google Authentication. The rooms can be password protected and all of the chats are cryptographically secured.',
        css_class_name: 'chat_app',
        leftOrRight: 'right',
        backdropColor: 'backdrop_grey',
        projectURL: 'https://chat-app-c1488.web.app/#/',
        icons: [reactIcon(), nodeIcon(), firebaseIcon()]
    },
    'nbody' : {
        title: 'N-Body Problem',
        description: 'Small canvas project simulating the effects of gravity on randomly sized objects. Press L to turn off lines, T to spawn a tiny meteor, F to speed up, S to slow down. Build in a matter of hours and only a silly project.',
        css_class_name: 'nbody',
        leftOrRight: 'left',
        backdropColor: 'backdrop_grey',
        projectURL: 'https://localhost:8080/nbody',
        icons: [reactIcon(), nodeIcon(), p5jsIcon()]
    },
}