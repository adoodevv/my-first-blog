import React from 'react';

interface PostProps {
   title: string;
   author: string;
   excerpt: string;
   content: string;
}

const Post: React.FC<PostProps> = ({ title, author, excerpt, content }) => {
   return (
      <div>
         <h2>{title}</h2>
         <h4>By {author}</h4>
         <p>{excerpt}</p>
         <p>{content}</p>
      </div>
   );
};

export default Post;