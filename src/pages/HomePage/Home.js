import React from 'react'
import { InfoSection, Pricing } from '../../components';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from "./Data";

function Home(){
    return (
         <>
         <InfoSection {...homeObjOne}/>
         <InfoSection {...homeObjTwo}/>
         <InfoSection {...homeObjThree}/>
         <Pricing/>
         <InfoSection {...homeObjFour}/>
         </>
    )
}

export default Home;
