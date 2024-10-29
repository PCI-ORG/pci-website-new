import { getPostData } from "@/lib/getPage";
import Post from "./Post";

export default async function Page() {
  const data = await getPostData("research/");

  return <Post data={data}></Post>;
}
