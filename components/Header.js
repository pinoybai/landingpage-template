import { Button, Container, Grid, GridItem, Link } from '@chakra-ui/react'

export default function Header() {
    return (
        <>
            <div id="header">
                <Container maxW='container.xl'>
                <Grid templateColumns='repeat(4, 1fr)'>
                    <GridItem colSpan={1}>
                        <img src="/logo.svg"/>
                    </GridItem>
                    <GridItem colSpan={2}>
                    <div className="navBar">
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Services</Link>
                        <Link href="/">Contact</Link>
                    </div>
                    </GridItem>
                    <GridItem colSpan={1} style={{textAlign: 'right'}}>
                    <Button style={{borderRadius: '20px'}} colorScheme='teal' variant='outline'>
                        Get started
                    </Button>
                    </GridItem>
                </Grid>
                </Container>
            </div>
        </>
    )
}