import { Edit, SimpleForm, TextInput} from 'react-admin';



const ParentEdit = (props) => (
  <Edit title="Modifier un Parent" {...props} redirect="list">
    <SimpleForm>
      <TextInput source="address" label="Adresse" />
      <TextInput source="phone" label="Téléphone" />
    </SimpleForm>
  </Edit>
);

export default ParentEdit;


