import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-(--color-gray-300) py-4 px-6">
      <div className="mx-auto flex justify-center">
        <a href="/" className="text-xl font-bold hover:underline">News</a>
      </div>
    </header>
  );
} 