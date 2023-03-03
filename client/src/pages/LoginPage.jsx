import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post('/auth/login', {
        email,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        setUser(data);
        navigate('/account/cover-letters');
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    if (!!user) {
      setUser(null);
    }
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px]">
      <h1 className="text-center text-4xl mb-4">Log In</h1>
      <form className="flex flex-col gap-2 max-w-md mx-auto" onSubmit={login}>
        <fieldset>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button
          className="text-white bg-purple-500 hover:bg-purple-700 transition-colors"
          type="submit"
        >
          Log In
        </button>
      </form>
      <div className="text-center text-gray-500 py-2">
        <div className="text-center text-gray-500 py-2">
          Don't have an account yet?{' '}
          <Link className="underline text-black" to={'/register'}>
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
