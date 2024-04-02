import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  MenuItem,
  Menu,
  IconButton,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

function MovieCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 200, position: 'relative' }}>
        <IconButton
          sx={{ position: 'absolute', right: '0' }}
          aria-label="more"
          id="long-button"
          aria-haspopup="true"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          open={true}
          onClose={() => {}}
          PaperProps={{
            style: {
              width: '20ch',
            },
          }}
        >
          <MenuItem></MenuItem>
        </Menu>
        <CardMedia
          component="img"
          height="300"
          image="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kO09SimHVZ1VgbyT7Xd3nbxG1Xw.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Твоє ім'я
          </Typography>
          <Typography variant="body3">
            Історія розповідає про двох підлітків, яких доля поєднала незвичним
            чином. Вночі, з незрозумілих причин, вони обмінюються свідомістю і
            проводять цілий день у тілі іншого. Класична історія від Макото
            Шінкая, яка не залишить вас байдужими.
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default MovieCard
