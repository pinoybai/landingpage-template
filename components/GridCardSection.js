import { Container, Grid, GridItem } from '@chakra-ui/react'
import {ArrowForwardIcon, AtSignIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import styles from '../styles/Home.module.css'

export default function GridCardSection() {
    return (
        <>
            <div className={styles.gridCards}>
                <p>WHATS THE FUNCTION</p>
                <h2>Meet the feature of product</h2>
                <Container style={{padding: '80px 16px'}} maxW='container.xl'>
                <Grid templateColumns='repeat(4, 1fr)' gap={12}>
                    <GridItem className={styles.gridCardItem} colSpan={1}>
                        <div style={{background: '#da297a'}}>
                        <ArrowForwardIcon color="#fff" w={10} h={10} />
                        </div>
                        <h3>Fast Performance</h3>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </GridItem>
                    <GridItem className={styles.gridCardItem} colSpan={1}>
                        <div style={{background: '#ff483d'}}>
                        <AtSignIcon color="#fff" w={10} h={10} />
                        </div>
                        <h3>Partnership deal</h3>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </GridItem>
                    <GridItem className={styles.gridCardItem} colSpan={1}>
                        <div style={{background: '#da297a'}}>
                        <MoonIcon color="#fff" w={10} h={10} />
                        </div>
                        <h3>Pro Subscription</h3>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </GridItem>
                    <GridItem className={styles.gridCardItem} colSpan={1}>
                        <div style={{background: '#ff483d'}}>
                        <SunIcon color="#fff" w={10} h={10} />
                        </div>
                        <h3>Customer Support</h3>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </GridItem>
                </Grid>
                </Container>
            </div>
        </>
    )
}