import { A } from "./assets";

/* ---------- helpers ---------- */
// 3D ornament = PNG render + a coloured, masked overlay (hard-light blend) exactly as built in Figma
export const Orn = ({ src, x, y, s, color, flip }) => (
  <div className="orn" style={{ left: x, top: y, width: s, height: s, transform: flip ? "scaleX(-1)" : undefined }}>
    <img src={src[0]} alt="" />
    <i style={{ background: color, WebkitMaskImage: `url(${src[1]})`, maskImage: `url(${src[1]})` }} />
  </div>
);
export const LIME = "#d4fb20", WHITE = "#f5f5f6";

export const Avatars = ({ srcs, size, overlap, badge, badgeClass = "" }) => (
  <div className="avatars" style={{ "--s": `${size}px`, "--o": `${overlap}px` }}>
    {srcs.map((s, i) => <img key={i} src={s} alt="" />)}
    <span className={`badge ${badgeClass}`}>{badge}</span>
  </div>
);

export const Logo = ({ dark, href = "#top" }) => (
  <a className={`logo ${dark ? "dark" : ""}`} href={href}>
    <img src={A.logo} alt="" /><span>ByteSpace</span>
  </a>
);

export const ProgressCard = ({ style }) => (
  <div className="glass card progress" style={style}>
    <p className="label-s">Learning Progress</p>
    <p className="big">55%</p>
    <div className="bar"><b style={{ width: 112 }} /></div>
  </div>
);

export const StudentsCard = ({ style, avatars, lime }) => (
  <div className={`glass card students ${lime ? "lime" : ""}`} style={style}>
    <p className="label-m">Happy Students</p>
    <p className="rate"><b>4.5</b> <span>(240)</span> <img src={A.star} alt="" /></p>
    <Avatars srcs={avatars} size={43} overlap={16} badge="2K+" badgeClass={lime ? "dark" : ""} />
  </div>
);

export const courses = [
  "Learn Figma from Basic", "Build Digital Asset", "the Power of Big Data",
  "Balancing Productivity and Self-Care", "Mastering Money Management", "From Idea to Startup Success",
];

export const CourseCard = ({ title, style, blue, dark, plain }) => (
  <article className="course" style={style}>
    <div className="thumb" style={plain ? { background: "#d9d9d9" } : { backgroundImage: `url(${A.courseImg})` }}>
      <div className="chips"><span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span></div>
    </div>
    <div className="course-body">
      <h3>{title}</h3>
      <p className="by">by <em>purepearl studio</em></p>
      <div className="meta">
        <span className="level"><img src={A.signal} alt="" />Beginner</span>
        <Avatars srcs={A.courseAvatars} size={32} overlap={8} badge="26+" badgeClass={blue ? "blue" : dark ? "dark" : ""} />
      </div>
      <p className="price"><b>$25</b><small>/lifetime</small></p>
    </div>
    <p className="course-rate">4.5 <img src={A.starOutline} alt="" /></p>
  </article>
);

