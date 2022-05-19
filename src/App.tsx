import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, search, heart, settings } from 'ionicons/icons';

import Login from './pages/Login';
import Register from './pages/Register';
import DetailBook from './pages/DetailBook';
import Booklist from './pages/Booklist';
import UserInfo from './pages/UserInfo';
import Changepassword from './pages/Changepassword';
import Tab1 from './pages/HOME';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Setting from './pages/Tab4';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();



const App: React.FC = () => (
  <IonApp  >
    <IonReactRouter >
      <IonTabs >
        <IonRouterOutlet >
          <Route exact path="/Login"  >
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>

          <Route path="/DetailBook/:id" component={DetailBook}/>
          <Route path="/Booklist/:name" component={Booklist}/>
          {/* ---------Home---------- */}
          <Route exact path="/HOME" >
            <Tab1 />
          </Route>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
       
          {/* ---------Tab2---------- */}
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          {/* ---------Tab3---------- */}
          <Route path="/tab3">
            <Tab3 />
          </Route>
         
          {/* ---------setting---------- */}
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/setting/UserInfo"  >
            <UserInfo />
          </Route>
          <Route path="/setting/Changepassword"  >
            <Changepassword />
          </Route>
          {/* ---------book---------- */}
        
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color='dark'>
          <IonTabButton tab="HOME" href="/HOME">
            <IonIcon icon={home} />
            <IonLabel>หน้าหลัก</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={search} />
            <IonLabel>ค้นหา</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={heart} />
            <IonLabel>ชั้นหนังสือ</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/setting">
            <IonIcon icon={settings} />
            <IonLabel>ตั้งค่า</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
