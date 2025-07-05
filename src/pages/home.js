import React from 'react';

const Home = () => {
  return (
    <>
      {/* Home Hero Section - Terbagi Dua Kolom (Kiri Konten, Kanan Gambar) */}
      <section className="home-hero-section">
        {/* Kolom Kiri: Konten Teks */}
        <div className="home-content-wrapper">
          <div className="home-content">
            <h1>Lindungi Diri Anda dan Orang Kesayangan Anda</h1>
            <p>
              Pelajari bahaya narkoba dan cara menghindari tekanan dari lingkungan sekitar. Dapatkan bantuan untuk mengatasi kecanduan dan dukungan dari para ahli.
            </p>
            <section className="effects-section">
                <h2>Efek obat terlarang</h2>
                <div className="effects-grid">
                    <div className="effect-item">Serangan Jantung</div>
                    <div className="effect-item">Kerusakan Ginjal</div>
                    <div className="effect-item">Overdosis</div> {/* Sesuai design */}
                    <div className="effect-item">Darah tinggi</div>
                    <div className="effect-item">Kecanduan dan Gangguan</div>
                    <div className="effect-item">Kerusakan otak</div> {/* Sesuai design */}
                    </div>
                    </section>
            <span className="animated-message">#NARKOBAMEMBUNUHMU</span>
            </div>
      </div>

        <div className="home-image-column">
        </div>
      </section>
    </>
  );
};

export default Home;