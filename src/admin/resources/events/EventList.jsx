import { List, Datagrid, TextField, DateField, EditButton, FunctionField, DeleteButton, } from 'react-admin';

const EventList = () => {
    return (
        <List resource="events">
            <Datagrid rowClick="edit">
                <TextField source="name" label="Nom" />
                <TextField source="description" label="Description" />
                <DateField source="event_date" label="Date de l'événement" />
                <TextField source="quota" label="Nombre de personnes" />
                <TextField source="location" label="Localisation" />
                <FunctionField
                    label="Durée"
                    render={record => {
                        if (!record.duration) return '—';
                        const totalSeconds = record.duration;
                        const hours = Math.floor(totalSeconds / 3600);
                        const minutes = Math.floor((totalSeconds % 3600) / 60);
                        return `${hours} h ${minutes} min`;
                    }}
                />
                <FunctionField
                    label="User"
                    render={record =>
                        record.user
                            ? `${record.user.first_name} ${record.user.last_name}`
                            : 'Aucun utilisateur'
                    }
                />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    );
};

export default EventList;


