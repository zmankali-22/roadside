import useFetch from "../custom-hooks/useFetch";

export default function DataFetch() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <p>Post List</p>

      {data && (
        <div>
          {data.slice(0, 5).map((post) => (
            <div key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
