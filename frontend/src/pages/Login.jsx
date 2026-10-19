import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [activeTab, setActiveTab] = useState('student');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (activeTab === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      {/* TopAppBar */}
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 relative overflow-hidden px-4 min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 flex justify-center items-center">
          <img className="w-full h-full object-cover veena-bg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbwHEpGS-j0gdYAswmYlTfXbS4upSVcBvw7DIP1RH0iXGhp6PXdyQsTaiNM2LVrdfopCwzaozpmZirDeMw7ix7qsht2lptwvm-li0SrK6DHNEQp8jX9XdM47eBCSvjDn0a3W-aEUKnnfK1oKCB1DOf7ZtA7VJT9H2A2-EY9Q0Hvpds8jiScS85Kk94ckufw80urvbvHfqxsIg32NVmuaAZfCnWEt8pxSZ1hk7-WYBp2wjEAKCb-IYD1IJ5WmbH_ufhN7WrRYa7H0Q" />
        </div>
        
        <div className="container max-w-md px-4 sm:px-6 relative z-10 my-auto">
          <div className="text-center mb-6">
            <h1 className="font-display-lg text-2xl sm:text-3xl md:text-4xl text-on-surface mb-1">Mata Sangeetha Vidhyalaya</h1>
            <p className="text-on-surface-variant font-body-md text-xs sm:text-sm">Harmony in Learning, Grace in Performance.</p>
          </div>

          <div className="glass-card bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-[0_30px_60px_-15px_rgba(116,86,96,0.08)] border border-outline-variant/30">
            <div className="flex p-1 bg-surface-container rounded-full mb-8 relative">
              <button 
                className={`flex-1 py-2 text-label-md font-semibold rounded-full transition-all duration-300 z-10 ${activeTab === 'student' ? 'text-on-primary-container bg-primary-container shadow-sm' : 'text-on-surface-variant bg-transparent'}`}
                onClick={() => setActiveTab('student')}
              >
                Student
              </button>
              <button 
                className={`flex-1 py-2 text-label-md font-medium rounded-full transition-all duration-300 z-10 ${activeTab === 'admin' ? 'text-on-primary-container bg-primary-container shadow-sm' : 'text-on-surface-variant bg-transparent'}`}
                onClick={() => setActiveTab('admin')}
              >
                Administrator
              </button>
            </div>

            <div className="space-y-6">
              <form className={`space-y-5 ${activeTab === 'student' ? 'block' : 'hidden'}`} onSubmit={handleLogin}>
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-2 ml-1">Student ID / Email</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all duration-300 py-3 px-1 text-body-md placeholder:text-outline-variant/60 outline-none" placeholder="Enter your credentials" type="text"/>
                </div>
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-2 ml-1">Password</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all duration-300 py-3 px-1 text-body-md placeholder:text-outline-variant/60 outline-none" placeholder="••••••••" type="password"/>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary/20 w-4 h-4 transition-colors" type="checkbox"/>
                    <span className="text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Remember Me</span>
                  </label>
                  <a className="text-label-sm text-primary hover:text-tertiary transition-colors" href="#">Forgot Password?</a>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-semibold text-body-md hover:bg-on-primary-fixed-variant transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 mt-4" type="submit">
                  Sign In to Portal
                </button>
              </form>

              <form className={`space-y-5 ${activeTab === 'admin' ? 'block' : 'hidden'}`} onSubmit={handleLogin}>
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-2 ml-1">Admin Email</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all duration-300 py-3 px-1 text-body-md placeholder:text-outline-variant/60 outline-none" placeholder="admin@academy.com" type="email"/>
                </div>
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-2 ml-1">Password</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all duration-300 py-3 px-1 text-body-md placeholder:text-outline-variant/60 outline-none" placeholder="••••••••" type="password"/>
                </div>
                <div>
                  <label className="block text-label-sm text-on-surface-variant mb-2 ml-1">Secure Key</label>
                  <div className="relative">
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all duration-300 py-3 px-1 text-body-md placeholder:text-outline-variant/60 outline-none" placeholder="Academy Access Key" type="password"/>
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">verified_user</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-semibold text-body-md hover:bg-on-primary-fixed-variant transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 mt-4" type="submit">
                  Administrator Login
                </button>
              </form>
            </div>

            <div className="mt-8 swaralaya-separator opacity-40">
              <div className="swaralaya-line"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <div className="swaralaya-line"></div>
            </div>
            
            <p className="mt-6 text-center text-label-sm text-on-surface-variant">
              New to the Vidyalaya?{' '}
              <Link to="/signup" className="text-primary font-bold hover:underline">
                Create Student Account / Join Now
              </Link>
            </p>

            <p className="mt-3 text-center text-label-sm text-on-surface-variant opacity-80">
              Need assistance? <a className="text-primary font-bold hover:underline" href="#">Contact Office</a>
            </p>
          </div>
        </div>
      </main>

          </div>
  );
};

export default Login;
