'use client'
import { Inter } from '@next/font/google'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Header from './Header'
import Pricing from './Pricing'
import Practice from './Practice'
import Features from './Features'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
      {/* <Practice/> */}
      <Header/>
      <Pricing/>
      <Features /> 
    </ChakraProvider>
    
  )
}
