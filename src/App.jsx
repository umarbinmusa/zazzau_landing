import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, ArrowRight, Award, BookOpen, Building2, ChevronRight,
  Crown, Facebook, Instagram, Menu, Play, Quote, ShieldCheck, Sparkles,
  Users, X, Youtube
} from "lucide-react";

const NAV = [
  ["home", "Home"], ["about", "The Emir"], ["biography", "Biography"], ["achievements", "Achievements"],
  ["vision", "Vision"], ["heritage", "Heritage"], ["gallery", "Gallery"]
];

const achievements = [
  { icon: BookOpen, title: "Education", text: "A focus on education, knowledge and human capital development across communities.", tag: "Knowledge" },
  { icon: Sparkles, title: "Youth Empowerment", text: "Championing opportunities, skills and leadership pathways for the next generation.", tag: "Future" },
  { icon: ShieldCheck, title: "Peace & Unity", text: "Supporting dialogue, harmony and peaceful coexistence within the wider community.", tag: "Peace" },
  { icon: Building2, title: "Community Development", text: "Encouraging initiatives that strengthen communities and improve collective wellbeing.", tag: "Service" },
  { icon: Users, title: "Agriculture", text: "Promoting agricultural development, food security and productive community partnerships.", tag: "Growth" },
  { icon: Crown, title: "Culture & Heritage", text: "Preserving the traditions, identity and historic legacy of Zazzau for future generations.", tag: "Heritage" }
];

const journey = [
  ["01", "Early Life", "The foundations of character, education and service."],
  ["02", "Professional Career", "A journey shaped by professional experience and leadership."],
  ["03", "Diplomatic Service", "Experience across diplomacy, public engagement and international relations."],
  ["04", "Traditional Leadership", "A deeper commitment to the people, institution and heritage of Zazzau."],
  ["05", "19th Emir of Zazzau", "A new chapter of traditional leadership and service to the Emirate."]
];

