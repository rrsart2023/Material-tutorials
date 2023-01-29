import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import Button from '@material-ui/core/Button';
import useStyles from './styles'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icons} />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello this is photo album est enim id Sit nihil maxime. Minima unde voluptas a fuga dolores maiores. Dolorem sequi odit facilis soluta laborum deserunt. Distinctio ut sit et voluptatibus necessitatibus quia aut nisi.
            </Typography>
          </Container>
        </div>
        <div className={classes.button}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See my photos
              </Button>
              <Button variant="outlined" color="primary">
                See my photos
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media Card. Iste perspiciatis odit vero commodi aut.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button size="small" color="primary">View</button>
                    <button size="small" color="primary">Edit</button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
              Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary">
                Something here to give the info
              </Typography>
      </footer>
    </>
  )
}

export default App;
