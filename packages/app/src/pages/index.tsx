import useSWR from "swr";

const fetcher = (query: string) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

function HomePage() {
  const { data, error } = useSWR(
    `{
    books {
      isbn
      title
      description
      imgURL
      reservedCount
    }
  }`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.books.map((book: any, index: number) => (
        <div key={index}>{book.title}</div>
      ))}
    </div>
  );
}

export default HomePage;
