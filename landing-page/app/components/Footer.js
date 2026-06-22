export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6 text-center text-sm text-gray-400">
      <p>© 2024 RestoName. All rights reserved.</p> {/* TODO: replace */}
      <p className="mt-1">
        Built by{" "}
        <a href="#" className="underline hover:text-black transition">
          Your Studio Name {/* TODO: replace with your business name */}
        </a>
      </p>
    </footer>
  );
}
