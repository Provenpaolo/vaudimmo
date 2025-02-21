import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [propertyValue, setPropertyValue] = useState(null);

  const estimateProperty = () => {
    setPropertyValue((Math.random() * 500000 + 200000).toFixed(0));
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold text-center mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}>
        Trouvez ou Vendez Votre Maison dans le Canton de Vaud
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section Vendeurs */}
        <div className="border p-6 text-center rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Vous voulez vendre votre maison ?</h2>
          <p className="text-gray-600 mb-4">Recevez une estimation gratuite et prenez rendez-vous avec un expert.</p>
          <input type="text" placeholder="Entrez l'emplacement de votre maison" className="border p-2 w-full mb-4 rounded" />
          <button onClick={estimateProperty} className="bg-blue-500 text-white px-4 py-2 rounded">Calculer l'estimation</button>
          {propertyValue && <p className="mt-4 text-xl font-bold">Valeur estimée : {propertyValue} CHF</p>}
        </div>

        {/* Section Acheteurs */}
        <div className="border p-6 text-center rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Vous cherchez une maison ?</h2>
          <p className="text-gray-600 mb-4">Parcourez les annonces disponibles et réservez une visite avec nous.</p>
          <input type="text" placeholder="Recherchez par ville ou code postal" className="border p-2 w-full mb-4 rounded" />
          <button className="bg-green-500 text-white px-4 py-2 rounded">Trouver des biens</button>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg text-gray-700">Nous offrons un accompagnement complet pour vendre ou acheter un bien immobilier : estimation immobilière, conseil hypothécaire et gestion notariale.</p>
      </div>
    </div>
  );
}
