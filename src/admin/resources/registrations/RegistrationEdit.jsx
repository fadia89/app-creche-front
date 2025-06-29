import { Edit, SimpleForm, SelectInput, DateInput } from 'react-admin';

const statusChoices = [
  { id: 'pending', name: 'pending' },
  { id: 'accepted', name: 'accepted' },
  { id: 'rejected', name: 'rejected' },
];

const RegistrationEdit = () => {
  return (
    <Edit title="Modifier un évenement" redirect="list">
      <SimpleForm >
        <SelectInput
          source="status"
          label="Status d'inscription"
          choices={statusChoices}
          format={v => v?.toLowerCase?.()} //Converts "Pending" → "pending"

        />

        <DateInput source="registration_date" label="Date d'inscription" defaultValue={new Date()} />
      </SimpleForm>
    </Edit>
  );
};

export default RegistrationEdit;
