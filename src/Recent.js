import './Web.css';
import {useState, useEffect} from "react";
import axios from 'axios';
import Posts from './Posts';
function Recent(){
    const [posts, setPosts] = useState([]);
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
  }, []);
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
        {posts && posts.length > 0 && <Posts posts={posts} />}
    </div>
    )
}

export default Recent;