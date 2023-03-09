import { TPopularMovie } from "@/types/popular_movie";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

type Props = {
  data: TPopularMovie[];
};

const CustomGrid = ({ data }: Props) => {
  return (
    <Grid container spacing={2} mb={4}>
      {data?.map((item: TPopularMovie) => (
        <Grid item key={item.id} xs={6} sm={3} md={2}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              width="100%"
              image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
            <CardContent>
              <Typography component={'p'} variant='h6'>{item.title}</Typography>
            </CardContent>
            <CardActions>
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
              <Link href={`/movie/${item.id}`}>Ver</Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomGrid;
