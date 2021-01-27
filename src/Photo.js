function Photo(props){
    return(
        <div class="card" style={{width:"250px"}}>
            <img class="card-img-top" src={props.photo} alt="Card image" style={{width:"250px"}}></img>   
            <div class="card-body">
                    <h6 class="card-title" style={{color:"#59a310"}}>{props.topic}</h6>
                    <p class="card-text" style={{textAlign:"justify"}}>{props.content}</p>
                    <input type="text" style={{border: "0px"}} value={props.comm}/>
            </div>   
        </div>
    )
}
export default Photo;