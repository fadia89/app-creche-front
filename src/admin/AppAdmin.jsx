
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import Dashboard from './Dashboard';
import ChildList from './resources/childrens/ChildList.jsx';
import ChildEdit from './resources/childrens/ChildEdit.jsx';
import ChildCreate from './resources/childrens/ChildCreate.jsx';
import ActivityCreate from './resources/activities/ActivityCreate.jsx';
import ActivityEdit from './resources/activities/ActivityEdit.jsx';
import ActivitieList from './resources/activities/ActivitesList.jsx';
import ParentList from './resources/parents/ParentList.jsx';
import ParentCreate from './resources/parents/ParentCreate.jsx';
import UserList from './resources/users/UserList.jsx';
import UserCreate from './resources/users/UserCreate.jsx';
import UserEdit from './resources/users/UserEdit.jsx';
import EventList from './resources/events/EventList.jsx';
import EventEdit from './resources/events/EventEdit.jsx';
import EventCreate from './resources/events/EventCreate.jsx';
import DocumentList from './resources/documents/DocumentList.jsx';
import DocumentEdit from './resources/documents/DocumentEdit.jsx';
import DocumentCreate from './resources/documents/DocumentCreate.jsx';
import ParentEdit from './resources/parents/ParentEdit.jsx';
import ContactList from './resources/contact/ContactList.jsx';
import RegistrationList from './resources/registrations/RegistrationList.jsx';
import RegistrationEdit from './resources/registrations/RegistrationEdit.jsx';
import RegistrationCreate from './resources/registrations/RegistrationCreate.jsx';
import PageList from './resources/pages/PageList.jsx';
import PageEdit from './resources/pages/PageEdit.jsx';


const AppAdmin = () => (
  <Admin
    basename="/admin"
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}

  >

    <Resource name="childrens"
      list={ChildList}
      edit={ChildEdit}
      create={ChildCreate}

    />


    <Resource name="activities"
      list={ActivitieList}
      edit={ActivityEdit}
      create={ActivityCreate}

    />

    <Resource name="parents"
      list={ParentList}
      edit={ParentEdit}
      create={ParentCreate}
    />

    <Resource name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />

    <Resource name="events"
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
    />

    <Resource name="documents"
      list={DocumentList}
      edit={DocumentEdit}
      create={DocumentCreate}
    />

    <Resource name="admins" />

    <Resource name="contacts"
      list={ContactList}
    />

    <Resource name="registrations"
      list={RegistrationList}
      edit={RegistrationEdit}
      create={RegistrationCreate}
    />

    <Resource name="pages"
      list={PageList}
      edit={PageEdit}
      
    />


  </Admin>
);

export default AppAdmin;


