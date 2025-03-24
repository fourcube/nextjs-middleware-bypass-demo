export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Welcome to the Protected Page
        </h1>
        <p className="text-gray-600">
          If you can see this, you have the correct authentication cookie!
        </p>
      </div>
    </main>
  )
}
