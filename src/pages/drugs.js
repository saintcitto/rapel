import React from 'react';
import DrugCard from '../components/drugcard';
// Pastikan semua path gambar ini benar dan file ada
import fentanyl from '../assets/images/fentanyl.jpg';
import methamphetamine from '../assets/images/methamphetamine.jpg';
import amphetamines from '../assets/images/amphetamines.jpg';
import lsd from '../assets/images/lsd.jpg';
import ketamine from '../assets/images/ketamine.jpg';
import benzodiazepines from '../assets/images/benzodiazepines.jpg';
import flakka from '../assets/images/flakka.jpg';
import rohypnol from '../assets/images/rohypnol.jpg';
import sabu from '../assets/images/sabu.jpg';
import dextromethorphan from '../assets/images/dextromethorphan.jpg';
import barbiturates from '../assets/images/barbiturates.jpg';
import heroin from '../assets/images/heroin.jpg';

const Drugs = () => {
  const drugsData = [
    { name: 'Fentanyl', image: fentanyl },
    { name: 'Methamphetamine', image: methamphetamine },
    { name: 'Amphetamines', image: amphetamines },
    { name: 'LSD', image: lsd },
    { name: 'Ketamine', image: ketamine },
    { name: 'Benzodiazepines', image: benzodiazepines },
    { name: 'Flakka', image: flakka },
    { name: 'Rohypnol', image: rohypnol },
    { name: 'Sabu', image: sabu },
    { name: 'Dextromethorphan (DXM)', image: dextromethorphan },
    { name: 'Barbiturates', image: barbiturates },
    { name: 'Heroin', image: heroin },
  ];

  return (
    <div className="container">
      <h1 className="drugs-page-title">Daftar Obat-obatan Terlarang</h1> {/* Judul halaman Drugs */}
      <div className="drugs-grid">
        {drugsData.map((drug, index) => (
          <DrugCard key={index} name={drug.name} image={drug.image} />
        ))}
      </div>
    </div>
  );
};

export default Drugs;