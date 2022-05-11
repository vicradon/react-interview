import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import axios from "axios";
import MainLayout from "../../src/layout/MainLayout";

function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [postContent, setPostContent] = useState({});
  const [commentsByPost, setCommentsByPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPostContent = async (id) => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setPostContent(data);
    };

    const getComments = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );

      const filteredComments = data.filter(
        (comment) => comment.postId === Number(id)
      );

      setCommentsByPost(filteredComments);
    };

    getPostContent(id).then(() => {
      getComments();
    });
  }, [id]);

  return (
    <MainLayout>
      <div>
        <h2>{postContent.title}</h2>
        <p>{postContent.body}</p>

        <h3>Comments</h3>

        {commentsByPost.map((comment) => {
          return (
            <div key={comment.id}>
              <p style={{ fontWeight: "bold" }}>{comment.name}</p>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Post;
