import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

const Products = () => {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        {" "}
        Enjoy the delicious bite of our Burger with the essence of purity. Come
        cherish your moments by spending time here with our quality Burgers.
      </p>
      <div className="a-container">
        <Productbox image={pimage1} title="Luger Burger" />
        <Productbox image={pimage2} title="Le Pigeon Burger" />
        <Productbox image={pimage1} title="Luger Burger" />
      </div>
    </div>
  );
};

export default Products;
