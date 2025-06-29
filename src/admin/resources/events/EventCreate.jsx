import { Create, SimpleForm, TextInput, DateInput, NumberInput, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin';

const EventCreate = (props) => (
  <Create {...props} redirect="list">
    <SimpleForm>
      <TextInput source="name" label="Nom" />
      <TextInput source="description" label="Description" multiline />
      <DateInput source="event_date" label="Date de l'événement" />
      <NumberInput source="quota" label="Quota" />
      <TextInput source="location" label="Lieu" />
      <NumberInput source="duration" label="Durée (heures)" />
      <ReferenceArrayInput source="user_ids" reference="users">
        <AutocompleteArrayInput optionText={record => `${record.first_name} ${record.last_name}`} />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);

export default EventCreate;
