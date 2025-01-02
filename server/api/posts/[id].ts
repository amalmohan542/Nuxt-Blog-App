import dummyPosts from "~/assets/constants/dummydata";

export default defineEventHandler((event) => {
  const idParam = getRouterParam(event, "id");
  const id = idParam ? parseInt(idParam, 10) : NaN;
  const post = dummyPosts.find((p) => p.id === id);
  return post || { error: "Post not found" };
});
