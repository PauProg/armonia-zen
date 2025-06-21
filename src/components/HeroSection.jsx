

export const HeroSection = () => {
    return (
        <section id="hero" className="heroSection flex flex-col items-center justify-center min-h-screen w-full text-white">
            <div className="w-full h-screen flex flex-col gap-5 items-center justify-center bg-black/30 backdrop-blur-sm">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center"> Armonía Zen </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-light text-center"> Encuentra tu equilibrio interior en un oasis de tranquilidad y bienestar </p>
                <a href="#booking" className="bg-[#4a6149] hover:bg-[#3d4f3c] rounded-full px-5 py-2 hover:scale-107 transition-all duration-300 text-lg"> Reserva tu sesión </a>
            </div>
        </section>
    )
}