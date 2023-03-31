import { data } from "@/libs/api";
import { Inter } from "next/font/google";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  console.log(data);
  return (
    <>
      <main></main>
    </>
  );
}

export async function getServerSideProps() {
  const _result = await data.getRest(2014);

  return {
    props: {
      data: _result.response || {},
    },
  };
}
