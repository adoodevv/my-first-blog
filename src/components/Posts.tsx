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
      <div>
         {posts.map((post) => (
            <Post key={post.id} title={post.title} author={post.author}
               excerpt={post.excerpt} content={post.content} />
         ))}
      </div>
   );
};

export default Posts;