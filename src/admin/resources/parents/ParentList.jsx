import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, FunctionField } from 'react-admin';

const ParentList = () => (
  <List resource="parents">
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="address" label="Adresse" />
      <TextField source="phone" label="Téléphone" />

      <TextField source="user.first_name" label="Prénom" />
      <TextField source="user.last_name" label="Nom" />
      <TextField source="user.email" label="Email" />

      <FunctionField
        label="Enfants"
        render={record =>
          Array.isArray(record.children) && record.children.length > 0
            ? record.children.map(child => `${child.first_name} ${child.last_name}`).join(', ')
            : 'Aucun enfant'
        }
      />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default ParentList;

