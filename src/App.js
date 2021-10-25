import TaxForm from "./components/TaxForm/TaxForm";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#bb86fc",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaxForm />
    </ThemeProvider>
  );
}

export default App;
