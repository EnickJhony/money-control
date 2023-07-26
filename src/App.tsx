import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/themes/default"
import { GlobalStyle } from "./Styles/global"

export default function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Enick</h1>
    </ThemeProvider>
    </>
  )
}
