import { TMovie } from "@/types/movie";
import { Divider, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { InferGetServerSidePropsType, NextPageContext } from "next/types";

type queryProps = {
  query: {
    id: string;
  };
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { id } = context.query;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const data: TMovie = await response.json();
  return {
    props: {
      id: data.id,
      title: data.title,
      overview: data.overview,
      vote_average: data.vote_average,
      poster_path: data.poster_path,
    },
  };
};

export default function Movie({
  id,
  title,
  overview,
  vote_average,
  poster_path,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Stack
        direction={"row"}
        spacing={4}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={"capa do filme"}
          width={320}
          height={480}
        />
        <List>
          <ListItem>
            <Typography variant="h6" component="p" sx={{ mr: 4 }}>
              Título
            </Typography>
            <p>{title}</p>
          </ListItem>

          <ListItem>
            <Typography variant="h6" component="p" sx={{ mr: 4 }}>
              Nota média
            </Typography>
            <p>{vote_average}</p>
          </ListItem>

          <ListItem>
            <Typography variant="h6" component="p" sx={{ mr: 4 }}>
              Overview:
            </Typography>
            <p>{overview}</p>
          </ListItem>
        </List>
      </Stack>
    </div>
  );
}
