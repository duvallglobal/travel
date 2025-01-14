import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Travel Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/expenses" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Expense Tracking</h2>
          <p className="text-gray-600">Manage your travel expenses and receipts</p>
        </Link>
        <Link href="/trips" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Trip Planning</h2>
          <p className="text-gray-600">Plan and organize your upcoming trips</p>
        </Link>
        <Link href="/budget" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Budget Management</h2>
          <p className="text-gray-600">Set and track your travel budgets</p>
        </Link>
        <Link href="/planner" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Client Planner</h2>
          <p className="text-gray-600">Schedule and manage client meetings</p>
        </Link>
        <Link href="/places" className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Places Research</h2>
          <p className="text-gray-600">Discover and research travel destinations</p>
        </Link>
      </div>
    </div>
  )
}

