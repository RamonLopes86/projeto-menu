import estilosectionBotoes from "./sectionbotoes.module.css";
import Image from "next/image";
import Bebida from "../../../public/icons/bebidas.png"
import Carnes from "../../../public/icons/carne.png"
import Lupa from "../../../public/icons/lupa.png"
import Massa from "../../../public/icons/massa.png"
import Salada from "../../../public/icons/salada.png"
import Entrada from "../../../public/icons/entrada.png"
import Sabores from "../../../public/icons/sobremesa.png"







export default function Section_Botoes({entrada , massas, carnes , bebidas, saladas , sobremesas , botao , acender , apagar , texto , buscar  }) {

    

    var resultado;

    if(botao === "Entradas"){

        resultado = acender

    }else{

        resultado = apagar
    }
  
    


    return (


        <>

            <section className={estilosectionBotoes.boxPai}>

                <button onClick={entrada} className={resultado}> <Image className={estilosectionBotoes.Img} src={Entrada} />Entradas</button>
                <button onClick={massas}  className={botao === "Massas" ? acender : apagar}> <Image className={estilosectionBotoes.Img} src={Massa} />Massas</button>
                <button onClick={carnes} className={botao==="Carnes" ? acender : apagar}> <Image className={estilosectionBotoes.Img} src={Carnes} />Carnes</button>
                <button onClick={bebidas} className={botao === "Bebidas" ? acender : apagar}> <Image className={estilosectionBotoes.Img} src={Bebida} />Bebidas</button>
                <button onClick={saladas} className={botao === "Saladas" ? acender : apagar}> <Image className={estilosectionBotoes.Img} src={Salada} />Salada</button>
                <button onClick={sobremesas} className={botao === "Sobremesas" ? acender : apagar}> <Image className={estilosectionBotoes.Img} src={Sabores} />Sobremesas</button>

            </section>

            <section className={estilosectionBotoes.boxInput}>

                <Image className={estilosectionBotoes.imgLupa} src={Lupa} />

                <input onChange={buscar}  value={texto}   type="text" name="pesquisa" id="idpesquisa" autoComplete="off" placeholder="pesquise aqui um dos pratos de nosso cardápio" />

            </section>

        </>




    )

   
}


