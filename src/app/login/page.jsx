import Link from "next/link"

export default function Login() {
  return (
    <div>
        <div>
            <form class="form mx-auto mt-8 p-6 bg-white rounded-lg max-w-md">
                <p class="title text-2xl text-royalblue font-semibold mb-4">Login</p>
                <p class="message text-gray-700 text-sm mb-4">Signup now and get full access to our app.</p>

                <div class="flex mb-4">
                    <label class="w-1/2">
                        <input class="input w-full p-2 border border-gray-400 rounded" type="text" placeholder=" " required/>
                            <span class="absolute left-2 top-3 text-gray-500 text-xs transition duration-300">Firstname</span>
                    </label>

                    <label class="w-1/2 ml-2">
                        <input class="input w-full p-2 border border-gray-400 rounded" type="text" placeholder=" " required/>
                            <span class="absolute left-2 top-3 text-gray-500 text-xs transition duration-300">Lastname</span>
                    </label>
                </div>

                <label class="relative mb-4">
                    <input class="input w-full p-2 border border-gray-400 rounded" type="email" placeholder=" " required/>
                        <span class="absolute left-2 top-3 text-gray-500 text-xs transition duration-300">Email</span>
                </label>

                <label class="relative mb-4">
                    <input class="input w-full p-2 border border-gray-400 rounded" type="password" placeholder=" " required/>
                        <span class="absolute left-2 top-3 text-gray-500 text-xs transition duration-300">Password</span>
                </label>

                <label class="relative mb-4">
                    <input class="input w-full p-2 border border-gray-400 rounded" type="password" placeholder=" " required/>
                        <span class="absolute left-2 top-3 text-gray-500 text-xs transition duration-300">Confirm password</span>
                </label>

                <button class="submit bg-royalblue text-white p-2 rounded-full text-xl transition duration-300 ease-in-out transform hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:scale-95">Submit</button>

                <p class="signin mt-4 text-gray-700 text-sm">Already have an account?  <Link href="./" class="text-royalblue">Login</Link></p>
            </form>
        </div>
    </div>
  )
}
