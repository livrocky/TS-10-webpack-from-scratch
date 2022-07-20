import dog from '../assets/dog.jpg';

function App() {
  return (
    <div className='container'>
      <h1>Webpack</h1>
      <h2 className='card'>React from scratch</h2>
      <img src={dog} alt='dog' />
    </div>
  );
}

export default App;
