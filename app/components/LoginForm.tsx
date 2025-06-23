'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

interface Props {
  setIsLoggedIn?: (val: boolean) => void;
}

const LoginForm = ({ setIsLoggedIn }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.isLoggedIn) {
        if (typeof setIsLoggedIn === 'function') {
          setIsLoggedIn(true);
        }
        setTimeout(() => router.refresh(), 100);
      } else {
        alert(`❌ Login gagal: ${data.error || 'Tidak diketahui'}`);
      }
    } catch (error) {
      console.error('❌ Error saat login:', error);
      alert('❌ Terjadi kesalahan saat login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 xl:p-8 w-full max-w-sm shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition duration-200 ${
            loading ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="flex justify-center gap-3 mt-6">
        <button className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition flex-1 justify-center">
          <FcGoogle className="w-4 h-4" />
          <span className="text-xs font-medium text-gray-700">Google</span>
        </button>
        <button className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg hover:bg-gray-900 transition flex-1 justify-center">
          <FaApple className="w-4 h-4 text-white" />
          <span className="text-xs font-medium text-white">Apple</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
