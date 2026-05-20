"use client";
import { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Instagram, Phone, Mail, MapPin, 
  ChefHat, Users, Utensils, Star, Heart, MessageCircle
} from 'lucide-react';

// --- DATA & CONTENT (From Document) ---
const CONTENT = {
  trustStrip: ["11+ Years", "5,000+ Students", "50+ Cuisines", "Corporate Workshops", "Airbnb Experiences"],
  offerings: [
    { title: "Learn", desc: "Hands-on cooking workshops and masterclasses.", icon: ChefHat },
    { title: "Experience", desc: "Curated culinary experiences and private dining.", icon: Utensils },
    { title: "Products", desc: "Handcrafted premixes, masalas, pickles, and festive hampers.", icon: Heart },
    { title: "Celebrate", desc: "Corporate sessions, festive menus, and curated gatherings.", icon: Users },
  ],
  workshopCategories: [
    "Beginner Cooking Classes", "International Cuisine Workshops", "Baking & Desserts", 
    "Festive Special Workshops", "Kids Workshops", "Couples Experiences", 
    "Corporate Team Workshops", "Healthy & Everyday Cooking"
  ],
  experiences: [
    "Airbnb Culinary Experiences", "Private Dining Experiences", "Festive Tables & Celebrations",
    "Curated Tasting Menus", "Culinary Travel Concepts", "Interactive Group Experiences"
  ],
  products: [
    "Signature Premixes", "Handcrafted Masalas", "Pickles & Condiments", "Festive Hampers", "Curated Gift Boxes"
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
  ]
};

