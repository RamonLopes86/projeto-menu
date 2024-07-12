import estiloSectionCardapio from "./sectioncardapio.module.css";
import Card from "../Card/Card";






export default function Section_Cardapio({arrayProdutos , busca , estilo , moldura }){


    return(

        <section className={estiloSectionCardapio.boxPai}>
            
            <h1 className={estiloSectionCardapio.h1}>Cardápio</h1>

            <p className={`${estiloSectionCardapio.paragrafo} ${estilo}`}>{busca}</p>

            <div className={`${estiloSectionCardapio.boxMoldura} ${moldura} `}>


            


                {

                  arrayProdutos.map((produtos)=>
                
                    <Card
                    
                    key={produtos.id}
                    imagem={produtos.imagem}
                    descricao={produtos.descricao}
                    categoria={produtos.categoria}
                    preco={produtos.preco}
                    nome={produtos.nome}
                    
                    
                    
                    />
                
                
                )  

                

                }

                

                

               

            </div>



        </section>


    )

    
}



