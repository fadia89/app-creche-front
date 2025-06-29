import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin';

const UserCreate = () => (
  <Create title="Ajouter un utilisateur" redirect="list">
    <SimpleForm>
      <TextInput source="first_name" label="Prénom" />
      <TextInput source="last_name" label="Nom" />
      <TextInput source="email" label="Email" />
      <TextInput source="password" label="Mot de passe" type="password" />
      <SelectInput
        source="role"
        label="Rôle"
        choices={[
          { id: 'admin', name: 'Admin' },
          { id: 'parent', name: 'Parent' },
        ]}
        defaultValue="parent"
      />

    </SimpleForm>
  </Create>
);

export default UserCreate;
