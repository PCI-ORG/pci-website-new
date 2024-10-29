import { getPostData } from "@/lib/getPage";
import Post from "./Post";

export default async function Page() {
  const data = await getPostData("media/");

  return <Post data={data}></Post>;
}
