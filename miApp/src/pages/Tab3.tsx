import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [numero, setNumero] = useState<number | undefined>(undefined);
  const [tabla, setTabla] = useState<number[]>([]);

  const generarTabla = () => {
    if(numero !== undefined){
      const resultado = [];
      for(let i = 1; i <= 13; i++){
        resultado.push(numero * i);
      }
      setTabla(resultado);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Número</IonLabel>
          <IonInput 
            type="number" 
            value={numero} 
            onIonChange={e => setNumero(Number(e.detail.value))} 
          />
        </IonItem>

        <IonButton expand="block" style={{ marginTop: '20px' }} onClick={generarTabla}>
          Generar Tabla
        </IonButton>

        {tabla.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            {tabla.map((valor, index) => (
              <p key={index}>{numero} x {index+1} = {valor}</p>
            ))}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;