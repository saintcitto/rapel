// src/pages/aboutus.js
import React, { useEffect } from 'react'; // Hapus useRef karena tidak digunakan lagi
import '../styles/global.css'; // Jalur ini sudah benar berdasarkan struktur folder Anda

// HAPUS BARIS INI: import Navbar from '../components/navbar';
// HAPUS BARIS INI: import Footer from '../components/footer'; // Jika Anda juga punya Footer di sini


const AboutUs = () => {
    // HAPUS BARIS INI: const footerRef = useRef(null); karena tidak digunakan

    useEffect(() => {
        // Hapus IntersectionObserver jika tidak ada elemen yang diamati di AboutUs.js
        // Jika Anda TIDAK memiliki elemen dengan kelas 'show' atau yang memerlukan IntersectionObserver di HALAMAN ABOUT US INI,
        // maka seluruh blok useEffect ini bisa dihapus.

        // Jika Anda masih ingin menggunakan IntersectionObserver untuk elemen di halaman AboutUs,
        // Anda perlu menambahkan `ref` ke elemen tersebut atau menargetkannya dengan cara lain.
        // Contoh, jika Anda ingin bagian .about-cta-section muncul dengan efek 'show':

        const ctaSection = document.querySelector('.about-cta-section'); // Contoh: menargetkan elemen
        if (ctaSection) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('show');
                        } else {
                            entry.target.classList.remove('show');
                        }
                    });
                },
                { threshold: 0.1 }
            );
            observer.observe(ctaSection); // Pastikan observer digunakan
            return () => {
                observer.unobserve(ctaSection); // Pastikan unobserve juga dilakukan
            };
        }

    }, []); // Dependency array tetap kosong jika hanya dijalankan sekali setelah mount

    return (
        <div>
            {/* HAPUS BARIS INI: <Navbar /> */}
            <div className="container about-us-section">
                <h1>Yayasan Rapel Rehabilitasi Narkoba & Kesehatan Mental</h1>
                <p>
                    Di Yayasan Rapel, misi kami adalah menjadikan informasi perawatan dan layanan kesehatan berkualitas dapat diakses oleh semua orang. Kami berusaha memberdayakan individu dengan pengetahuan dan alat untuk keputusan kesehatan yang lebih baik.
                </p>

                {/* Bagian Visi & Nilai Kami - Direstrukturisasi */}
                <div className="about-card-section">
                    <div className="about-card-item vision-card">
                        <h2>Visi Kami</h2>
                        <p>"Menciptakan dunia yang lebih sehat dan terinformasi dengan menjembatani kesenjangan akses dan inovasi layanan kesehatan."</p>
                    </div>

                    <div className="about-card-item values-card">
                        <h2>Nilai-Nilai Kami</h2>
                        <ul>
                            <li>
                                <strong>Integritas:</strong> Operasi yang transparan dan etis.
                            </li>
                            <li>
                                <strong>Empati:</strong> Pendekatan yang mengutamakan pasien.
                            </li>
                            <li>
                                <strong>Inovasi:</strong> Memanfaatkan teknologi untuk perawatan yang lebih baik.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bagian Dampak & Pembeda Kami - Direstrukturisasi */}
                <div className="about-card-section">
                    <div className="about-card-item impact-card">
                        <h2>Dampak yang Kami Berikan</h2>
                        <ul>
                            <li>
                                Proses yang disederhanakan untuk informasi pengobatan.
                            </li>
                            <li>
                                Wawasan berbasis data untuk manajemen layanan kesehatan yang efektif.
                            </li>
                            <li>
                                Desain inovatif yang disesuaikan untuk pengalaman pengguna.
                            </li>
                        </ul>
                    </div>

                    <div className="about-card-item differentiator-card">
                        <h2>Mengapa Memilih Kami?</h2>
                        <ul>
                            <li>
                                Basis data obat dan perawatan yang komprehensif.
                            </li>
                            <li>
                                Desain yang mudah digunakan disesuaikan dengan kebutuhan Anda.
                            </li>
                            <li>
                                Dipercaya oleh profesional kesehatan dan pasien.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contoh: Tambahkan bagian Call to Action (CTA) */}
                <div className="about-cta-section">
                    <h3>Siap untuk Memulai Perjalanan Anda Menuju Kesehatan yang Lebih Baik?</h3>
                    <p>Hubungi kami hari ini untuk informasi lebih lanjut tentang dukungan yang bisa kami berikan.</p>
                    <a href="https://wa.me/6285767778388" className="home-button" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                    Hubungi Kami
                    </a>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;