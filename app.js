class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen flex flex-col font-sans" data-name="app" data-file="app.js">
        <Header />
        
        <main className="flex-grow">
            <section className="bg-white/70 backdrop-blur-md py-6 lg:py-8 border-b border-gray-200/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
                            Hi, I'm a <br className="hidden md:block" />
                            <AnimatedTitle />
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 mb-6 leading-relaxed">
                            Multidisciplinary Game Developer with years of experience and a passion for creating unforgettable interactive experiences.
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                            <a href="https://jrandmaa.github.io/Jack%20Randmaa%20Resume%202025.pdf" className="btn btn-primary text-base px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all font-semibold">
                                My Resume
                            </a>
                            <a href="https://github.com/jrandmaa" target="_blank" rel="noopener noreferrer" className="btn btn-outline bg-white/50 backdrop-blur-sm text-sm px-4 py-2.5 hover:-translate-y-1 transition-all flex items-center gap-2">
                                <div className="icon-github text-lg"></div>
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/jack-randmaa-4a79bb144" target="_blank" rel="noopener noreferrer" className="btn btn-outline bg-white/50 backdrop-blur-sm text-sm px-4 py-2.5 hover:-translate-y-1 transition-all flex items-center gap-2">
                                <div className="icon-linkedin text-lg"></div>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 max-w-[200px] lg:max-w-[280px] relative flex justify-center md:justify-end mt-6 md:mt-0 mx-auto md:mx-0">
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm">
                            <img 
                                src="https://jrandmaa.github.io/images/avatar.jpg" 
                                alt="Developer Portrait" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative blob behind the image */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent)]/20 blur-2xl rounded-full scale-125"></div>
                    </div>
                </div>
            </section>

            <ProjectGallery />
        </main>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);