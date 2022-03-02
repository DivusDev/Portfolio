
//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const reactIcon = () => <a href='https://reactjs.org/'><FontAwesomeIcon icon="fa-brands fa-react" size='2x' /></a>
const mySQLIcon = () => <a href='https://www.mysql.com/'><FontAwesomeIcon icon="fa-solid fa-database" size='2x' /><span>MySQL</span></a>
const nodeIcon = () => <a href='https://nodejs.org/en/'><FontAwesomeIcon icon="fa-brands fa-node-js" size='2x' /></a>
const pgSQLIcon = () => <a href='https://www.postgresql.org/'><FontAwesomeIcon icon="fa-solid fa-database" size='2x' /><span>PostgreSQL</span></a>
const awsIcon = () => <a href='https://aws.amazon.com/'><FontAwesomeIcon icon="fa-brands fa-aws" size='2x' /></a>
const firebaseIcon = () => <a href='https://firebase.google.com/'><FontAwesomeIcon icon="fa-brands fa-gripfire" size='2x' /></a>
const p5jsIcon = () => <a href='https://p5js.org/' className='p5js'>p5*</a>
const rubyIcon = () => <a href='https://www.ruby-lang.org/en/'><img className='invert-img' src="https://img.icons8.com/ios-filled/35/000000/ruby-programming-language.png" /></a>
const railsIcon = () => <a href='https://rubyonrails.org/'><img className='invert-img' src="https://img.icons8.com/windows/90/000000/ruby-on-rails.png" /></a>




export const workRelatedProjects = {
    'perseus': {
        title: 'Writers Guild of America, Backend Redesign',
        subheading: <><span>8/2021 - Present</span><span style={{ marginLeft: '4rem' }}>Project is Proprietary</span></>,
        description: <><span>Interface to allow employees to manage sensitive billing data for the thousands of members of <a href='https://www.wgaeast.org/mo/' style={{fontWeight:'bold'}}>The Writers Guild of America</a>.
            Current legacy application was built in Java 20 years ago. Project Size: 50,000 Lines.</span>
            <p> Tasked with building a fresh app that mimics the functionality of the legacy application, from the ground up
                with added Twenty-First Century functionality such as:</p>
            <ul>
                <li> <strong>Query Optimization:</strong> 300% Faster on Average, </li>
                <li> <strong>Data Processing Optimization:</strong> 100,000% Measurable Performance Increase</li>
                <li> <strong>Dynamic CSV Processing</strong></li>

            </ul>
            <p><strong>Understand > Build > Test</strong></p>
            <p>Team Size: <strong>Solo.</strong> </p>

        </>,
        css_class_name: 'perseus',
        leftOrRight: 'left',
        icons: [reactIcon(), nodeIcon(), pgSQLIcon()]


    },

    'lydahill': {
        title: 'UCCS Lyda Hill Institute Application',
        subheading: <><span>1/2021 - 9/2021</span><span style={{ marginLeft: '4rem' }}>Project is Proprietary</span></>,
        description: <><p>Interface to allow doctors to send surveys to paitents and handle data in a HIPAA compliant fasion.</p>
            <p>Single handedly won the contract for this application and subsequently headed the team to build the application.</p>
            <ul>
                <li>Designed a fully normalized Database Design for scalability in MySQL</li>
                <li>Supported multiple types of users storing their data through hashing and encryption</li>
                <li>Full HIPAA compliant application with special security standards. Including end to end encryption, JSWebTokens, and Hashing.</li>
                <li>Code reviews to ensure a quality, modular, dry codebase was being created. </li>
            </ul></>,
        css_class_name: 'lydahill',
        leftOrRight: 'right',
        icons: [reactIcon(), nodeIcon(), mySQLIcon()]

    },
    'singularity': {
        title: 'Micro AI Telescope Interface',
        subheading: <><span>9/2021 - Present</span><span style={{ marginLeft: '4rem' }}>Project is Proprietary</span></>,
        description: <>
            <p>Interface to allow users to request to use a the micro AI telescope.</p>
            <p>Project Challenges:</p>
            <ul>
                <li>AWS integration for all needs</li>
                <li>Complete with image hosting, user log-in, security software</li>
                <li>AWS solutions for all database, user needs, and hosting</li>
            </ul>
        </>,
        css_class_name: 'singularity',
        leftOrRight: 'left',
        icons: [reactIcon(), nodeIcon(), awsIcon()]


    },

    'wgae': {
        title: 'WGAE Feature Design and Implementation',
        subheading: <><span>11/2020 - 11/2021</span></>,
        description: <>
            <p>Built and maintained features existing WGAE RubyOnRails Web Application as well as managed data.</p>
            <p>Designed Features include:</p>
            <ul>
                <li>New Contact Management</li>
                <li>Database Reformatting and transitioning</li>
                <li>Script upkeep and writing</li>
            </ul>
        </>,
        css_class_name: 'wgae_web',
        leftOrRight: 'right',
        projectURL: 'https://www.wgaeast.org/mo/users/sign_in',
        icons: [rubyIcon(), railsIcon(), pgSQLIcon()]


    },
    'iil': {
        title: 'Institute for International Learning',
        subheading: <><span>1/2021 - 9/2021</span></>,
        description: <>
        <span> Large scale ecommerce site for purchasing of classes. Scalable searching with multiple parameters over 1000s of datapoints</span>,
        <p>Project Highlights Include:</p>
        <ul>
            <li><strong>Scaleable Searching:</strong> With 1000s of datapoints, multiparameter searches, and autocomplete</li>
            <li><strong>Data Normalization:</strong> unpacking and repacking large datasets in an efficient manner </li>
            <li><strong>Dynamic Code Design:</strong> One code base to handle extremely different types of data`` </li>
        </ul>
        </>,
        css_class_name: 'iil',
        leftOrRight: 'left',
        projectURL: 'https://search.iil.com/search/',
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
        projectURL: 'http://tristan-s.com/password',
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
        description: <>
        <p>Small canvas project simulating the effects of gravity on randomly sized objects.</p>
        <ul>
            <li>Press L to turn off lines</li>
            <li>T to spawn a tiny meteor</li>
            <li>F to speed up</li>
            <li> S to slow down</li>
        </ul>
        <p>This project was built in a matter of hours as small interest from a conversation</p>
        </> ,
        css_class_name: 'nbody',
        leftOrRight: 'left',
        backdropColor: 'backdrop_grey',
        projectURL: 'http://tristan-s.com/nbody',
        icons: [reactIcon(), nodeIcon(), p5jsIcon()]
    },
}