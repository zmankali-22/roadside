import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostComments() {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(null);

  const { postId } = useParams();
  const navigate =useNavigate()

  const fetchData = async () => {
    setLoading(true);
    try {
      const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const commentsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const postData = await postResponse.json();
      const commentsData = await commentsResponse.json();
      setPost(postData);
      setComments(commentsData);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {post && (
            <div>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
          )}
          <h2>Comments</h2>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h5>{comment.name}</h5>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </li>
          ))}
        </div>
      )}

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
