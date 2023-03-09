import { TMovie } from "@/types/movie";
import { Chip, Divider, Stack, Typography } from "@mui/material";
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
    <Stack
      direction={"column"}
      paddingX={{xs: 2, md:20}}
      alignItems={"center"}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ marginTop: "1rem" }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={"capa do filme"}
        width={320}
        height={480}
      />
      <p>Botões de ação vão aqui</p>
      <Divider />
      <Typography variant="h6" component="p" align="left">
        {title}
      </Typography>
      <Divider variant="middle">
        <Chip label="Nota" />
      </Divider>
      <Typography variant="h6" component="p">
        {vote_average.toFixed(2)}
      </Typography>
      <Divider variant="middle">
        <Chip label="Overview" />
      </Divider>
      <Typography variant="h6" component="p">
        {overview}
      </Typography>
    </Stack>
  );
}
