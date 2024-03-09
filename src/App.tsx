import Posts from './components/Posts';

const postData = [
  {
    id: 1,
    title: 'Post Title 1',
    author: 'Author 1',
    excerpt: 'This is a short description of the post.',
    content: 'This is the full content of the post.'
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>
      <main>
        <Posts posts={postData} />
      </main>
    </div>
  );
}

export default App;