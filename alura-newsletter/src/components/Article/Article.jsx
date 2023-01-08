import React from "react";

const Article = ({ title, text, tags }) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center sm:hover:shadow-gray-500 sm:hover:dark:shadow-black">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold mb-4">{title}</h3>
      <div className="w-full sm:flex flex-row justify-center gap-2 pr-5 hidden">
        {
          tags.map(tag => <span key={tag} className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 text-xs font-bold uppercase">{tag}</span>)
        }
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p key={index} className="text-alura-200 dark:text-gray-400">{content}</p>
        ))}
      </div>
    </div>
  );
};

export default Article;
