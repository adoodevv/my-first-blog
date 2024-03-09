import React from 'react';
import Post from './Post';

interface PostData {
   id: number;
   title: string;
   author: string;
   excerpt: string;
   content: string;
}

interface PostsProps {
   posts: PostData[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {posts.map((post) => (
            <Post key={post.id} title={post.title} author={post.author}
               excerpt={post.excerpt} content={post.content} />
         ))}
      </div>
   );
};

export default Posts;