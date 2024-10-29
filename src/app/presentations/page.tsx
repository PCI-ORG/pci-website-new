import { getPostData } from "@/lib/getPage";
import Post from "./Post";

export default async function Page() {
  const data = await getPostData("presentations/");

  return <Post data={data}></Post>;
}
