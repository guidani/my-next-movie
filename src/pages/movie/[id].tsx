import { TMovie } from "@/types/Movie";
import Link from "next/link";
import { useRouter } from "next/router";
import { InferGetServerSidePropsType } from "next/types";

type queryProps = {
  query: {
    id: string;
  };
};

export const getServerSideProps = async (context: queryProps) => {
  const { id } = context.query;

  const response = await fetch(
    `${process.env.apiSingleMovieURL}${id}${process.env.apiKey}`
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
  data: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
      Movie <Link href={"/"}>Go Back</Link>
      <hr />
      <ul>
        <li>ID: {data.id}</li>
        <li>Título: {data.title}</li>
      </ul>
    </div>
  );
}
