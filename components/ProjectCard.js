function ProjectCard({ project, index = 0 }) {
    try {
        const [currentIndex, setCurrentIndex] = React.useState(0);
        const isEven = index % 2 === 0;
        
        const currentSlide = project.slides[currentIndex] || project.slides[0];

        return (
            <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} group`} data-name="project-card" data-file="components/ProjectCard.js">
                <div className="w-full lg:w-3/5">
                    <Carousel 
                        slides={project.slides} 
                        currentIndex={currentIndex} 
                        onIndexChange={setCurrentIndex} 
                    />
                </div>
                <div className="p-8 lg:p-12 w-full lg:w-2/5 flex flex-col justify-center relative">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">{project.title}</h3>
                    
                    <div className="flex-1 min-h-[8rem] relative">
                        {typeof currentSlide.description === 'string' ? (
                            <p className="text-[var(--primary)] text-lg mb-8 leading-relaxed animate-fade-in transition-all duration-300 ease-in-out" key={currentIndex}>
                                {currentSlide.description}
                            </p>
                        ) : Array.isArray(currentSlide.description) ? (
                            <ul className="list-disc list-inside text-[var(--primary)] text-lg mb-8 leading-relaxed animate-fade-in transition-all duration-300 ease-in-out space-y-2" key={currentIndex}>
                                {currentSlide.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <div className="animate-fade-in transition-all duration-300 ease-in-out mb-8" key={currentIndex}>
                                {currentSlide.description.text && (
                                    <p className="text-[var(--primary)] text-sm mb-4 leading-relaxed">
                                        {currentSlide.description.text}
                                    </p>
                                )}
                                {currentSlide.description.list && (
                                    <ul className="list-disc list-inside text-[var(--primary)] text-sm leading-relaxed space-y-2">
                                        {currentSlide.description.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-medium text-[var(--primary)]">
                            Slide {currentIndex + 1} of {project.slides.length}
                        </span>
                        <a href="https://dcworldscollidegame.com/" className="inline-flex items-center text-base font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-all group-hover:translate-x-2 transform duration-300">
                            Check it out <div className="icon-arrow-right ml-2 text-lg"></div>
                        </a>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProjectCard component error:', error);
        return null;
    }
}