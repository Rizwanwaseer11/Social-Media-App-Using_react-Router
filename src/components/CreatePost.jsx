import { useContext, useRef } from "react";
import { PostList } from "../store/PostListStore";
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  // const navigate = useNavigate(); //used for react router dom to navigate to  pages

  // these refrences are used for to get data from form inputs
  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const viewsElement = useRef();
  // const tagsElement = useRef();

  const handleSubmit = (event) => {
    // // event.preventDefault();
    // const userId = userIdElement.current.value;
    // const postTitle = postTitleElement.current.value;
    // const postBody = postBodyElement.current.value;
    // const views = viewsElement.current.value;
    // const tags = tagsElement.current.value.split(" ");
    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // viewsElement.current.value = "";
    // tagsElement.current.value = "";
    //simple method using for use Reducer hoook to send data to server
    // fetch("https://dummyjson.com/posts/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     title: postTitle,
    //     body: postBody,
    //     views: views,
    //     userId: userId,
    //     tags: tags,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((post) => {
    //     addPost(post);
    //     navigate("/");
    //   });
    //  old method to sned data to reducer without Api integeration
    // addPost(userId, postTitle, postBody, tags, views);
  };
  return (
    <>
      {/* // this for is using for 'submitting data using action with react router dom' */}
      {/* //also usin Name attribute except Ref for use Ref */}
      <Form method="POST" className="create-post" /*onSubmit={handleSubmit}*/>
        <div className="mb-3">
          <label htmlFor="userId" body="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            // ref={userIdElement}
            name="userId"
            className="form-control"
            id="userid"
            placeholder="Your user Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            // ref={postTitleElement}
            name="title"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" body="form-label">
            Post Content
          </label>
          <textarea
            rows="4"
            type="text"
            // ref={postBodyElement}
            name="body"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="views" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            // ref={viewsElement}
            name="views"
            className="form-control"
            id="reactions"
            placeholder="How many peoples reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            // ref={tagsElement}
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Please enter your tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

//either we use .then method to get data from form or either async await
export async function createPostAction(data, addPost) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
    // body: JSON.stringify({
    //   title: postTitle,
    //   body: postBody,
    //   views: views,
    //   userId: userId,
    //   tags: tags,
    // }),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
      console.log(post);
      // navigate("/");// navigate is used for navigate from loader
    });

  return redirect("/");
}

export default CreatePost;
