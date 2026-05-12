import { NavLink } from "react-router-dom";
import heroImage from "../assets/hero.png";
import {
  colors,
  homeActions,
  homeAvatar,
  homeAvatarGreen,
  homeChatHeader,
  homeComposerPreview,
  homeEyebrow,
  homeFeatureCard,
  homeFeatures,
  homeFeatureText,
  homeFeatureTitle,
  homeFinalCta,
  homeFooter,
  homeHero,
  homeHeroContent,
  homeHeroImage,
  homeHeroTitle,
  homeLead,
  homeMessageBubble,
  homeMessageBubbleWide,
  homeMessageMeta,
  homeMessageRow,
  homePage,
  homeProductChat,
  homeProductShot,
  homeProductSidebar,
  homeReactionsPreview,
  homeSidebarLine,
  homeSidebarLineActive,
  homeSidebarLineShort,
  homeSidebarLineStrong,
  homeStatItem,
  homeStatLabel,
  homeStats,
  homeStatValue,
  homeStatusPill,
  homeWindowDot,
  homeWindowDots,
  primaryBtn,
  secondaryBtn,
} from "../styles/common";
import { useAuth } from "../store/authStore";

const featureCards = [
  {
    title: "Channels that stay focused",
    text: "Create public or private spaces for projects, teams, and quick decisions.",
  },
  {
    title: "Direct messages that feel instant",
    text: "Keep one-to-one conversations, files, reactions, and replies in one clean flow.",
  },
  {
    title: "Reminders for important work",
    text: "Set priorities and future reminders without leaving the conversation.",
  },
];

const stats = [
  { value: "Real-time", label: "Socket powered updates" },
  { value: "Private", label: "Workspace based access" },
  { value: "Focused", label: "Channels, DMs, files, threads" },
];

function Home() {
  const { currentUser, isAuthenticated } = useAuth();
  const workspacePath = currentUser?.role === "ADMIN" ? "/admin" : "/workspace";

  return (
    <div style={homePage}>
      <section style={homeHero} aria-label="Slack Clone home">
        <img style={homeHeroImage} src={heroImage} alt="" />

        <div style={homeHeroContent}>
          <p style={homeEyebrow}>Slack-style collaboration for modern teams</p>
          <h1 style={homeHeroTitle}>
            Bring every workspace conversation into one calm, fast app.
          </h1>
          <p style={homeLead}>
            Chat in channels, message teammates, share files, react naturally, and keep
            priority reminders visible without changing how your backend already works.
          </p>

          <div style={homeActions}>
            <NavLink
              to={isAuthenticated ? workspacePath : "/register"}
              style={{ ...primaryBtn, textDecoration: "none" }}
            >
              {isAuthenticated ? "Open workspace" : "Create account"}
            </NavLink>
            <NavLink
              to={isAuthenticated ? workspacePath : "/login"}
              style={{ ...secondaryBtn, textDecoration: "none" }}
            >
              {isAuthenticated ? "Go to dashboard" : "Sign in"}
            </NavLink>
          </div>
        </div>

        <div style={homeProductShot} aria-hidden="true">
          <div style={homeProductSidebar}>
            <div style={homeWindowDots}>
              <span style={homeWindowDot} />
              <span style={homeWindowDot} />
              <span style={homeWindowDot} />
            </div>
            <div style={homeSidebarLineStrong} />
            <div style={homeSidebarLineActive} />
            <div style={homeSidebarLine} />
            <div style={homeSidebarLine} />
            <div style={{ height: "32px" }} />
            <div style={homeSidebarLineShort} />
            <div style={homeSidebarLine} />
          </div>
          <div style={homeProductChat}>
            <div style={homeChatHeader}>
              <span># product-launch</span>
              <span style={homeStatusPill}>Active now</span>
            </div>
            <div style={homeMessageRow}>
              <span style={homeAvatar}>A</span>
              <div>
                <div style={homeMessageMeta}>Akshaya 10:08 AM</div>
                <div style={homeMessageBubbleWide} />
              </div>
            </div>
            <div style={homeMessageRow}>
              <span style={homeAvatarGreen}>M</span>
              <div>
                <div style={homeMessageMeta}>Maya 10:12 AM</div>
                <div style={homeMessageBubble} />
                <div style={homeReactionsPreview}>👍 ❤️ 🎉</div>
              </div>
            </div>
            <div style={homeComposerPreview}>Message #product-launch</div>
          </div>
        </div>
      </section>

      <section style={homeStats} aria-label="Highlights">
        {stats.map((stat) => (
          <div key={stat.label} style={homeStatItem}>
            <strong style={homeStatValue}>{stat.value}</strong>
            <span style={homeStatLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      <section style={homeFeatures} aria-label="Features">
        {featureCards.map((feature) => (
          <article key={feature.title} style={homeFeatureCard}>
            <h2 style={homeFeatureTitle}>{feature.title}</h2>
            <p style={homeFeatureText}>{feature.text}</p>
          </article>
        ))}
      </section>

      <section style={homeFinalCta}>
        <div>
          <h2 style={homeFeatureTitle}>Ready to chat like a real team?</h2>
          <p style={homeFeatureText}>
            Open your workspace and continue with the same backend APIs, routes, and
            socket events already powering the app.
          </p>
        </div>
        <NavLink
          to={isAuthenticated ? workspacePath : "/register"}
          style={{ ...primaryBtn, textDecoration: "none", backgroundColor: colors.accent }}
        >
          {isAuthenticated ? "Launch workspace" : "Start now"}
        </NavLink>
      </section>

      <footer style={homeFooter}>
        <span style={{ color: "#ffffff", fontWeight: 900 }}>Slack Clone</span>
        <span>Channels, DMs, notifications, reminders, and files in one place.</span>
      </footer>
    </div>
  );
}

export default Home;
