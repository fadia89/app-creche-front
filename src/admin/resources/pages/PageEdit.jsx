import { Edit, SimpleForm, TextInput } from 'react-admin';

const PageEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="slug" disabled />
      <TextInput source="content" multiline fullWidth />
    </SimpleForm>
  </Edit>
);
export default PageEdit;
