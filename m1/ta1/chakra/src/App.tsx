import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, DarkMode, LightMode } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import './App.css'
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Card maxW='sm'>
          <CardBody>
            <a href='https://chakra-ui.com' target='_blank' rel="noopener noreferrer">
              <Image
                src='https://popcult.blog/wp-content/uploads/2022/03/the-godfather-banner.png'
                alt='Don Vito'
                borderRadius='lg'
              />
            </a>
            <Stack mt='6' spacing='3'>
              <Heading size='s'>- Don Vito Celerone</Heading>
              <Text>
                <i>
                "Gli farò un'offerta che non potrà rifiutare."
                </i>
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                nossir
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <a href='https://www.imdb.com/title/tt0068646/'>
            <p>
              <i>imdb.com</i>
            </p>
            </a>
          </CardFooter>
        </Card>
        {/* Rest of your code */}
      </ChakraProvider>
    </>
  );
}


export default App
