import './Web.css';
import Icon from './images/icon.png';
function Footer() {
    return (
        <div>
        <div style={{backgroundColor: "black"}}>
            <div class="row">
                <div class="col-2">

                </div>
                <div class="col-3 p-4">
                    <img style={{height:"50px"}} src={Icon}></img>
                        <p style={{textAlign:"justify",color:"white"}}>Internet Marketing Ninjas has mastered the art of creating
                        expert contentthat goes viral, earns trusted links</p>
                        <p></p>
                        <p style={{textAlign: "justify",color:"white"}}>Internet Marketing Ninjas has mastered the art of creating
                        expert content
                    that goes viral, earns trusted links</p>
                </div>
                <div class="col-3 p-4">
                        <p style={{color:"#59a310",fontWeight:"500",fontSize:"30px"}}>Contact Us</p>
                        <div style={{textAlign:"left"}}>
                            <p><i class="material-icons" style={{fontSize:"30px",color:"#59a310"}}>add_location</i>
                                <span style={{color:"white"}}>No:350, Marketing Ninjas has</span>
                            </p>
                            <p><i class="material-icons" style={{fontSize:"30px",color:"#59a310"}}>local_phone</i>
                                <span style={{color:"white"}}>9845972640</span>
                            </p>
                            <p><i class="material-icons" style={{fontSize:"30px",color:"#59a310"}}>local_post_office</i>
                                <span style={{color:"white"}}>herbal@gmaiil.com</span>
                            </p>
                        </div>
                </div>
                <div class="col-3 p-4">
                        <p style={{color:"#59a310",fontWeight: "500",fontSize:"30px"}}>Subscribe Us</p>
                        <p style={{color:"white",textAlign: "justify"}}>Marketing Ninjas has mastered the art of creating expert
                        content that goes viral</p>
                        <button class="btn-success">View Email address ✉</button>
                </div>
                <div class="col-1">

                </div>
            </div>
        </div>
        <div style={{backgroundColor: "rgb(175, 9, 9)"}}>
            <p style={{textAlign: "center"}, {paddingTop:"2px"}, {paddingBottom:"2px"}, {color: "white"}}>copyright@ 2020 Herbalife
            </p>
        </div>
        </div>
    )
}

export default Footer;