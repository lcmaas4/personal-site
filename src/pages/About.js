import React from 'react';
import './About.css'; // Optional: For styling

// Define image sources
const coldSoccerPic1 = 'assets/images/coldsoccerpic.jpg';
const coldSoccerPic2 = 'assets/images/coldsoccerpic2.jpg';
const itaSoc = 'assets/images/itasoc.jpg'
const lisboaSurf = 'assets/images/lisboasurf.jpg';
const sdSurf = 'assets/images/sdsurf.jpg';
const pickupGoal = 'assets/images/pickupgoal.mov'

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <section className="about-section">
        <h2>Soccer</h2>
        <p>
          I love playing and watching soccer. I’ve been a fan of Arsenal in the Premier League since I became 
          obsessed with them playing FIFA twelve years ago. I watch all of their games, and am perhaps more 
          emotionally invested in them than is healthy. I still play soccer frequently for fun; when I’m at school 
          in Boston, I play on various intramural teams and at pickup games on some weeknights. When I lived in Italy
          for four months in fall 2023, I played on a team with all Italian-speaking teammates, which was a super fun opportunity to 
          immerse myself in the culture as well as share in a sport I love, which served as a universal language to 
          connect me to my teammates.
        </p>
        <div className="image-row">
          <div className="image-container">
          <iframe className="video"
            src="https://www.youtube.com/embed/lZGbAguEfAY"
            title="Pickup goal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <p className="caption">Me playing soccer in Boston</p>
          </div>
          <div className="image-container">
            <img src={itaSoc} alt="Picture of my soccer team in Italy" className="about-image"/>
            <p className="caption">Me with my Italian soccer team</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Music</h2>
        <p>
          I’ve played guitar for about eight years, after watching the movie “Sing” with my grandmother and sister, 
          in which there were two porcupines who could shred like nobody’s business, which compelled me to start 
          learning songs I liked on my dad’s guitar, which, in turn, led me to become obsessed with the instrument. 
          In high school, I played in bands at school and outside of school and started to write my own songs, 
          combining my passion and talent for guitar reluctantly with my ability to sing (just about well enough to 
          be the frontman for a rock band). I have music published on Spotify under the moniker of my high school 
          band, Peabrain, and am currently working on an album with my band at college, which goes by the similarly 
          visionary name of Pigeonhelmet.
        </p>
        <iframe 
          style={{ border: 'none' }} src="https://open.spotify.com/embed/artist/67FmeW4aEHnEA4WGxPPo8a?utm_source=generator" 
          width="100%" height="352" frameBorder="0" allowfullscreen="" title="Spotify Player"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
      </section>

      <section className="about-section">
        <h2>Philosophy</h2>
        <p>
          Before my junior year of high school, I was almost exclusively interested in STEM. I thought, unfairly, 
          that the humanities lacked rigor and concrete answers. This was until I took Jared D’Onofrio’s AP Language 
          and Composition at Francis Parker School. He opened my eyes to how the analysis of literature could yield 
          new insights about the nature of ourselves and our reality. This led me down a rabbit hole of philosophy 
          podcasts, and, eventually, books, which fundamentally changed the way I saw the world. For the first time, 
          I was able to appreciate the beauty and complexity of the human experience, which I find to be derived from 
          its inevitable end and inherent chaos; its inability to be measured by equations. The work of the 
          Existentialists, particularly those in the Absurdist camp, speaks to me the most. Much of my everyday 
          outlook on life, reduced roughly to the idea that the lack of inherent meaning in our existence is 
          liberating, as it gives us the opportunity to carve it out for ourselves in whatever form we desire, is 
          influenced by this camp of thinkers. I’ve recently taken particular interest in Guy Debord’s The Society of 
          the Spectacle, which I find to be even more applicable to today’s world than Debord’s when he wrote it in 
          1967 where social media and consumerism have taken his concept of the Spectacle to extremes that perhaps 
          even he could not have foreseen. Particularly interesting to me, and perhaps a bit meta as I am currently 
          in the process of creating my personal website, is the idea of the “brand-that-is-you,” the personal brand 
          we use to encapsulate our identity as a commodity.
        </p>
      </section>

      <section className="about-section">
        <h2>Languages</h2>
        <p>
          As a Latin American, I grew up around spoken Spanish at my grandparents’ house, supplementing it with 
          studies in high school, and, more recently, conversations on the streets of Madrid at six in the morning 
          after nights out, to achieve a level somewhere between proficiency and fluency. My understanding of Spanish 
          has formed the basis of my studies of French at college, and my learning of Italian, somewhat out of 
          necessity, during my four months working in a small city in Italy. I enjoy furthering my knowledge and 
          understanding of these languages through individual study, films, music, and conversations, because I 
          believe that everyone has their own story to tell, and that, within every story, is some nugget of wisdom 
          or some cool experience that promises to enhance the life of others, and that, by learning these languages, 
          I increase the sample size of potential people I can form connections and have these exchanges with.
        </p>
      </section>

      <section className="about-section">
        <h2>Surfing</h2>
        <p>
          It’s fun! I like it!
        </p>
      </section>
    </div>
  );
}

export default About;
