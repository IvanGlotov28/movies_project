import { useState } from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Hidden,
  Link,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink } from 'react-router-dom'
import MenuList from './MenuList'

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <Box>
      <AppBar
        sx={{
          mb: '24px',
        }}
        position="static"
      >
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: '#fff', flexGrow: 1 }}
            >
              Movies recommendation
            </Typography>
          </Link>

          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              component={RouterLink}
              to="/settings"
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <MenuList />
      </Drawer>
    </Box>
  )
}

export default Navigation
