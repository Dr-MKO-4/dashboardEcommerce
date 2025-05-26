// src/components/TestComponent.tsx

import React, { useEffect } from 'react';

const TestComponent = () => {
  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then(data => console.log("Réponse du backend :", data))
      .catch(err => console.error("Erreur:", err));
  }, []); // [] assure que le code est exécuté une seule fois après le montage

  return (
    <div>
      <h1>Test API Backend</h1>
      <p>Vérifie la console pour la réponse du backend.</p>
    </div>
  );
};

export default TestComponent;
