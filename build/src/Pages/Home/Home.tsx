
import bg from "./assets/stock-images/ushi shabu copy.jpg"

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`
          }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Ushi Shabu Shabu</h1>
          <p className="text-xl md:text-2xl mb-8">Experience authentic Korean BBQ & Shabu Shabu</p>
          <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:cursor-pointer">
            Make a Reservation
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Welcome to Ushi</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Ushi Shabu Shabu, we bring you the finest Korean BBQ and Shabu Shabu experience. 
                Our carefully selected premium meats, fresh vegetables, and authentic recipes create 
                an unforgettable dining experience that combines tradition with modern elegance.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium BBQ Set",
                description: "Selection of prime cuts perfect for Korean BBQ",
                image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3"
              },
              {
                title: "Shabu Shabu",
                description: "Fresh ingredients with our signature broths",
                image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?ixlib=rb-4.0.3"
              },
              {
                title: "Side Dishes",
                description: "Traditional Korean accompaniments",
                image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Sunday</p>
              <p>11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>123 Restaurant Street</p>
              <p>City, State 12345</p>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition duration-300">Instagram</a>
                <a href="#" className="hover:text-primary transition duration-300">Facebook</a>
                <a href="#" className="hover:text-primary transition duration-300">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
