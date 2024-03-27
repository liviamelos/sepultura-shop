import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ProductNumbers } from "./components/ProductNumbers";
import { ProductList } from "./components/ProductList";
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import "./styles/index.css";
import styles from "./styles/pages/home.module.css";



function App() {
  const [productList, setProductList] = useState([]);

  const productsNumber = productList.length;

  const productsLength = productList.filter((FormData) => 
  FormData.type == "Disponível")
  .reduce((previousValue, product) => {
     return previousValue + Number(parseFloat(product.price).toFixed(2));
  }, 0);


  const addProductToProductList = (formData) => {
    /* title, message, price */
    const newProduct = { ...formData, id: uuidv4() };
    const newProductList = [...productList, newProduct];
    setProductList(newProductList);
 };

  const removeProductFromProductList = (productId) => {
  console.log(productId);
  /* true - mantem / false - exclui */
  const newProductList = productList.filter((product) => product.id !== productId);
  //Todas as notas menos a nota a ser removida
  setProductList(newProductList);
};

  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.flexBox}>
            <div className={styles.left}>
              <Form addProductToProductList={addProductToProductList} />
            </div>
            <div className={styles.right}>
           <h1 className="title one">Lista de produtos</h1>
           <ProductNumbers productsNumber={productsNumber} productsLength={productsLength} />
           <ProductList productList={productList} removeProductFromProductList={removeProductFromProductList} />
        </div>            
        </div>
      </main>
    </>
  )
}
export default App
