import {Edit,SimpleForm,TextInput,SelectInput,required,PasswordInput,} from 'react-admin';

const roles = [
  { id: 'admin', name: 'Admin' },
  { id: 'parent', name: 'Parent' },
];

const UserEdit = () => (
  <Edit title="Modifier un utilisateur" redirect="list">
    <SimpleForm>
      <TextInput source="first_name" label="Prénom"  />
      <TextInput source="last_name" label="Nom" />
      <TextInput source="email" label="Email" validate={[required(),]} />
      <PasswordInput source="password" label="Mot de passe (laisser vide si inchangé)" />
      <SelectInput source="role" label="Rôle" choices={roles} validate={required()} />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
