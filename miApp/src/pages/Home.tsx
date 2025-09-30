import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <img src="/mifoto.jpeg" alt="Mi Foto 2x2" className="foto-home" />
          <IonCardHeader>
            <IonCardTitle className="nombre-home">Scarlette Moya - 2023 0274</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Correo: 20230274@itla.edu.do
            <br />
            <span className="bienvenida">
              Bienvenido a mi aplicación creada con Ionic y React.
            </span>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;


