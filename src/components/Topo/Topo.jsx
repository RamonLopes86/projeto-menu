import estiloTopo from "./topo.module.css";




export default function Topo(){

    return(

        <section className={estiloTopo.Banner}>

                <div className={estiloTopo.boxTx}>

                    <h1>RESTAURANT</h1>

                    <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>

                </div>

        </section>

    )
}