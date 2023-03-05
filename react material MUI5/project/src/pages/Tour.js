import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ImageCollage from '../componets/ImageCollage'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import CustomizedAccordions from '../componets/Accordian';


function Tour() {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component='h1' marginTop={3} marginBottom={3}>
                Export The world Vegas
            </Typography>
            <Box margintTop={3} sx={{ display: "flex" }}>
                <img
                    src="https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg"
                    alt=""
                    height={325}
                />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant='paragraph' component='p' marginTop={3} >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate harum fugit impedit iusto, ratione, ipsum temporibus eius esse maxime amet nobis vel. Dicta laborum eligendi molestias labore odit id.
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    Asked Questions:
                </Typography>
                {/* <CustomizedAccordions /> */}
            </Box>
        </Container>
    )

}
export default Tour