// --- REUSABLE COMPONENTS ---

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base = "inline-flex items-center justify-center px-8 py-4 uppercase tracking-[0.15em] text-xs font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-[#B25A38] text-white hover:bg-[#9A4B2E]",
    secondary: "bg-transparent border border-[#2C2C2A] text-[#2C2C2A] hover:bg-[#2C2C2A] hover:text-[#F9F8F6]",
    light: "bg-transparent border border-[#F9F8F6] text-[#F9F8F6] hover:bg-[#F9F8F6] hover:text-[#2C2C2A]",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ subtitle, title, centered = false, dark = false }) => (
  <div className={`mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
    {subtitle && <p className={`uppercase tracking-widest text-sm mb-4 font-semibold ${dark ? 'text-[#F9F8F6]/70' : 'text-[#B25A38]'}`}>{subtitle}</p>}
    <h2 className={`font-serif text-4xl md:text-5xl leading-tight ${dark ? 'text-[#F9F8F6]' : 'text-[#2C2C2A]'}`}>{title}</h2>
  </div>
);

// --- PAGE COMPONENTS ---

const HomePage = ({ navigate }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center pt-20">
      <div className="w-full md:w-1/2 px-8 md:pl-24 md:pr-12 py-20 z-10">
        <h1 className="font-serif text-5xl md:text-7xl text-[#2C2C2A] leading-[1.1] mb-8">
          Authentic Culinary Experiences <span className="italic text-[#6F8165]">Crafted With Heart</span>
        </h1>
        <p className="text-lg md:text-xl text-[#2C2C2A]/80 mb-12 max-w-xl leading-relaxed">
          From intimate home-style workshops to curated culinary experiences, Bijals Food Creations brings people together through the joy of vegetarian cooking, storytelling, and celebration.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button onClick={() => navigate('workshops')}>Book a Workshop</Button>
          <Button variant="secondary" onClick={() => navigate('experiences')}>Explore Experiences</Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-[90vh] relative">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
          alt="Culinary Experience" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* Trust Strip */}
    <div className="bg-[#2C2C2A] text-[#F9F8F6] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm uppercase tracking-widest">
        {CONTENT.trustStrip.map((item, idx) => (
          <span key={idx} className="flex items-center whitespace-nowrap">
            {item}
            {idx < CONTENT.trustStrip.length - 1 && <span className="mx-6 text-[#B25A38] hidden md:inline">•</span>}
          </span>
        ))}
      </div>
    </div>

    {/* About Preview */}
    <section className="py-24 md:py-32 px-8 max-w-5xl mx-auto text-center">
      <SectionHeading 
        subtitle="Our Story" 
        title="What began as intimate cooking sessions in a Mumbai home has today evolved into one of the city’s most loved culinary communities." 
        centered 
      />
      <p className="text-lg text-[#2C2C2A]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
        Led by Bijal Shah, our workshops go beyond recipes — they create confidence, connection, and unforgettable experiences around food.
      </p>
      <Button variant="secondary" onClick={() => navigate('about')}>Read The Full Story</Button>
    </section>

    {/* Offerings Grid */}
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="What We Do" title="Curated Offerings" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTENT.offerings.map((item, idx) => (
            <div key={idx} className="group p-8 bg-[#F9F8F6] hover:bg-[#2C2C2A] transition-colors duration-500 cursor-pointer" onClick={() => navigate(item.title.toLowerCase() === 'learn' ? 'workshops' : item.title.toLowerCase())}>
              <item.icon className="w-10 h-10 mb-6 text-[#B25A38] group-hover:text-[#F9F8F6] transition-colors" />
              <h3 className="font-serif text-2xl mb-4 group-hover:text-[#F9F8F6]">{item.title}</h3>
              <p className="text-[#2C2C2A]/70 group-hover:text-[#F9F8F6]/80 text-sm leading-relaxed mb-8">{item.desc}</p>
              <ArrowRight className="w-5 h-5 text-[#2C2C2A] group-hover:text-[#F9F8F6] transform group-hover:translate-x-2 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter / CTA */}
    <section className="py-32 px-8 bg-[#6F8165] text-[#F9F8F6] text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Join our culinary community</h2>
        <p className="text-lg text-[#F9F8F6]/90 mb-12">
          Receive recipes, workshop updates, festive launches, and kitchen inspiration delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-1 bg-transparent border-b border-[#F9F8F6]/50 focus:border-[#F9F8F6] outline-none px-4 py-3 text-[#F9F8F6] placeholder:text-[#F9F8F6]/50 transition-colors"
          />
          <Button variant="light">Subscribe</Button>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="animate-fade-in pt-24">
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading subtitle="About Us" title="The Story Behind Bijals Food Creations" />
          <div className="space-y-6 text-[#2C2C2A]/80 leading-relaxed text-lg">
            <p>
              Over the last 11 years, Bijals Food Creations has grown from intimate home-based cooking workshops into a thriving culinary venture built entirely on trust, authenticity, and word-of-mouth. 
            </p>
            <p>
              Founded by Bijal Shah, the brand was born from a simple belief — food has the power to bring people together. What started with small groups learning practical home-style recipes has evolved into a diverse culinary platform offering workshops, private dining experiences, Airbnb experiences, festive catering, products, and curated food experiences.
            </p>
            <p className="font-serif text-2xl text-[#B25A38] pt-4">
              Today, we have trained over 5,000 individuals across more than 50 cuisines, while staying rooted in warmth, hospitality, and approachable learning.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] bg-stone-200">
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop" 
            alt="Chef Cooking" 
            className="w-full h-full object-cover"
          />
          {/* Brand Note: Real photo of Bijal Shah should go here */}
        </div>
      </div>
    </section>

    <section className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="bg-[#F9F8F6] p-12 md:p-16">
          <h3 className="font-serif text-3xl mb-6 text-[#B25A38]">Our Mission</h3>
          <p className="text-[#2C2C2A]/80 text-lg leading-relaxed">
            To create meaningful culinary experiences that inspire confidence, connection, creativity, and celebration through food.
          </p>
        </div>
        <div className="bg-[#2C2C2A] text-[#F9F8F6] p-12 md:p-16">
          <h3 className="font-serif text-3xl mb-6 text-[#6F8165]">Our Vision</h3>
          <p className="text-[#F9F8F6]/80 text-lg leading-relaxed">
            To become India’s most trusted home-chef-led culinary experience brand, blending education, culture, products, and community.
          </p>
        </div>
      </div>
    </section>
  </div>
);

const WorkshopsPage = () => (
  <div className="animate-fade-in pt-24">
    <section className="py-20 px-8 max-w-7xl mx-auto text-center">
      <SectionHeading subtitle="Learn With Us" title="Hands-On Culinary Workshops" centered />
      <p className="text-xl text-[#2C2C2A]/70 max-w-3xl mx-auto leading-relaxed mb-16">
        Our workshops are designed for every kind of learner — beginners, working professionals, couples, children, tourists, and passionate food lovers. Each session is practical, interactive, and deeply immersive.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {CONTENT.workshopCategories.map((cat, idx) => (
          <div key={idx} className="group relative h-80 overflow-hidden bg-stone-200">
            {/* Real workshop images would replace this generic food pattern */}
            <img 
              src={`https://images.unsplash.com/photo-${1507048331197 + idx}?q=80&w=800&auto=format&fit=crop`} 
              alt={cat} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2A]/90 to-transparent flex items-end p-8">
              <h3 className="text-white font-serif text-2xl">{cat}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-24 bg-[#B25A38] text-white px-8 text-center">
      <h3 className="font-serif text-4xl mb-8">Why Choose Us?</h3>
      <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light mb-12">
        Small batch experiences, practical recipes, hands-on learning, approachable teaching, and a warm community-driven atmosphere.
      </p>
      <Button variant="light">Reserve Your Seat Today</Button>
    </section>
  </div>
);

const SimplePageTemplate = ({ subtitle, title, intro, items, ctaText, ctaVariant = 'primary', imageSrc }) => (
  <div className="animate-fade-in pt-24">
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="sticky top-32">
          <SectionHeading subtitle={subtitle} title={title} />
          <p className="text-lg text-[#2C2C2A]/80 leading-relaxed mb-12">
            {intro}
          </p>
          {ctaText && <Button variant={ctaVariant}>{ctaText}</Button>}
        </div>
        <div className="space-y-12">
          {imageSrc && (
            <img src={imageSrc} alt={title} className="w-full aspect-video md:aspect-[4/5] object-cover mb-12" />
          )}
          <ul className="space-y-6">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-xl font-serif text-[#2C2C2A] border-b border-stone-200 pb-6">
                <Star className="w-5 h-5 text-[#B25A38]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </div>
);

const Footer = ({ navigate }) => (
  <footer className="bg-[#2C2C2A] text-[#F9F8F6] pt-24 pb-12 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-[#F9F8F6]/20 pb-16">
      <div className="md:col-span-2">
        <h3 className="font-serif text-3xl mb-6">Bijals Food Creations</h3>
        <p className="text-[#F9F8F6]/70 max-w-md leading-relaxed mb-8 text-lg">
          Authentic culinary experiences, workshops, handcrafted products, and celebrations rooted in warmth, trust, and community.
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-3 bg-[#F9F8F6]/10 hover:bg-[#B25A38] transition-colors rounded-full"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="p-3 bg-[#F9F8F6]/10 hover:bg-[#B25A38] transition-colors rounded-full"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#B25A38]">Explore</h4>
        <ul className="space-y-4">
          {['Home', 'About', 'Workshops', 'Experiences', 'Products'].map((link) => (
            <li key={link}>
              <button onClick={() => navigate(link.toLowerCase())} className="text-[#F9F8F6]/70 hover:text-white transition-colors">{link}</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#B25A38]">More</h4>
        <ul className="space-y-4">
          {['Corporate', 'Blog', 'Testimonials', 'FAQ', 'Contact'].map((link) => (
            <li key={link}>
              <button onClick={() => navigate(link.toLowerCase())} className="text-[#F9F8F6]/70 hover:text-white transition-colors">{link}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#F9F8F6]/50">
      <p>© {new Date().getFullYear()} Bijals Food Creations. All rights reserved.</p>
      <p className="mt-4 md:mt-0">Mumbai, Maharashtra</p>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['About', 'Workshops', 'Experiences', 'Products', 'Corporate', 'Contact'];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2C2C2A] font-sans selection:bg-[#B25A38] selection:text-white">
      {/* Dynamic Font Injection for Premium Editorial Feel */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#F9F8F6]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => navigate('home')} className="font-serif text-2xl tracking-wide z-50">
            Bijal's <span className="text-[#B25A38]">.</span>
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link} 
                onClick={() => navigate(link.toLowerCase())}
                className="text-sm uppercase tracking-widest font-medium hover:text-[#B25A38] transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#2C2C2A] text-[#F9F8F6] z-40 flex flex-col justify-center items-center transition-transform duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center gap-8 text-2xl font-serif">
          {['Home', ...navLinks].map((link) => (
            <button 
              key={link} 
              onClick={() => navigate(link.toLowerCase())}
              className="hover:text-[#B25A38] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:ml-3 font-semibold uppercase text-xs tracking-widest">Chat with us</span>
      </a>

      {/* Main Content Router Simulation */}
      <main className="min-h-screen">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'workshops' && <WorkshopsPage />}
        
        {currentPage === 'experiences' && (
          <SimplePageTemplate
            subtitle="Gather & Celebrate"
            title="Curated Culinary Experiences"
            intro="At Bijals Food Creations, we believe food is more than a meal — it is memory, culture, storytelling, and connection. Our curated experiences are designed to bring people together in meaningful ways. From private dining evenings and Airbnb experiences to festive tables and culinary travel concepts, every experience is thoughtfully crafted to feel personal, immersive, and unforgettable."
            items={CONTENT.experiences}
            imageSrc="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
          />
        )}

        {currentPage === 'products' && (
          <SimplePageTemplate
            subtitle="Take Us Home"
            title="Handcrafted Products"
            intro="Bring the flavours of Bijals Food Creations into your own kitchen with our handcrafted range of premixes, spice blends, masalas, pickles, and festive hampers. Every product is created with the same care, warmth, and trust that defines our workshops."
            items={CONTENT.products}
            ctaText="Order on WhatsApp"
            imageSrc="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
          />
        )}

        {currentPage === 'corporate' && (
          <SimplePageTemplate
            subtitle="Build Teams"
            title="Corporate Culinary Experiences"
            intro="Looking for a unique and engaging team activity? Our corporate culinary workshops are designed to encourage creativity, collaboration, and meaningful interaction in a relaxed and enjoyable environment. Whether it’s team bonding, wellness initiatives, or festive celebrations, we create experiences tailored to your organisation’s goals."
            items={["Team Bonding", "Wellness Activities", "Festive Celebrations", "Leadership Offsites", "Employee Engagement", "Client Experiences"]}
            ctaText="Enquire for Corporate Bookings"
            imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop"
          />
        )}

        {currentPage === 'contact' && (
          <div className="animate-fade-in pt-32 pb-24 px-8 max-w-5xl mx-auto">
            <SectionHeading subtitle="Reach Out" title="Get in Touch" centered />
            <div className="grid md:grid-cols-2 gap-16 bg-white p-12 md:p-16 shadow-sm border border-stone-100">
              <div>
                <h3 className="font-serif text-3xl mb-6">Hello!</h3>
                <p className="text-[#2C2C2A]/70 mb-12 text-lg">
                  Whether you want to join a workshop, collaborate, plan a corporate event, order products, or simply say hello — we would love to hear from you.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-lg"><MapPin className="text-[#B25A38]" /> Mumbai, Maharashtra</div>
                  <div className="flex items-center gap-4 text-lg"><Phone className="text-[#B25A38]" /> +91 98765 43210</div>
                  <div className="flex items-center gap-4 text-lg"><Mail className="text-[#B25A38]" /> hello@bijalsfoodcreations.com</div>
                </div>
              </div>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full border-b border-stone-300 py-3 bg-transparent outline-none focus:border-[#B25A38] transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full border-b border-stone-300 py-3 bg-transparent outline-none focus:border-[#B25A38] transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full border-b border-stone-300 py-3 bg-transparent outline-none focus:border-[#B25A38] transition-colors" />
                <textarea placeholder="Message" rows="4" className="w-full border-b border-stone-300 py-3 bg-transparent outline-none focus:border-[#B25A38] transition-colors resize-none"></textarea>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        )}

        {/* Note: In a full app, Blog, Testimonials, FAQ would be fully fleshed out pages here, 
            currently routed to fallback text or omitted for brevity if they weren't explicitly detailed above */}
        {['blog', 'testimonials', 'faq'].includes(currentPage) && (
          <div className="animate-fade-in pt-48 pb-32 text-center px-8">
            <SectionHeading subtitle="Discover" title={currentPage.toUpperCase()} centered />
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">This section is being curated. Please check back soon for updates to our {currentPage}.</p>
            {currentPage === 'faq' && (
              <div className="max-w-3xl mx-auto mt-16 text-left space-y-8">
                {CONTENT.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-stone-200 pb-6">
                    <h4 className="font-serif text-2xl mb-2 text-[#2C2C2A]">{faq.q}</h4>
                    <p className="text-stone-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            )}
            {currentPage === 'testimonials' && (
              <div className="max-w-4xl mx-auto mt-16 space-y-12">
                 {CONTENT.testimonials.map((t, i) => (
                  <div key={i} className="bg-white p-12 text-center relative">
                    <Star className="w-8 h-8 mx-auto mb-6 text-[#B25A38] opacity-50" />
                    <p className="font-serif text-2xl italic text-[#2C2C2A] mb-6">"{t.text}"</p>
                    <p className="uppercase tracking-widest text-xs font-bold text-[#6F8165]">— {t.author}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}