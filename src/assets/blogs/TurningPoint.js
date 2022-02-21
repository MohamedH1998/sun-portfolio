import React from "react"
import { Helmet } from "react-helmet"
const turningPoint = () => {
  return (
    <div>
      <Helmet>
        <title>Turning Point</title>
        <meta name="description" content="Deciding to move into tech." />
      </Helmet>
      <section className="pb-6">
        <p className="pb-2 md:pb-4 md:text-xl">
          So, where to begin. I am a Forensic Science grad working in biotech,
          who's looking to transition into a developer role (yes, I know). I
          thought that it would be really interesting to document my journey
          into tech through a series of short blogs as a means of tracking my
          progress, but also for extrinsic motivation (the embarrassment of
          giving up after I’ve set such a public goal). Why the name{" "}
          <i>
            <b>The Iteration Game?</b>
          </i>{" "}
          (the name of my previous site).
        </p>
        <p className="pb-2 md:pb-4 md:text-xl">
          Great question. Most people are familiar with the 10,000 hour rule,
          which goes something like 'to achieve mastery in a craft, you must
          dedicate 10,000 hours of deliberate practise to it'. Whilst this may
          or may not be true, the notion of repetition to develop proficiency is
          undisputed. For some of us who are undecided on what to master in,
          this may seem beyond our reach. So what's the alternative? Another
          excellent question, thank you for asking…
          <b>
            <i>10,000 iterations instead of 10,000 hours.</i>
          </b>
          <i>"Solve via iteration. Then get paid via repetition"</i> – Naval
          Ravikant. Whilst this can be interpreted as business advice, it
          applies to the way we navigate through our lives. The most successful
          people are those who go quickly from failure to failure, adapting and
          iterating in the process to continually progress. In my case, it's to
          continuously build, destroy, and rebuild my career in order to find
          one that I can dedicate the magical 10,000 hours to, however many
          iterations it may take (very dramatic, I know). I hope to explore the
          tech landscape to identify exactly what sort of developer I want to
          be.
        </p>
        <p className="pb-2 md:pb-4 md:text-xl">
          Starting again is somewhat daunting. The idea that your efforts in
          directing your career trajectory has been futile is no fun. I've spent
          3 years doing a Forensic Science degree, 1.5 years in the biotech
          industry and now I want to transition into tech?
          <i>(warning: anecdote)</i>
          If you're climbing a mountain and come to the end of the trail, thus
          preventing you from completing your ascent, the right thing to do
          would be to turn around and pick a different path, irrespective of the
          progress you've made (or give up, but that's not an option here).
          Virtues (you can debate whether that's a virtue or not) are easy to
          speak about anecdotally, but difficult to act on. If I truly believe
          that starting again would be the best thing to do if one reaches a
          dead-end, you'd assume that I would act on that, right? Well, that's
          the plan.
        </p>
        <p className="pb-2 md:pb-4 md:text-xl">
          This is going to be <i>fun.</i>
        </p>
      </section>
    </div>
  )
}

export default turningPoint
