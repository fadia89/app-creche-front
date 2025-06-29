import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, FunctionField } from 'react-admin';

const ActivitieList = () => (
  <List resource="activities">
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="nom" />
      <TextField source="description" label="Description" />
      <DateField source="activity_date" label="Date de l'activité" />
      <TextField source="image" label="image de l'activité" />
      <FunctionField
        label="Enfant"
        render={record => {
          return record.child
            ? `${record.child.first_name} ${record.child.last_name}`
            : 'Aucun enfant';
        }}
      />
      <FunctionField
        label="Événement"
        render={record => {
          return record.event
            ? record.event.name
            : 'Aucun événement';
        }}
      />
      <EditButton />
      <DeleteButton />
    </Datagrid>

  </List>
);

export default ActivitieList;