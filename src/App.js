import logo from "./logo.png";
import profile from "./profile-pic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import FlipCard from "./FlipCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

import { InlineWidget } from "react-calendly";
//import { Container } from "react-bootstrap";

// flip card text //
const cards = [
  {
    id: "1",
    variant: "click",
    front: "Ask better questions; get better answers.",
    back: "Stephanie asks questions. For those who want a quick solution to a problem, this approach may not work. Businesses looking for a meaningful solution to the problem will have success working with a partner who asks questions. Questions reflect a push for context, for understanding, and for alignment. Without them, solutions are incomplete."
  },
  {
    id: "2",
    variant: "click",
    front: "Equity is \"always on.\"",
    back: "Diversity, equity, inclusion, belonging, justice… None of these concepts can be reduced to a list of tasks to complete, because none of us can know what it looks like to fully achieve them. Stephanie helps clients and colleagues successfully incorporate meaningful equity principles into how they do their work, with each other, on every project, all of the time."
  },
  {
    id: "3",
    variant: "click",
    front: "The more voices, the better.",
    back: "We each experience our surroundings differently. What is said, how it is said, what isn't said… And, from that, we each view the problems and challenges differently. For that reason, it's essential to engage others when launching projects, driving change, solving problems. And Stephanie takes this approach through her work."
  }
];

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <body>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Grise Consulting</h3>
          </header>
            <div className="intro-text">
              <p>
                Stephanie Grise has spent nearly 20 years developing a reputation as
                a critical thought partner with deep legal and business acumen, a
                commitment to people and community, and a love for laughing. The
                philosophy behind Stephanie's work is simple: listen radically;
                inquire deliberately; and center, care for, and celebrate others.
                And with this philosophy at the forefront, Stephanie counsels
                businesses on how to do meaningful work, equitably.
              </p>
            </div>
            <div className="flip-card-title">Stephanie believes these three principles make her skills unique:</div>

{/*flip cards*/}
            <div className="container">
                <div className="row h-100">
                  <div className="flip-card-inner">
                  <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
                    {cards.map((card) => (
                      <FlipCard key={card.id} card={card} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="about-row">
              <div className="profile-image">
                <img src={profile} className="profile" alt="of Stephanie" />
              </div>
              <div className="about-group-text">
                <div className="paragraph-header">Growth with Heart and Focus</div>
                <p className="about-text">
                  As a trusted leader and advisor, Stephanie's work exists where
                  transactional law, people advocacy, and community action intersect.
                  Her legal experience has focused on driving community and economic
                  development through state and local incentives, banking, real
                  estate, public finance, tax credits, and lending. She has led change
                  management efforts to implement valuable and business-aligned
                  projects that also influence strategy, and design and drive change
                  to advance equity within the legal industry. She effectively manages
                  people, committing herself to talent development and growth. And she
                  has a special heart for exploring the needs and voices of others,
                  through formal people leadership and informal mentorship and
                  coaching, to help them express and achieve their own definitions of
                  success.
                </p>
              </div>
              </div>
            <div className="Calendly">
              Want to book a consultation? Schedule here:
              <InlineWidget
                url="https://calendly.com/stephaniegrise"
                styles={{ minWidth: "320px", height: "950px" }}
              />
            </div>
            <div className="bottom-text">
              <div className="text-email">
                <p>
                  Stephanie is also available for speaking engagements, panels, and
                  golf scrambles.
                </p>
                <div className="icon-email">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:stephanie@griseconsulting.com">
                    <span>stephanie@griseconsulting.com</span>
                  </a>
                </div>
              </div>
            </div>
          </body>
        </div>
      <Footer />
    </div>
  );
}

export default App;
