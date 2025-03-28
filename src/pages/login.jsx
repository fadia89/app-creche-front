import { useState, useContext } from "react"
import { AuthContext } from "../context/authContext"

const Login = () => {
  const[email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthentificated, handleLogin] = useContext(AuthContext)


    const submitLogin = (e) => {
        console.log("Form login submit !")
        handleLogin(e, email, password)
      }

    return(
        <>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Connexion</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitLogin} class="space-y-6">

            <div>
              <label for="email" class="block text-sm/6 font-medium text-gray-900">Adresse email</label>
              <div class="mt-2">
                <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                onChange={e => setEmail(e.target.value)}/>
              </div>
            </div>
      
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm/6 font-medium text-gray-900" >Mot de passe</label>
              </div>
              <div class="mt-2">
                <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                onChange={e => setPassword(e.target.value)}/>
              </div>
            </div>
      
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Je me connecte</button>
            </div>
          </form>
      
          <p class="mt-10 text-center text-sm/6 text-gray-500">
            Pas encore de compte ?
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"> Inscrivez-vous</a>
          </p>
        </div>
      </div>
      </>
    )
}

export default Login