function MediaModal({ media, onClose }) {
    try {
        // Prevent body scroll when modal is open
        React.useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, []);

        if (!media) return null;

        return (
            <div 
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-0 md:p-8 animate-fade-in" 
                onClick={onClose}
                data-name="media-modal" 
                data-file="components/MediaModal.js"
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
                    aria-label="Close modal"
                >
                    <div className="icon-x text-2xl"></div>
                </button>

                <div 
                    className="w-full h-full md:h-[90vh] max-w-[1400px] bg-white md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
                >
                    {/* Media Container (Left Side) */}
                    <div className="w-full md:w-2/3 h-[50vh] md:h-full bg-black flex items-center justify-center relative">
                        {media.type === 'video' ? (
                            <video 
                                src={media.url} 
                                controls 
                                autoPlay 
                                className="w-full h-full object-contain"
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img 
                                src={media.url} 
                                alt={media.title} 
                                className="w-full h-full object-contain"
                            />
                        )}
                    </div>

                    {/* Sidebar Description (Right Side) */}
                    <div className="w-full md:w-1/3 h-[50vh] md:h-full bg-white flex flex-col overflow-y-auto">
                        <div className="p-8 md:p-10 flex-grow">
                            <div className="inline-block px-3 py-1 bg-blue-50 text-[var(--accent)] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                                {media.category}
                            </div>
                            
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{media.title}</h2>
                            
                            <div className="prose prose-gray">
                                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                    {media.description}
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('MediaModal component error:', error);
        return null;
    }
}