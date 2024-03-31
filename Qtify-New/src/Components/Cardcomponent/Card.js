import React from "react";
import { Box, Card, CardActionArea, Tooltip } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import styles from "./card.module.css";

// function AlbumCard() {
//   return (
//     <Box className={styles.cardDiv}>
//       <Card sx={{ borderRadius: "10px" }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="170"
//             image={Album}
//             alt="green iguana"
//           />
//           <CardContent sx={{ padding: "5px" }}>
//             <Chip
//               size="small"
//               label="100 Follows"
//               sx={{ bgcolor: "black", color: "white" }}
//             />
//           </CardContent>
//         </CardActionArea>
//       </Card>
//       <Box className={styles.title}>
//         <Typography variant="p" component="p" color="white">
//           New Bollywood Songs
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// function AlbumGrid() {
//   return (
//     <Box className={styles.albumSection}>
//       <Typography variant="h6" color="white">
//         Top Albums
//       </Typography>
//       <Stack direction="row" spacing={2} sx={{ padding: "15px" }}>
//         <AlbumCard />
//         <AlbumCard />
//         <AlbumCard />
//       </Stack>
//     </Box>
//   );
// }

export const MainCard = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;

        return (
          <div>
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
              <Box className={styles.cardDiv}>
                <Card sx={{ borderRadius: "10px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="170"
                      image={image}
                      alt="album"
                    />
                    <CardContent sx={{ padding: "5px" }}>
                      <Chip
                        size="small"
                        label={`${follows} follows`}
                        sx={{ bgcolor: "black", color: "white" }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Box className={styles.title}>
                  <p>{title}</p>
                </Box>
              </Box>
            </Tooltip>
          </div>
        );
      }

      case "song": {
        const { image, likes, title } = data;

        return (
          <Box className={styles.cardDiv}>
            <Card sx={{ borderRadius: "10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={image}
                  alt="song"
                />
                <CardContent sx={{ padding: "5px" }}>
                  <Chip
                    size="small"
                    label={`${likes} likes`}
                    sx={{ bgcolor: "black", color: "white" }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
            <Box className={styles.title}>
              <p>{title}</p>
            </Box>
          </Box>
        );
      }

      default:
        <></>;
    }
  };

  return getCard(type);
};

export default MainCard;
