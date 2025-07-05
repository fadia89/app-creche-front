
import {Create,SimpleForm,TextInput,ReferenceInput,SelectInput,} from 'react-admin';

const ParentCreate = (props) => (
  <Create title="Ajouter un Parent" {...props} redirect="list">
    <SimpleForm>
      <TextInput source="address" label="Adresse" />
      <TextInput source="phone" label="Téléphone" />

      <ReferenceInput
        source="user_id"
        reference="users"
        label="Utilisateur"
        
      >
        <SelectInput 
          optionText={record => `${record.first_name} ${record.last_name}`} 
          
        />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default ParentCreate;
