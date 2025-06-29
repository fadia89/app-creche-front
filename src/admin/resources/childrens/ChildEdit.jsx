import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';

const ChildEdit = (props) => (
  <Edit title="modifier un enfant" {...props} redirect="list">
    <SimpleForm>
      <TextInput source="first_name" label="Prénom" />
      <TextInput source="last_name" label="Nom" />
      <SelectInput
        source="gender"
        label="Sexe"
        choices={[
          { id: 'M', name: 'Masculin' },
          { id: 'F', name: 'Féminin' },
          { id: 'O', name: 'Autre' },
        ]}
      />
      <DateInput source="birth_date" label="Date de naissance" />
      <SelectInput
        source="band"
        label="Groupe"
        choices={[
          { id: 'bébé', name: 'Bébé' },
          { id: 'moyen', name: 'Moyen' },
          { id: 'grand', name: 'Grand' },
        ]}
        parse={v => v.toLowerCase()}
      />

      <ReferenceInput source="parent_id" reference="parents" label="Parent">
        <SelectInput optionText="phone" />
      </ReferenceInput>
      <DateInput source="registration_date" label="Date d'inscription" />
    </SimpleForm>
  </Edit>
);

export default ChildEdit;

