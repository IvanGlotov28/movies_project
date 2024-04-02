import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings'

const MenuList = () => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem >
          <ListItemButton component={RouterLink} to="settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default MenuList
