import { CssBaseline, Container, Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Settings from './pages/Settings'
import Home from './pages/Home'
import Recommend from './pages/Recommend'

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="recommend" element={<Recommend />}></Route>
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  )
}

export default App
