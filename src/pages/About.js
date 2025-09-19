import React from "react";
import "./About.css"; // Optional: For styling

// Define image sources
const coldSoccerPic1 = "assets/images/coldsoccerpic.jpg";
const coldSoccerPic2 = "assets/images/coldsoccerpic2.jpg";
const itaSoc = "assets/images/itasoc.jpg";
const lisboaSurf = "assets/images/lisboasurf.jpg";
const sdSurf = "assets/images/sdsurf.jpg";
const dj = "assets/images/dj.png";
const dj2 = "assets/images/dj2.jpeg";

function About() {
  return (
    <div className="about-container">
      <h1>About Me: My Interests</h1>

      <section className="about-section">
        <h2>Soccer</h2>
        <p>
          I love playing and watching soccer. I’ve been a fan of Arsenal in the
          Premier League since I became obsessed with them playing the soccer
          video game FIFA twelve years ago. I still play soccer frequently for
          fun. When I’m at school in Boston, I play on various intramural teams
          and at pickup games on some weeknights. When I was working in Italy, I
          played on a team with all Italian-speaking teammates, which was a
          super fun opportunity to immerse myself in the culture as well as
          share in a sport I love, which served as a universal language that
          connected me to my teammates.
        </p>
        <div className="image-row">
          <div className="image-container">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/lZGbAguEfAY"
              title="Pickup goal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="caption">Playing soccer in Boston</p>
          </div>
          <div className="image-container">
            <img
              src={itaSoc}
              alt="Picture of my soccer team in Italy"
              className="about-image"
            />
            <p className="caption">My Italian soccer team</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Music</h2>
        <p>
          I’ve played guitar since I was in middle school, after watching the
          movie “Sing” with my grandmother and sister. The artistic excellence
          displayed by the two porcupines in the movie who could shred on the
          guitar compelled me to start learning to play songs I liked on my
          dad’s guitar. Slowly, I started playing more, getting better, and
          getting greater enjoyment from playing, which became a cycle that
          embodied a deep love for the instrument.
        </p>
        <p>
          In high school, I played in bands at school and outside of school and
          started to write my own songs, combining my passion and talent for
          guitar reluctantly with my ability to sing (just about well enough to
          be the frontman for a rock band). I have music published on Spotify
          under the moniker of my high school band, Peabrain, and am currently
          working on an album with my band at college, which goes by the
          similarly visionary name of Pigeonhelmet.
        </p>
        <iframe
          style={{ border: "none" }}
          src="https://open.spotify.com/embed/artist/67FmeW4aEHnEA4WGxPPo8a?utm_source=generator"
          width="100%"
          height="524"
          frameBorder="0"
          allowfullscreen=""
          title="Spotify Player"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <p>
          I've also played in a couple other bands during my time at school in
          Boston, including playing rhythm guitar and holding down lead vocals
          for Youth Overrided, and playing drums and handling vocals for
          Westland Project.
        </p>
        <div className="image-row">
          <div className="image-container">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/MiTvgeGOftE?si=BZbOg7mJleAsrzEL"
              title="Solo at Skulls"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="caption">Ripping a guitar solo with my band</p>
          </div>
          <div className="image-container">
            <iframe
              classname="video"
              src="https://www.youtube.com/embed/spGsueMTI_A?si=SKvfItNAH6VpBdrt"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="caption">
              A full set with my band from November 2024
            </p>
          </div>
        </div>
        <p>
          I also started DJing in the past year, after discovering my love for
          electronic music in Ibiza. I love playing (and making) afro house,
          bass house, and drum and bass. I also enjoy playing more commercial
          sets at gigs around Boston.
        </p>
        <div className="image-row">
          <div className="image-container">
            <img
              src={dj}
              alt="DJing at Cask and Flagon in Boston"
              className="about-image"
            />
            <p className="caption">DJing at Cask and Flagon in Boston</p>
          </div>
          <div className="image-container">
            <img
              src={dj2}
              alt="DJing a private event on a boat on the Charles River"
              className="about-image"
            />
            <p className="caption">
              DJing a private event on a boat on the Charles River
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Philosophy</h2>
        <p>
          Before my junior year of high school, I was almost exclusively
          interested in STEM. My experience in the humanities had left me
          thinking that the discipline lacked both concrete answers about life
          and the rigor required to arrive at such answers. This was until I
          took Jared D’Onofrio’s AP Language and Composition course during my
          junior year at Francis Parker School. He opened my eyes to how the
          analysis of literature could inspire new insights about the nature of
          ourselves and our reality. This realization hit me like a ton of
          bricks and led me down a rabbit hole of philosophy podcasts, and,
          eventually, philosophy books and essays, which fundamentally changed
          the way I saw the world. I began to appreciate the beauty and
          complexity of the human experience, which I find to be derived from
          its inevitable end and intrinsic chaos.
        </p>
        <p>
          The work of the Existentialists, particularly those in the Absurdist
          camp, speaks to me the most. This group of authors has most influenced
          my philosophy of life, which can be simplified roughly to the idea
          that the lack of inherent meaning in our existence is liberating, as
          this lack of predetermined meaning gives us the opportunity,
          circumstance and time permitting, to carve out almost whatever form of
          meaning we desire. I’ve recently taken particular interest in Guy
          Debord’s The Society of the Spectacle, which I find to be even more
          applicable to today’s world, where social media and consumerism have
          taken his concept of the Spectacle to extremes that perhaps even he
          could not have foreseen, than Debord’s when he wrote it in 1967.
        </p>
      </section>

      <section className="about-section">
        <h2>Languages</h2>
        <p>
          As a Latin American, I grew up around spoken Spanish at my
          grandparents’ house, then deepened my knowledge with studies in high
          school, and, in the past couple years, conversations in Spanish with
          people in Madrid, Sevilla, Barcelona, Medellin, and San Juan to
          achieve a level somewhere between proficiency and fluency. My
          knowledge of Spanish formed the basis of my studies of French at
          college, and my learning of Italian, somewhat out of necessity, during
          my four months working in Perugia, Italy.
        </p>
        <p>
          I love furthering my knowledge and understanding of these languages
          through individual study, films, music, and conversations, because I
          believe that everyone has their own story to tell, and that, within
          every story, is some nugget of wisdom or some cool experience that
          promises to enhance the life of others, and that, by learning these
          languages, I increase the sample size of potential people I can form
          connections and have these exchanges with.
        </p>
      </section>

      <section className="about-section">
        <h2>Surfing</h2>
        <p>
          I discovered a passion for surfing only after moving to Boston for
          college. My first summer back home in San Diego, some experienced
          friends brought me out and I felt the thrill of catching a wave for
          the first time. I've had the pleasure of surfing at home in San Diego,
          as well as in Rhode Island, Portugal, and Puerto Rico. Although I am
          by no means a pro, even if I only catch a few good waves, I still get
          to experience my favorite part of surfing: the tranquility I feel for
          the rest of the day after being in the ocean.
        </p>
        <div className="image-container" style={{ height: "auto" }}>
          <iframe
            src="https://www.youtube.com/embed/X6slBMJuE_Q?si=drVcojcLrcJdC0wy"
            title="YouTube video player"
            style={{
              width: "100%",
              height: "400px",
              minHeight: "300px",
              maxWidth: "700px",
              display: "block",
              margin: "0 auto",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="caption">
            Catching a wave with my buddy Aiden in San Diego
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
