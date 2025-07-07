import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, FileInput, FileField, required } from 'react-admin';

const DocumentCreate = (props) => (
  <Create title="Créer un document" {...props} redirect="list">
    <SimpleForm>
      <TextInput source="type" label="Type" validate={required()} />

      <ReferenceInput
        source="uploaded_by"
        reference="admins"
        label="Ajouté par"
        filter={{ role: 'admin' }}
        validate={required()}
      >
        <SelectInput optionText={record => `${record.first_name} ${record.last_name}`} />
      </ReferenceInput>

      <ReferenceInput
        source="parent_id"
        reference="parents"
        label="Parent"
        validate={required()}
      >
        <SelectInput optionText={record => `${record.user.first_name} ${record.user.last_name}`} />
      </ReferenceInput>

      <FileInput source="file" label="Fichier" accept="application/pdf,image/*" validate={required()}>
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export default DocumentCreate;
