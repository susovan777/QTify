import React from "react";
import { Box, Card, CardActionArea, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Album from "../../assets/album1.png";
import styles from "./card.module.css";

function AlbumCard() {
  return (
    <Box className={styles.cardDiv}>
      <Card sx={{ borderRadius: "10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={Album}
            alt="green iguana"
          />
          <CardContent sx={{ padding: "5px" }}>
            <Chip
              size="small"
              label="100 Follows"
              sx={{ bgcolor: "black", color: "white" }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
      <Box className={styles.title}>
        <Typography variant="p" component="p" color="white">
          New Bollywood Songs
        </Typography>
      </Box>
    </Box>
  );
}

function AlbumGrid() {
  return (
    <Box className={styles.albumSection}>
      <Typography variant="h6" color="white">
        Top Albums
      </Typography>
      <Stack direction="row" spacing={2} sx={{ padding: "15px" }}>
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </Stack>
    </Box>
  );
}

export default function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;

        return <div></div>;
      }

      case "song": {
        const { image, likes, title } = data;

        return <div></div>;
      }

      default:
        <></>;
    }
  };

  return getCard(type);
}
