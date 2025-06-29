import { List, Datagrid, TextField, DeleteButton, EmailField } from 'react-admin';

const ContactsList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nom et Prénomm" />
      <EmailField source='email' label="Adresse mail" />
      <TextField source="subject" label="Objet" />
      <TextField source="message" label="Message" />
      <DeleteButton />
    </Datagrid>
    
  </List>
);

export default ContactsList;