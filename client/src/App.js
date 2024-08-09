
import './App.css';

function App() {

  const handleClick = () => {
    fetch('/list', {
      method:'get'
    }).then(res=>res.json())
    .then(result=>{
      const page = result.number
      window.location = `https://redditfavorites.com/product_categories?page=${page}`
    })
  }

  return (
    <div className="App" onClick={()=>handleClick()}>
      <h1>Click Anywhere</h1>
    </div>
  );
}

export default App;
