function GalleryGrid() {
    try {
        const [selectedMedia, setSelectedMedia] = React.useState(null);

        // Simulated media items (images and mock WEBM/MP4 videos)
        const mediaItems = [
            {
                id: 1,
                type: 'image',
                url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80',
                title: 'Brand Packaging',
                category: 'Branding',
                description: 'A comprehensive branding and packaging design for a modern organic skincare line. The design focuses on sustainable materials and minimalist typography to convey purity and quality.'
            },
            {
                id: 2,
                type: 'video',
                url: 'https://www.w3schools.com/html/mov_bbb.mp4',
                thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=400&q=80',
                title: 'Campaign Motion Graphic',
                category: 'Motion Design',
                description: 'A 15-second promotional video created for social media campaigns. This animation highlights key product features using dynamic typography and fluid transitions to maintain viewer engagement.'
            },
            {
                id: 3,
                type: 'image',
                url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80',
                title: 'Architecture Study',
                category: 'Photography',
                description: 'An exploration of modern architectural forms focusing on the interplay between concrete structures and natural light during the golden hour.'
            },
            {
                id: 4,
                type: 'image',
                url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
                title: 'Dashboard Interface',
                category: 'UI/UX',
                description: 'A dark-mode analytics dashboard designed for financial traders. The interface prioritizes data legibility and quick access to critical trading metrics.'
            },
            {
                id: 5,
                type: 'video',
                url: 'https://www.w3schools.com/html/mov_bbb.mp4',
                thumbnail: 'https://images.unsplash.com/photo-1516280440502-869269d0dc6a?auto=format&fit=crop&w=400&q=80',
                title: 'App Interaction Flow',
                category: 'Prototyping',
                description: 'A high-fidelity prototype recording demonstrating the onboarding flow and micro-interactions for a new fitness tracking application.'
            },
            {
                id: 6,
                type: 'image',
                url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&q=80',
                title: 'Mountain Retreat',
                category: 'Photography',
                description: 'Landscape photography capturing the serene atmosphere of a remote mountain cabin during early winter snowfall.'
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