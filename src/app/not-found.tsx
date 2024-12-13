// src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-8xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent animate-fade-in">
                    404
                </h1>
                <p className="mt-4 text-2xl text-gray-400 animate-fade-in-up">
                    Page not found
                </p>
                <p className="mt-4 text-gray-500 animate-fade-in-up delay-200">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-8 animate-fade-in-up delay-300">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    )
}