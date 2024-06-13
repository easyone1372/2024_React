import React, { CSSProperties } from "react";
import bannerData from "./bigBannerData";

export type bannerProps = {
  linkURL: string;
  thumbnailURL: string;
  title: string;
  description: string;
  textColor: string;
  bannerID: number;
  isPersonalized: boolean;
  segment: string;
  score: number;
};

const makeBanner = bannerData[].data.data.contents.map(
  (item: bannerProps) => ({
    linkURL: item.linkURL,
    thumbnailURL: item.thumbnailURL,
    title: item.title,
    description: item.description,
    textColor: item.textColor,
  })
);

const BigBanner = ({
  thumbnailURL,
  title,
  description,
  textColor,
}: bannerProps) => {
  const bannerStyle: CSSProperties = {
    maxWidth: "768px",
    width: "100%",
    height: "750px",
    margin: "0 auto",
  };

  const bannerBox: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: textColor,
    backgroundImage: `url(${thumbnailURL})`,
    objectFit: "cover",
  };
  //   const imgStyle: CSSProperties = {
  //     backgroundImage: `url(${thumbnailURL})`,
  //     objectFit: "cover",
  //   };

  const textBox: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div style={bannerStyle}>
        <div style={bannerBox}>
          <div style={textBox}>
            <div>{title}</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigBanner;
