import './Web.css';
import Cont1 from './images/cont1.png';
import Cont2 from './images/cont1.png';
import Cont3 from './images/cont1.png';
import Photo from './Photo';
import {useState, useEffect} from "react";
import axios from 'axios';
function Recent(){
    return(
        <div>
        <div class="row">
        <div class="col-2">

        </div>
        <div class="col-4">
            <p class="p1">RECENT NEWS</p>
            <p class="p2">Our Latest News</p>
        </div>
        <div class="col-4 p-4">
            <button class="top-end">VIEW MORE</button>
        </div>
        <div class="col-2">

        </div>
    </div>
    <div class="row">
        <div class="col-2">

        </div>
        <div class="col-3">
        <div class="card" style={{width:"250px"}}>
                <Photo topic="THE NEW NUTRITION CLUB" content="Internet Marketing Ninjas has 
                mastered the art of creating expert content that goes viral, earns trusted links" 
                comm="1April           5Comments"/>
            </div>
        </div>
        <div class="col-3">
            <div class="card" style={{width:"250px"}}>
                <Photo topic="THE NEW NUTRITION CLUB" content="Internet Marketing Ninjas has 
                mastered the art of creating expert content that goes viral, earns trusted links" 
                comm="1April           5Comments"/>
            </div>
        </div>
        <div class="col-3">
        <div class="card" style={{width:"250px"}}>
                <Photo topic="THE NEW NUTRITION CLUB" content="Internet Marketing Ninjas has 
                mastered the art of creating expert content that goes viral, earns trusted links" 
                comm="1April           5Comments"/>
            </div>
        </div>
        <div class="col-1">

        </div>
    </div>
    </div>
    )
}

export default Recent;