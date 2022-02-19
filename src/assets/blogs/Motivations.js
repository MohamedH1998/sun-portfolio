import React from "react"
import { Helmet } from "react-helmet"
const Motivations = () => {
  return (
    <div>
      <Helmet>
        <title>Motivations</title>
        <meta
          name="description"
          content="A dive into my motivations in wanting to becoming a developer."
        />
      </Helmet>
      <section className="pb-6">
        <p className="pb-4 md:pb-10 md:text-3xl">
          So, my aim for this post was to see how well I could romanticise the
          role of a developer and the tech industry as a whole. These are my
          assumptions coming into and exploring the field, it will be
          interesting to see how my perspective changes over time.
        </p>
        <p className="pb-4 md:pb-10 md:text-3xl">
          In the world of biotech, my experience has been that being able to
          start a project is essentially impossible without decades of
          experience, a lot of capital, infrastructure, and permission behind
          you (let's call these <i>ECIP</i>).
        </p>

        <p className="pb-4 md:pb-10 md:text-3xl">
          The tech landscape, in contrast, seems to be the complete opposite of
          this, from a developer's perspective at least. Developing software
          requires a lot less capital and infrastructure in comparison to a
          biotech endeavour. Additionally, in terms of permission, there is no
          need to have your bootstrapped project syphoned by regulatory bodies
          or certification boards for accreditation, the only limiting factors
          here seem to be: a. your ability to code, and b. your ability to
          generate good ideas.
        </p>
        <p className="pb-4 md:pb-10 md:text-3xl">
          Whilst I have no good ideas, having the option to pursue an idea at my
          own whim is something that I like the sound of.
        </p>
        <p className="pb-4 md:pb-10 md:text-3xl">
          Keeping with the theme of iteration, I mentioned in the previous post
          that the most successful people are those who learn quickly from
          failure. I believe that this framework of thinking goes hand in hand
          with being a developer. As something that requires minimal <i>ECIP</i>
          , failure is likely to happen much quicker and thus increasing the
          possible number of iterations, which subsequently accelerates the
          learning curve. The number of iterations possible as a developer
          within a year is much more than that of a process developer in
          biomanufacturing.
        </p>
        <p className="pb-4 md:pb-10 md:text-3xl">
          Another reason why being a developer is attractive to me is that the
          upper limits of the role seem to be only dependent on my ability as a
          developer. For a second, let's forget all the other factors that are
          important in an app development process and focus on just the roles
          that the developers play. It is easy to imagine that the best
          developer would be several orders of magnitude better and quicker in
          developing an app than their novice counterpart. Whereas, if we were
          to compare the best lab techs to a junior lab tech, I would say that
          best case scenario, there is a 5X difference in how much better and
          quicker they can perform their experiments. This is because there are
          only a few number of ways you can streamline your tasks before the
          time-dependent chemical reactions become a limiting factor. Needless
          to say, a career in the former would be much more fruitful.
        </p>
      </section>
      <section className="pb-4 md:pb-10 md:text-3xl">
        <p className="mb-2 md:pb-10 md:text-3xl">
          These reasons that I have laid out are the ones that I think are not
          the most intuitive, other reasons include:
        </p>
        <ul className="md:pb-10 md:text-3xl list-decimal list-inside">
          <li>
            Continuous Development- constantly at the forefront of knowledge
          </li>
          <li>High Demand- demand is only going to increase</li>
          <li>Remote working- ideal for personal life</li>
          <li>£££- £££ </li>
          <li>
            Broad field- a lot of room for vertical and horizontal career
            development
          </li>
          <li>
            Collaboration- open-source development with collaboration from
            people from all over the world.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Motivations
