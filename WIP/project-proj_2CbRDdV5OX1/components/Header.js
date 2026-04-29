function Header() {
    try {
        return (
            <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50" data-name="header" data-file="components/Header.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--primary)] text-white rounded-md flex items-center justify-center font-bold text-xl">
                            P
                        </div>
                        <span className="font-bold text-xl tracking-tight">Portfolio</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#work" className="text-[var(--secondary)] hover:text-[var(--primary)] font-medium">Work</a>
                        <a href="#about" className="text-[var(--secondary)] hover:text-[var(--primary)] font-medium">About</a>
                        <a href="#contact" className="text-[var(--secondary)] hover:text-[var(--primary)] font-medium">Contact</a>
                    </nav>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        return null;
    }
}