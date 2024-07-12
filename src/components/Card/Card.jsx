import estiloCard from "./card.module.css";
import Image from "next/image";





export default function Card(props) {


    return (


        <section className={estiloCard.Moldura}>

            <div className={estiloCard.boxImg}>

                <Image className={estiloCard.imgMoldura} src={props.imagem} />
            </div>


            <h1>{props.nome}</h1>

            <span className={estiloCard.spanCategoria}>{props.categoria}</span>

            <p>{props.descricao}</p>

            <span className={estiloCard.spanPreco}> R$ {props.preco}</span>

        </section>

)


}