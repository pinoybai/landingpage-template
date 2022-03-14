import { HamburgerIcon } from '@chakra-ui/icons'
import { useMediaQuery, Button, Container, Grid, GridItem, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export default function Header() {

    const [ismobile] = useMediaQuery('(max-width: 600px)')

    return (
        <>
            <div id="header">
                <Container maxW='container.xl'>
                <Grid templateColumns='repeat(4, 1fr)'>
                    <GridItem colSpan={1}>
                        <img src="/logo.svg"/>
                    </GridItem>
                    {!ismobile && 
                        <GridItem colSpan={2}>
                            <div className="navBar">
                                <Link href="/">Home</Link>
                                <Link href="/">About</Link>
                                <Link href="/">Services</Link>
                                <Link href="/">Contact</Link>
                            </div>
                        </GridItem>
                    }
                    <GridItem colSpan={ismobile ? 3 : 1} style={{textAlign: 'right'}}>
                    <Button style={{borderRadius: '20px'}} colorScheme='teal' variant='outline'>
                        Get started
                    </Button>
                    {ismobile && 
                        <Menu>
                        <MenuButton style={{marginLeft: '10px'}} as={IconButton} icon={<HamburgerIcon />} />
                        <MenuList>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Service</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </MenuList>
                        </Menu>
                    }
                    </GridItem>
                </Grid>
                </Container>
            </div>
        </>
    )
}