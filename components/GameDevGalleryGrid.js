function GalleryGrid() {
    try {
        const [selectedMedia, setSelectedMedia] = React.useState(null);

        // Simulated media items (images and mock WEBM/MP4 videos)
        const mediaItems = [
            {
                id: 1,
                type: 'video',
                url: 'video/WorldCreatorDemo.webm',
                thumbnail: 'video/thumbs/WorldCreator_Thumb.png?auto=format&fit=crop&w=400&q=80',
                title: 'Unity World Creator Tool',
                category: 'Game Dev',
                description: 'World creator tool for an open-world Unity game. World tiles are generated in-editor and are streamed live as the player moves throughout the game. 2025'
            },
            {
                id: 2,
                type: 'video',
                url: 'video/DayNightDemo.webm',
                thumbnail: 'video/thumbs/DayNightCycle_Thumb.png?auto=format&fit=crop&w=400&q=80',
                title: 'Unity Day Night Cycle',
                category: 'Game Dev',
                description: 'Day/night cycle for an open-world Unity game. Also shown: Procedural clouds shader. 2025'
            },
            {
                id: 3,
                type: 'image',
                url: 'images/portfolio/msgrass2.PNG',
                thumbnail: 'images/portfolio/msgrass.PNG?auto=format&fit=crop&w=400&q=80',
                title: 'GPU-Instanced grass',
                category: 'Game Dev',
                description: 'GPU-Instanced grass for an open-world game project in Unity. Batches of sprites are drawn with a single draw call, and occluded sprites are reused as needed, allowing for a seemingly infinite field of grass that runs smoothly on lower-end PCs. 2024'
            },
            {
                id: 4,
                type: 'video',
                url: 'video/EgregorePreview.webm',
                thumbnail: 'video/thumbs/EgregoreThumb.png?auto=format&fit=crop&w=400&q=80',
                title: 'Game project preview',
                category: 'Game Dev',
                description: 'In-progress independent game project. Stay tuned!'
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