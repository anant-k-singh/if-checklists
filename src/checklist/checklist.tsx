import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

interface Props {
  checklistName: string;
  listItems: string[];
}

export function Checklist(props: Props) {
  const listItems = props.listItems.map((listItem, idx) => {
    return (
      <ListItem disablePadding key={`${props.checklistName}-${idx}`}>
        <ListItemText primary={listItem} />
      </ListItem>
    );
  });

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Typography sx={{ mt: 4, mb: 1, ml: 1 }} variant="h6" component="div">
        {props.checklistName}
      </Typography>
      <nav style={{ marginLeft: 40 }}>
        <List>{listItems}</List>
      </nav>
    </Box>
  );
}
