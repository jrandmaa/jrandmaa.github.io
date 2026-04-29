function AnimatedTitle() {
    try {
        const titles = ["Creative Developer", "UI/UX Designer", "Frontend Engineer", "Digital Artist"];
        const [currentIndex, setCurrentIndex] = React.useState(0);

        React.useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % titles.length);
            }, 5000);
            return () => clearInterval(interval);
        }, [titles.length]);

        return (
            <span 
                className="relative inline-block overflow-hidden align-bottom w-[250px] md:w-[320px] lg:w-[400px] h-[1.2em] text-[var(--accent)]" 
                data-name="animated-title" 
                data-file="components/AnimatedTitle.js"
            >
                {titles.map((title, index) => {
                    let positionClass = 'translate-x-full opacity-0'; // Default is entering from right
                    
                    if (index === currentIndex) {
                        positionClass = 'translate-x-0 opacity-100'; // Current active
                    } else if (index === (currentIndex - 1 + titles.length) % titles.length) {
                        positionClass = '-translate-x-full opacity-0'; // Previous exited to left
                    }

                    return (
                        <span
                            key={index}
                            className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${positionClass}`}
                        >
                            {title}
                        </span>
                    );
                })}
            </span>
        );
    } catch (error) {
        console.error('AnimatedTitle component error:', error);
        return <span className="text-[var(--accent)]">Creative Developer</span>;
    }
}