import matter from "gray-matter";
import fs from "fs";
import path from "path";

const mdPagesPath = path.join(process.cwd(), "pages/");

export async function getPostData(subdir: string) {
  const fileNames = fs.readdirSync(path.join(mdPagesPath, subdir));
  console.log(fileNames);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(mdPagesPath, subdir, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id: id,
      content: matterResult.content,
      ...matterResult.data,
    };
  });

  return allPostsData;
}
