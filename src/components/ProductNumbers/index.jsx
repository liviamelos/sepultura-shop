import styles from "./style.module.css";

export const ProductNumbers = ({productsNumber, productsLength}) => {
    return (
       <div className={styles.numberBox}>
          <span className="paragraph">
             Produtos: <strong>{productsNumber}</strong>
          </span>
          <span className="paragraph">
             Valor total: <strong>R${productsLength}</strong>
          </span>
       </div>
    );
 };

 