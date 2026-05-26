function ProjectRow({ project }) {
    try {
        const bgUrl = project.slides[0]?.url || '';
        
        return (
            <a 
                href={`${project.id}.html`} 
                className="group relative flex w-full h-35 md:h-36 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50" 
                data-name="project-row" 
                data-file="components/ProjectRow.js"
            >
                {/* Background Image with Hover Scale */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url(${bgUrl})` }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 px-6 md:px-10 flex items-center justify-between text-white">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--accent)] bg-black/30 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                            {project.category}
                        </span>
                    </div>
                    
                    {/* Right Arrow Button */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[var(--primary)] transition-all duration-300 shrink-0 border border-white/30 group-hover:scale-110 group-hover:border-white">
                        <div className="icon-arrow-right text-lg md:text-xl"></div>
                    </div>
                </div>
            </a>
        );
    } catch (error) {
        console.error('ProjectRow component error:', error);
        return null;
    }
}