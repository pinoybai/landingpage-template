import { Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Button, Container, Grid, GridItem, Box } from '@chakra-ui/react'
import {ArrowForwardIcon, AtSignIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GridCardSection from '../components/GridCardSection'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <div className={styles.mainJumbo}>
        <h1>Top Quality Digital Products To Explore</h1>
        <h4>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</h4>
        <p style={{textAlign: 'center'}}><Button rightIcon={<ArrowForwardIcon />} colorScheme='red' size='md'>Explore</Button></p>
      </div>
      <div className={styles.jumboImage}>
        <Container maxW='container.lg'>
          <img src="/banner-thumb.png" />
        </Container>
      </div>
      <GridCardSection />
      <div className={styles.twoColSection}>
        <Container style={{padding: '80px 16px'}} maxW='container.xl'>
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              <GridItem className={styles.sectionLeft} colSpan={1}>
                <h4>CORE FEATURES</h4>
                <h2>Smart Jackpots that you may love this anytime &amp; anywhere</h2>
                <p>Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
                <Button style={{borderRadius: '20px'}} rightIcon={<ArrowForwardIcon />} colorScheme='red' size='md'>Get Started</Button>
              </GridItem>
              <GridItem className={styles.sectionRight} colSpan={2}>
                <img src="/core-feature.png"/>
                <div className={styles.featureImageBg}>
                  <img src="/section-bg.png"/>
                </div>
              </GridItem>
          </Grid>
        </Container>
      </div>

      <div className={styles.twoColSection}>
        <Container style={{padding: '80px 16px'}} maxW='container.xl'>
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              <GridItem className={styles.sectionRight} colSpan={2}>
                <img src="/core-feature.png"/>
                <div className={styles.featureImageBgLeft}>
                  <img src="/section-bg.png"/>
                </div>
              </GridItem>
              <GridItem className={styles.sectionLeft} colSpan={1}>
                <h4>CORE FEATURES</h4>
                <h2>Smart Jackpots that you may love this anytime &amp; anywhere</h2>
                <p>Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
                <Button style={{borderRadius: '20px'}} rightIcon={<ArrowForwardIcon />} colorScheme='red' size='md'>Get Started</Button>
              </GridItem>
          </Grid>
        </Container>
      </div>

      <FAQ />
      <Contact />
      <div className={styles.footer} style={{padding: '80px 0 50px 0px'}}>
        <h2>
          <img style={{margin: '15px auto'}} src="/logo.svg"/>
        </h2>
        <p style={{textAlign: 'center'}}>Copyright by 2022</p>
      </div>
    </>
  )
}
