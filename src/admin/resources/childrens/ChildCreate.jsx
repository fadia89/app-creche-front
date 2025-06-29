
import { Create, SimpleForm, TextInput, DateInput, SelectInput, ReferenceInput } from 'react-admin';

const ChildCreate = (props) => {
  return (
    <Create title="Créer un enfant" {...props} redirect="list">
      <SimpleForm>
        <TextInput source="first_name" label="Prénom" />
        <TextInput source="last_name" label="Nom" />
        <SelectInput
          source="gender"
          label="Sexe"
          choices={[
            { id: 'F', name: 'Fille' },
            { id: 'M', name: 'Garçon' },
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
        />
        <DateInput source="registration_date" label="Date d'inscription" defaultValue={new Date()} />
        <ReferenceInput source="parent_id" reference="parents" label="Parent" >
          <SelectInput optionText={record => `${record.user.first_name} ${record.user.last_name}`} />
        </ReferenceInput>

      </SimpleForm>
    </Create>
  );

};

export default ChildCreate;
