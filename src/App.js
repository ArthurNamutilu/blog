import './App.css';

function App() {
  const title = 'Welcome to this blog';
  const likes = 58;

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
      </div>
    </div>
  );
}

export default App;
