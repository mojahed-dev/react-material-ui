import "./App.css";
import MuiAccordion from "./components/MuiAccordion";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiButtons from "./components/MuiButtons";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiImageList from "./components/MuiImageList";
import MuiLayout from "./components/MuiLayout";
import MuiNavbar from "./components/MuiNavbar";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

type ComponentType =
  | "typography"
  | "buttons"
  | "textfield"
  | "select"
  | "radio button"
  | "checkbox"
  | "switch"
  | "rating"
  | "autocomplete"
  | "layout"
  | "card"
  | "accordion"
  | "imagelist"
  | "navbar"

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<
    ComponentType | ""
  >("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedComponent(event.target.value as ComponentType);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "typography":
        return <MuiTypography />;
      case "buttons":
        return <MuiButtons />;
      case "textfield":
        return <MuiTextField />;
      case "select":
        return <MuiSelect />;
      case "radio button":
        return <MuiRadioButton />;
      case "checkbox":
        return <MuiCheckbox />;
      case "switch":
        return <MuiSwitch />;
      case "rating":
        return <MuiRating />;
      case "autocomplete":
        return <MuiAutoComplete />;
      case "layout":
        return <MuiLayout />;
      case "card":
        return <MuiCard />;
      case "accordion":
        return <MuiAccordion />;
      case "imagelist":
        return <MuiImageList />;
      case "navbar":
        return <MuiNavbar />;
      default:
        return null;
    }
  };

  const renderCode = () => {
    switch (selectedComponent) {
      case "typography":
        return `import MuiTypography from './components/MuiTypography';\n<MuiTypography />`;
      case "buttons":
        return `import MuiButtons from './components/MuiButtons';\n<MuiButtons />`;
      case "textfield":
        return `import MuiTextField from './components/MuiTextField';\n<MuiTextField />`;
      default:
        return "";
    }
  };

  return (
    <Box p={3}>
      <TextField
        label="Select Material UI Component"
        select
        fullWidth
        value={selectedComponent}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="" disabled>
          Select a component
        </MenuItem>
        <MenuItem value="typography">Typography</MenuItem>
        <MenuItem value="buttons">Buttons</MenuItem>
        <MenuItem value="textfield">TextField</MenuItem>
        <MenuItem value="select">Select</MenuItem>
        <MenuItem value="radio button">Radio Button</MenuItem>
        <MenuItem value="checkbox">Checkbox</MenuItem>
        <MenuItem value="switch">Switch</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="autocomplete">Autocomplete</MenuItem>
        <MenuItem value="layout">Layout</MenuItem>
        <MenuItem value="card">Card</MenuItem>
        <MenuItem value="accordion">Accordion</MenuItem>
        <MenuItem value="imagelist">ImageList</MenuItem>
        <MenuItem value="navbar">Navbar</MenuItem>
      </TextField>
      <Box sx={{ mt: 3 }}>{renderComponent()}</Box>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Code Snippet:
      </Typography>
      <pre
        style={{
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        <code>{renderCode()}</code>
      </pre>
    </Box>
  );
};

export default App;
