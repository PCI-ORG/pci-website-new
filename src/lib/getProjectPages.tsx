import matter from "gray-matter";
import fs from "fs";
import path from "path";

const mdPagesPath = path.join(process.cwd(), "project_pages");

export async function getPostData () {
  const fileNames = fs.readdirSync(mdPagesPath);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(mdPagesPath, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id: id,
      content: matterResult.content,
      ...matterResult.data,
    };
  });

  return allPostsData
}
