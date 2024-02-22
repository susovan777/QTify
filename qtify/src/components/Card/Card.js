import React from "react";
import { Card, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from '@mui/material';
import Chip from "@mui/material/Chip";
import Album from "../../assets/album1.png";
import styles from "./card.module.css";

function AlbumCard() {
  return (
    <div className={styles.albumSection}>
      <Typography variant="h6" color="white">
        Top Album
      </Typography>
      <Card sx={{ maxWidth: 159 }} className={styles.cardDiv}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={Album}
            alt="green iguana"
          />
          <CardContent sx={{ padding: "5px" }}>
            {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
            <Chip
              size="small"
              label="100 follows"
              sx={{ bgcolor: "black", color: "white" }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
        <Typography variant="h6" color="white">
          New Bollywood Songs
        </Typography>
    </div>
  );
}

export default AlbumCard;
