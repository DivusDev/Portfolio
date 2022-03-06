
//component imports
import { Grid } from "@material-ui/core";
import { Component } from "react";


//css and data
import '../../scss/photography.scss'
import { workRelatedProjects, personalProjects } from "./PageData";


//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import Carousel from "../Utilities/Carousel";


class Photography extends Component {


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

    


    // ******************************************************************************************
    // ********************************** Component Generators **********************************
    // ******************************************************************************************


   
    
    // ****************************************************************************
    // ********************************** Render **********************************
    // ****************************************************************************


    render() {
        return (
            <>
            <Grid container className='home background' >
                <Grid item className='scrollpage photography-container'  xs={12} >

                    <Carousel />


                    
                </Grid>
            </Grid>
            </>
        )
    }

    
}



export default Photography