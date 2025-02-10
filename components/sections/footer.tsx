export function Footer() {
  return (
    <footer className=" bg-gray-200 py-8 border-t">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rezonans Arsa. Tüm hakları saklıdır.</p>
        <p className="mt-2">
          Developed by{" "}
          <a
            href="https://aburakt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            @aburakt
          </a>
        </p>
      </div>
    </footer>
  )
}