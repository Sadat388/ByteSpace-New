import { useState } from "react";
import { A } from "./assets";
import { Orn, LIME, WHITE, StudentsCard, CourseCard } from "./shared";

const Field = ({ label, type = "text", placeholder, value, onChange }) => (
  <label className="field">
    <span>{label}</span>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </label>
);

const FacebookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#242528" aria-hidden="true">
    <path d="M13.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.4-1.7 1.8-1.7h1.5V4.2C16.1 4.1 15.2 4 14.2 4 11.9 4 10.3 5.4 10.3 8v2.8H7.5V14h2.8v8h3.2z" />
  </svg>
);
const GoogleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#242528" aria-hidden="true">
    <path d="M21.35 11.1H12v2.9h5.35c-.5 2.4-2.5 3.9-5.35 3.9a6 6 0 1 1 0-12c1.5 0 2.8.5 3.8 1.4l2.2-2.2A9 9 0 0 0 12 3a9 9 0 1 0 0 18c5.2 0 8.6-3.6 8.6-8.8 0-.4 0-.8-.1-1.1z" />
  </svg>
);

/* Shared split layout: blue grid + marketing copy + course collage on the left, white form card on the right */
function AuthLayout({ title, text, children }) {
  const o = A.ctaOrn;
  return (
    <main className="stage auth">
      <img className="grid" src={A.grid} alt="" />
      <a className="auth-logo" href="#/"><img src={A.logo} alt="ByteSpace" /></a>

      <div className="auth-copy">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <CourseCard plain dark title="Build Digital Asset" style={{ position: "absolute", left: 125, top: 395 }} />
      <CourseCard dark title="the Power of Big Data" style={{ position: "absolute", left: 236, top: 305 }} />
      <Orn src={o.torus} x={145} y={325} s={120} color={LIME} />
      <Orn src={o.cone} x={115} y={730} s={140} color={LIME} />
      <Orn src={o.springS} x={495} y={640} s={130} color={WHITE} flip />
      <StudentsCard lime avatars={A.heroAvatars} style={{ left: 349, top: 742 }} />

      <section className="auth-card">{children}</section>
    </main>
  );
}

export function Register() {
  const [f, setF] = useState({ name: "", email: "", password: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  return (
    <AuthLayout
      title="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <form onSubmit={(e) => { e.preventDefault(); console.log("register", f); }}>
        <p className="eyebrow">Create an Account</p>
        <h1>Welcome to ByteSpace</h1>
        <div className="fields">
          <Field label="Full Name" placeholder="Jamie Davis" value={f.name} onChange={set("name")} />
          <Field label="Email" type="email" placeholder="designer@example.com" value={f.email} onChange={set("email")} />
          <Field label="Password" type="password" placeholder="********" value={f.password} onChange={set("password")} />
        </div>
        <button className="btn auth-btn">Continue</button>
      </form>
      <p className="switch">Already have an account? <a href="#/login">Login</a></p>
    </AuthLayout>
  );
}

export function Login() {
  const [f, setF] = useState({ email: "", password: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  return (
    <AuthLayout
      title="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <form onSubmit={(e) => { e.preventDefault(); console.log("login", f); }}>
        <p className="eyebrow">Sign In</p>
        <h1>Welcome Back</h1>
        <div className="fields">
          <Field label="Email" type="email" placeholder="designer@example.com" value={f.email} onChange={set("email")} />
          <Field label="Password" type="password" placeholder="********" value={f.password} onChange={set("password")} />
        </div>
        <button className="btn auth-btn">Sign In</button>
      </form>
      <div className="or"><i /><span>or</span><i /></div>
      <div className="social">
        <button type="button" aria-label="Continue with Facebook"><FacebookIcon /></button>
        <button type="button" aria-label="Continue with Google"><GoogleIcon /></button>
      </div>
      <p className="switch">New user? <a href="#/register">Create an account</a></p>
    </AuthLayout>
  );
}
