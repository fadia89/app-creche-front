import { List, Datagrid, TextField, DateField, EditButton, FunctionField, DeleteButton } from 'react-admin';

const ChildList = () => (
  <List ressource="childrens">
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="first_name" label="Prénom" />
      <TextField source="last_name" label="Nom" />
      <TextField source="gender" label="Sexe" />
      <TextField source="band" label="Groupe" />
      <DateField source="birth_date" label="Né(e) le" />
      <DateField source="registration_date" label="Inscription" />
      <TextField source="parent.address" label="Adresse Parent" />
      <TextField source="parent.phone" label="Téléphone Parent" />
      <FunctionField
        label="Parent"
        render={record => {
          if (!record.parent || !record.parent.user) return 'Non renseigné';
          return `${record.parent.user.first_name} ${record.parent.user.last_name}`;
        }}
      />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default ChildList;
