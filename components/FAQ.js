import { Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Button, Container, Grid, GridItem, Box } from '@chakra-ui/react'
import {ArrowForwardIcon, AtSignIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import styles from '../styles/Home.module.css'

export default function FAQ(){
    return (
        <>
        <div className={styles.faqSection}>
        <p>Ask your question and meet</p>
        <h2>Frequently Asked Question</h2>
        <Container style={{padding: '80px 16px'}} maxW='container.xl'>
            <Grid className={styles.faqGridWrapper} templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem className={styles.sectionLeft} colSpan={1}>
                  <h3>Do you have any quesiton? Please ask here we ready to support</h3>
                  <p>If your question is not list here, please feel free to make a manual support.</p>
                  <Button style={{borderRadius: '20px', backgroundColor: '#02073E', color: '#fff'}} rightIcon={<ArrowForwardIcon />} size='md'>Ask Question</Button>
                </GridItem>
                <GridItem className={styles.sectionRight} colSpan={2}>
                <Accordion style={{border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden'}} defaultIndex={[0]}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          <b>How much does it cost?</b>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
  
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          <b>Do I get it for free?</b>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
  
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          <b>How do I purchase this item?</b>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
  
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          <b>Am I a good person?</b>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
  
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          <b>Are you legit?</b>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                </GridItem>
            </Grid>
          </Container>
        </div>
        </>
    )
}