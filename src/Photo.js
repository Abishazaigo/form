import {useState, useEffect} from "react";
import axios from 'axios';
function Photo(props){
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            console.log(res.data);
            setPosts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    return(
        <div class="card" style={{width:"250px"}}>
            <div class="card-body">
                    <h6 class="card-title" style={{color:"#59a310"}}>{props.topic}</h6>
                    <p class="card-text" style={{textAlign:"justify"}}>{props.content}</p>
                    <input type="text" style={{border: "0px"}} value={props.comm}/>
            </div>   
        </div>
    )
}
const Posts = (props) => {
    return (
      <>
        {props.posts.map((post) => {
          return (
            <div class="card">
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          );
        })}
      </>
    );
  };
export default Photo;