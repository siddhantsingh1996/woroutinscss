import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Brands from '../components/Brands/Brands'
import Feature from '../components/Feature/Feature'
import Headline from '../components/Headline/Headline'
import Clients from '../components/Clients/Clients'
import Classes from '../components/Classes/Classes'
import Footer from '../components/Footer/Footer'


export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Brands/>
    <Feature/>
    <Headline/>
    <Clients/>
    <Classes/>
    <Footer/>
    </>
  )
}
