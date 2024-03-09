import Posts from './components/Posts';

const postData = [
  {
    id: 1,
    title: 'Post Title 1',
    author: 'Author 1',
    excerpt: 'This is a short description of the post.',
    content: 'This is the full content of the post.'
  },
  {
    id: 2,
    title: 'Post Title 2',
    author: 'Author 2',
    excerpt: 'This is a short description of the post.',
    content: 'This is the full content of the post.'
  }
];

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <header className="App-header bg-blue-500 text-white p-6">
        <h1 className="text-4xl">My Blog</h1>
      </header>
      <main className="p-6">
        <Posts posts={postData} />
      </main>
    </div>
  );
}

export default App;