"use client";
import { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Phone, Mail, MapPin, 
  ChefHat, Users, Utensils, Star, Heart, MessageCircle,
  Camera, BookOpen, Calendar
} from 'lucide-react';

// --- DATA & CONTENT ---
const CONTENT = {
  trustStrip: ["11+ Years", "5,000+ Students", "50+ Cuisines", "Corporate Workshops", "Airbnb Experiences"],
  offerings: [
    { title: "Cooking Workshops", desc: "Hands-on, fun cooking classes for all skill levels.", icon: ChefHat, color: "bg-[#F4A261]" },
    { title: "Curated Experiences", desc: "Private dining, festive tables, and group celebrations.", icon: Utensils, color: "bg-[#2A9D8F]" },
    { title: "Handcrafted Products", desc: "Signature premixes, masalas, and curated festive hampers.", icon: Heart, color: "bg-[#E76F51]" },
    { title: "Recipes & Blog", desc: "Kitchen inspiration, tips, and our favorite recipes.", icon: BookOpen, color: "bg-[#E9C46A]" },
  ],
  workshopCategories: [
    "Beginner Cooking Classes", "International Cuisine", "Baking & Desserts", 
    "Festive Specials", "Kids Workshops", "Couples Experiences", 
    "Corporate Team Building", "Healthy & Everyday"
  ],
  testimonials: [
    { text: "One of the most enjoyable workshops I’ve attended. Practical, warm, and beautifully conducted.", author: "Workshop Attendee" },
    { text: "Bijal makes cooking feel approachable and joyful. I left feeling genuinely confident.", author: "Culinary Student" },
    { text: "The perfect mix of learning, fun, and authentic food experiences.", author: "Private Dining Guest" }
  ],
  faqs: [
    { q: "Do I need prior cooking experience?", a: "No. Our workshops are designed for all skill levels, including complete beginners." },
    { q: "Are the workshops hands-on?", a: "Yes. Most workshops are interactive and hands-on unless specifically mentioned otherwise." },
    { q: "Do you offer private or corporate workshops?", a: "Yes. We regularly conduct private group sessions and customised corporate experiences." },
    { q: "Can I order products online?", a: "Currently, products can be ordered directly through WhatsApp." },
    { q: "Are your workshops vegetarian?", a: "Yes. Bijals Food Creations specialises in vegetarian culinary experiences." }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop"
  ]
};

