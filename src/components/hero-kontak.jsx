import { Send } from "lucide-react";
import React from "react";

function HerKo() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url(/KOpi.jpg)] bg-fixed bg-cover bg-center z-0">
        <div className="w-full h-full backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-white font-bold text-center mb-8">
            Hubungi Kami
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">
                Kirim Pesan
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Masukkan alamat email Anda"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Nomor Telepon</label>
                  <input
                    type="tel"
                    placeholder="Masukkan nomor telepon Anda"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Subjek</label>
                  <input
                    type="text"
                    placeholder="Masukkan subjek pesan Anda"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Pesan</label>
                  <textarea
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full border rounded-md p-2 h-32"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#7d6049] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#967259] focus:ring-opacity-50"
                >
                  <div className="flex items-center justify-center space-x-2 gap-2">
                    <Send /> Kirim Pesan
                  </div>
                </button>
              </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">
                Informasi Kontak
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-amber-900">Alamat</h3>
                  <p>
                    Jl. Sungai Sahang, Lorok Pakjo, Kec. Ilir Bar. I,
                    Kota Palembang, Sumatera Selatan
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Email</h3>
                  <p>info@nusantarakopi.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Telepon</h3>
                  <p>+62 123 4567 890</p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">
                    Jam Operasional
                  </h3>
                  <p>Senin - Minggu: 08:00 - 22:00</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-amber-900 mb-2">
                  Lokasi Kami
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.424662501481!2d104.7285565735141!3d-2.979557039818277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75eb0503a7c3%3A0x28ea9ddd3efd54fd!2sManajemen%20informatika%20D4%20POLITEKNIK%20NEGERI%20SRIWIJAYA!5e0!3m2!1sid!2sid!4v1748528320960!5m2!1sid!2sid"
                  width="100%"
                  height="250"
                  className="rounded-lg border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerKo;
