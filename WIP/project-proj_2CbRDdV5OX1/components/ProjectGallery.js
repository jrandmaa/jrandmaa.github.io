function ProjectGallery() {
    try {
        const [activeCategory, setActiveCategory] = React.useState('All');

        const projects = [
            {
                id: 1,
                title: 'E-commerce Redesign',
                category: 'Web Design',
                date: 'March 2026',
                slides: [
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
                        description: 'A complete overhaul of a fashion e-commerce platform focusing on mobile-first experience and conversion rate optimization.'
                    },
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
                        description: 'Detailed product page showcasing clean typography and spacious layout to highlight item details.'
                    },
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
                        description: 'Streamlined checkout process that reduced cart abandonment rates by 35% across all devices.'
                    }
                ]
            },
            {
                id: 2,
                title: 'Urban Architecture',
                category: 'Photography',
                date: 'February 2026',
                slides: [
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
                        description: 'A photographic exploration of brutalist architecture in modern metropolitan areas.'
                    },
                    {
                        type: 'video',
                        url: 'https://assets.mixkit.co/videos/preview/mixkit-city-traffic-and-buildings-time-lapse-4171-large.mp4',
                        description: 'Time-lapse documentation showing the flow of movement around rigid structures during rush hour.'
                    },
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&w=800&q=80',
                        description: 'Contrast between historical facades and contemporary glass skyscrapers in the downtown district.'
                    }
                ]
            },
            {
                id: 3,
                title: 'Lumina Brand Identity',
                category: 'Branding',
                date: 'January 2026',
                slides: [
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80',
                        description: 'Complete brand identity design for a smart lighting startup, focusing on minimalist aesthetics.'
                    },
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&w=800&q=80',
                        description: 'Custom packaging design utilizing sustainable materials while maintaining a premium feel.'
                    }
                ]
            },
            {
                id: 4,
                title: 'Fintech Dashboard UI',
                category: 'Web Design',
                date: 'December 2025',
                slides: [
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                        description: 'Clean and intuitive dashboard interface for a personal finance management application.'
                    },
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                        description: 'Interactive analytics module allowing users to drill down into specific spending categories.'
                    }
                ]
            },
            {
                id: 5,
                title: 'Nature Retrospective',
                category: 'Photography',
                date: 'November 2025',
                slides: [
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
                        description: 'A collection of landscape photography capturing the transition from autumn to winter.'
                    },
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
                        description: 'Exploring symmetry and reflections in alpine lakes during early morning fog.'
                    },
                    {
                        type: 'video',
                        url: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
                        description: 'Video capturing the serene flow of a forest stream as light breaks through the canopy.'
                    }
                ]
            },
            {
                id: 6,
                title: 'Oasis Coffee Roasters',
                category: 'Branding',
                date: 'October 2025',
                slides: [
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
                        description: 'Visual identity and packaging design for an artisanal coffee roaster focusing on sustainable practices.'
                    },
                    {
                        type: 'image',
                        url: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80',
                        description: 'Merchandise and collateral material design maintaining the earthy, warm color palette.'
                    }
                ]
            }
        ];

        const categories = ['All', ...new Set(projects.map(p => p.category))];

        const filteredProjects = activeCategory === 'All' 
            ? projects 
            : projects.filter(p => p.category === activeCategory);

        const groupedProjects = filteredProjects.reduce((acc, project) => {
            if (!acc[project.category]) {
                acc[project.category] = [];
            }
            acc[project.category].push(project);
            return acc;
        }, {});

        return (
            <section id="work" className="py-20" data-name="project-gallery" data-file="components/ProjectGallery.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Works</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Explore my recent projects across different disciplines, from digital product design to brand identity.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`filter-btn ${activeCategory === category ? 'active' : 'inactive'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-24">
                        {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
                            <div key={category} className="flex flex-col gap-12">
                                <div className="border-b-2 border-gray-200/50 pb-4 flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                                    <span className="text-gray-500 font-medium">{categoryProjects.length} {categoryProjects.length === 1 ? 'Project' : 'Projects'}</span>
                                </div>
                                <div className="flex flex-col gap-16 md:gap-24">
                                    {categoryProjects.map((project, index) => (
                                        <ProjectCard key={project.id} project={project} index={index} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ProjectGallery component error:', error);
        return null;
    }
}