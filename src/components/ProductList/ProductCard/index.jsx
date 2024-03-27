import styles from "./style.module.css";

export const ProductCard = ({ product, removeProductFromProductList}) => {
    return(
        <li className={styles.productCard}>
            <h3 className="title two">{product.title}</h3>
            <p className="paragraph">{product.message}</p>
            <h3 className="title two">R$ {product.price}</h3>
            <h3 className="title three">{product.type}</h3>
            <button className="btn sm solid1" onClick={() => removeProductFromProductList (product.id)}>Excluir</button>
        </li>
    )
}