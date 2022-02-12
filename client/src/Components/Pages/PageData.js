
//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const reactIcon = () => <a href='https://reactjs.org/'><FontAwesomeIcon icon="fa-brands fa-react" size='2x' /></a>
const mySQLIcon = () => <a href='https://www.mysql.com/'><FontAwesomeIcon icon="fa-solid fa-database" size='2x' /><span>MySQL</span></a>
const nodeIcon = () => <a href='https://nodejs.org/en/'><FontAwesomeIcon icon="fa-brands fa-node-js" size='2x' /></a>
const pgSQLIcon = () => <a href='https://www.postgresql.org/'><FontAwesomeIcon icon="fa-solid fa-database" size='2x' /><span>PostgreSQL</span></a>
const awsIcon = () => <a href='https://aws.amazon.com/'><FontAwesomeIcon icon="fa-brands fa-aws" size='2x' /></a>
const firebaseIcon = () => <a href='https://firebase.google.com/'><FontAwesomeIcon icon="fa-brands fa-gripfire" size='2x' /></a>
const p5jsIcon = () => <a href='https://p5js.org/' className='p5js'>p5*</a>




export const workRelatedProjects = {
    'wgae': {
        title: 'Micro AI Telescope Interface',
        description: <span>Interface to allow users to request to
            use a the micro AI telescope. Complete with image hosting, user log-in, security software,
            interface with AWS. AWS solutions for all database, user needs, and hosting.</span>,
        css_class_name: 'password_app',
        leftOrRight: 'left',
        projectURL: 'http://localhost:8080/password',
        icons: [reactIcon(), nodeIcon(), awsIcon()]


    },
    'zeus': {
        title: 'Micro AI Telescope Interface',
        description: <span>Interface to allow users to request to
            use a the micro AI telescope. Complete with image hosting, user log-in, security software,
            interface with AWS. AWS solutions for all database, user needs, and hosting.</span>,
        css_class_name: 'password_app',
        leftOrRight: 'right',
        projectURL: 'http://localhost:8080/password',
        icons: [reactIcon(), nodeIcon(), awsIcon()]


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
        icons: [reactIcon(), nodeIcon(), awsIcon()]
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