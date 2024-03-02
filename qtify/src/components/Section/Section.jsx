import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import styles from "./section.module.css";
import MainCard from "../Card/Card";
import { Carousel } from "../Carousel/Carousel";

const Section = ({ title, data, filterSource, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  // const [filters, setFilters] = useState([{ key: "all", label: "all" }]);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse all" : "Show all"}
        </h4>
      </div>

      {data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <MainCard data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => <MainCard data={data} type={type} />}
            />
          )}
        </div>
      )}

    </div>
  );
};

export default Section;
