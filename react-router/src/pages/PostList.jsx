import POstCard from "../components/POstCard";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const posts = useLoaderData();
  // https://jsonplaceholder.typicode.com/posts?_limit=50

  //   const [posts, setPosts] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  //   const fetchPosts = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts?_limit=50"
  //       );
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (err) {
  //       console.error("Error fetching posts:", err);
  //     }
  //     setIsLoading(false);
  //   };

  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);
  return (
    <div>
      <h3>Display all post here</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <POstCard post={post} />
        </div>
      ))}
    </div>
  );
}

export async function postLoader() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=50"
  );
  const data = await response.json();
  return data;
}
