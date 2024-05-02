import './App.css'
import { Rts } from './routes/route';
import { GlobalStyle } from './globalStyles';
import { UserDataProvider } from './context/UserDataContext';

function App() {

  return (
    <>
      <UserDataProvider>
         <Rts />
         <GlobalStyle />
      </UserDataProvider>
    </>
  )
}

export default App
