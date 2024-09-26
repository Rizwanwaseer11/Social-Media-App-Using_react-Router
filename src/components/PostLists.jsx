import { useContext } from "react";
import { PostList as PostListData } from "../store/PostListStore";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostLists = () => {
  // const { postList, fetching } = useContext(PostListData);

  //using useLoaderData hook for to access data from api to get posts in the page
  const postList = useLoaderData();

  // const handleGetPostsClick = () => {

  //     });
  // };

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {
        /*!fetching && */ postList.length === 0 && (
          <WelcomeMessage /*onGetPostsClick={handleGetPostsClick}*/ />
        )
      }
      {
        /*!fetching &&*/
        postList.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))
      }
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostLists;
