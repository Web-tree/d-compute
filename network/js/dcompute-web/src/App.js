import './App.css';
import { createLibp2p } from 'libp2p'
import { WebSockets } from '@libp2p/websockets'

async function App() {
  const node = await createLibp2p({
    transports: [new WebSockets()]
  })


  var l = '123'
  function log (txt) {
    console.info(txt)
    l += `${txt.trim()}\n`
  }

  return (
      <div className="App">
        <header className="App-header">
          <p>
            {l}
          </p>
        </header>
      </div>
  );
}


export default App;
