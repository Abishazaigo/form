const Posts = (props) => {
  return (
    <div class="row">
      {props.posts.map((post) => {
        return (
            <div class="row">
              <div class="col-2">
              </div>
              <div class="col-8">
                <div class="card" style={{ width: "250px", height:"250px"}}>
                  <h6 class="card-title" style={{ color: "#59a310" }}>{post.title}</h6>
                  <p class="card-text" style={{ textAlign: "justify" }}>{post.body}</p>
                  <div>
                  <button style={{ left: "4px", bottom: "4px",position:"absolute"}}>View more</button>
                  </div>
                </div>
                <div class="col-2">
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};
export default Posts;