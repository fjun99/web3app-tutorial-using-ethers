// src/components/layout.tsx
import React, { ReactNode } from 'react'
import { Text, Center, Container, useColorModeValue } from '@chakra-ui/react'
import Header from './header'

type Props = {
  children: ReactNode
}

export function Layout(props: Props) {
  return (
    <div>
      <Header />
      <Container maxW="container.md" py='8'>
        {props.children}
      </Container>
      <Center as="footer" bg={useColorModeValue('gray.100', 'gray.700')} p={6}>
          <Text fontSize="md">first dapp by W3BCD - 2022</Text>
      </Center>
    </div>
  )
}
