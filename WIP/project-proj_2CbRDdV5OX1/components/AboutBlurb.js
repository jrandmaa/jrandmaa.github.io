function AboutBlurb() {
    try {
        return (
            <section id="about" className="py-24 bg-white/60 backdrop-blur-md border-t border-gray-200/50" data-name="about-blurb" data-file="components/AboutBlurb.js">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">A bit about me</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                        I'm a passionate creative developer with a keen eye for design and a love for building intuitive, engaging digital experiences. When I'm not coding or designing, you can find me exploring the outdoors with my camera or experimenting with new web technologies. I believe in writing clean, accessible code and designing interfaces that just make sense.
                    </p>
                    <a href="#contact" className="btn btn-outline border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3 text-lg font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors duration-300">
                        Let's Chat
                    </a>
                </div>
            </section>
        );
    } catch (error) {
        console.error('AboutBlurb component error:', error);
        return null;
    }
}