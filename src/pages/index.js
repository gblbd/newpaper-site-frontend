import { Inter } from "next/font/google";
import HomePage from "./homepage";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5001/api/all-recent-news-list");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <main>
      <HomePage data={data}></HomePage>
    </main>
  );
}
