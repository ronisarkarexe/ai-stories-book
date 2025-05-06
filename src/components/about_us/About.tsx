import React from "react";

const About = () => {
  return (
    <section className="text-white p-2 justify-center">
      <h1 className="text-4xl ">About us</h1>
      <article className="p-5">
        <div className="p-2">
          <h3 className="m-2 text-2xl">
            Welcome to StorySparkAI – your open-source hub for limitless
            storytelling.
          </h3>
          <p>
            At StorySparkAI, we believe every story has many sides—and every
            idea deserves to spark a world of possibilities. Built with creators
            in mind, our platform empowers writers, thinkers, and enthusiasts to
            generate and share multiple story variations from just one prompt
            using the power of artificial intelligence.
          </p>
        </div>
        <div className="p-2">
          <h3 className="m-2 text-2xl">Why StorySparkAI?</h3>
          <p>
            StorySparkAI was born from a simple vision: To make storytelling
            more dynamic, inclusive, and inspiring.
            <br />
            Whether you’re:
            <ul className="list-disc">
              <li>A writer overcoming creative blocks,</li>
              <li>
                A content creator experimenting with different tones and
                perspectives, or
              </li>
              <li>
                An enthusiast exploring the boundaries of AI-powered narratives,
              </li>
            </ul>
          </p>
        </div>
        <div className="p-2">
          <h3 className="m-2 text-2xl">What We Offer</h3>
          <ul className="list-disc">
            <li>
              {" "}
              AI-Generated Story Variants: Enter a prompt and watch different
              story paths unfold.
            </li>
            <li>
              Open-Source Flexibility: Customize, contribute, and
              collaborate—our code is yours to explore.
            </li>
            <li>
              Community-Driven Creativity: Connect with like-minded creators,
              share your outputs, and inspire others.
            </li>
          </ul>
        </div>
        <div className="p-2">
          <h3 className="m-2 text-2xl">Our Mission</h3>
          <p>
            To democratize storytelling through open technology, helping
            creative minds everywhere unlock new dimensions of narrative
            exploration.
          </p>
        </div>
        <div className="p-2">
          <h3 className="m-2 text-2xl">Join the Spark</h3>
          <p>
            Whether you're here to create, contribute, or simply be inspired,
            StorySparkAI is your space to imagine freely. Together, let’s build
            a future where every prompt leads to infinite possibilities.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
