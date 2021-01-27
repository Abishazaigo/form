import './Web.css';
import Bgimage from './images/bgimage.jpg';
import Image2 from './images/image2.jpg';
function Intro(){
    return(
        <div class="row">
        <img src={Bgimage} height="300px" width="100%"></img>
        <div class="top-left">
            <p>Welcome to the</p>
            <p>Art of using Herbs</p>
            <div class="transbox">
                <button type="button">Contact us</button>
            </div>
        </div>
        <img src={Image2} class="image2"></img>
        </div>
    )
}
export default Intro;