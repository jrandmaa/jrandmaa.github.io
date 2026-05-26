function Footer() {
    try {
        const currentYear = 2026;
        return (
            <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 py-12 mt-20" data-name="footer" data-file="components/Footer.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400">
                        <a href="https://github.com/jrandmaa" className="hover:text-[var(--primary)] transition-colors"><div className="icon-github text-xl"></div></a>
                        <a href="https://linkedin.com/in/jack-randmaa-4a79bb144/" className="hover:text-[var(--primary)] transition-colors"><div className="icon-linkedin text-xl"></div></a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-sm text-gray-500">
                    jrandmaa@gmail.com
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}