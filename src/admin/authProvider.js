import { jwtDecode } from 'jwt-decode';

const authProvider = {
  login: async ({ username, password }) => {
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) throw new Error('Login failed');

    const { token } = await response.json();
    const decoded = jwtDecode(token);

    if (decoded.role !== 'admin') throw new Error('Not admin');

    localStorage.setItem('token', token);
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },

  checkAuth: () => {
    const token = localStorage.getItem('token');
    
    if (!token) return Promise.reject();

    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;

      if (decoded.exp && decoded.exp < now) {
        ;
        localStorage.removeItem('token');
        return Promise.reject();
      }

      return Promise.resolve();
    } catch (e) {
      console.error('Token invalide');
      return Promise.reject();
    }
  },

  checkError: (error) => {
    //console.log('checkError status:', error.status);
    
    if (error.status === 401 || error.status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: () => Promise.resolve(),
};

export default authProvider;
