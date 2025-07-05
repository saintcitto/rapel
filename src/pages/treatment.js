import React from 'react';
import TreatmentCard from '../components/treatmentcard';

const Treatment = () => {
  return (
    <div className="container">
      <section className="treatment-section">
        <h1>Informasi Pengobatan</h1>

        <div className="treatment-category">
          <h2>Obat-obatan Dasar: Dikelompokkan berdasarkan kategori (misalnya, Manajemen Nyeri, Antibiotik).</h2> 
          <div className="treatment-details-grid">
            <TreatmentCard
              title="Obat Umum: Ibuprofen, Paracetamol, Morfin."
              purpose="Mengelola nyeri dan mengurangi peradangan."
              conditions="Migrain, Radang Sendi (Artritis), Nyeri Otot."
            />
            <TreatmentCard
              title="Obat Umum: Penisilin: Amoksisilin, Penisilin G."
              purpose="Melawan infeksi bakteri dengan membunuh bakteri atau menghambat pertumbuhan."
              conditions="Infeksi Saluran Pernapasan (Pneumonia, Bronkitis)."
            />
            <TreatmentCard
              title="Obat Umum: SSRI (Selective Serotonin Reuptake Inhibitors): Fluoxetine, Sertraline, Citalopram."
              purpose="Mengelola depresi dengan menyeimbangkan zat kimia otak."
              conditions="Depresi, Gangguan Kecemasan Umum (GKU), PTSD, OCD."
            />
          </div>
        </div>

        <div className="treatment-category">
          <h2>Perawatan Kesehatan Mental: Menyoroti kondisi umum dan obat yang digunakan (misalnya, Kecemasan – SSRI seperti Fluoxetine).</h2> {/* Terjemahan: Mental Health Treatments: Highlight common conditions and drugs used (e.g., Anxiety – SSRIs like Fluoxetine). */}
          <div className="treatment-details-grid">
            <TreatmentCard
              title="Kondisi: Kecemasan"
              therapies="CBT (Terapi Perilaku Kognitif)."
              goal="Membantu pengguna mengelola stres dan mencapai keseimbangan emosional."
            />
            <TreatmentCard
              title="Kondisi: Insomnia."
              therapies="Terapi Perilaku Kognitif untuk Insomnia (CBT-I)."
              goal="Membangun pola tidur yang sehat dan meningkatkan kualitas tidur secara keseluruhan."
            />
            <TreatmentCard
              title="Kondisi: Depresi."
              therapies="Terapi Interpersonal (IPT)."
              goal="Meningkatkan suasana hati, mengembalikan tingkat energi, dan mencegah kekambuhan episode depresi."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatment;