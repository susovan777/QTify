import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Chip } from "@mui/material";
import style from "./Card.module.css";

export const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={style.wraper}>
              <div className={style.card}>
                <img src={image} alt="album" />
                <div className={style.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    sx={{ bgcolor: "black", color: "white" }}
                  />
                </div>
              </div>
              <div className={style.titleWraper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={style.wraper}>
            <div className={style.card}>
              <img src={image} alt="song" />
              <div className={style.banner}>
                <Chip
                  label={`${likes} Likes`}
                  size="small"
                  sx={{ bgcolor: "black", color: "white" }}
                />
              </div>
            </div>
            <div className={style.titleWraper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
