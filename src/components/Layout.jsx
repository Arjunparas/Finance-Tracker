import { Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <>
     <Box w='100%'h="auto" display="flex" >
      <Box w="18vw" h="auto" >
      <Sidebar />
      </Box>
      <Box w="82vw" h="auto" borderLeft="1px solid #979797" >
      {children}
      </Box>
     </Box>
    
    </>
  )
}

export default Layout