import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <div className="main__copy">
          <h1>Get Fit Anywhere, Anytime</h1>
          <p>
            Kick-start your fitness journey with Flexifit AI, your personal AI
            trainer that brings expert-guided workouts right to your home.
            Whether you're a busy professional or just starting your fitness
            journey, Flexifit AI offers tailored workout programs, real-time
            feedback, and progress tracking to help you achieve your fitness
            goals.
          </p>
          <button>Start Your Free Trial</button>
          <a href="#about">Learn More About Us</a>
        </div>
        <img className="main__img" src="src/assets/images/jump.gif" alt="" />
      </main>

      <section className="about">
        <h2>About Flexifit AI</h2>
        <p>
          At Flexifit AI, we believe that everyone deserves the opportunity to
          be fit and healthy, regardless of their schedule or location. Our
          intelligent personal trainer uses advanced AI and machine learning
          technologies to provide personalized workout programs, real-time
          feedback, and detailed progress tracking. Join us and see how easy it
          is to integrate fitness into your daily routine.
        </p>
        <h3>Get Started in 3 Simple Steps</h3>
        <ul className="about__list">
          <li className="about__card">
            <img
              className="main__img"
              src="src/assets/images/jump.gif"
              alt=""
            />
            <h4>Sign Up and Set Your Goals</h4>
            <p>
              Create an account and tell us about your fitness goals and current
              fitness level.
            </p>
          </li>
          <li className="about__card">
            <img
              className="main__img"
              src="src/assets/images/jump.gif"
              alt=""
            />
            <h4>Follow Your Personalized Workout Plan</h4>
            <p>
              Get access to customized workout programs designed specifically
              for you. Follow along with real-time feedback to ensure proper
              form and maximize results.
            </p>
          </li>
          <li className="about__card">
            <img
              className="main__img"
              src="src/assets/images/jump.gif"
              alt=""
            />
            <h4>Track Your Progress and Stay Motivated</h4>
            <p>
              Monitor your progress with detailed analytics and reports.
              Celebrate your achievements and stay motivated with our built-in
              reward system.
            </p>
          </li>
        </ul>
        <button>Start Your Free Trial</button>
      </section>

      <section className="value-props">
        <h2>Why Choose Flexifit AI?</h2>
        <ul>
          <li>
            <strong>Convenience:</strong> Workout anywhere, anytime with just a
            webcam and internet connection.
          </li>
          <li>
            <strong>Personalized Programs:</strong> Tailored workout plans based
            on your fitness level and goals.
          </li>
          <li>
            <strong>Real-Time Feedback:</strong> Ensure proper form and maximize
            your workout efficiency with instant feedback.
          </li>
          <li>
            <strong>Progress Tracking:</strong> Detailed analytics to monitor
            your improvements and stay motivated.
          </li>
        </ul>
      </section>

      <h1 className="bold">
        H1 The quick brown fox jumps over the lazy dog Bold{" "}
      </h1>
      <h2 className="semi-bold">
        H2 The quick brown fox jumps over the lazy dog SemiBold
      </h2>
      <h3 className="medium">
        H3 The quick brown fox jumps over the lazy dog Medium
      </h3>
      <h4 className="medium">
        H4 The quick brown fox jumps over the lazy dog medium
      </h4>
      <h5 className="medium">
        H5 The quick brown fox jumps over the lazy dog medium
      </h5>

      <p className="regular">
        p The quick brown fox jumps over the lazy dog Regular
      </p>
      <p className="extra-light">
        p The quick brown fox jumps over the lazy dog Extra Light
      </p>
      <button>Button The quick brown fox jumps over the lazy dog</button>
    </>
  );
};

export default HomePage;
