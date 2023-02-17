import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { InferGetServerSidePropsType } from "next";

import Head from "next/head";

type TPopularMovie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
};

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>My Next Movie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Guilherme Daniel" />
        <meta name="description" content="Made with next.js" />
      </Head>
      <main>
        <Container>
          <Typography component="h1" variant="h4">
            Filmes Populares
          </Typography>
          <Divider sx={{ margin: "1rem 0rem" }} />
          <Grid container spacing={2} mb={4}>
            {data?.results?.map((item: TPopularMovie) => (
              <Grid item key={item.id} xs={6} sm={3} md={2}>
                <Card>
                  <CardMedia
                    component="img"
                    width="100%"
                    image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  />
                  <CardContent>
                    <Typography>{item.title}</Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">
                      ver mais<Link href={`/movie/${item.id}`}></Link>
                    </Button> */}
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onClick={() => console.log("favoritado")}
                    />
                    <Checkbox
                      icon={<BookmarkBorder />}
                      checkedIcon={<Bookmark />}
                      onClick={() => console.log("Assistir mais tarde")}
                    />
                    <Checkbox
                      icon={<CheckCircleOutlineIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      onClick={() => console.log("asd")}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
