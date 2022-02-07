import { Grid } from "@material-ui/core";
import { Component } from "react";


import '../../scss/home.scss'




class Home extends Component {


    constructor(props) {
        super(props)
        this.state = {


        }
    }

    generatePageDivider = (styleObj) => <div className="page-divider" style={styleObj}> <div className="circle"><div className="small-circle"></div><div></div></div></div>

    generateHoverText = (text) => <div className='hover-container' >{text.split('').map(v =>  <div className='hover-letter' style={v != ' ' ? {} : { paddingLeft:'1rem'}  }>{v}</div>)}</div> 




    render() {
        return (
            <Grid container className='home background' >
                <Grid item className='scrollpage '  xs={12}>
                    <div className='title-container'>
                        {/* Shape divider on top */}
                    <div class="custom-shape-divider-top-1644127656" >
                        <div class='custom-shape-divider-top-part shape-primary_blue'></div>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                        {/* Actual title */}
                        <span className='title-intro'>Hi, i'm</span>
                        <span className='title-name'>Tristan Schwichow</span>
                        <span className='title-subheading'>
                            {this.generateHoverText("I'm a Software Engineer, specializing in building and maintaining large scale React and SQL Solutions.")
                            }</span>
                        <span className='title-subheading'>Currently making dreams reality with MakeItHappen.NYC</span>
                        <div className='in-touch-button'>
                        <a href="mailto:tschwichow@gmail.com?subject=Software%20Engineering%20Oppertunity&amp;body=Let%27s%20talk%20about%20Tristan%2C%20baby." class="button">GET IN TOUCH</a>
                        </div>
                    </div>

                    {this.generatePageDivider()}
                </Grid>
                <Grid item className='scrollpage '  xs={12}>
                    <div className='aboutme-container'>
                        <div className='aboutme-description'>
                            <div className="heading-div">
                                <span className='heading'>About Me</span>
                            </div>
                            <div className='subheading-div'>
                            <span className='subheading'>
                                Im a Computer Science and Mathematics Student at University of California San Diego, who is also working part time at MakeItHappen.NYC.
                                I have a massive passion for learning, the outdoors, and Photography <span className='subheading-aside' style={{display:'block'}} >- ( Check out the Photography Section of my site! ) ***Coming Soon***</span> </span>
                            <span className='subheading'>
                                My passion for Computer Science started back in 2019 when I took an online course in Web Development. Since then im proud to say, my interests
                                have spiraled out of control and I'm now working in the field and now hold degrees in Physics, Mathematics, and Computer Science.</span>
                            </div>
                            
                        </div>
                        <div className="aboutme-photo-container">
                            <div className="aboutme-photo"></div>
                        </div>  
                    </div>

                    {this.generatePageDivider({bottom: '10%'})}

                    {/* Shape divider bottom */}
                    <div class="custom-shape-divider-bottom-1644168466">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </Grid>
                <Grid item className='scrollpage ' style={{minHeight: 0}} xs={12}>
                    
                    <div class='custom-shape-divider-top-part shape-primary_red'>

                        

                    </div>

                    
                </Grid>
            </Grid>
        )
    }

    
}



export default Home