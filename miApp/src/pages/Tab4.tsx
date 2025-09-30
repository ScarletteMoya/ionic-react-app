import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
        <h2>Mi experiencia haciendo la tarea</h2>
        <iframe 
          width="320" 
          height="240" 
          src="https://www.youtube.com/embed/TU_VIDEO_ID" 
          title="Experiencia Personal" 
          frameBorder="0" 
          allowFullScreen
          style={{ marginTop: '20px' }}
        ></iframe>
        <p style={{ marginTop: '10px' }}>
          En este video explico cómo realicé la tarea y mi experiencia aprendiendo Ionic y React.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;