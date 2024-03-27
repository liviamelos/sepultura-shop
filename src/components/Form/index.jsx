import { useState } from "react";
import styles from "./style.module.css";


export const Form = ({ addProductToProductList }) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");

    const submit = (event) => {
        event.preventDefault();
        const formData = {title, message, price, type};
        addProductToProductList(formData);
    }

    return(
        <div className={styles.formBox}> 
            <h2 className="title two">Cadastre seu produto</h2>
            <form onSubmit={submit} className="form">
                <p className="title">Título do produto</p>
                <input placeholder="Digite aqui" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <p className="title">Descrição</p>
                <textarea placeholder="Digite sua descrição aqui" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                <span className="title three">Ex: Tamanho P, 100% algodão</span> 

                <div className={styles.formAll}>
                    <div className={styles.formValues}>
                        <p className="title">Valor</p>
                        <input placeholder="R$" type={"text"} value={price} onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    <div className={styles.formSelect}>
                        <p className="title">Status de venda</p>
                        <select value={type} onChange={(event) => setType(event.target.value)}>
                            <option value="--">--</option>
                            <option value="Disponível">Disponível</option>
                            <option value="Indisponível">Indisponível</option>
                        </select>
                    </div>
                </div>
                <button className="btn lg solid1" type="submit">Criar produto</button>
            </form>
        </div>
    ) 
}