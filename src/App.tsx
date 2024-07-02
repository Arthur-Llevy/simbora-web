import './App.css'
import { Rts } from './routes/route';
import { GlobalStyle } from './globalStyles';
import { UserDataProvider } from './context/UserDataContext';

function App() {

  return (
    <>
      <UserDataProvider>
        <div className="Container">
          <Rts />
          <GlobalStyle />
        </div>
      </UserDataProvider>
    </>
  )
}

export default App
