import { AppRouter } from "./AppRouter"
import { AppProvider } from "./contexts/products/AppProvider"
import { Navbar } from "./ui/components/NavBar"


export const IMApp = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </div>
    </>
  )
}
