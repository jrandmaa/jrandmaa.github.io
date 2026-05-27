function ProjectGallery() {
    try {
        const projects = [
            {
                id: "Games",
                title: 'D.C. Worlds Collide',
                date: 'May 2025',
                slides: [
                    {
                        type: 'image',
                        url: 'images/DCWC/DCWC1.jpg?auto=format&fit=crop&w=800&q=80',
                        description: {
                            text: 'My contributions included: ',
                            list: [
                                'Assisting in overhauling server architecture',
                                'Independently brought multiple major features back online using Hydra, an in-house gaming back-end',
                                'Created fixes for both server-side and client-side bugs, including later patches for the live game',
                                'Implemented handlers and unit tests for server requests',
                                'Implement new characters and items from art assets',
                                'Create bespoke editor tools to address bottlenecks in artist productivity'
                            ]
                        }
                    },
                    {
                        type: 'image',
                        url: 'images/DCWC/DCWC2.jpg?auto=format&fit=crop&w=800&q=80',
                        description: 'DC Worlds Collide is a mobile pvp role-playing game developed by Warner Bros. Games San Francisco and released in 2025. This was my third project at WB Games and my first released game. '
                    },
                    {
                        type: 'image',
                        url: 'images/DCWC/DCWC3.jpg?auto=format&fit=crop&w=800&q=80',
                        description: 'This project also gave me experience in patching a live game and creating additional content for new seasons and events.'
                    }
                ]
            },
            {
                id: "GameDev",
                title: 'Personal Projects',
                category: 'Game Dev',
                date: '',
                slides: [
                    {
                        type: 'image',
                        url: 'images/portfolio/msgrass2.PNG',
                        description: 'Personal Game Dev Projects'
                    }
                ]
            },
            {
                id: "3D",
                title: '3D Modeling',
                category: 'Digital Art',
                date: '',
                slides: [
                    {
                        type: 'image',
                        url: 'images/portfolio/MossbergWF.png?auto=format&fit=crop&w=800&q=80&',
                        description: 'Independent 3D Modeling'
                    }
                ]
            },
            {
                id: "VFX",
                title: 'VFX',
                category: 'Digital Art',
                date: '',
                slides: [
                    {
                        type: 'image',
                        url: 'images/VFX/HoudiniBG1.png?auto=format&fit=crop&w=800&q=80&',
                        description: 'Independent VFX work'
                    }
                ]
            },
            {
                id: "Art",
                title: 'Art & Photography',
                category: 'Art',
                date: 'November 2025',
                slides: [
                    {
                        type: 'image',
                        url: 'images/Photography/PhotosBg.png?auto=format&fit=crop&w=800&q=80&',
                        description: 'My Personal Art'
                    }
                ]
            }
        ];

        const featuredProject = projects[0];
        const remainingProjects = projects.slice(1);

        return (
            <section id="work" className="py-20" data-name="project-gallery" data-file="components/ProjectGallery.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col gap-16">
                        {/* Featured Project - Full Carousel Card */}
                        <div className="featured-section">
                            <h3 className="text-xl font-bold text-[var(--accent)] uppercase tracking-widest mb-6 border-b border-[var(--accent2)] pb-4">Shipped Titles</h3>
                            <ProjectCard project={featuredProject} index={0} />
                        </div>

                        {/* Remaining Projects - Row Layout */}
                        <div className="rows-section">
                            <div className="flex flex-col gap-4 md:gap-6">
                                {remainingProjects.map((project) => (
                                    <ProjectRow key={project.id} project={project} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ProjectGallery component error:', error);
        return null;
    }
}