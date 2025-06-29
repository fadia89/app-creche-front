import { Create, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput, FileInput, FileField, required } from 'react-admin';

const DocumentCreate = (props) => (
  <Create title="Créer un document" {...props} redirect="list">
    <SimpleForm>
      <TextInput source="type" label="Type" />
      <TextInput source="file_name" label="Nom du fichier" />
      <DateInput source="date_added" label="Date d'ajout" defaultValue={new Date()} />

      <ReferenceInput
        source="uploaded_by"
        reference="admins"
        label="Ajouté par"
        filter={{ role: 'admin' }}
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
          validate={required()}
        />
      </ReferenceInput>
      <ReferenceInput source="parent_id" reference="parents" label="Parent" >
        <SelectInput optionText={record => `${record.user.first_name} ${record.user.last_name}`} />
      </ReferenceInput>


      <FileInput source="file" label="Fichier" accept="*/*" >
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export default DocumentCreate;

