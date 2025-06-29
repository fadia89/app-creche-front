import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="first_name" label="Prénom" />
      <TextField source="last_name" label="Nom" />
      <EmailField source="email" />
      <TextField source="role" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
    
  </List>
);

export default UserList;
