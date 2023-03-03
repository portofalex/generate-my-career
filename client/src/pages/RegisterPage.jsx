import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    axios
      .post('/auth/register', {
        name,
        email,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.message);
      });
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px]">
      <h1 className="text-4xl text-center mb-4">Register</h1>
      <form
        className="flex flex-col gap-2 max-w-md mx-auto"
        onSubmit={register}
      >
        <fieldset>
          <label htmlFor="name">Name (optional)</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John"
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required={true}
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            required={true}
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button
          className="text-white bg-purple-500 hover:bg-purple-700 transition-colors"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="text-center text-gray-500 py-2">
        Already have an account?{' '}
        <Link className="underline text-black" to={'/login'}>
          Login
        </Link>
      </div>
    </div>
  );
}
