function Carousel({ slides, currentIndex, onIndexChange }) {
    try {
        const nextSlide = () => {
            onIndexChange((currentIndex + 1) % slides.length);
        };

        const prevSlide = () => {
            onIndexChange((currentIndex - 1 + slides.length) % slides.length);
        };

        if (!slides || slides.length === 0) {
            return <div className="w-full h-72 lg:h-full min-h-[400px] bg-gray-200 flex items-center justify-center">No media available</div>;
        }

        const currentSlide = slides[currentIndex];

        return (
            <div className="relative group w-full h-72 sm:h-96 lg:h-full lg:min-h-[500px] overflow-hidden bg-gray-100" data-name="carousel" data-file="components/Carousel.js">
                {currentSlide.type === 'video' ? (
                    <video 
                        key={currentSlide.url}
                        src={currentSlide.url} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                ) : (
                    <img 
                        key={currentSlide.url}
                        src={currentSlide.url} 
                        alt={`Slide ${currentIndex + 1}`} 
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                )}
                
                {slides.length > 1 && (
                    <>
                        <button 
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-75"
                            aria-label="Previous image"
                        >
                            <div className="icon-chevron-left"></div>
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-75"
                            aria-label="Next image"
                        >
                            <div className="icon-chevron-right"></div>
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onIndexChange(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        );
    } catch (error) {
        console.error('Carousel component error:', error);
        return null;
    }
}