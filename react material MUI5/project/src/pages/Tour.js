import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Tour() {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component='h1' marginTop={3}>
                Export The world Vegas
            </Typography>
            <Box margintTop={4} sx={{ display: "flex" }}>
                <img
                    src=  "https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg"
                    alt=""
                    height={200}
                />

            </Box>
        </Container>
    )

}
export default Tour
