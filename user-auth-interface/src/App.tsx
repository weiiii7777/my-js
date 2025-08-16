import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            {isLogin ? <LoginForm onSubmit={toggleForm} /> : <RegisterForm onSubmit={toggleForm} />}
            <button onClick={toggleForm}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
};

export default App;