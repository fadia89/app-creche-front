import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, FunctionField, DateField } from 'react-admin';

const RegistrationList = () => (
    <List resource="registrations">
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <DateField source="registration_date" label="Date d'inscription" />
            <TextField source="status" label="status" />
            <FunctionField
                label="Enfant"
                render={record =>
                    record.child
                        ? `${record.child.first_name} ${record.child.last_name}`
                        : 'Aucun enfant'
                }
            />
            <FunctionField
                label="Parent"
                render={record =>
                    record.user
                        ? `${record.user.first_name} ${record.user.last_name}`
                        : 'Utilisateur non défini'
                }
            />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default RegistrationList;