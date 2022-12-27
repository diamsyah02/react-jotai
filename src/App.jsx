import { useAtom } from 'jotai'
import { isLoggedIn } from './stores/authStore'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [onLogin, setOnLogin] = useAtom(isLoggedIn)

  return (
    <>
      {onLogin ?
        <Home />
        :
        <Login />
      }
    </>
  )
}

export default App
