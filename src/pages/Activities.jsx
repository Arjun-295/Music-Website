import { Link } from 'react-router-dom';

const Activities = () => {
  return (
    <div className="font-body text-on-surface bg-surface min-h-screen flex flex-col">
      
      <main className="flex-grow pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 flex justify-center">
            <span className="material-symbols-outlined text-primary text-6xl">construction</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-primary font-bold mb-4">Activities Coming Soon</h1>
          <p className="font-body text-body-lg text-on-surface-variant mb-12">
            We are actively organizing new community events and activities. Please check back later!
          </p>
          <Link to="/" className="border border-outline-variant text-on-surface-variant px-10 py-4 rounded-2xl font-label font-semibold text-label-md tracking-wider hover:bg-surface-container transition-all flex items-center justify-center mx-auto w-fit">
            Back to Home
          </Link>
        </div>
      </main>

          </div>
  );
};

export default Activities;
