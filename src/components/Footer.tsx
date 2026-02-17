const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-lg font-bold text-gradient">
            Transformando Comunidades
          </span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Transformando Comunidades
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
