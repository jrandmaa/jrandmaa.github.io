function Header() {
    try {
        return (
            <header className="bg-white/55 backdrop-blur-md border-b border-gray-200/25 sticky top-0 z-50" data-name="header" data-file="components/Header.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <a href="https://jrandmaa.github.io"><span className="font-bold text-xl tracking-tight">Jack Randmaa</span></a>
                    </div>
                    
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        return null;
    }
}