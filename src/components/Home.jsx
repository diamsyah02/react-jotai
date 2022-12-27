import { useAtom } from 'jotai'
import { isLoggedIn, putEmail, putPassword } from '../stores/authStore'
import { isDark, chooseColor } from '../stores/themeStore'

const Home = () => {
  const [onLogin, setOnLogin] = useAtom(isLoggedIn)
  const [email, setEmail] = useAtom(putEmail)
  const [password, setPassword] = useAtom(putPassword)
  const [onDark, setOnDark] = useAtom(isDark)
  const [color, setColor] = useAtom(chooseColor)

  return (
    <>
      <div className={`w-full h-screen flex justify-center items-center space-x-4 ${onDark ? color.dark : color.light}`}>
        <button className="bg-white rounded py-3 p-6" onClick={() => setOnDark(!onDark)}>Switch Theme</button>
        <button 
          className="bg-black text-white rounded py-3 p-6" 
          onClick={() => {
            setOnLogin(!onLogin)
            setEmail('')
            setPassword('')
          }}
        >Logout</button>
      </div>
    </>
  );
}

export default Home