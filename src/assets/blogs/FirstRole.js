import React from "react"
import photo from "../images/techstack.png"
import { Helmet } from "react-helmet"
const FirstRole = () => {
  return (
    <div>
      <Helmet>
        <title>My first developer role</title>
        <meta
          name="description"
          content="Sharing the process I took to land my first developer role, including learning resources and useful blogs."
        />
      </Helmet>
      <section className="pb-6 md:pb-10 md:text-3xl">
        <p>
          I have finally landed a developer role and after sharing the news with
          some friends, I got questions about what I had done to land the role.
          Below I go into detail about my journey, covering most of the courses
          that I have completed along with the reasons why. The process seemed
          extremely mystified to me when I was starting out, hopefully this
          helps demystify the whole process.
        </p>
      </section>
      <section className="pb-6 md:pb-10 md:text-3xl">
        <h5 className=" pb-4 text-2xl md:text-4xl md:text-5xl ">Content</h5>
        <ol className="list-decimal list-inside">
          <li>Is coding for me?</li>
          <li>Coding is for me, now what?</li>
          <li>
            I think I have a decent grasp on CS fundamentals, what kind of
            develoepr do I want to be?
          </li>
          <li>What should I learn and how?</li>
          <li>Networking and applying for roles</li>
        </ol>
      </section>
      <section className="pb-6 md:pb-10 md:text-3xl">
        <h5 className=" pb-4 text-2xl md:text-4xl">Is coding for me?</h5>
        <p className="">
          There were a few misconceptions I had when I was looking to start
          learning how to code, namely having to be a maths wiz, however, most
          courses don&#39;t require any sort of prerequisite knowledge. I
          stumbled across a{" "}
          <a
            className="underline underline-offset-1 "
            href="https://www.udemy.com/course/the-modern-python3-bootcamp/"
          >
            Python course
          </a>{" "}
          and decided to just do it without much thinking. Personally, I think
          this course was a great starting point as it required no prerequisite
          knowledge, and I found the Python syntax (the way the code is written)
          was beginner friendly as it is written quite similarly to English.
        </p>
      </section>
      <section className="pb-6 md:pb-10 md:text-3xl">
        <h5 className=" pb-4 text-2xl md:text-4xl">
          Coding is for me, now what?
        </h5>
        <p className="">
          After watching YouTube videos, reading blogs and posts on
          r/cscareerquestions about people who have made the transition into
          tech, one learning resource that kept coming up frequently was{" "}
          <a
            className="underline underline-offset-1 "
            href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
          >
            Harvards CS50 Introduction to Computer Science
          </a>
          . This really changed the game for me. I was walked through
          fundamental computer science concepts at a very beginner friendly way,
          which I think served me well in my later courses.
          <br></br>
          <br></br>
          Additionally, the programming language issued in the course is C,
          which I think is a lot more difficult to grasp than languages like
          JavaScript and Python. But again, because of this, I found my
          transition into the languages that I am now using a lot easier because
          I started with C. <strong>[HIGHLY RECOMMEND]</strong>.
        </p>
      </section>
      <section className="pb-6 md:pb-10 md:text-3xl">
        <h5 className=" pb-4 text-2xl md:text-4xl">
          3. I think I have a decent grasp on computer science fundamentals,
          what kind of developer/engineer do I want to be?
        </h5>
        <p className="">
          Software engineering/ developing is the most loaded term ever, I spent
          most of my time trying to decide what kind of developer I wanted to
          be, I had no idea how to choose between front-end dev, back-end dev,
          mobile dev, game dev, devOps…the list goes on (if none of this makes
          sense to you, dont worry).
          <br></br>
          <br></br>
          Most of the articles that I have read tell people to start here- find
          out what type of developer you want to be and learn the appropriate
          skills. I had a look at a{" "}
          <a
            className="underline underline-offset-1 "
            href="https://www.technojobs.co.uk/info/developer-guides/the-different-types-of-developer-jobs.phtml"
          >
            list of different types of developers
          </a>{" "}
          and eliminated the ones that I knew I did not want to become. From
          there, I had a look at the job requirements for as many entry-level
          ‘software related jobs I could find in my local area, identifying
          which technologies/coding languages were sought after the most.
          <br></br>
          <br></br>
          <strong>HTML, CSS, JavaScript, and Python</strong> were popping up
          time and time again. These are used in{" "}
          <strong>Web Development</strong>, and as I have come across numerous
          articles that stated Web Development to be the easiest point of entry
          into tech, I decided to take that route.
        </p>
      </section>
      <div className="pb-4">
        <img src={photo} className="mb-2" alt="" />
        <p className="italic text-small md:pb-10 md:text-2xl">
          This is a table I made on notion, noting the job title, tech stack and
          specific requirements along with the link to the job post (feel free
          to drop me message if you want the table to us for yourself).
        </p>
      </div>
      <section className="pb-4">
        <h5 className=" pb-4 text-2xl md:text-4xl">
          Deciding on what to learn and how to learn it.
        </h5>
        <p className="pb-6 md:pb-10 md:text-3xl">
          Whilst there are a lot of free resources online, I felt that I would
          benefit a lot more if I bought a Udemy course, especially since I
          enjoyed the Python one so much. As I decided on the Web Development
          route, I looked for related courses, sorted by popularity and started
          a{" "}
          <a
            className="underline underline-offset-1 "
            href="https://www.udemy.com/course/the-web-developer-bootcamp/"
          >
            Web Developer Bootcamp
          </a>{" "}
          after having compared it with job descriptions for web dev roles.
        </p>
        <p className="pb-6 md:pb-10 md:text-3xl">
          Half-way through the course, I ended up getting really stuck at one
          section, and after rewatching all the lectures 3 times, I decided that
          should supplement this course with another{" "}
          <a
            className="underline underline-offset-1 "
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
          >
            Web Development Bootcamp
          </a>
          . The contents are very similar and I wouldnt recommend doing both, I
          would probably just do the second (Dr Yu&#39;s course).
        </p>
        <p className="pb-6 md:pb-10 md:text-3xl">
          Again, towards the middle of this course when the JavaScript was
          picking up, I felt as though I wasnt fully understanding what was
          going on. I then put the other two courses on pause and started a{" "}
          <a
            className="underline underline-offset-1 "
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
          >
            Complete JavaScript Course
          </a>
          . An absolute gem if you want a solid understanding in JavaScript in
          my opinion. The instructor explains things very well, often coming
          back to them in future lectures and his use of diagrams in his
          lectures to help you visualise how systems/concepts work was really
          helpful <strong>[HIGHLY RECOMMEND]</strong>.
        </p>
      </section>
      <section className="pb-6 md:pb-10 md:text-3xl">
        <h5 className=" pb-4 text-2xl md:text-4xl">
          Networking and Applying for Roles
        </h5>
        <p className="pb-4">
          Another commonly given advice is to apply for jobs before youre ready.
          Since I knew no one in the industry that I could turn to for advice
          etc, I thought that I could use the application process as a way of
          networking (sort of). I decided to start applying for jobs a lot
          earlier than when I thought I was ready and tried to use the
          interviews as a way of getting feedback on what I was doing. This way,
          I could ask employers exactly that they thought about the
          technologies/languages that I was learning, and what to learn next.
          The reasoning behind this was that:
        </p>
        <ul className="pb-4">
          <li>
            Worst case scenario: I get practical advice from someone hiring in
            the industry, which is invaluable.
          </li>
          <li>Best case scenario: I land a job.</li>
        </ul>
        <p className="pb-4">
          I tried to continue this process of applying for roles, asking what to
          improve/ learn, improving/ learning, and then applying for jobs until
          it worked.
        </p>
      </section>
    </div>
  )
}

export default FirstRole
