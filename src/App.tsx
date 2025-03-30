import "./App.css"

function App() {
  const color = import.meta.env.MODE === "development" ? "text-red-500" : "text-purple-600"

  return (
    <>
      <h1 className={color}>{import.meta.env.VITE_TEST}</h1>
      <h2 className={color}>{import.meta.env.MODE}</h2>
    </>
  )
}

export default App
