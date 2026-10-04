import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import FormInput from './form/FormInput';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassord] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(email, password);
    if (ok) {
      navigate('/dashboard');
    } else {
      alert('Invalid Creds')
    }
  }
  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput label="Password" type="password" required value={password} onChange={(e) => setPassord(e.target.value)} />
        <FormInput error="Minimum charachter required" label="Summary" type="text" multiple required value={summary} onChange={(e) => setSummary(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;