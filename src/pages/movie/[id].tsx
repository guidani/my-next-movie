import { TMovie } from "@/types/movie";
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
    },
  };
};

export default function Movie(
  {id, title}: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      Movie <Link href={"/"}>Go Back</Link>
      <hr />
      <ul>
        <li>ID: {id}</li>
        <li>Título: {title}</li>
      </ul>
    </div>
  );
}
