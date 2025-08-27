import { FetchApp } from "./components/FetchApp"
import { CounterApps } from "./components/CounterApps"
import { FormsApp } from "./components/FormsApp"

export const HooksApp = () => {
  return (
    <>
      <h1>Aplicacion de Hooks</h1>
      <hr />
      <FetchApp />
      <hr />
      <CounterApps/>
      <hr />
      <FormsApp/>
      <hr />
      
    </>
  )
}
