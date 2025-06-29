import { Create, SimpleForm, DateInput, SelectInput, ReferenceInput } from 'react-admin';

const RegistrationCreate = () => (
    <Create title="Création d'inscription" redirect="list">
        <SimpleForm>
            <DateInput source="registration_date" label="Date d'inscription" defaultValue={new Date()} />
            <SelectInput
                source="status"
                label="Statut"
                choices={[
                    { id: 'pending', name: 'En attente' },
                    { id: 'accepted', name: 'Acceptée' },
                    { id: 'rejected', name: 'Refusée' }
                ]}
            />
     <ReferenceInput source="parent_id" reference="parents" label="Parent" >
          <SelectInput optionText={record => `${record.user.first_name} ${record.user.last_name}`} />
        </ReferenceInput>


            <ReferenceInput source="children_id" reference="childrens" label="Enfant">
                <SelectInput optionText={record => `${record.first_name} ${record.last_name}`} />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default RegistrationCreate;
