export default function CarRentalLanding() {
  const cars = [
    {
      name: "BMW M4",
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      desc: "Luxury • Automatic • Sport",
    },
    {
      name: "Tesla Model 3",
      img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
      desc: "Electric • Smart • Fast",
    },
    {
      name: "Audi A6",
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      desc: "Premium • Comfort • Sedan",
    },
  ];

  return (
    <div className="bg-[#0b0f19] text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-24 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">CarRent</h1>

        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#">Home</a>
          <a href="#cars">Cars</a>
          <a href="#how">How it works</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-blue-600 px-4 py-2 rounded">
          Book Now
        </button>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-24 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Rent Your Dream Car Easily & Fast
          </h1>

          <p className="text-gray-400 mt-4">
            Find the best cars for your trip with affordable prices and instant booking.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 px-6 py-3 rounded">
              Get Started
            </button>
            <button className="border px-6 py-3 rounded">
              View Cars
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="rounded-xl overflow-hidden h-80">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
            className="w-full h-full object-cover"
            alt="car hero"
          />
        </div>

      </section>

      {/* SEARCH BAR */}
      <section className="px-6 md:px-24 -mt-10">
        <div className="bg-[#111827] p-6 rounded-xl grid md:grid-cols-4 gap-4">

          <input placeholder="Pick-up location" className="p-3 rounded bg-[#0b0f19]" />
          <input placeholder="Drop-off location" className="p-3 rounded bg-[#0b0f19]" />
          <input type="date" className="p-3 rounded bg-[#0b0f19]" />
          <button className="bg-blue-600 rounded">
            Search Cars
          </button>

        </div>
      </section>

      {/* CARS */}
      <section id="cars" className="px-6 md:px-24 py-20">
        <h2 className="text-3xl font-bold mb-8">Popular Cars</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {cars.map((car) => (
            <div key={car.name} className="bg-[#111827] p-5 rounded-xl hover:scale-[1.02] transition">

              <div className="h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src={car.img}
                  className="w-full h-full object-cover"
                  alt={car.name}
                />
              </div>

              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-400 text-sm">{car.desc}</p>

              <button className="mt-4 w-full bg-blue-600 py-2 rounded">
                Rent Now
              </button>

            </div>
          ))}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="px-6 md:px-24 py-20">
        <h2 className="text-3xl font-bold mb-8">How it works</h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">

          <div className="bg-[#111827] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">1. Choose Car</h3>
            Browse available cars and select your favorite.
          </div>

          <div className="bg-[#111827] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">2. Book Online</h3>
            Reserve your car instantly in few clicks.
          </div>

          <div className="bg-[#111827] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">3. Enjoy Ride</h3>
            Pick up your car and enjoy your trip.
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-24 py-20 text-center">
        <h2 className="text-4xl font-bold">Ready to start your journey?</h2>
        <p className="text-gray-400 mt-3">
          Book your car in minutes and travel stress-free.
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded">
          Book Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-24 py-10 border-t border-gray-800 text-gray-400">
        © 2026 CarRent. All rights reserved.
      </footer>

    </div>
  );
}
