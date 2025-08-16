import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Auqid Irfan - Full Stack Web Developer | React & JavaScript Expert",
  description = "Auqid Irfan - Full Stack Web Developer with 2+ years experience. Expert in React, JavaScript, Node.js. Available for freelance projects and collaborations.",
  keywords = "Auqid Irfan, Auqid, Web Developer, Full Stack Developer, React Developer, JavaScript, Portfolio, Freelancer",
  image = process.env.PUBLIC_URL
    ? `${process.env.PUBLIC_URL}/logo512.png`
    : "/logo512.png",
  url = "https://www.auqid.tech/",
  type = "website",
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Auqid Irfan" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Auqid Irfan Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@auqid" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Auqid Irfan",
          alternateName: "Auqid",
          jobTitle: "Full Stack Web Developer",
          description: description,
          url: url,
          image: image,
          sameAs: ["https://github.com/auqid", "https://linkedin.com/in/auqid"],
          knowsAbout: [
            "React",
            "JavaScript",
            "Node.js",
            "Web Development",
            "Full Stack Development",
            "Frontend Development",
            "Backend Development",
          ],
          workLocation: "Remote",
          availableLanguage: ["English"],
          award: "2+ Years Experience in Web Development",
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
