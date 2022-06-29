// import Global from "./components/Global";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages";
import { theme } from "./theme/theme";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
