import ArticleCard from "@/components/card-article";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log("card checking", await res?.json());

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = res?.json();
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <div className="container mx-auto p-4">
        {data.map((article: any) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
