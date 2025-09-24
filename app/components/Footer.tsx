export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Thiago Amaral. Todos os direitos reservados.
    </footer>
  );
}
