import { getPostData } from "@/lib/getPage";
import Post from "./Post";

export default async function Page({ params }: { params: { title: string } }) {
  const data = await getPostData("project/");

  return <Post title={params.title} data={data}></Post>;
}
