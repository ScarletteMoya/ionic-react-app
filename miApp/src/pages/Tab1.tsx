import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [num1, setNum1] = useState<number | undefined>(undefined);
  const [num2, setNum2] = useState<number | undefined>(undefined);
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {
    if (num1 !== undefined && num2 !== undefined) {
      setResultado(num1 + num2);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Número 1</IonLabel>
          <IonInput 
            type="number" 
            value={num1} 
            onIonChange={e => setNum1(Number(e.detail.value))} 
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Número 2</IonLabel>
          <IonInput 
            type="number" 
            value={num2} 
            onIonChange={e => setNum2(Number(e.detail.value))} 
          />
        </IonItem>

        <IonButton expand="block" style={{ marginTop: '20px' }} onClick={sumar}>
          Sumar
        </IonButton>

        {resultado !== null && (
          <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Resultado: {resultado}</h2>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;