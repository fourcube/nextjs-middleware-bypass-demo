import Link from 'next/link'

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">403</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-8">Access Forbidden</h2>
        <p className="text-gray-600 mb-4">
          You don&apos;t have permission to access this page.
        </p>
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
