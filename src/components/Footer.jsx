function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} NovaSpark Studio</p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="/test" className="hover:text-white">System</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
