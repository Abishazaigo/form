import './Web.css';
function Products(){
    return(
        <div class="row">
            <h3 class="topic">Featured products</h3>
            <div class="col-1">
    
            </div>
            <div class="col-1">
                <button class="center">
                    << </button>
            </div>
            <div class="col-2">
                <img class="pic1" src="./images/pic1.jpg">
                <p class="product">Herbalife Formula</p>
                <p class="product">₹2000.00</p>
                <button class="bu">Buy Now</button>
            </div>
            <div class="col-2">
                <img class="pic2" src="./images/pic2.jpg">
                <p class="product">Duo 30 Day Program</p>
                <p class="product">₹2000.00</p>
                <button class="buy">Buy Now</button>
            </div>
            <div class="col-2">
                <img class="pic3" src="./images/pic3.jpg">
                <p class="product">Herbalife Cell U Loss</p>
                <p class="product">₹2000.00</p>
                <button class="buy">Buy Now</button>
            </div>
            <div class="col-2">
                <img class="pic4" src="./images/pic4.jpg">
                <p class="product">Herbalife Protein Formula</p>
                <p class="product">₹2000.00</p>
                <button class="buy">Buy Now</button>
            </div>
            <div class="col-1">
                <button class="center">>></button>
            </div>
        </div>
    )
}
export def