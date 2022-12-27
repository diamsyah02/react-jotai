import { useAtom } from 'jotai'
import { isLoggedIn, putEmail, putPassword } from '../stores/authStore'

const Login = () => {
  const [onLogin, setOnLogin] = useAtom(isLoggedIn)
  const [email, setEmail] = useAtom(putEmail)
  const [password, setPassword] = useAtom(putPassword)
  
  function submitLogin(e) {
    e.preventDefault()
    if(email == '' && password == '') return alert('Mohon isi email & password')
    setOnLogin(true)
  }

  return (
    <>
      <div className="flex justify-center h-screen bg-gray-200">
        <div className="w-full md:w-3/4 flex justify-center items-center bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto p-2 md:p-0">
          <div className="border border-black shadow-2xl bg-white rounded p-10">
            <div className="text-4xl mb-5">Login <strong>AES</strong></div>
            <form onSubmit={submitLogin}>
              <div className="mb-4">
                <input type="email" id="email" className="w-full rounded p-3 border border-black" placeholder="Masukkan Email..." onChange={text => setEmail(text.target.value)} required="" />
              </div>
              <div className="mb-4">
                <input type="password" id="password" className="w-full rounded p-3 border border-black" placeholder="Masukkan Password..." onChange={text => setPassword(text.target.value)} required="" />
              </div>
              <div className="flex justify-center mt-6">
                <button type="submit" className="w-full pt-2 pb-2 rounded text-white border border-blue-700 hover:bg-white bg-blue-700 hover:text-blue-700"> Login </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login