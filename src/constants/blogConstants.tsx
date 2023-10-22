export type BlogPost = {
    title: string;
    content: string | React.ReactNode;
    date: Date | string;
    tags: string[];
}


export const CurrentBlogPosts: BlogPost[] = [
    {
        title: 'Why Software Development - Blog Post 1',
        
        content: 
        <div>
            <p>Over time, I have tried a few different industries to excel at and immerse in: writing, nursing, politics, 
            massage therapy, etc. When none of those were panning out for a variety of life reasons, I wondered what is next then? 
            I will keep taking classes in something, but ultimately, what do I want to do in terms of a professional career?</p>

            <p>After one more setback trying to afford a college way too expensive for my income and circumstances, I returned back
            to my community college to keep taking general classes needed toward any science degree, as in higher level math
            science and any missing prerequisites. I thought, any of these classes could work toward a higher level degree
            toward a biology, physics or some engineering based degree, I\'ll take them and see what I get inspired toward.</p>

            <p>I really enjoyed my higher level math courses, I had always thought of myself as being a little mediocre at math 
            unless I had some phenomenal teacher which rarely exists. I decided I could definitely handle the rest of the math
            required for any major and continued on into Calculus I, which also went very well, it was like a math puzzle.</p>

            <p>In between semesters and busy times within classes, I decided to start a blog site on WordPress to post a couple
            essays I enjoyed writing, thinking it may also, additionally, inspire me to continue writing creatively as an outlet
            beyond academics. I still only have two posts, more to come perhaps in the future. However, what I experienced on the
            WordPress platform inspired me to take my first computer science class.</p>

            <p>I enjoyed the ease of use of using a pre-designed template, but always wanted to change some aspect or have the option 
            of flexibility or more control over that template. I started looking into plugins and custom code and ftp, etc. Suddenly,
            I was learning HTML and CSS from eBooks and YouTube tutorials, learning how to make a mock in the designs of the template
            I had chosen for my blog. Forget blogging, from there, I enrolled in Introduction to Computer Science with C++ at my
            community college the very next semester.</p>
            
            <p>C++ was amazing! I noticed I got lost in time on my problems that were more difficult to solve, trying different
            ways to make the console applications run as intended, I would forget to eat at times. Maybe that's not good, but
            I never had any other task occupy my mind so much, it was amazing to have such an innate and intense focus. On the
            occasion I couldn't solve a problem immediately, I'd walk away from it, go do something else, but my mind was already
            back on the problem somehow, refreshed and ready to tackle the coding problem from some new angle I hadn't thought
            of previously.</p>

            <p>I thought this is amazing, I love this stuff, I would love to sit around (or stand for standing desks, I have to
            get one of those too maybe with a treadmill, not sure) and do nothing but solve these intricate problems all
            based on this complex network of keywords and functions that end up generating more amazing things such as
            video games, advanced electronics, cars, planes, medical equipment and anything else that could exist in the 
            future, not on the market yet. It is a massive and infinite industry with so many avenues.</p>


            <p>Ready to move out of New York City and back to warm weather I applied at Florida International University for 
            Computer Science and got accepted. That is all fun and well expect for entering back into the work/school game endless loop; 
            but I decided to accelerate the learning and career process by applying to the Flatiron school, here, representative of 
            this blog post, I think because technology changes so quickly it is best just to get immersed into the career path as 
            soon as possible and start gaining experience.</p>


        </div>,
        date: '1/1/2019',
        tags: ['Flatiron', 'Bootcamp', 'Coding', 'Philosophical']
    },
    {
        title: 'Randomness',
        content:
        <div>
            <p>For this blog, I really wanted to do some reading and interpreting of philosophical and mathematical significance of the concept of something being random and make a nice, healthy introduction to computer code - random. Such a reading and research opened up a can of worms that fascinated me greatly. I knew I would get stuck on that for days, so as to move forward with my learning process in software development, I will open with a couple well-rounded quotes and return to my in-depth introduction at a later time.</p>

            <p className='quote'>From philosopher Eric Hoffer: “Creativity is the ability to introduce order into the randomness of nature.”</p>

            <p className='quote'>I really enjoyed my higher level math courses, I had always thought of myself as being a little mediocre at math 
            unless I had some phenomenal teacher which rarely exists. I decided I could definitely handle the rest of the math
            required for any major and continued on into Calculus I, which also went very well, it was like a math puzzle.</p>

            <p className='quote'>From mathematician and computer scientist Robert R. Coveyou: “The generation of random numbers is too important to be left to chance.”</p>
            <a className='quote-reference' href='www.random.org/quotations'>www.random.org/quotations</a>

            <p>One of my first favorite topics and exercises in my Introduction to Computer Science class was producing a random number or series of random numbers by code and understanding its implications. Computer science labs in randomness not only demonstrate the practicality of generating some random number simply for programming purposes. Randomness in computer language also innately triggers a deeper thought process on the concept of random in life, mathematics and philosophy. In order to explain this thought process further, I will reference C++ code I worked with in my Intro class and later to expand this fascination into Ruby language, I am currently learning, by exploring and reflecting on how random is accomplished in Ruby as well.</p>
            <h4>C++ Random</h4>
            <p>In C++, rand(), is used to generate seemingly random numbers. Below is the general code and result:</p>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <p>Overall, the numbers seem random on execution 1, however, running this executable program file again produces the exact same result, therefore this isn’t exactly what is thought of a random experience in life or statistics or what experiential definition one prefers.</p>
            <p>Alternatively, a different set of numbers can be generated by the use of <span className='code-example'>rand()</span> with a seed specifier in the syntax of <span className='code-example'>srand(somenumberyouwanthere)</span>:</p>
            
            <img>to do image with caption</img>
            <p>However the result is a different series of numbers, running the program again has the same resulting numbers.</p>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <p>A do while loop in C++ using <span className='code-example'>rand()</span> can generate a different looking set of random numbers each time the user calls for it, but starting the program over again, generates the same set each time. Note, <span className='code-example'>srand()</span> with a parameter could still be incorporated into this but would have the similar conundrum noted above.</p>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <p>Compilers are built on various logic and mathematical reasoning, so the interesting part is, at least for the moment in programming today, there is no true sense of random to a machine, a computer, a compiler, nor in computer language, and that is to say, no true sense of random in terms of its philosophical human experience. So what needs to be done, at least in C++ to make patterns stop repeating? What needs to happen so that the user can experience what they are used to calling random, even if just for that moment in time?</p>
            <p>Noteworthy from the question above is that computer language can use exactly that, time. In C++ to do so, <span className="code-example">{"<ctime>"}</span> is an inclusion necessary in C++ files to utilize time functions. From the <span className="code-example">{"<ctime>"}</span> inclusion <span className="code-example">time()</span> can be incorporated into the <span className="code-example">srand()</span> setting the current time the program is executed, or the code is asked for, as the seed specifier and setting <span className="code-example">time()</span> to <span className="code-example">NULL</span>, 0, or nullptr depending on C++ version.</p>
            <p>Once ctime is included <span className="code-example">srand()</span> seed is set to <span className="code-example">time()</span> , <span className="code-example">time()</span>  is set to <span className="code-example">NULL</span> : <span className="code-example">srand(time(NULL);</span> </p>
            <p>From here <span className="code-example">rand()</span> is utilized once again for output as in the above examples, or of course whatever one’s program may call for. The example below uses a combined version of all the techniques above to demonstrate the results of setting time as the <span className="code-example">srand()</span> seed parameter.</p>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <p>Wouldn’t it be wonderful now, to go off on some tangent regarding physics having no concept of time beyond elapsed time for calculation? That would be a lot of fun, but for now, I’ll have to move on to how random works in Ruby.</p>
            <h4>Random Ruby</h4>
            <p>Of course, in ruby, there are methods on hand and ready to go simplifying the code involved. The primary method involves the use of <span className="code-example">#rand</span>. Calling <span className="code-example">rand</span> by itself yields a random float. If a whole integer is desired typically <span className="code-example">rand(1000)</span>, for example, will generate a random number between 0 and 1000. I tried to find a general maximum number available as in C++ but was unsuccessful so far.</p>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <p>In contrast to C++, Ruby <span className="code-example">rand</span> methods are already setup to refer to a timestamp along with “the process id, and a sequence number” (ruby-doc.org). In order to get a series of 10 random numbers, for now between 0 and 1000, and not repeat each time the program is started or method is called again, <span className="code-example">rand(1000)</span> is sufficient in a while loop:</p>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <p>Similar to C++, <span className="code-example">srand(somenumberhere)</span>, will cause a reapeat of the same series each time a program is started or method is called once again. So, in Ruby, in particular, <span className="code-example">srand()</span> is helpful if one would like to repeat the same values by some seed.</p>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <p>I enjoy the C++ version slightly better as you can see exactly how that code is taking place and manipulating the values, why C++ is my favorite language all around, however. C++ brings out the philosophical nature a little more by an innate sense of questioning. I do enjoy the fact that the Ruby version is very simplistic and less exhausting to write, also why I have enjoyed Ruby overall. I suppose either language is sufficient and may just depend on the project or end result. I think, at this concluding moment, the quotes I chose are perfect for the ideas at work within this post.</p>
            <h4>Works Cited </h4>
            {/* todo anchors below */}
            <p>Britt, James and Neurogami. “Random” Ruby-doc.org. https://ruby-doc.org/core-2.2.0/Random.html</p>
            <p>RANDOM.ORG. https://www.random.org/quotations/</p>
        </div>
,
        date: '1/4/2019',
        tags: ['Flatiron', 'Bootcamp', 'Philosophical', 'Ruby', 'C++', 'Random Numbers']
    }

]













