import { Edit, SimpleForm, TextInput, DateInput, NumberInput, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin';


const EventEdit = () => {
  return (
    <Edit title="Modifier un évenement" redirect="list">
      <SimpleForm>
        <TextInput source="name" label="Nom de l'évenement" />
        <TextInput source="description" label="Description" multiline />
        <TextInput source="quota" label="nombre d'inscrit" />
        <DateInput source="event_date" label="Date de l'evenement" />
        <NumberInput source="duration" label="Durée" />
        <ReferenceArrayInput source="user_ids" reference="users" label="Utilisateurs inscrits">
          <AutocompleteArrayInput optionText={record => `${record.first_name} ${record.last_name}`} />
        </ReferenceArrayInput>

      </SimpleForm>
    </Edit>
  )
};

export default EventEdit;
