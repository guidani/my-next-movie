import { TMovie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
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
  poster_path
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      Movie <Link href={"/"}>Go Back</Link>
      <hr />
      <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={"capa do filme"} width={320} height={480}/>
      <ul>
        {/* <li>ID: {id}</li> */}
        <li>
          <h3>Título</h3>
          {title}
        </li>

        <li>
          <h3>Nota média</h3>
          <p>{vote_average}</p>
        </li>

        <li>
          <h3>Overview:</h3>
          <p>{overview}</p>
        </li>
      </ul>
    </div>
  );
}
