import React from "react";
import { Helmet } from "react-helmet";

interface MetaProps {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export const Meta: React.FC<MetaProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta property="og:title" content={ogTitle} />
        <meta name="og:description" content={ogDescription} />
        <meta name="description" content={description} />
      </Helmet>
    </>
  );
};
