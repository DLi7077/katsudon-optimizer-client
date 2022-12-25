import Optimizer from "./Views/Optimizer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      secondary:{
        main:"#606060"
      }
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Optimizer />
      </ThemeProvider>
    </>
  );
}

export default App;
