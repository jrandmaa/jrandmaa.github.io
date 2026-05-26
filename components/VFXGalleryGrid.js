function GalleryGrid() {
    try {
        const [selectedMedia, setSelectedMedia] = React.useState(null);

        // Simulated media items (images and mock WEBM/MP4 videos)
        const mediaItems = [
            {
                id: 1,
                type: 'video',
                url: 'video/ParticlesDemo.webm',
                thumbnail: 'images/VFX/HoudiniBG1.png?auto=format&fit=crop&w=400&q=80',
                title: 'Houdini Particles Experiment',
                category: 'VFX',
                description: 'Experimenting with Houdini displaying 1.7 million particles, 2026'
            },
            {
                id: 2,
                type: 'image',
                url: 'images/VFX/HoudiniBG2.png',
                thumbnail: 'images/VFX/HoudiniBG2.png?auto=format&fit=crop&w=400&q=80',
                title: 'Houdini Particles Experiment',
                category: 'VFX',
                description: 'Experimenting with Houdini displaying 1.7 million particles, 2026'

            }
        ];

        return (
            <div data-name="gallery-grid" data-file="components/GalleryGrid.js">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mediaItems.map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => setSelectedMedia(item)}
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100"
                        >
                            <img 
                                src={item.thumbnail} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-1">
                                    {item.category}
                                </span>
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            </div>

                            {/* Video Indicator */}
                            {item.type === 'video' && (
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                    <div className="icon-circle-play text-2xl"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {selectedMedia && (
                    <MediaModal 
                        media={selectedMedia} 
                        onClose={() => setSelectedMedia(null)} 
                    />
                )}
            </div>
        );
    } catch (error) {
        console.error('GalleryGrid component error:', error);
        return null;
    }
}