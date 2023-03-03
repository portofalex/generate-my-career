import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GenerateCoverLetterPage from './pages/GenerateCoverLetterPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { UserContextProvider } from './UserContext';
import AccountPage from './pages/AccountPage';
import CoverLetterViewPage from './pages/CoverLetterViewPage';
import './App.css';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index render={() => <Redirect to={'/account/cover-letters'} />}/>
          <Route path={'/register'} element={<RegisterPage />}/>
          <Route path={'/login'} element={<LoginPage />}/>
          <Route path={'/account'} element={<AccountPage />}/>
          <Route path={'/account/:subpage'} element={<AccountPage />}/>
          <Route path={'/account/cover-letters/:id'} element={<CoverLetterViewPage />}/>
          <Route
            path={'/generate-my-cover-letter'}
            element={<GenerateCoverLetterPage />}
          />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