const gallery = [
  { category: "Official", title: "Official Portrait", src: "https://pbs.twimg.com/media/EjvtgFqWsAEGn98.jpg" },
  { category: "Installation", title: "Installation Ceremony", src: "https://www.nairaland.com/attachments/12651092_img20201109115251_jpega0b4997b4fb7c7393a906985e6550e4d" },
  { category: "Installation", title: "The 19th Emir of Zazzau", src: "https://www.nairaland.com/attachments/12651087_img20201109115222_jpeg0c9ad0e9d4ced81beb54cb1f858efcff" },
  { category: "Royal", title: "Royal Portrait", src: "https://dailynewspulse.wordpress.com/wp-content/uploads/2022/10/img-20221010-wa0003.jpg" },
  { category: "Heritage", title: "Zazzau Heritage", src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85" },
  { category: "Culture", title: "Traditional Culture", src: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85" },
  { category: "Palace", title: "Royal Architecture", src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85" },
  { category: "Community", title: "Community & Service", src: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1200&q=85" }
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState("All");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <button className="brand" onClick={() => scrollToId("home")} aria-label="Zazzau home">
          <span className="brand-mark"><Crown size={20}/></span>
          <span><b>ZAZZAU</b><small>EMIRATE</small></span>
        </button>

        <nav className="desktop-nav">
          {NAV.map(([id, label]) => (
            <button key={id} onClick={() => scrollToId(id)}>{label}</button>
          ))}
        </nav>

        <button className="nav-cta" onClick={() => scrollToId("legacy")}>Explore Legacy <ArrowRight size={16}/></button>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X/> : <Menu/>}
        </button>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div className="mobile-menu" initial={{opacity:0, y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>
            {NAV.map(([id, label]) => (
              <button key={id} onClick={() => { scrollToId(id); setMenu(false); }}>{label}</button>
            ))}
            <button onClick={() => { scrollToId("legacy"); setMenu(false); }}>Explore His Legacy</button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="hero">
          <div className="hero-pattern"/>
          <div className="hero-image"/>
          <div className="hero-overlay"/>
          <div className="hero-content">
            <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
              <div className="eyebrow"><span/> HIS HIGHNESS <span/></div>
              <h1>Ambassador<br/><em>Ahmed Nuhu Bamalli, CFR</em></h1>
              <p className="hero-title">19th Emir of Zazzau</p>
              <p className="hero-copy">A custodian of heritage, a servant of the people, and a voice for peace, development and progress.</p>
              <div className="hero-actions">
                <button className="gold-btn" onClick={() => scrollToId("about")}>Discover His Story <ArrowRight size={17}/></button>
                <button className="ghost-btn" onClick={() => scrollToId("achievements")}>View Achievements</button>
              </div>
            </motion.div>
          </div>
          <button className="scroll-hint" onClick={() => scrollToId("about")}><span>Scroll to explore</span><ArrowDown size={18}/></button>
          <div className="hero-side">ZAZZAU · HERITAGE · SERVICE · LEGACY</div>
        </section>

        <section id="about" className="section about">
          <div className="section-kicker">THE 19TH EMIR OF ZAZZAU</div>
          <div className="about-grid">
            <motion.div className="about-photo" initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <div className="photo-placeholder">
                <Crown size={52}/>
                <span>Official Portrait</span>
                <small>Replace with an authorized photograph</small>
              </div>
              <div className="photo-caption">His Highness<br/><strong>Ahmed Nuhu Bamalli, CFR</strong></div>
            </motion.div>
            <motion.div className="about-copy" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <h2>A Legacy of<br/><em>Leadership</em></h2>
              <div className="gold-rule"/>
              <p>His Highness Ambassador Ahmed Nuhu Bamalli, CFR, is the 19th Emir of Zazzau. His public journey brings together professional service, diplomacy, traditional leadership and a continuing commitment to the people and heritage of Zazzau.</p>
              <p>This landing page is designed as a digital space for presenting his story, verified achievements, leadership philosophy and the cultural heritage of the Emirate.</p>
              <button className="text-btn" onClick={() => scrollToId("journey")}>Explore the journey <ChevronRight size={17}/></button>
            </motion.div>
          </div>
        </section>

        <section id="biography" className="section biography">
          <div className="section-kicker">THE STORY BEHIND THE STOOL</div>
          <div className="bio-grid">
            <div>
              <h2>A Life of <em>Service &amp; Scholarship</em></h2>
              <div className="gold-rule"/>
              <p className="section-intro">
                His Highness Ambassador Ahmed Nuhu Bamalli, CFR, was born on 8 June 1966 in Zaria, Kaduna State.
                He is a Nigerian lawyer, banker, diplomat and traditional ruler who became the 19th Emir of Zazzau
                on 7 October 2020.
              </p>
              <p className="section-intro">
                Before ascending the throne, he built a career spanning management, banking, public administration,
                security printing and diplomacy. He served as Nigeria's Ambassador to Thailand, with concurrent
                accreditation to Myanmar, from 2017 until 2020, and had previously served as a commissioner with
                the Kaduna State Independent Electoral Commission.
              </p>
              <p className="section-intro">
                His educational background includes a Law degree from Ahmadu Bello University, Zaria, a postgraduate
                diploma in Management, and further study in international affairs, conflict resolution and organisational
                leadership.
              </p>
              <div className="bio-facts">
                <div><span>1966</span><strong>Born in Zaria</strong></div>
                <div><span>1989</span><strong>LL.B., ABU Zaria</strong></div>
                <div><span>2017–2020</span><strong>Ambassadorial Service</strong></div>
                <div><span>2020</span><strong>19th Emir of Zazzau</strong></div>
                <div><span>2022</span><strong>Conferred CFR</strong></div>
              </div>
            </div>
            <div className="bio-profile">
              <div className="bio-profile-top">
                <span>PROFILE</span><Crown size={28}/>
              </div>
              <div className="bio-profile-row"><span>Full Name</span><strong>Ahmed Nuhu Bamalli</strong></div>
              <div className="bio-profile-row"><span>Traditional Office</span><strong>19th Emir of Zazzau</strong></div>
              <div className="bio-profile-row"><span>Traditional House</span><strong>Mallawa</strong></div>
              <div className="bio-profile-row"><span>Birth</span><strong>8 June 1966 · Zaria</strong></div>
              <div className="bio-profile-row"><span>Diplomatic Service</span><strong>Thailand &amp; Myanmar</strong></div>
              <div className="bio-profile-row"><span>National Honour</span><strong>Commander of the Order of the Federal Republic (CFR)</strong></div>
            </div>
          </div>
        </section>

        <section id="journey" className="journey">
          <div className="section narrow">
            <div className="section-kicker light">A JOURNEY OF SERVICE</div>
            <h2>From Experience to <em>Traditional Leadership</em></h2>
            <p className="section-intro light-text">A visual timeline of the major chapters of a life shaped by service, leadership and heritage.</p>
            <div className="timeline">
              {journey.map(([num,title,text],i) => (
                <motion.div className="timeline-item" key={title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} transition={{delay:i*.08}} viewport={{once:true}}>
                  <div className="timeline-num">{num}</div>
                  <div><span>CHAPTER {num}</span><h3>{title}</h3><p>{text}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section achievements">
          <div className="section-kicker">A RECORD OF SERVICE</div>
          <div className="heading-row">
            <div><h2>His <em>Achievements</em></h2><p className="section-intro">Six pillars through which the story of service can be presented and expanded with verified records.</p></div>
            <Award className="heading-icon" size={55}/>
          </div>
          <div className="achievement-grid">
            {achievements.map(({icon:Icon,title,text,tag},i) => (
              <motion.article className="achievement-card" key={title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} transition={{delay:i*.07}} viewport={{once:true}}>
                <div className="card-top"><Icon size={24}/><span>{tag}</span></div>
                <h3>{title}</h3><p>{text}</p>
                <button onClick={() => scrollToId("legacy")}>Explore <ArrowRight size={15}/></button>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="vision" className="vision">
          <div className="section narrow">
            <div className="section-kicker light">A VISION FOR ZAZZAU</div>
            <h2>Preserving heritage.<br/><em>Building the future.</em></h2>
            <div className="vision-grid">
              {[
                ["01","PEACE","Building bridges and strengthening harmony."],
                ["02","EDUCATION","Investing in knowledge and human capital."],
                ["03","YOUTH","Creating opportunity for the next generation."],
                ["04","DEVELOPMENT","Supporting sustainable community progress."],
                ["05","HERITAGE","Protecting the identity and traditions of Zazzau."]
              ].map(([n,t,d]) => <div className="vision-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </section>

        <section id="heritage" className="heritage">
          <div className="heritage-bg"/>
          <div className="heritage-overlay"/>
          <div className="heritage-content">
            <div className="section-kicker light">ZAZZAU · HISTORY · CULTURE · IDENTITY</div>
            <h2>The Heritage<br/><em>of Zazzau</em></h2>
            <p>Explore the history, traditions, architecture and cultural identity of one of Northern Nigeria's historic emirates.</p>
            <button className="gold-btn" onClick={() => scrollToId("gallery")}>Discover the Heritage <ArrowRight size={17}/></button>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="section-kicker">THE ROYAL ARCHIVE</div>
          <div className="heading-row">
            <div>
              <h2>His <em>Gallery</em></h2>
              <p className="section-intro">A visual archive for official portraits, royal ceremonies, heritage and public engagements. Replace any third-party/demo images with authorized palace photographs before publication.</p>
            </div>
            <div className="gallery-count">{gallery.length} <span>IMAGES</span></div>
          </div>

          <div className="gallery-filters">
            {["All", "Official", "Installation", "Royal", "Palace", "Community", "Culture", "Heritage"].map(filter => (
              <button key={filter} className={galleryFilter === filter ? "active" : ""} onClick={() => setGalleryFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {gallery.filter(item => galleryFilter === "All" || item.category === galleryFilter).map((item,i) => (
              <motion.button className={`gallery-item gallery-${(i % 6) + 1}`} key={`${item.category}-${item.title}`} onClick={() => setSelected(item)} whileHover={{scale:1.015}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
                <img src={item.src} alt={item.title}/>
                <div><span>{item.category}</span><strong>{item.title}</strong></div>
              </motion.button>
            ))}
          </div>

          <div className="gallery-note">
            <Crown size={18}/>
            <p><strong>Official archive note:</strong> Use only photographs approved for publication by the Emirate, palace media team or copyright holder.</p>
          </div>
        </section>

        <section id="legacy" className="quote-section">
          <Quote size={42}/>
          <blockquote>Preserving the past.<br/><em>Serving the present.</em><br/>Inspiring the future.</blockquote>
          <div className="quote-line"/>
          <p>ZAZZAU EMIRATE · DIGITAL HERITAGE</p>
        </section>

        <section id="contact" className="cta">
          <div className="cta-pattern"/>
          <div>
            <div className="section-kicker light">THE LEGACY CONTINUES</div>
            <h2>Discover the Story<br/><em>of Zazzau</em></h2>
            <p>A digital tribute to leadership, service, culture and heritage.</p>
            <button className="gold-btn" onClick={() => scrollToId("home")}>Back to the beginning <ArrowRight size={17}/></button>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><span className="brand-mark"><Crown size={20}/></span><div><b>ZAZZAU</b><small>EMIRATE</small></div></div>
          <p>His Highness Ambassador Ahmed Nuhu Bamalli, CFR<br/><span>19th Emir of Zazzau</span></p>
          <div className="socials"><button aria-label="Facebook"><Facebook size={17}/></button><button aria-label="Instagram"><Instagram size={17}/></button><button aria-label="YouTube"><Youtube size={17}/></button></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Zazzau Emirate. All Rights Reserved.</span><span>Heritage · Service · Legacy</span></div>
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelected(null)}>
            <button className="lightbox-close" onClick={() => setSelected(null)}><X/></button>
            <motion.img src={selected.src} alt={selected.title} initial={{scale:.92}} animate={{scale:1}} onClick={e => e.stopPropagation()}/>
            <div className="lightbox-title">{selected.title}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;