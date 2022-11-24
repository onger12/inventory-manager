import { AppRouter } from "./AppRouter"
import { ProductsProvider } from "./contexts/products/ProductsProvider"
import { Navbar } from "./ui/components/NavBar"


export const IMApp = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <ProductsProvider>
          <AppRouter />
        </ProductsProvider>
      </div>
    </>
  )
}
