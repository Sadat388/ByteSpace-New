import { useState, useEffect } from "react";
import { A } from "./assets";
import {
  Orn,
  LIME,
  WHITE,
  Avatars,
  Logo,
  ProgressCard,
  StudentsCard,
  courses,
  CourseCard,
} from "./shared";
import { Login, Register } from "./Auth";

const tabRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const categories = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const footerCols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

/* ---------- sections ---------- */
function Hero() {
  const o = A.heroOrn;
  return (
    <section className="hero" id="top">
      <img className="grid" src={A.grid} alt="" />
      <img className="hero-circle" src={A.heroCircle} alt="" />

      <header className="header">
        <Logo />
        <nav className="nav-main">
          <a className="active" href="#top">
            Home
          </a>
          <a href="#courses">Courses</a>
          <a href="#creators">Creators</a>
        </nav>
        <nav className="nav-user">
          <a href="#/login">Sign In</a>
          <a href="#/register">Join Us</a>
          <img src={A.bag} alt="Cart" />
        </nav>
      </header>

      <div className="hero-copy">
        <h1>Get Access to Hundreds Courses Available</h1>
        <p>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <label>
            <img src={A.search} alt="" />
            <input placeholder="Course, topic, creator" />
          </label>
          <button className="btn">Search</button>
        </form>
      </div>

      <Orn src={o.spiralW} x={1127} y={672} s={330} color={WHITE} />
      <Orn src={o.springL} x={-118} y={221} s={385} color={LIME} />
      <Orn src={o.springS} x={358} y={477} s={175} color={WHITE} flip />
      <Orn src={o.torus} x={18} y={682} s={342} color={WHITE} />
      <Orn src={o.cylinder} x={1231} y={221} s={370} color={LIME} />
      <Orn src={o.cone} x={1106} y={464} s={188} color={WHITE} />

      <img className="hero-person" src={A.heroPerson} alt="" />
      <div className="glass card cat-chip" style={{ left: 404, top: 639 }}>
        <p className="label-m">UI/UX Design</p>
        <p className="sub">
          200 Courses <i>•</i> 1000+ Students
        </p>
      </div>
      <ProgressCard style={{ left: 842, top: 651 }} />
      <StudentsCard style={{ left: 328, top: 837 }} avatars={A.heroAvatars} />
    </section>
  );
}

function Partners() {
  return (
    <section className="partners">
      {A.partners.map((p, i) => (
        <img key={i} src={p} alt="" />
      ))}
    </section>
  );
}

