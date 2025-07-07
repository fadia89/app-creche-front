import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput, ImageInput, ImageField, useRecordContext } from 'react-admin';
const apiUrl = import.meta.env.VITE_API_URL;
const imageUrlPrefix = `${apiUrl}/uploads/`;

const CustomImageField = ({ source, label }) => {
  const record = useRecordContext();
  if (!record || !record[source]) return null;
  const imageUrl = imageUrlPrefix + record[source];
  return (
    <div>
      <label>{label}</label>
      <br />
      <img src={imageUrl} alt={label}style={{ maxWidth: '200px' }}/>
    </div>
  );
};

const ActivitieEdit = (props) => (
  <Edit title="Modifier une activité" {...props} redirect="list">
    <SimpleForm>
      <TextInput source="name" label="Nom de l'activité" />
      <TextInput source="description" label="Description" multiline />
      <DateInput source="activity_date" label="Date de l'activité" />
      <ReferenceInput source="children_id" reference="childrens" label="Enfant">
        <SelectInput optionText={record => `${record.first_name} ${record.last_name}`} />
      </ReferenceInput>
      <CustomImageField source="image" label="Image actuelle" />

      <ImageInput source="image" label="Changer la photo" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default ActivitieEdit;