// --- REUSABLE COMPONENTS ---
const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-sm uppercase tracking-wide shadow-sm";
  const variants = {
    primary: "bg-[#E76F51] text-white hover:bg-[#D65A3D] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E76F51]/30",
    secondary: "bg-[#E9C46A] text-[#264653] hover:bg-[#D9B45A] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E9C46A]/30",
    outline: "bg-transparent border-2 border-[#264653] text-[#264653] hover:bg-[#264653] hover:text-[#FFF9F2] hover:-translate-y-1",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ subtitle, title, centered = false }) => (
  <div className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
    {subtitle && <p className="uppercase tracking-widest text-sm mb-3 font-bold text-[#E76F51]">{subtitle}</p>}
    <h2 className="font-fraunces text-4xl md:text-5xl lg:text-6xl text-[#264653] leading-tight font-semibold">{title}</h2>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['About', 'Workshops', 'Experiences', 'Gallery', 'Recipes', 'Contact'];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#264653] font-dm selection:bg-[#E9C46A] selection:text-[#264653]">
      {/* Fun & Warm Typography */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&display=swap');
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .font-fraunces { font-family: 'Fraunces', serif; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Brand Name */}
          <button onClick={() => navigate('home')} className="font-fraunces text-2xl md:text-3xl font-bold tracking-tight text-[#E76F51] z-50 flex items-center gap-2 hover:scale-105 transition-transform">
            Bijals Food Creations
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link} 
                onClick={() => navigate(link.toLowerCase())}
                className="text-sm font-bold uppercase tracking-wider text-[#264653] hover:text-[#E76F51] transition-colors"
              >
                {link}
              </button>
            ))}
            <Button onClick={() => navigate('workshops')} variant="primary" className="!px-6 !py-3">Book Now</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden z-50 text-[#264653] bg-[#E9C46A] p-2 rounded-full" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#264653] text-[#FFFDF9] z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center gap-8 text-3xl font-fraunces font-semibold">
          {['Home', ...navLinks].map((link) => (
            <button 
              key={link} 
              onClick={() => navigate(link.toLowerCase())}
              className="hover:text-[#E9C46A] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:ml-3 font-bold uppercase text-sm tracking-wide">Chat with us</span>
      </a>

      {/* Main Content Router */}
      <main className="min-h-screen pt-24">
        
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            {/* Fun & Colorful Hero Section */}
            <section className="relative px-6 md:px-8 max-w-7xl mx-auto py-12 md:py-20 flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
                <div className="inline-block bg-[#F4A261]/20 text-[#D65A3D] font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-widest mb-6">
                  Culinary Lifestyle Brand
                </div>
                <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl text-[#264653] leading-[1.1] mb-6 font-semibold">
                  Authentic Culinary Experiences <span className="text-[#E76F51] italic">Crafted With Heart.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#264653]/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  From intimate home-style workshops to curated culinary experiences, we bring people together through the joy of vegetarian cooking, storytelling, and celebration.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button onClick={() => navigate('workshops')}>Book a Workshop</Button>
                  <Button variant="secondary" onClick={() => navigate('experiences')}>Explore Experiences</Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                {/* Colorful blob backdrop shape */}
                <div className="absolute inset-0 bg-[#E9C46A] rounded-full blur-3xl opacity-30 transform -translate-x-10 translate-y-10"></div>
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Culinary Experience" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Vibrant Trust Strip */}
            <div className="bg-[#E9C46A] text-[#264653] py-6 my-12 transform -rotate-1 shadow-md">
              <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base font-bold uppercase tracking-widest">
                {CONTENT.trustStrip.map((item, idx) => (
                  <span key={idx} className="flex items-center whitespace-nowrap">
                    {item}
                    {idx < CONTENT.trustStrip.length - 1 && <span className="mx-4 text-[#E76F51] hidden md:inline">✦</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Offerings Cards (Fun & Colorful) */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
              <SectionHeading subtitle="What We Do" title="Cook. Experience. Celebrate." centered />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CONTENT.offerings.map((item, idx) => (
                  <div key={idx} 
                    onClick={() => navigate(item.title.toLowerCase().includes('workshop') ? 'workshops' : 'experiences')}
                    className={`group ${item.color} p-8 rounded-[2rem] text-white cursor-pointer transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-fraunces text-2xl mb-3 font-semibold">{item.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-medium mb-6">{item.desc}</p>
                    <div className="inline-flex items-center font-bold text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Instagram Aesthetic Gallery Section */}
            <section className="py-24 px-6 bg-[#FAEDCD]">
              <div className="max-w-7xl mx-auto text-center mb-12">
                <SectionHeading subtitle="Follow Our Journey" title="Culinary Moments" centered />
              </div>
              <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {CONTENT.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square group overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#264653]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Heart className="w-10 h-10 text-white fill-white" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button variant="primary">Follow on Instagram</Button>
              </div>
            </section>
          </div>
        )}

        {/* --- OTHER PAGES (USING THE NEW FUN THEME) --- */}
        {currentPage === 'about' && (
          <div className="animate-fade-in py-12 px-6 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading subtitle="Our Story" title="Bringing People Together Through Food" />
                <div className="space-y-6 text-[#264653]/80 font-medium text-lg leading-relaxed">
                  <p>
                    Over the last 11 years, Bijals Food Creations has grown from intimate home-based cooking workshops into a thriving culinary venture built entirely on trust, authenticity, and word-of-mouth. 
                  </p>
                  <p>
                    Founded by Bijal Shah, the brand was born from a simple belief — food has the power to bring people together. What started with small groups learning practical home-style recipes has evolved into a diverse culinary platform.
                  </p>
                  <p className="font-fraunces text-2xl text-[#E76F51] pt-4 font-semibold italic">
                    Today, we have trained over 5,000 individuals across more than 50 cuisines, staying rooted in warmth and hospitality.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop" 
                  alt="Chef Bijal Cooking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {currentPage === 'workshops' && (
          <div className="animate-fade-in py-12 px-6 max-w-7xl mx-auto text-center">
            <SectionHeading subtitle="Learn With Us" title="Hands-On Workshops" centered />
            <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
              Designed for everyone—beginners, professionals, couples, and kids. Each session is practical, interactive, and deeply immersive.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {CONTENT.workshopCategories.map((cat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-[#FAEDCD] hover:border-[#E76F51] transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-[#F4A261]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ChefHat className="w-6 h-6 text-[#E76F51]" />
                  </div>
                  <h3 className="font-fraunces text-xl font-semibold text-[#264653]">{cat}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {['experiences', 'products', 'corporate', 'recipes'].includes(currentPage) && (
          <div className="animate-fade-in py-12 px-6 max-w-7xl mx-auto text-center min-h-[50vh] flex flex-col justify-center items-center">
            <SectionHeading subtitle="Discover" title={currentPage.toUpperCase()} centered />
            <p className="text-xl text-[#264653]/70 max-w-2xl mx-auto mb-10 font-medium">
              We are currently curating this colorful space for you. Contact us on WhatsApp for bookings, product orders, or recipe requests in the meantime!
            </p>
            <Button variant="primary" onClick={() => window.open('#', '_blank')}>Chat on WhatsApp</Button>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="animate-fade-in py-12 px-6 max-w-5xl mx-auto">
            <SectionHeading subtitle="Reach Out" title="Say Hello!" centered />
            <div className="grid md:grid-cols-2 gap-12 bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border-4 border-[#FAEDCD]">
              <div>
                <h3 className="font-fraunces text-3xl font-semibold mb-6 text-[#264653]">We'd love to hear from you.</h3>
                <p className="text-[#264653]/80 mb-10 text-lg font-medium">
                  Whether you want to join a workshop, collaborate, plan an event, or order products, our kitchen is always open.
                </p>
                <div className="space-y-6 font-bold text-[#264653]">
                  <div className="flex items-center gap-4"><div className="p-3 bg-[#E9C46A] rounded-full"><MapPin className="w-5 h-5 text-white" /></div> Mumbai, Maharashtra</div>
                  <div className="flex items-center gap-4"><div className="p-3 bg-[#E76F51] rounded-full"><Phone className="w-5 h-5 text-white" /></div> +91 98765 43210</div>
                  <div className="flex items-center gap-4"><div className="p-3 bg-[#2A9D8F] rounded-full"><Mail className="w-5 h-5 text-white" /></div> hello@bijals.com</div>
                </div>
              </div>
              <form className="space-y-6 flex flex-col justify-center" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full bg-[#FAEDCD]/50 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#E76F51] font-medium transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-[#FAEDCD]/50 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#E76F51] font-medium transition-all" />
                <textarea placeholder="Your Message" rows="4" className="w-full bg-[#FAEDCD]/50 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#E76F51] font-medium transition-all resize-none"></textarea>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        )}

        {currentPage === 'gallery' && (
          <div className="animate-fade-in py-12 px-6 max-w-7xl mx-auto text-center">
             <SectionHeading subtitle="Instagram Aesthetic" title="Our Visual Diary" centered />
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {CONTENT.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-[8px] border-white">
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
          </div>
        )}
      </main>

      {/* Fun & Warm Footer */}
      <footer className="bg-[#264653] text-[#FFFDF9] pt-20 pb-10 px-6 mt-20 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <h3 className="font-fraunces text-3xl font-bold mb-6 text-[#E9C46A]">Bijals Food Creations</h3>
            <p className="text-white/80 max-w-md leading-relaxed mb-8 text-lg font-medium">
              Authentic culinary experiences, workshops, handcrafted products, and celebrations rooted in warmth, trust, and community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-[#E76F51] transition-colors rounded-full text-white">
                {/* Manual Instagram SVG to prevent Vercel errors */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-[#E76F51] transition-colors rounded-full text-white"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#F4A261]">Explore</h4>
            <ul className="space-y-4 font-medium">
              {['Home', 'About', 'Workshops', 'Gallery'].map((link) => (
                <li key={link}><button onClick={() => navigate(link.toLowerCase())} className="text-white/70 hover:text-[#E9C46A] transition-colors">{link}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#F4A261]">More</h4>
            <ul className="space-y-4 font-medium">
              {['Experiences', 'Products', 'Recipes', 'Contact'].map((link) => (
                <li key={link}><button onClick={() => navigate(link.toLowerCase())} className="text-white/70 hover:text-[#E9C46A] transition-colors">{link}</button></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-bold text-white/50 tracking-wide">
          <p>© {new Date().getFullYear()} Bijals Food Creations.</p>
          <p className="mt-4 md:mt-0">Made with ❤️ in Mumbai</p>
        </div>
      </footer>
    </div>
  );
}