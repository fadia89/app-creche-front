import { List, Datagrid, TextField, EditButton } from 'react-admin';

const PageList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="slug" /> {/* Ce que on utilise dans L'URL /accueil /a-propos  /pourqoui une crêche? */}
      <EditButton />
    </Datagrid>
  </List>
);
export default PageList;

