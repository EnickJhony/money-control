import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/themes/default"

export default function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <h1>Enick</h1>
    </ThemeProvider>
    </>
  )
}
