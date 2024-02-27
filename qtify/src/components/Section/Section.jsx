import React from "react";

const Section = ({title, data, filterSource, type}) => {
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}