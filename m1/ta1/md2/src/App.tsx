/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import { CardMedia, Button, Card, CardContent, CardActions, Typography } from '@mui/material';

import './App.css'

function App() {

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <a href="https://m2.material.io" rel='noreferrer noopener'>
        <CardMedia
          sx={{ height: 200 }}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/De_bedreigde_zwaan_Rijksmuseum_SK-A-4.jpeg/1280px-De_bedreigde_zwaan_Rijksmuseum_SK-A-4.jpeg"
          title="Swan"
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The threatened swan
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This is a painting by Jan Asselijn, a Dutch Golden Age painter. It was painted in 1650 and is on display at the
            Rijksmuseum in Amsterdam.
          </Typography>
        </CardContent>
        <CardActions>
          <a href='https://www.rijksmuseum.nl/en/collection/SK-A-4' rel='noreferrer noopener' >
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
    </>
  )
}

export default App
