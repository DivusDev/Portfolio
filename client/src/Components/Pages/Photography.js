
//component imports
import { Grid } from "@material-ui/core";
import { Component } from "react";


//css and data
import '../../scss/photography.scss'
import { workRelatedProjects, personalProjects } from "./PageData";


//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';
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

    CustomBanner = () => {
        const images = [
            {id: 1, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw26MPILcafUB4nk4mtTqwFV&ust=1646615209718000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCW--alsPYCFQAAAAAdAAAAABAD"},
            {id: 2, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw26MPILcafUB4nk4mtTqwFV&ust=1646615209718000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCW--alsPYCFQAAAAAdAAAAABAD"},
            {id: 3, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw26MPILcafUB4nk4mtTqwFV&ust=1646615209718000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCW--alsPYCFQAAAAAdAAAAABAD"},
  
        ];
        
        const bearSlideItemData: TBearSlideItemDataList = images.map(row => {
            return {
                key: row.id,
                children: <BearSlideItem imageUrl={row.imageUrl}/>
            };
        });
    
        return <BearCarousel 
            data={bearSlideItemData} 
            aspectRatio={{widthRatio: 16, heightRatio: 9}}
        />
    }

   
    
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