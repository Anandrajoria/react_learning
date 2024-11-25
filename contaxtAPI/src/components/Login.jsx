import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setusername] = useState();
  const [passward, setpassward] = useState("");

  const {setUser}=useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,passward})
  };


  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mt-4">login</h2>
        <input
          type="text"
          placeholder="userName"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className="border flex border-gray-300 rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        {" "}
        <input
          type="text"
          placeholder="passward"
          value={passward}
          onChange={(e) => setpassward(e.target.value)}
          className="border flex  border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
}

export default Login;
