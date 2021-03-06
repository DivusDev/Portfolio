
//component imports
import { Grid } from "@material-ui/core";
import { Component } from "react";


//css and data
import '../../scss/home.scss'
import { workRelatedProjects, personalProjects } from "./PageData";


//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class Home extends Component {


    constructor(props) {
        super(props)
        this.state = {
            hawaiianToEnglish: false,
            showProprietaryMessage: false,
        }
    }

    // ****************************************************************************************
    // ********************************** Component Handlers **********************************
    // ****************************************************************************************

    hawaiianToEnglishHandler = ( english = false ) => this.setState( { hawaiianToEnglish: english } )

    showProprietaryMessageHandler = ( ) => {
        this.setState( { showProprietaryMessage: true } )
        setTimeout(() =>  this.setState( { showProprietaryMessage: false } ) , 1000)
        }


    // ******************************************************************************************
    // ********************************** Component Generators **********************************
    // ******************************************************************************************

    generatePageDivider = (styleObj) => <div className="page-divider" style={styleObj}> <div className="circle"><div className="small-circle"></div><div></div></div></div>

    generateHoverText = ( text ) => <div className='hover-container' >{text.split( ' ' ).map( word => <div className='hover-word'>{word.split( '' ).map( letter => <div className='hover-letter' >{letter}</div> )}</div> )}</div> 

    generateProjectJSX = (project) => <div className='projects-container' key={Math.random() * 1002}>
    <div className={`project ${project.leftOrRight}`}>
        <div className={`project-photo-container `}>
                <div className={`project-photo-backdrop ${project.leftOrRight} ${project.backdropColor ?? ''}`}></div>
                { !!project.projectURL ? <a href={project.projectURL} disabled={!project.projectURL}><div className={`project-photo ${project.css_class_name}   `}></div></a>
                : <div ><div className={` proprietary_message ${this.state.showProprietaryMessage && 'show'}`} onClick={this.showProprietaryMessageHandler} > Proprietary </div><div className={`project-photo ${project.css_class_name}   `}></div></div> }
        </div>
            <div className='project-information'>
                <div className='project-heading'>
                    {project.title}
                </div>
                <div className='project-subheading'>
                    {project.subheading}
                </div>
                <div className='project-description'>
                    {project.description}
                </div>
                <div className='project-icons'>
                    {project.icons}
                </div>
            </div>
        </div>
    </div>

    hawaiianAndEnglishWord = ( english, hawaiian ) => <span className='hawaiian-word '
        onMouseEnter={() => this.hawaiianToEnglishHandler( true )}
        onMouseLeave={() => this.hawaiianToEnglishHandler()}
        style={{ width: `${english.length > hawaiian.length ? english.length - .7 : hawaiian.length - .7}rem` }} >
        <span className={` squeezer ${this.state.hawaiianToEnglish ? '' : 'squeeze'}`} >{english}</span>
        <span className={` squeezer ${this.state.hawaiianToEnglish ? 'squeeze' : ''}`} >{hawaiian}</span></span>

    // ****************************************************************************
    // ********************************** Render **********************************
    // ****************************************************************************


    render() {
        return (
            <Grid container className='home background' >
                <Grid item className='scrollpage '  xs={12}>
                    <div className='title-container'>
                        {/* Shape divider on top */}
                    <div className="custom-shape-divider-top-1644127656" >
                        <div className='custom-shape-divider-top-part shape-primary_blue'></div>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                        </svg>
                    </div>
                        {/* Actual title */}
                        <span className='title-intro'>Hi, I'm</span>
                        <span className='title-name'>Tristan Schwichow</span>
                        <span className='title-subheading'>
                            {this.generateHoverText("I'm a Software Engineer, specializing in building and maintaining large scale React and SQL Solutions.")
                            }</span>
                        <span className='title-subheading'>Currently making dreams reality with MakeItHappen.NYC</span>
                        <div className='in-touch-button'>
                            <a href="mailto:tschwichow@gmail.com?subject=Software%20Engineering%20Opportunity&amp;body=Excited to meet you ????%0D%0DYou%20can%20also%20reach%20me%20at%20808%20347%200684%0D" className="button">GET IN TOUCH</a>
                        </div>
                    </div>

                    {this.generatePageDivider()}
                </Grid>
                <Grid item className='scrollpage '  xs={12}>
                    <div className='aboutme page-container'>
                        <div className='description'>
                            <div className="heading-div">
                                <span className='heading'>About Me</span>
                            </div>
                            <div className='subheading-div'>
                                <span className='subheading'>
                                    Im a Computer Science and Mathematics Student at University of California San Diego, who is also working part time at <a href='http://makeithappen.nyc' style={{ fontWeight: 'bold' }}>MakeItHappen.NYC</a>.
                                </span>
                                <span className='subheading'>
                                    My passion for Computer Science started back in 2019 when I took an online course in Web Development. Since then im proud to say, my interests
                                    have spiraled out of control and I'm now working in the field and now hold degrees in Physics, Mathematics, and Computer Science.
                                </span>
                                <span className='subheading'>
                                    Growing up in Hawaii has led me to have an active spirit full of nothing but{this.hawaiianAndEnglishWord( 'Love', 'Aloha' )}. I care deeply about our{this.hawaiianAndEnglishWord( 'Land', "Ain'a" )}and am committed to doing everything I can to preserve its natural beauty.
                                    My most passionate hobbies include Landscape Photography, Astrophotography, Hiking, Camping, and Software Development.
                                </span>
                            </div>
                            
                        </div>
                        <div className="aboutme-photo-container">
                            <div className="aboutme-photo"></div>
                        </div>  
                    </div>

                    {this.generatePageDivider({bottom: '10%'})}

                    {/* Shape divider bottom */}
                    <div className="custom-shape-divider-bottom-1644168466">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </Grid>
                
                <Grid item className='scrollpage red_page ' style={{minHeight: 0, paddingBottom: '20%'}} xs={12}>
                    <div className='page-container projects'>
                        <div className='description projects'>
                            <div className="heading-div projects">
                                <span className='heading'>Work Related Projects</span>
                            </div>
                        </div>

                        {Object.values(workRelatedProjects).map(this.generateProjectJSX)}
                        
                    </div>
                    <div className="custom-shape-divider-bottom-1644687057">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </Grid>

                <Grid item className='scrollpage blue_page ' style={{ minHeight: 0, paddingBottom: '20%' }} xs={12}>
                    <div className='page-container projects'>
                        <div className='description projects'>
                            <div className="heading-div projects">
                                <span className='heading'>Personal Projects</span>
                            </div>
                        </div>
                        <div style={{color: 'grey'}}> DISCLAIMER: My personal projects are quite old and do not show my current ability. I have been too busy with both work and school to make current projects. They are here to show you my passion for coding runs deep.</div>

                        {Object.values(personalProjects).map(this.generateProjectJSX)}
                        
                    </div>
                    
                </Grid>
            </Grid>
        )
    }

    
}



export default Home