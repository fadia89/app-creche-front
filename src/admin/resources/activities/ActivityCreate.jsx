import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField,
} from 'react-admin';

const ActivityCreate = props => (
  <Create {...props} redirect="list">
    <SimpleForm>
      <TextInput source="name" label="Nom de l'activité" />

      <TextInput source="description" label="Description" multiline />

      <DateInput source="activity_date" label="Date de l'activité" />

      {/* Référence à l'enfant */}
      <ReferenceInput
        source="children_id"
        reference="childrens"
        label="Enfant"
        parse={value => (value ? parseInt(value, 10) : null)}
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>

      {/* Référence à l'événement, optionnel */}
      <ReferenceInput
        source="event_id"
        reference="events"
        label="Événement (facultatif)"
        allowEmpty
        parse={value => (value ? parseInt(value, 10) : null)}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>

      {/* Upload d'image */}
      <ImageInput source="image" label="Photo" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default ActivityCreate;
