import React from 'react';

interface PostProps {
   title: string;
   author: string;
   excerpt: string;
   content: string;
}

const Post: React.FC<PostProps> = ({ title, author, excerpt, content }) => {
   return (
      <div className="p-4 bg-white rounded shadow-md">
         <h2 className="text-2xl font-bold mb-2">{title}</h2>
         <h4 className="text-lg text-gray-600 mb-4">By {author}</h4>
         <p className="text-gray-800 mb-4">{excerpt}</p>
         <p className="text-gray-700">{content}</p>
      </div>
   );
};

export default Post;