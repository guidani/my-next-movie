import CustomGrid from "@/components/CustomGrid";
import { TPopularMovie } from "@/types/popular_movie";
import { Container, Divider, Typography } from "@mui/material";
import { InferGetServerSidePropsType } from "next";

import Head from "next/head";

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const data = await response.json();
  const results: TPopularMovie[] = data?.results;
  console.log(results);

  return {
    props: {
      results,
    },
  };
};

export default function Home({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>My Next Movie</title>
      </Head>
      <main>
        <Container>
          <Typography component="h1" variant="h4">
            Filmes Populares
          </Typography>
          <Divider sx={{ margin: "1rem 0rem" }} />
          <CustomGrid data={results} />
        </Container>
      </main>
    </>
  );
}
