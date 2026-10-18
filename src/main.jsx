import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight,
  FlaskConical, Leaf, Menu, ShieldCheck, Sprout, Sun, Tractor, X, MapPin,
  Phone, Mail, Clock, Wheat, Droplets, BadgeCheck, MessageCircle
} from 'lucide-react';
import './styles.css';

const products = [
  {
    category: 'Crop protection', tag: 'BESTSELLER', name: 'CropShield 50',
    type: 'Insecticide', code: 'AS · CP-051', tone: 'lime',
    description: 'A crop protection solution designed to help farmers manage common insect pressure.',
    crops: 'Cotton · Chilli · Vegetables', icon: ShieldCheck
  },
  {
    category: 'Plant nutrition', tag: 'FARMER FAVOURITE', name: 'NutriRise',
    type: 'Micronutrient blend', code: 'AS · PN-012', tone: 'gold',
    description: 'Supports balanced plant nutrition as part of a healthy crop management programme.',
    crops: 'Paddy · Wheat · Horticulture', icon: Sprout
  },
  {
    category: 'Crop protection', tag: 'SEASONAL PICK', name: 'FungiGuard',
    type: 'Fungicide', code: 'AS · CP-028', tone: 'blue',
    description: 'A crop care option for farmers looking to protect crop health during disease-prone periods.',
    crops: 'Grapes · Tomato · Onion', icon: Leaf
  }
];

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About us', id: 'about' },
  { label: 'Our products', id: 'products' },
  { label: 'Crop care', id: 'crop-care' },
  { label: 'Contact', id: 'contact' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productFilter, setProductFilter] = useState('All products');
  const [activeProduct, setActiveProduct] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [navDropdown, setNavDropdown] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
    setNavDropdown(false);
  };

  const visibleProducts = productFilter === 'All products'
    ? products
    : products.filter(p => p.category === productFilter);

  return (
    <div className="site-shell">
      <div className="announcement">
        <div className="container announcement-inner">
          <span><span className="status-dot" /> Crop care that starts with understanding the farmer.</span>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Talk to our team <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <span className="brand-mark"><Sprout size={25} strokeWidth={2.2} /></span>
            <span className="brand-copy"><strong>agro<span>solutions</span></strong><small>GROWING BETTER, TOGETHER</small></span>
          </a>
          <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
            {navItems.slice(0, 2).map(item => <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}>{item.label}</a>)}
            <div className="nav-dropdown">
              <button className="nav-link dropdown-trigger" onClick={() => setNavDropdown(!navDropdown)} aria-expanded={navDropdown}>
                Explore <ChevronDown size={15} className={navDropdown ? 'rotate' : ''} />
              </button>
              {navDropdown && <div className="dropdown-menu">
                <button onClick={() => scrollTo('products')}><span className="dropdown-icon"><FlaskConical size={17}/></span><span><b>Our products</b><small>Explore crop care solutions</small></span></button>
                <button onClick={() => scrollTo('crop-care')}><span className="dropdown-icon"><Wheat size={17}/></span><span><b>Crop care guide</b><small>Practical seasonal guidance</small></span></button>
                <button onClick={() => scrollTo('about')}><span className="dropdown-icon"><Leaf size={17}/></span><span><b>Our approach</b><small>How we work with farmers</small></span></button>
              </div>}
            </div>
            <a href="#products" onClick={(e) => { e.preventDefault(); scrollTo('products'); }}>Products</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </nav>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Speak to an expert <ArrowUpRight size={16}/></button>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Sunrise over green agricultural fields">
            <div className="hero-image-overlay" />
          </div>
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow light"><span className="eyebrow-line" /> ROOTED IN INDIAN AGRICULTURE</div>
              <h1>Better crops.<br/><em>Stronger</em> futures.</h1>
              <p>Practical crop care and thoughtful agricultural solutions, made for the people who grow our tomorrow.</p>
              <div className="hero-actions">
                <button className="button button-lime" onClick={() => scrollTo('products')}>Explore our products <ArrowRight size={17}/></button>
                <button className="button button-ghost" onClick={() => scrollTo('about')}>Get to know us <ArrowDownRight size={17}/></button>
              </div>
              <div className="hero-trust"><span className="trust-icon"><Sprout size={17}/></span><span><b>Farmer-first thinking</b><small>Solutions shaped around real field needs</small></span></div>
            </div>
            <div className="hero-side-note"><span>01 / 03</span><i /> Growing with every season</div>
          </div>
          <div className="hero-bottom container">
            <span>BUILT FOR INDIA'S FIELDS</span><span className="hero-bottom-line"/><span>SCIENCE WITH A HUMAN TOUCH</span>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container intro-grid">
            <p className="intro-lead">Agriculture is more than a business.<br/><span>It's a promise to the next generation.</span></p>
            <p className="intro-description">At Agro Solutions, we believe the best agricultural support begins by listening. We bring crop care knowledge, dependable products and practical guidance closer to the people who need them most.</p>
            <button className="round-arrow" aria-label="Learn about us" onClick={() => scrollTo('about')}><ArrowDownRight size={22}/></button>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85" alt="Green agricultural fields under an open sky" />
              <div className="image-label"><span className="image-label-icon"><Sun size={18}/></span><span><b>Made for the field</b><small>Grounded in local realities</small></span></div>
              <div className="image-number">01 <span>—</span> OUR STORY</div>
            </div>
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> WHO WE ARE</div>
              <h2>Rooted in the soil.<br/><em>Focused on growth.</em></h2>
              <p className="large-copy">We see every farmer as a partner, not just a customer.</p>
              <p>Agro Solutions is an India-focused agricultural solutions brand built around a simple idea: crop care should feel clear, dependable and accessible. We aim to connect useful products with practical information, so farmers can make informed decisions for their fields.</p>
              <p>From crop protection to plant nutrition, our approach brings together product knowledge, responsible use and respect for the people behind every harvest.</p>
              <div className="about-points">
                <div><span><Check size={16}/></span><b>Practical, crop-focused solutions</b></div>
                <div><span><Check size={16}/></span><b>Clear guidance and support</b></div>
                <div><span><Check size={16}/></span><b>A long-term view of agriculture</b></div>
              </div>
              <button className="text-link" onClick={() => scrollTo('contact')}>Let's grow together <ArrowRight size={17}/></button>
            </div>
          </div>
        </section>

        <section className="values-band">
          <div className="container values-grid">
            <div className="values-heading"><div className="eyebrow light"><span className="eyebrow-line" /> WHAT GUIDES US</div><h2>Good agriculture<br/>starts with <em>good choices.</em></h2></div>
            <div className="value-item"><span className="value-icon"><Sprout size={22}/></span><h3>Farmer first</h3><p>Designed around everyday field realities, local conditions and farmer needs.</p></div>
            <div className="value-item"><span className="value-icon"><FlaskConical size={22}/></span><h3>Knowledge led</h3><p>Clear product information to help support informed crop management decisions.</p></div>
            <div className="value-item"><span className="value-icon"><ShieldCheck size={22}/></span><h3>Responsible use</h3><p>We encourage label-led use, safe handling and advice from qualified experts.</p></div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> OUR PRODUCT RANGE</div><h2>Made for the work<br/><em>your fields do.</em></h2></div>
              <div className="heading-aside"><p>Explore a sample of our crop care and plant nutrition range. Find the category that fits your crop's needs.</p><span className="product-disclaimer">Illustrative sample catalogue · Confirm product registrations and labels before use.</span></div>
            </div>
            <div className="product-toolbar">
              <div className="filter-tabs" role="group" aria-label="Filter products">
                {['All products', 'Crop protection', 'Plant nutrition'].map(filter => <button key={filter} className={productFilter === filter ? 'filter-active' : ''} onClick={() => setProductFilter(filter)}>{filter}</button>)}
              </div>
              <span className="product-count">SHOWING <b>{visibleProducts.length.toString().padStart(2, '0')}</b> PRODUCTS</span>
            </div>
            <div className="product-grid">
              {visibleProducts.map((p, i) => {
                const Icon = p.icon;
                return <article className="product-card" key={p.name}>
                  <div className={`product-art ${p.tone}`}>
                    <div className="product-art-top"><span>{p.tag}</span><span>{p.code}</span></div>
                    <div className="product-orbit orbit-one"/><div className="product-orbit orbit-two"/>
                    <div className="product-bottle"><div className="bottle-cap"/><div className="bottle-neck"/><div className="bottle-body"><div className="bottle-brand"><Sprout size={16}/><span>agro<br/>solutions</span></div><div className="bottle-rule"/><div className="bottle-name">{p.name}</div><div className="bottle-category">{p.type}</div><div className="bottle-leaf"><Icon size={28}/></div></div></div>
                    <span className="art-index">0{i + 1}</span>
                  </div>
                  <div className="product-info">
                    <div className="product-category">{p.category} <span>·</span> {p.type}</div>
                    <h3>{p.name}</h3><p>{p.description}</p>
                    <div className="product-crops"><Sprout size={15}/>{p.crops}</div>
                    <button className="product-link" onClick={() => setActiveProduct(p)}>View product details <ArrowUpRight size={16}/></button>
                  </div>
                </article>;
              })}
            </div>
            <div className="products-foot"><span><span className="foot-dot"/> Need help choosing a category?</span><button className="text-link" onClick={() => scrollTo('contact')}>Talk to our team <ArrowRight size={16}/></button></div>
          </div>
        </section>

        <section className="crop-care-section" id="crop-care">
          <div className="container crop-care-grid">
            <div className="crop-care-copy">
              <div className="eyebrow light"><span className="eyebrow-line" /> FIELD NOTES</div>
              <h2>Every season has<br/>its own <em>questions.</em></h2>
              <p>Crop care is not one-size-fits-all. Crop stage, weather, soil and local pest pressure all matter. Start with the basics, then speak to a qualified local agronomist for advice specific to your field.</p>
              <button className="button button-lime" onClick={() => scrollTo('contact')}>Ask a crop care question <ArrowRight size={17}/></button>
            </div>
            <div className="care-list">
              <div className="care-row"><span className="care-number">01</span><span className="care-icon"><Wheat size={21}/></span><div><h3>Know your crop stage</h3><p>Crop needs can change from sowing through harvest.</p></div><ChevronRight size={20}/></div>
              <div className="care-row"><span className="care-number">02</span><span className="care-icon"><Droplets size={21}/></span><div><h3>Watch field conditions</h3><p>Weather, irrigation and soil conditions can affect crop health.</p></div><ChevronRight size={20}/></div>
              <div className="care-row"><span className="care-number">03</span><span className="care-icon"><BadgeCheck size={21}/></span><div><h3>Use products responsibly</h3><p>Always follow the approved label, dosage and safety instructions.</p></div><ChevronRight size={20}/></div>
              <div className="care-row"><span className="care-number">04</span><span className="care-icon"><MessageCircle size={21}/></span><div><h3>Ask before you act</h3><p>Seek advice from a qualified agronomist or local expert.</p></div><ChevronRight size={20}/></div>
            </div>
          </div>
        </section>

        <section className="section promise-section">
          <div className="container promise-grid">
            <div className="promise-title"><div className="eyebrow"><span className="eyebrow-line" /> OUR PROMISE</div><h2>Not just products.<br/><em>A partner in progress.</em></h2></div>
            <div className="promise-copy"><p>Good partnerships are built one conversation at a time. We want to make it easier to find product information, ask questions and connect with a team that understands the importance of every growing season.</p><div className="promise-signature"><span className="signature-mark"><Sprout size={24}/></span><span><b>Agro Solutions</b><small>Growing better, together.</small></span></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow light"><span className="eyebrow-line" /> LET'S TALK</div>
              <h2>Good things grow<br/>from a <em>conversation.</em></h2>
              <p>Have a product enquiry, want to connect as a distributor, or need help finding the right information? Send us a note.</p>
              <div className="contact-details">
                <div><span><Phone size={17}/></span><p><small>CALL OUR TEAM</small><b>+91 00000 00000</b></p></div>
                <div><span><Mail size={17}/></span><p><small>WRITE TO US</small><b>hello@agrosolutions.in</b></p></div>
                <div><span><MapPin size={17}/></span><p><small>BASED IN INDIA</small><b>Serving farming communities across India</b></p></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setFormSent(true); }}>
              <div className="form-heading"><h3>How can we help?</h3><p>Fields marked with * are required.</p></div>
              {formSent ? <div className="form-success"><span><Check size={24}/></span><h3>Thanks for reaching out.</h3><p>This demo form is front-end only. Connect it to your email or CRM to receive enquiries.</p><button type="button" className="text-link" onClick={() => setFormSent(false)}>Send another message <ArrowRight size={16}/></button></div> : <>
                <div className="form-row"><label>Full name *<input required placeholder="Your name" /></label><label>Mobile number *<input required type="tel" pattern="[0-9+\-\s]{10,15}" placeholder="+91 98765 43210" /></label></div>
                <label>I'm interested in *<select required defaultValue=""><option value="" disabled>Select an enquiry type</option><option>Product information</option><option>Distributor partnership</option><option>Crop care guidance</option><option>General enquiry</option></select></label>
                <label>Your message *<textarea required rows="3" placeholder="Tell us a little about what you need..." /></label>
                <button className="button button-dark form-submit" type="submit">Send enquiry <ArrowRight size={17}/></button>
                <p className="form-privacy"><ShieldCheck size={14}/> Your details should only be used to respond to your enquiry.</p>
              </>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand brand-footer" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}><span className="brand-mark"><Sprout size={25}/></span><span className="brand-copy"><strong>agro<span>solutions</span></strong><small>GROWING BETTER, TOGETHER</small></span></a>
          <p>Thoughtful crop care.<br/>A stronger tomorrow.</p>
          <div className="footer-links">{navItems.map(item => <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}>{item.label}</a>)}</div>
          <button className="back-top" onClick={() => scrollTo('home')} aria-label="Back to top"><ArrowUpRight size={20}/></button>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Agro Solutions. Sample website concept.</span><span>Made with care for India's growing community.</span><span className="demo-note">Demo brand · Replace all sample details before publishing</span></div>
      </footer>

      {activeProduct && <div className="modal-backdrop" onClick={() => setActiveProduct(null)} role="presentation">
        <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setActiveProduct(null)} aria-label="Close product details"><X size={20}/></button>
          <div className={`modal-art ${activeProduct.tone}`}><Sprout size={52}/><span>AGRO SOLUTIONS</span></div>
          <div className="modal-copy"><div className="eyebrow"><span className="eyebrow-line"/> PRODUCT OVERVIEW</div><span className="modal-category">{activeProduct.category} · {activeProduct.type}</span><h2 id="modal-title">{activeProduct.name}</h2><p>{activeProduct.description}</p><div className="modal-crops"><b>Example crop fit</b><span>{activeProduct.crops}</span></div><div className="modal-notice"><ShieldCheck size={18}/><p>This is a concept product for a sample website. Actual use must follow the registered product label and advice from a qualified agricultural professional.</p></div><button className="button button-dark" onClick={() => { setActiveProduct(null); scrollTo('contact'); }}>Enquire about this product <ArrowRight size={16}/></button></div>
        </div>
      </div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
