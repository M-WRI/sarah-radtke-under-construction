import Head from "next/head";

const seo = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default seo;
