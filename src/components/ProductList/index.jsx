import { ProductCard } from "./ProductCard";
import styles from "./style.module.css";

export const ProductList = ({ productList, removeProductFromProductList }) => {
   return (
      <>
         {productList.length > 0 ? (
            <ul className={styles.productList}>
               {productList.map((product) => {
                  return (
                     <ProductCard
                        key={product.id}
                        product={product}
                        removeProductFromProductList={removeProductFromProductList}
                     />
                  );
               })}
            </ul>
         ) : (
            <p className="paragraph">Cadastre seu primeiro produto!</p>
         )}
      </>
   );
};