import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/components/Topo/Topo";
import Section_Botoes from "@/components/section-botoes-input/SectionBotoes";
import Section_Cardapio from "@/components/section-cardapio/sectionCardapio";
import React, {useState} from "react";
import { produtos } from "@/components/ArrayCardapio/ArrayCardapio";





export default function Home() {

  const [arrayProdutos , setArrayProdutos] = useState(produtos);
  const [botaoClicado , setBotaoClicado] = useState('')
  const [ valorTx , setValorTx] = useState('')
  const [ semBusca , setSemBusca] = useState('')
  const [esconde , setEsconde] = useState(styles.Esconder)
  const [escondeMoldura , setEscondeMoldura] = useState(styles.Mostrar)
 
  
  let Apagar = styles.ApagarBtn
  let Acender = styles.AcenderBtn

  


// onChange


  function BuscarTexto(tx){

      let filtrado = (produtos.filter((produtos)=>
      
        produtos.nome.toLowerCase().includes(tx.toLowerCase())||
        produtos.categoria.toLowerCase().includes(tx.toLowerCase())||
        produtos.descricao.toLowerCase().includes(tx.toLowerCase())
      
      ))

      setArrayProdutos(filtrado)

      setValorTx(setArrayProdutos(filtrado))

      if(filtrado.length === 0){

          setSemBusca("Não foi encontrado nenhum item")
          setEsconde(styles.Mostrar)
          setEscondeMoldura(styles.Esconder)
         

      }else{

        setSemBusca('')
        setEsconde(styles.Esconder)
        setEscondeMoldura(styles.Mostrar)
   
      }

     

  }



 function Change(evento){

    BuscarTexto(evento.target.value)

 }


  
//  ------------------------------------------------------------------

  // onClick

  function FiltrarProdutos(categorias){


    let resultadoFiltro = produtos.filter((produtos)=>
    
    
      produtos.categoria === categorias
    
    )


    setArrayProdutos(resultadoFiltro)

    setBotaoClicado(categorias)


  }


  function FiltrarEntradas(){

    FiltrarProdutos("Entradas")
    setValorTx('')
    setEscondeMoldura(styles.Mostrar)
    setEsconde(styles.Esconder)

  }
    

  function FiltrerMassas(){

    FiltrarProdutos("Massas")
    setValorTx('')
    setEscondeMoldura(styles.Mostrar)
    setEsconde(styles.Esconder)
  }


  function FiltrerCarnes(){

    FiltrarProdutos("Carnes")
    setValorTx('')
    setEscondeMoldura(styles.Mostrar)
    setEsconde(styles.Esconder)
  }

  function FiltrerBebidas(){

    FiltrarProdutos("Bebidas")
    setValorTx('')
    setEscondeMoldura(styles.Mostrar)
    setEsconde(styles.Esconder)
  }

  function FiltrerSaladas(){

    FiltrarProdutos("Saladas")
    setValorTx('')
    setEscondeMoldura(styles.Mostrar)
    setEsconde(styles.Esconder)
  }

  function FiltrerSobremesas(){

    FiltrarProdutos("Sobremesas")
    setValorTx('')
    setEscondeMoldura(styles.Mostrar)
    setEsconde(styles.Esconder)
  }


  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>

    

      <Topo/>


      

      <Section_Botoes

      entrada={FiltrarEntradas}
      massas={FiltrerMassas}
      carnes={FiltrerCarnes}
      bebidas={FiltrerBebidas}
      saladas={FiltrerSaladas}
      sobremesas={FiltrerSobremesas}
      botao={botaoClicado}
      acender ={Acender}
      apagar={Apagar}
      texto ={valorTx}
      buscar={Change}
      
      
      
    
      
      />




      <Section_Cardapio
      
      arrayProdutos={arrayProdutos}
      busca={semBusca}
      mostrar={styles.Mostrar}
      esconder={styles.Esconder}
      estilo={esconde}
      moldura={escondeMoldura}
      

      />

      

    
      

     </main>
    </>
  );
}
