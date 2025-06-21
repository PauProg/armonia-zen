
const imagesSrc = [
    {
        src: '/gallery/1.webp',
        alt: 'Imagen 1'
    },
    {
        src: '/gallery/2.webp',
        alt: 'Imagen 2'
    },
    {
        src: '/gallery/3.webp',
        alt: 'Imagen 3'
    },
    {
        src: '/gallery/4.webp',
        alt: 'Imagen 4'
    },
    {
        src: '/gallery/5.webp',
        alt: 'Imagen 5'
    },
    {
        src: '/gallery/6.webp',
        alt: 'Imagen 6'
    },
    {
        src: '/gallery/7.webp',
        alt: 'Imagen 7'
    },
    {
        src: '/gallery/8.webp',
        alt: 'Imagen 8'
    }
]

export const GallerySection = () => {
    return (
        <section id="gallery" className="bg-[#fafaf9] section">
            <div className="flex items-center justify-center flex-col gap-5 w-6xl text-center">
                <h2 className="sectionh2 mb-9"> Nuestro Espacio </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl">
                    {
                        imagesSrc.map((image, key) => (
                            <div className="overflow-hidden rounded-lg" key={key}>
                                <img src={image.src} alt={image.alt} className="hover:scale-105 transition-all duration-500" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}