function Courses() {
  const [active, setActive] = useState("Featured");
  return (
    <section className="courses" id="courses">
      <div className="intro" style={{ top: 72 }}>
        <h2 style={{ width: 588 }}>Discover Your Passion, Build Your Skills</h2>
        <p>
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      <div className="tabs" style={{ top: 294 }}>
        {tabRows.map((row, r) => (
          <div className="tab-row" key={r}>
            {row.map((t) => (
              <button
                key={t}
                className={`tab ${active === t ? "on" : ""}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
            {r === 2 && <span className="more">+ More</span>}
          </div>
        ))}
      </div>

      <div className="course-grid">
        {courses.map((c) => (
          <CourseCard key={c} title={c} />
        ))}
      </div>

      <div className="intro" style={{ top: 1422 }}>
        <h2 className="h-sm">Explore Diverse Learning Paths at Bytespace</h2>
        <p>
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>

      <div className="categories">
        {categories.map((c, i) => (
          <a href="#cat" className="cat" key={c}>
            <span className="cat-icon">
              <img src={A.catIcons[i]} alt="" />
            </span>
            {c}
          </a>
        ))}
      </div>
    </section>
  );
}

function Growth() {
  return (
    <section className="growth">
      <img className="blobs" src={A.blobs} alt="" />
      <img className="blob2" src={A.blob2} alt="" />
      <div className="growth-in">
        <div className="row1">
          <div className="text" style={{ width: 574 }}>
            <h2>Your Path to Professional Growth Starts Here!</h2>
            <p className="body">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="stats">
              {[
                ["12K", "Students"],
                ["70+", "Courses"],
                ["16", "Creators"],
              ].map(([n, l]) => (
                <div key={l}>
                  <b>{n}</b>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="collage" style={{ width: 621, height: 552 }}>
            <CourseCard
              title="Learn Figma from Basic"
              blue
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 373,
                height: 384,
              }}
            />
            <img
              className="shadowed"
              src={A.growthMan}
              alt=""
              style={{ left: 0, top: 12, width: 577, height: 540 }}
            />
            <ProgressCard style={{ left: 345, top: 213 }} />
            <Orn src={A.growthSpring} x={406} y={67} s={215} color={LIME} />
          </div>
        </div>

        <div className="row2">
          <div className="collage" style={{ width: 541, height: 596 }}>
            <div
              className="shadowed woman"
              style={{ left: 28, top: 0, width: 435, height: 596 }}
            >
              <div className="clip">
                <img src={A.growthWoman} alt="" />
              </div>
            </div>
            <Orn src={A.growthSpring2} x={305} y={114} s={215} color={LIME} />
            <div
              className="glass card stat blue"
              style={{ left: 0, top: 44, width: 232 }}
            >
              <p className="label-m">Total Revenue</p>
              <p className="tiny">July 1-28</p>
              <div className="stat-row">
                <b>$120.29</b>
                <span className="pill">+12$</span>
              </div>
              <div className="bar on-blue">
                <b style={{ width: 112 }} />
              </div>
            </div>
            <div
              className="glass card stat blue"
              style={{ left: 0, top: 194, width: 134 }}
            >
              <p className="label-m">Year to Date</p>
              <p className="tiny">2023</p>
              <b className="amt">$1,200.38</b>
              <span className="pill">+12$</span>
            </div>
            <StudentsCard
              style={{ left: 283, top: 413 }}
              avatars={A.growthAvatars}
            />
          </div>
          <div className="text" style={{ width: 580 }}>
            <h2 style={{ width: 391 }}>Create &amp; Manage Courses Easily.</h2>
            <p className="body">
              <strong>ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="checks">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((t) => (
                <li key={t}>
                  <img src={A.check} alt="" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const o = A.ctaOrn;
  return (
    <section className="cta" id="creators">
      <img className="grid" src={A.grid} alt="" />
      <div className="cta-in">
        <h2>Unlock Your Potential as a Creator with ByteSpace</h2>
        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a className="btn" href="#/register">
          Join as Creator
        </a>
      </div>
      <Orn src={o.cone} x={1080} y={0} s={188} color={LIME} />
      <Orn src={o.spiral} x={1110} y={289} s={330} color={LIME} />
      <Orn src={o.springL} x={-118} y={-162} s={385} color={LIME} />
      <Orn src={o.springS} x={353} y={5} s={175} color={WHITE} flip />
      <Orn src={o.coneW} x={-48} y={225} s={188} color={WHITE} />
      <Orn src={o.torus} x={20} y={299} s={342} color={LIME} />
      <Orn src={o.cylinder} x={1226} y={6} s={370} color={WHITE} />
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testi">
      <img
        src={A.tBlobs[0]}
        alt=""
        style={{ left: 842 - 40, top: -241 - 40, width: 1137 * 1.07 }}
      />
      <img
        src={A.tBlobs[1]}
        alt=""
        style={{ left: 395 - 40, top: -138 - 40, width: 672 * 1.12 }}
      />
      <img
        src={A.tBlobs[2]}
        alt=""
        style={{ left: -442 - 40, top: 149 - 40, width: 1137 * 1.07 }}
      />
      <div className="testi-in">
        <div className="testi-head">
          <h2>Discover What Our Community Is Saying</h2>
          <p>
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="testi-cards">
          {testimonials.map((t, i) => (
            <figure key={t.name}>
              <img src={A.tAvatars[i]} alt={t.name} />
              <figcaption>
                <b>{t.name}</b>
                <span>{t.role}</span>
              </figcaption>
              <blockquote>{t.text}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div className="footer-nav">
          <div className="news">
            <Logo dark />
            <p className="s14">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Search</button>
            </form>
            <p className="s12">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <div className="links">
            {footerCols.map((col, i) => (
              <div key={i}>
                {col.map((l) => (
                  <a key={l} href="#!">
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="legal">
          <span>@ 2023 ByteSpace. All rights reserved.</span>
          <div>
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Service</a>
            <a href="#!">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const useHash = () => {
  const [h, setH] = useState(window.location.hash);
  useEffect(() => {
    const on = () => {
      setH(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return h;
};

export default function App() {
  const route = useHash();
  if (route === "#/login") return <Login />;
  if (route === "#/register") return <Register />;
  return (
    <main className="stage">
      <Hero />
      <Partners />
      <Courses />
      <Growth />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
