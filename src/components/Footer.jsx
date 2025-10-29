const Footer = ({ footer }) => {
  return (
    <footer className="relative w-full overflow-hidden bg-primary text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
