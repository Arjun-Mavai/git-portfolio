import React from "react";

function ArticleCard({ article }: any) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={article.social_image || "https://via.placeholder.com/400"}
        alt={article.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base">{article.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {article.tag_list.map((tag: any) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="text-gray-600 text-sm">
          {article.readable_publish_date}
        </div>
        <a href={article.url} className="text-indigo-500 text-sm">
          Read More
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
