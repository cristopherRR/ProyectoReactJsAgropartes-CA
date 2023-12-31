import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/firebaseFetching";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Header showAs="Shadow" />
      {loading ? (
        <Loader />
      ) : (
        <div className="detail">
          <Item product={{ id, ...product }} showAs={"Detail"} />
        </div>
        
      )}
      <Footer />
    </>
  );
};

export default ItemDetailContainer;
