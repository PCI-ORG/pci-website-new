import { getPostData } from "@/lib/getProjectPages";
import Post from "./Post";

export default async function Page({ params }: { params: { title: string } }) {
  const data = await getPostData();

  return (
    <>
      <Post title={params.title} data={data}></Post>
    </>
  );
}
