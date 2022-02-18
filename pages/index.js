import Head from 'next/head'
import Image from 'next/image'
import Carta from '../components/carta_componente'
import Footer from '../components/footer_component'
import MenuNavegacion from '../components/menu_navegacion.component'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div> 
      <MenuNavegacion/>
      <Carta/>
      <Footer/>
      </div>
  )
}
