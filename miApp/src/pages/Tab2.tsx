import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [numero, setNumero] = useState<number | undefined>(undefined);
  const [resultado, setResultado] = useState<string>('');

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const especiales = ["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"];
  const decenas = ["", "", "veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
  const centenas = ["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];

  const numeroALetras = (num: number): string => {
    if(num === 1000) return "mil";

    let letra = "";

    let c = Math.floor(num / 100);
    let d = Math.floor((num % 100) / 10);
    let u = num % 10;

    if(c > 0){
      if(c === 1 && d === 0 && u === 0) letra += "cien";
      else letra += centenas[c] + " ";
    }

    if(d === 1){
      letra += especiales[u];
    } else if(d === 2 && u !== 0){
      letra += "veinti" + unidades[u];
    } else {
      if(d > 2) letra += decenas[d] + (u > 0 ? " y " : "");
      if(u > 0) letra += unidades[u];
    }

    return letra.trim();
  };

  const traducir = () => {
    if(numero !== undefined && numero >= 1 && numero <= 1000){
      setResultado(numeroALetras(numero));
    } else {
      setResultado("Número fuera de rango (1-1000)");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traductor de Números a Letras</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Número (1-1000)</IonLabel>
          <IonInput type="number" value={numero} onIonChange={e => setNumero(Number(e.detail.value))} />
        </IonItem>

        <IonButton expand="block" style={{ marginTop: '20px' }} onClick={traducir}>
          Traducir
        </IonButton>

        {resultado && (
          <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{resultado}</h2>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
