import { List, Datagrid, TextField, DateField, FunctionField, EditButton,DeleteButton } from 'react-admin';

const DocumentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="type" label="Type" />
      <TextField source="file_name" label="Nom du fichier" />
      <TextField source="file_path" label="Chemin du fichier" />
      <DateField source="date_added" label="Date d'ajout" />
      <TextField source="uploaded_by" label="Téléversé par" />
      
      <FunctionField
        label="Parent"
        render={record => { 
          //console.log(record)
          if (!record.parent || !record.parent.user) return 'Non renseigné';
          return `${record.parent.user.first_name} ${record.parent.user.last_name}`;
        }}
      />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default DocumentList;
