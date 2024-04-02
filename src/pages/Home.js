import { Box, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

import MovieCard from '../components/MovieCard/MovieCard'

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: 'pink',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: '80vh',
  position: 'sticky',
  top: theme.spacing(2),
}))

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MovieCard />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>Selected movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
