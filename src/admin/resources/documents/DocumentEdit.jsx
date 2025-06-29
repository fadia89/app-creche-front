import {Edit,SimpleForm,TextInput,DateInput,FileInput,FileField,FunctionField,} from 'react-admin';

const DocumentEdit = () => (
  <Edit title="Modifier le document">
    <SimpleForm>
      <TextInput source="type" />
      <TextInput source="file_name" />
      <TextInput source="file_path" />
      <DateInput source="date_added" />
      <TextInput source="uploaded_by" />

      
      <FileInput source="file" label="Fichier" accept="*/*">
        <FileField source="src" title="title" />
      </FileInput>

     
      <FunctionField
        label="Parent"
        render={record => {
          const user = record?.parent?.user;
          return user ? `${user.first_name} ${user.last_name}` : 'Non renseigné';
        }}
      />
    </SimpleForm>
  </Edit>
);

export default DocumentEdit;
