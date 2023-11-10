import '../Styles/BlogReadView.css';
export type BlogPost = {
    title: string;
    content: React.ReactNode;
    date: Date | string;
    tags: string[];
    blogURL: string;
}


export const CurrentBlogPosts: BlogPost[] = [
    {
        title: 'Why Software Development - Blog Post 1',   
        content: 
        <div className='blog-content-read-wrapper'>
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
            Computer Science and got accepted. That is all fun and well expect for entering back into the work/school game endless 
            loop; but I decided to accelerate the learning and career process by applying to the Flatiron school, here, 
            representative of this blog post, I think because technology changes so quickly it is best just to get immersed into 
            the career path as soon as possible and start gaining experience.</p>
        </div>,
        date: '1/1/2019',
        tags: ['Flatiron', 'Bootcamp', 'Coding', 'Philosophical'],
        blogURL: 'why-software',
    },
    {
        title: 'Randomness',
        content:
        <div className='blog-content-read-wrapper'>
            <p>
                For this blog, I really wanted to do some reading and interpreting of philosophical and mathematical significance 
                of the concept of something being random and make a nice, healthy introduction to computer code - random. Such a 
                reading and research opened up a can of worms that fascinated me greatly. I knew I would get stuck on that for 
                days, so as to move forward with my learning process in software development, I will open with a couple 
                well-rounded quotes and return to my in-depth introduction at a later time.
            </p>

            <p className='block-quote'>
                From philosopher Eric Hoffer: “Creativity is the ability to introduce order into the randomness of nature.”
            </p>

            <p className='block-quote'>I really enjoyed my higher level math courses, I had always thought of myself as being a 
                little mediocre at math unless I had some phenomenal teacher which rarely exists. I decided I could definitely 
                handle the rest of the math required for any major and continued on into Calculus I, which also went very well, 
                it was like a math puzzle.
            </p>

            <p className='block-quote'>
                From mathematician and computer scientist Robert R. Coveyou: “The generation of random numbers is too important 
                to be left to chance.”
            </p>
            
            <a className='reference anchors' href='www.random.org/quotations' rel="noreferrer" target='_blank'>www.random.org/quotations</a>

            <p>
                One of my first favorite topics and exercises in my Introduction to Computer Science class was producing a 
                random number or series of random numbers by code and understanding its implications. Computer science labs 
                in randomness not only demonstrate the practicality of generating some random number simply for programming 
                purposes. Randomness in computer language also innately triggers a deeper thought process on the concept of 
                random in life, mathematics and philosophy. In order to explain this thought process further, I will reference 
                C++ code I worked with in my Intro class and later to expand this fascination into Ruby language, I am currently 
                learning, by exploring and reflecting on how random is accomplished in Ruby as well.
            </p>
            
            <h3 className='core-subsection'>C++ Random</h3>
            
            <p>In C++, rand(), is used to generate seemingly random numbers. Below is the general code and result:</p>
            {/* <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img> */}
            <p>
                Overall, the numbers seem random on execution 1, however, running this executable program file again produces 
                the exact same result, therefore this isn’t exactly what is thought of a random experience in life or statistics 
                or what experiential definition one prefers.
            </p>
            <p>
                Alternatively, a different set of numbers can be generated by the use of 
                <span className='code-example'>rand()</span> with a seed specifier in the syntax of 
                <span className='code-example'>srand(somenumberyouwanthere)</span>:
            </p>
            
            {/* <img>to do image with caption</img> */}
            
            <p>
                However the result is a different series of numbers, running the program again has the same resulting numbers.
            </p>
            
            {/* <img>to do image with caption</img>
            <img>to do image with caption</img> */}
            
            <p>
                A do while loop in C++ using <span className='code-example'>rand()</span> can generate a different looking set 
                of random numbers each time the user calls for it, but starting the program over again, generates the same set 
                each time. Note, <span className='code-example'>srand()</span> with a parameter could still be incorporated 
                into this but would have the similar conundrum noted above.
            </p>
            
            {/* <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img> */}
            
            <p>
                Compilers are built on various logic and mathematical reasoning, so the interesting part is, at least for the 
                moment in programming today, there is no true sense of random to a machine, a computer, a compiler, nor in 
                computer language, and that is to say, no true sense of random in terms of its philosophical human experience. 
                So what needs to be done, at least in C++ to make patterns stop repeating? What needs to happen so that the user 
                can experience what they are used to calling random, even if just for that moment in time?
            </p>
            <p>
                Noteworthy from the question above is that computer language can use exactly that, time. In C++ to do so, 
                <span className="code-example">{"<ctime>"}</span> is an inclusion necessary in C++ files to utilize time f
                unctions. From the <span className="code-example">{"<ctime>"}</span> inclusion 
                <span className="code-example">time()</span> can be incorporated into the 
                <span className="code-example">srand()</span> setting the current time the program is executed, 
                or the code is asked for, as the seed specifier and setting <span className="code-example">time()</span>
                 to <span className="code-example">NULL</span>, 0, or nullptr depending on C++ version.
            </p>
            <p>
                Once ctime is included <span className="code-example">srand()</span> seed is set to 
                <span className="code-example">time()</span> , <span className="code-example">time()</span>  
                is set to <span className="code-example">NULL</span> : <span className="code-example">srand(time(NULL);</span> 
            </p>
            
            <p>
                From here <span className="code-example">rand()</span> is utilized once again for output as in the above examples, 
                or of course whatever one’s program may call for. The example below uses a combined version of all the techniques 
                above to demonstrate the results of setting time as the <span className="code-example">srand()</span> seed 
                parameter.
            </p>
            
            {/* <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img> */}
            
            <p>Wouldn’t it be wonderful now, to go off on some tangent regarding physics having no concept of time beyond elapsed time for calculation? That would be a lot of fun, but for now, I’ll have to move on to how random works in Ruby.</p>
            
            <h3 className='core-subsection'>Random Ruby</h3>
            
            <p>Of course, in ruby, there are methods on hand and ready to go simplifying the code involved. The primary method 
                involves the use of <span className="code-example">#rand</span>. Calling 
                <span className="code-example">rand</span> by itself yields a random float. If a whole integer is desired 
                typically <span className="code-example">rand(1000)</span>, for example, will generate a random number between 
                0 and 1000. I tried to find a general maximum number available as in C++ but was unsuccessful so far.
            </p>
            
            {/* <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img>
            <img>to do image with caption</img> */}

            <p>In contrast to C++, Ruby <span className="code-example">rand</span> methods are already setup to refer to a 
                timestamp along with “the process id, and a sequence number” (ruby-doc.org). In order to get a series of 10 random 
                numbers, for now between 0 and 1000, and not repeat each time the program is started or method is called again, 
                <span className="code-example">rand(1000)</span> is sufficient in a while loop:
            </p>

            {/* <img>to do image with caption</img>
            <img>to do image with caption</img> */}

            <p>Similar to C++, <span className="code-example">srand(somenumberhere)</span>, will cause a repeat of the same 
                series each time a program is started or method is called once again. So, in Ruby, in particular, 
                <span className="code-example">srand()</span> is helpful if one would like to repeat the same values by some seed.
            </p>
            {/* <img>to do image with caption</img>
            <img>to do image with caption</img> */}
            
            <p>I enjoy the C++ version slightly better as you can see exactly how that code is taking place and manipulating the 
                values, why C++ is my favorite language all around, however. C++ brings out the philosophical nature a little 
                more by an innate sense of questioning. I do enjoy the fact that the Ruby version is very simplistic and less 
                exhausting to write, also why I have enjoyed Ruby overall. I suppose either language is sufficient and may just 
                depend on the project or end result. I think, at this concluding moment, the quotes I chose are perfect for the 
                ideas at work within this post.
            </p>

            <h3 className='core-subsection'>Works Cited </h3>
            {/* todo anchors below */}
            <p>Britt, James and Neurogami. “Random” Ruby-doc.org. https://ruby-doc.org/core-2.2.0/Random.html</p>
            <p>RANDOM.ORG. https://www.random.org/quotations/</p>
        </div>
,
        date: '1/4/2019',
        tags: ['Flatiron', 'Bootcamp', 'Philosophical', 'Ruby', 'C++', 'Random Numbers'],
        blogURL: 'randomness'
    },
    {
        title: 'CLI Project, Noteworthy Points',
        content:
        <div className='blog-content-read-wrapper'>

            <p>The idea of my CLI project was a quick search for things to do in Miami today (or another date specified), 
                scraping from Perez Art Museum and the Frost Science Museum’s Laser Friday’s page. Of course there are many 
                more things to do in Miami on any given day, but the trick of this project was to demonstrate web scraping, 
                object-oriented programming and also just make a nice clean code.
            </p>

            <p>
                Project Setup:
                File setup was a little tricky when first creating a gem projects files, it is handy however that initial file 
                structure and the necessary inclusions, requirements and calls to certain files are incorporated automatically 
                when using bundle gem "project-name". However the file setup is simplified, there are a few details to iron out 
                in advance and upon project setup:
            </p>

            <h3 className='core-subsection'>Project naming:</h3>

            <p>A different file structure is created with something such as miami_venues_today and miami_venues.</p>

            <p>
                • bundle gem miami_venues_today will create several layers of files, one nested under the other, the file 
                structure ends up looking a little more complicated, lib/miami/venues/today is generated in this example, but 
                also affects the require parameters and adds unnecessary files to a simple project. Other projects could perhaps 
                use such naming and file system, however, so it is still useful to know.
            </p>

            <p>
                • bundle gem miami_venues will create less file nests, making the require parameters much more simple and 
                manageable, lib/miami_venues. These initial naming and file conventions are however manageable in either case, 
                files can be easily deleted, added, renamed and the overall file structure changed, one just needs to makes sure 
                all file inclusions match throughout the project’s files.
            </p>

            <p>
                The .gemspec file:
                miami_venues.gemspec, for example has a great deal of specifiers for publishing which need to be filled out 
                especially if publishing. Generally, anything that has a “TODO” needs to be filled out with the appropriate 
                value, or this publishing section could use to be commented out, if not publishing the gem.
            </p>
            
            <p>
                More importantly, in the .gemspec file, at the bottom, various dependencies are added. Some are added initially, 
                but for this particular project, pry and Nokogiri needed to be added in order to debug efficiently with pry and 
                to utilize web scraping with nokogiri, the main focus of the project:
            </p>
            
            <div className="code-block-large">
                spec.add_development_dependency "pry" | spec.add_development_dependency "nokogiri"
            </div>
            
            
            <h3 className='core-subsection'>Config or environment files:</h3>
            <p>
                In the /lib directory, miami_venues.rb, was added as a means to ensure all the other files are incorporated, 
                it is an environment or configuration type of file seen in other Ruby programs and setup. For example, I was 
                used to the environment.rb file in a config folder from exercises I completed in the past. While researching 
                other file setups for a gem CLI project I came across this particular setup: a /config folder is added, an 
                environment.rb includes the necessary files to be used in the program and the lib/miami_venues.rb includes 
                the environment file. There are a other, more concise examples to follow, but also interesting to see exactly 
                how that file structure is initially created while creating a new gem, and good to know how all those files 
                work together.
            </p>

            <h3 className='core-subsection'>Learned some new things – dates and ranges</h3>
            <p>
                The goals of the project were date focused, the CLI would have to ask for some user input and match today’s 
                date or match some other specified date to what the user wants to find. The date specified would have to easily 
                match to a list of event dates and pull those details up for the user. Each of the two websites I was interested 
                in scraping had not only different date format’s within the text of an element, but had date ranges to work with
                 as well. So, I had to research the ruby date methods. In order to use various the predefined date class and its 
                 methods, require ‘date’ had to be included at the top of the file along with pry, nokogiri and open-uri. 
                 Three date methods were extremely useful, DateTime.Parse(), .strftime() and Time.new:
            </p>
            <p>
                DateTime.parse(‘date here in almost any format’), changes a date such as January, 1 2018 and makes the value a 
                standardized version of time:
            </p> 
            {/* <img>to do image with caption</img> */}
            
            <p>
                Once this date was standardized a specific formatted output can be returned with .strftime(“'%a %d %b %Y'”), 
                these representing name value of the day, numerical value of the day, month and year, respectively :
            </p>
            {/* <img>to do image with caption</img> */}
            
            <p>
                These methods were included in a helper method to pass in any date data gathered from the website and process 
                them back out with the format above, in order to match the user date specified later.
            </p>
            <p>
                Within the CLI if the user wants to check events for the current date and time, Time.new is called set to a 
                variable. In order to display this time, puts needs to be used in conjunction with this time, for my program 
                I utilized .strftime() to standardize the format of the user's date to easily match with event dates:
            </p>

            {/* <img>to do image with caption</img>
            <img>to do image with caption</img> */}
            
            <h3 className='core-subsection'>Self.ishness:</h3>
            <p>
                So, at first I wasn’t thinking ahead and forgot all about the use of self and why it is used and how it is used 
                and what the difference is, etc. I generally understood what it was doing in labs but hadn't yet put it into my 
                own words. So, once I tried to combine my classes together and get everything functioning in the CLI, I was 
                getting errors and why, oh, that’s why without defining my scraper methods as self.scrape_something, and just 
                scrape_something: trying
            </p>
            <p>
                find_scraped_items.scrape_something was returning an error. After changing to self., I could successfully 
                interact my CLI, my Events class and my Scraper class together, setting variables equal to interacting objects. 
                Also, learned that unless called in a very specific way, you can’t call an instance method within a class method, 
                suddenly my date changing method I had worked on earlier wasn’t working, however just calling this 
                self.change_date_format, and making that modification within the call to itself fixed this quickly.
            </p>

            <h3 className='core-subsection'>I discovered an em dash:</h3>

            <p>
                Or was it an en dash? I’m not sure and I kind of find it upsetting there is some difference between a hyphen “-“ 
                an en dash “–”, and apparently one other similar larger than hyphen larger than en dash sized – em dash, 
                Microsoft word makes an em or en automatically in certain circumstances, so that’s great. However, if you 
                are attempting to make something such as .split(“-“) find a split, in my example a date range, work when 
                there is actually an em or en dash in the middle, ruby won’t catch it. I tried to look up character encoding 
                and how I may use that, none of that was clear so I decided to see if I could use regex somehow. By inserting 
                /\W[^ ,A-Z,1-9]/ into .split(/\W[^ ,A-Z,1-9]/), I was able to exclude every character necessary except anything 
                resembling a hyphen or dash and was finally able to proceed hours later!!!! Regex is really a good time!
            </p>
            <p className='code-block or similar-example-block'>
                October 4, 2018 - February 17, 2019 (hyphen) July 21, 2017 – Sept. 1, 2019 (em or en dash)
            </p>
            
            <p>
                After all the various tricks and pondering of life my CLI project took I am glad to have experienced it. 
                There were several other stuck points possibly worth highlighting but these seemed the most useful and interesting.
            </p>
            <a className='anchors' href='https://youtu.be/IZuhB9wp3Wo' target="_blank" rel="noreferrer">YouTube Demonstration</a>
            <a className='anchors' href='https://github.com/Tsunamins/miami_venues.git' target="_blank" rel="noreferrer">GitHub Repo</a>

        </div>,
        date: '2/12/2019',
        tags: ['Flatiron', 'Bootcamp', 'Ruby', 'CLI'],
        blogURL: 'cli-project'
    },
    {
        title: 'Sinatra Project: Miami Rooftop Pools',
        content:
        <div className='blog-content-read-wrapper'>
            <p>
                “Something to keep track of,” the project mode page described on Flatiron School curriculum, well I had a million 
                thoughts on things I could use to keep track of, some too simple some too complex. I thought, not that it is a 
                realistic web app for a variety of reasons, but maybe a simple web based app to keep track of details of various 
                rooftop pools, primarily at hotels, that are easy to visit, have special events where you can visit easily, 
                that hold special events often, or if you had to book a room for a night or two to relax at the pool’s site.
            </p>
            
            <h3 className='core-subsection'>File Setup - first things, first</h3>

            <div className="code-block-large">{
                `                if ActiveRecord::Migrator.needs_migration?
                raise 'Migrations are pending.
                Run rake 'db:migrate' to resolve the issue.'
            End`
            }

            </div>

            <p>To this:</p>

            <div className="code-block-large">{
                `                if ActiveRecord::Base.connection.migration_context.needs_migration?
                raise 'Migrations are pending. Run 'rake db:migrate' to resolve the issue.'
                End`
            }
            </div>

            <p>At the moment I don’t remember the error code, but if I can reproduce it or find it, I will add it here.</p>
            <p>Excellent, everything is setup and a little test to see that everything is in place:</p>

            <div className="code-block-large">{

                `get '/' do
                "Hello World, Can this App Start?"
                End`}
            </div>
            
            <p>Run shotgun in the terminal and…No. It can't start.</p>
            <p className='example or emphasis-block'>
                Run shotgun……and……Shotgun Error, or shotgun related error.
            </p>
            
            <p>
                After researching this further, I could not run shotgun on windows, or windows as is, I needed Linux or a Linux 
                emulated system in place.
            </p>
            
            <p>
                I had a ton of trouble with the learn in browser IDE, I thought no way I’m only working through the learn browser, 
                I will go crazy and abandon my studies. I almost set it up a week or so prior but held off, so, I decided to take 
                out some extra time during my project and dual boot windows by installing linux and following a couple of setup 
                instructions from Flatiron School help pages and setup guides (that is another blog post in itself). It was 
                something I would have to do later, so, all the better to get it set up in advance, and, I like it better!
            </p>

            <p>
                After getting the whole thing setup, including a few extra steps to get my wifi adapter working in Ubuntu/linux, 
                I cloned my files, ran shotgun successfully and had a look at my ‘/’ route in the browser:
            </p>

            <p className='quote-block'>Hello World, Can this App Start?</p>

            <p>It could start!! Celebration.</p>

            <h3 className='core-subsection'>Continuing the sinatra app setup, what was next?</h3>

            <p>
                All the labs had some paralleled example to work with, but I knew I may like some of my flow of controllers to work 
                a little differently, but where to get started. Generally, I worked back and forth between pages and views, how 
                will the first page look, make the page, make that route; how will the sign up page work, make the page, make the 
                route.
            </p>

            <p>
                This is where I developed a clearer understanding as well between when I was specifying a route and when I was 
                specifying an erb page within other directories. The previous labs always had similar names, so I was generalizing a 
                lot and putting them into kind of the same category, even though I knew something was different.
            </p>

            <p>
                The sinatra project was really giving a good opportunity to see exactly what was happening in routes and page rendering 
                and why it was happening, something I was not getting in the labs quite as much.
            </p>

            <h3 className='core-subsection'>Styling - an external css sheet and what to do with it:</h3>
            
            <p>
                Early on while making the pages I thought it best to get started on some styling. I added some initial style modifications 
                and linked the file in the layout.erb page and…nothing happened. I looked up a few references to adding css styling in 
                sinatra, found out stylesheets, images, etc. have to be in a directory called public. After setting that up, still 
                nothing, until I found out a while later I had the public folder in the wrong place, hanging out in the app folder, 
                it just needed to be a folder at the start of the root of the project. Css, finally worked after making this change, 
                I then spent about 8 hours seeing how I could make my app look less 1996, semi-successfully.
            </p>            
            
            <h3 className='core-subsection'>Weird sinatra shotgun/terminal errors:</h3>
            <p>
                I was working from VSCode via recommendation from one of Flatiron School's local environment setup guides and I got the 
                following error after working a while, or something similar.
            </p>
            
            <p className='quote-block'>
                start_tcp_server': no acceptor (port is in use or requires root privileges) (RuntimeError)
            </p>

            <p>
                Cool, what does that mean? After some searching I found a few references to the fact that too many shotgun processes 
                are working at once or a port is already in use, something to that effect, and the new process is interfering with an 
                old running process. More often than not it has to do with not closing out shotgun properly with Ctrl+C.
                A variety of solutions are presented to find the processes that are causing the problem within the terminal:
            </p>
            
            <div className="code-block-large">$ ps</div>
            <div className="code-block-large">$ ps ax | grep rails</div>
            <div className="code-block-large">$ ps ax | grep thin</div>
            <div className="code-block-large">$ ps ax | grep ruby</div>

            <p>All of these return some type of numbers, the solution next to enter in the terminal:</p>

            <div className="code-block-large">$ kill -9 #one of the numbers here</div>

            <p>
                I ran into the problem a couple of times while working and found that the most relevant to my current setup was 
                ps ax | grep ruby. Each time I got a list with 2 or 3 entries, different numbers some with question marks, those with 
                question marks were the ones to use to solve the problem.
            </p>
            <p>Overall the project was an excellent way to solidify my understanding of sinatra, routes, CRUD, etc and help me to move on 
                successfully to the next section, Rails. It may have taken some extra time, but to start working with linux and a local 
                environment a little ahead of schedule I can already see will be a big help when I am ready to start working locally on 
                the rails section, no more IDE crashes, among other things. I already also have become familiarized with some common 
                errors working in my own environment, so I think the delay on the project to set up the environment will end up speeding 
                me up in the end.
            </p>
            <a className='anchors' href='https://youtu.be/rlPety4CSeY' target="_blank" rel="noreferrer">YouTube Demonstration</a>
            <a className='anchors' href='https://github.com/Tsunamins/miami_rooftop_pools' target="_blank" rel="noreferrer">GitHub Repo</a>
        </div>,
        date: '6/12/2019',
        tags: ['Flatiron', 'Bootcamp', 'Sinatra', 'Ruby'],
        blogURL: 'miami-rooftop-pools'
    },
    {
        title: 'Bcrypt Mysteries',
        content:
        <div className='blog-content-read-wrapper'>
            <p>
                Sometimes, while working through my coursework on Flatiron School, I have a tendency to generalize topics, methods, 
                dependencies etc., in order to keep moving along at a somewhat efficient pace. And such generalization is likely 
                fine, most of the time. Using 'pry', for example, I don't need to go into lengthy detail as to how that works, so 
                long as I use it successfully and figure out what is needed. If I'm rounding down in ruby I can call .floor on a 
                variable and not worry over how it happened I can just rely on it, probably only useful in the future if I were 
                to build my own rounding technique or function in the future, for fun or whatever reason.
            </p>

            <p>
                Bcrypt was another gem I generalized, to move forward, I knew the components and where they needed to be placed:
            </p>

            <ol className='numbered-blog'>
                <li>
                    Including the <strong>gem 'bcrypt'</strong> in the Gemfile<br/>example:
                    <br/>
                    <div className="code-block-large">gem 'bcrypt', '~&gt; 3.1.7'</div>
                </li>
                <li>
                    Incorporating a string based attribute in the User table called “<strong>password_digest</strong>”
                    <br/>example:
                    <br/>within a migration file:
                    <br/>
                    <div className="code-block-large">t.string "password_digest"</div>
                </li>
                <li>
                    Adding/calling the method <strong>has_secure_password</strong> within the User model
                    <br/>example:
                </li>
            </ol>

            <pre className='pre-block'> <code className="code-block">
                class User &lt; ActiveRecord::Base<br/>
                    has_secure_password<br/>
                end
                </code> 
            </pre>

            <ol className='numbered-blog' start={4}>
                <li>
                    Using the method <strong>.authenticate()</strong> in a sessions controller while checking the validity of the password 
                    in combination with the user’s username or other identifier
                    <br/>Example<br/>In the <code className='code-block'>def create</code> of a sessions controller:<br/>
                    <pre className='pre-block'>
                        <code className='code-block'>if @user &amp;&amp; 
                        @user.authenticate(params[:user][:password])
                        </code>
                    </pre>
                </li>
            </ol>
             
            <p className='quote-block'>
                <em>What is happening behind all of these components? Bcrypt itself? passworddigest? hassecurepassword? .authenticate()?</em>
            </p>

            <h3 className='core-subsection'>What is bcrypt doing in the first place?</h3>
             
            <p>According to the gem description:</p>

            <blockquote className="block-quote">
                <p>
                    “bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project for hashing passwords. The 
                    bcrypt Ruby gem provides a simple wrapper for safely handling passwords” 
                    (<a className='anchors' href='https://rubygems.org/gems/bcrypt/versions/3.1.12' target='_blank' rel="noreferrer">Bcrypt, Ruby Gem</a>).
                    </p>
            </blockquote>

             
            <p>That’s cool, but what is a hash algorithm?</p>

            <blockquote className="block-quote">
                <p>“Hash algorithms take a chunk of data (e.g., your user's password) and create a "digital fingerprint," or hash, 
                    of it. Because this process is not reversible, there's no way to go from the hash back to the password”
                    <br/>(<a className='anchors' href='https://github.com/codahale/bcrypt-ruby' target='_blank' rel="noreferrer">Codahale Github, Bcrypt</a>).
                </p>
            </blockquote>

             
            <p>
                Ok, that’s fine. But what does that mean? What is a hash of something in this context? How does one go from a 
                ‘chunk of data’ to a ‘digital fingerprint?’
            </p>
             
             
            <p>
                The rest of that answer complexly comes from discrete mathematics and combinatorics, if one wants to dive in that 
                far (I do but not in this blog). However, after some light reading, the process of hashing involves mapping 
                (creating a relationship between objects), data of random size, to another object of a fixed size. The idea of 
                these functions, or why they are advantageous to using within encryption, is that they are very difficult to 
                reverse, the are considered “one-way functions” (<a href='https://en.wikipedia.org/wiki/Cryptographic_hash_function' target='_blank' rel="noreferrer">Wiki Cryptographic Hash Function</a>).
            </p>
             
            <p>
                So Bcrypt essentially uses a mathematical function called hashing to scramble up passwords, nearly irreversibly. 
                There are several different types of hashing functions or techniques, mathematically speaking. Several are listed 
                here: <a className='anchors' href='https://en.wikipedia.org/wiki/Hash_function#Hashing_variable-length_data' target='_blank' rel="noreferrer">Wiki Hash function</a>. In this context, it doesn’t always 
                refer to security encryption, but is relevant, or at least interesting to me, to read about some of these 
                processes, but a bit too much to go into for this blog purpose.
            </p>

            <h3 className='core-subsection'>Why Password_digest?</h3>
             
            <p><code className='code-block'>password_digest</code> is a requirement specific to bcrypt, likely a word chosen from and whatever way the 
                developers of bcrypt wanted to name the handling of password attributes. However, it is interesting that the output 
                of mathematical hash functions can be referred to as: hash values, hashes, digests or message digests, among others 
                (https://en.wikipedia.org/wiki/Cryptographic_hash_function &amp; 
                https://en.wikipedia.org/wiki/Hash_function#Hashing_variable-length_data). Also noteworthy, according to the 
                documentation it has to be <code className='code-block'>someword_digest</code> in terms of calling has_secure_password, as it is looking 
                for _digest, in particular and is the topic of the next section (https://github.com/codahale/bcrypt-ruby).
            </p>
             
            <h3 className='core-subsection'><code className='code-block'>has_secure_password</code>, is it really that easy, is that all I have to do?</h3>

            <p>
                There was a reading on it describing it, linking to documentation about it, etc. However, to move forward, I 
                generalized <code className='code-block'>has_secure_password</code>, and put it on the back burner as something I should just go with 
                and place into a User model, accepted it and called it a day.
            </p>
             
            <p>
                Reading further on bcrypt's github page, I discovered that the initial way to incorporate bcrypt into ruby is 
                described a bit more complexly than simply <code className='code-block'>has_secure_password</code>, for example:
            </p>

            <pre className="pre-block code-block jsx">{
                `require 'bcrypt'

    class User &lt; ActiveRecord::Base
        #users.password_hash in the database is a :string
        include BCrypt

        def password
            @password ||= Password.new(password_hash)
        end

        def password=(new_password)
            @password = Password.create(new_password)
            self.password_hash = @password
        end
    end`

            }</pre>
             
            <p>-From: <a className='anchors' href='https://github.com/codahale/bcrypt-ruby' target='_blank' rel="noreferrer">Github Bcrypt</a></p>
             
            <p>
                Their documentation goes onto mention, however, that later versions of rails incorporate this process within 
                <code className='code-block'>ActiveModel::SecurePassword</code>, allowing usage of <code className='code-block'>has_secure_password</code>. Oh so that’s why, 
                but how does that work exactly, what does it do?
            </p>
             
            <p>
                The definition of <code className='code-block'>has_secure_password</code>, incorporates a great deal necessary for password handling, 
                including active record validations for the usage of an attribute with digest and password length, as there are 
                limitations to the byte size a password should be for this algorithm. I found it a great deal more interesting to 
                view the source/definition of <code className='code-block'>has_secure_password</code>, maybe that should be obvious, but I don't always 
                look:
            </p>

            <pre className='code-block pre-block jsx'>{
            `#File activemodel/lib/active_model/secure_password.rb, line 61

    def has_secure_password(attribute = :password, validations: true)
    #Load bcrypt gem only when has_secure_password is used.
    #This is to avoid ActiveModel (and by extension the entire framework)
    #being dependent on a binary library.

        begin
            require "bcrypt"
        rescue LoadError
            $stderr.puts "You don't have bcrypt installed in your application. Please add it to your Gemfile and run bundle install"
            raise
        end

        include InstanceMethodsOnActivation.new(attribute)

        if validations
            include ActiveModel::Validations

            #This ensures the model has a password by checking whether the password_digest
            #is present, so that this works with both new and existing records. However,
            #when there is an error, the message is added to the password attribute instead
            #so that the error message will make sense to the end-user.

                validate do |record|
            record.errors.add(attribute, :blank) unless record.send("#attribute_digest").present?
            end

            validates_length_of attribute, maximum: ActiveModel::SecurePassword::MAX_PASSWORD_LENGTH_ALLOWED
            validates_confirmation_of attribute, allow_blank: true
        end
    end`
            }
                
            </pre>
             
            <p>
                -From: <a className='anchors' href='https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password' target='_blank' rel="noreferrer">Has Secure Password</a>
            </p>
            

            <h3 className='core-subsection'>.authenticate</h3>
             
            <p>
                I never thought about .authenticate either, and I didn't suppose it was just mysteriously picked up by bcrypt, so looking 
                at the documentation on .authenticate, I noticed it does get reference from the Bcrypt class:
            </p>
             
            <p>
                Authenticating a session has one more reference to bcrypt, this built method also refers to bcrypt within its definition:
            </p>
            
            <pre className="code-block pre-block jsx">{
            `#File activemodel/lib/active_model/secure_password.rb, line 96
def authenticate(unencrypted_password)
    BCrypt::Password.new(password_digest).is_password?(unencrypted_password) &amp;&amp; self
end`
            }</pre>
            <p>
                -From: 
                <a className='anchors' href='https://apidock.com/rails/ActiveModel/SecurePassword/InstanceMethodsOnActivation/authenticate' target='_blank' rel="noreferrer">
                    Secure Password Instance Methods
                </a>
            </p>
             
        </div>,
        date: '10/4/2019',
        tags: ['Flatiron', 'Bootcamp', 'Bcrypt', 'Ruby', 'Ruby on Rails', 'Encryption', 'Authentication'],
        blogURL: 'bcrypt-mysteries'
    },
    {
        title: 'Prototype I: A Cat\'s Dream - JS/Rails Project',
        content:
        <div className='blog-content-read-wrapper'>
            <p>
                JavaScript was a little weird at first after spending so much time on Rails. Eventually it all became clearer, so 
                that’s fine.  I equated it to how I usually think about thinking about my thoughts stemming from some other 
                thought.
            </p>

            <p>
                Time for the project, a single page web application. I browsed the project examples and wasn’t sure what I would 
                want to do, but my first thought was some type of game that moves a character around on the screen via keyboard 
                controls and does something fetch-worthy.
            </p>

            <p>
                I started looking into javascript based games, hoping to “keep it simple” by just writing something from vanilla 
                javascript. I started down a path of viewing and working with a variety of youTube tutorials, basically making 
                mini game engines:
            </p>

            <blockquote className="block-quote">
                <p>
                    <a className='anchors' href='https://www.youtube.com/channel/UCzQvgRgjjxhzEORvefubDPw' target="_blank" rel="noreferrer">JavaScript Teacher</a>
                </p>
                <p>
                    <a className='anchors' href='https://www.youtube.com/channel/UCHpHBzk4fz3oeQ31hmCreGg' target="_blank" rel="noreferrer">Technologies4me</a>
                </p>
                <p>
                    <a className='anchors' href='https://www.youtube.com/channel/UCdS3ojA8RL8t1r18Gj1cl6w' target="_blank" rel="noreferrer">PothOnProgramming</a>
                </p>
            </blockquote>

            <div className="">
                <figure className="figure-image">
                    <img className='accent-image-right' src='/blog/pinktilesheet-1.png' alt='fauxtel logo'></img>
                    <figcaption className='caption'>The Tilemap Result</figcaption>
                </figure>
                <p>
                During these tutorials, I discovered the process of converting a png image into a tile map based on parsing array 
                values into pixel based coordinates of the png image. I discovered the use of Tiled to make a tile map with a 
                little more ease, rather than typing in the array values needed, manually. Along with this I found a lot of 
                details about animating images based on sprite sheets with different character positions. I found an excellent 
                tutorial on the use of the program Tiled as well
            </p>
            </div>



            <blockquote className="block-quote">
                <p>
                    <a className='anchors' href='https://www.youtube.com/channel/UCr-5TdGkKszdbboXXsFZJTQ' target="_blank" rel="noreferrer">GamesFromScratch</a>
                </p>
            </blockquote>

            <p>
                However, all tutorials were extremely interesting and amazingly detailed, it certainly wasn't "keeping things 
                simple."
            </p>

            <p>
                It was wonderful to learn how to work with computer language to get positions of the mouse, keys, input, tile 
                types and set up collision and I wanted to go through and understand all of them thoroughly, however, I worried 
                over the time it would take me to custom make my own version of these games. The Tiled tutorials brought my 
                attention to Phaser, a game engine built in javascript, and I was reluctant to try it right away to the point I
                spent some days brainstorming other ideas for fear of this whole tile game idea was going to take me too long 
                and turn out to be a bad idea.
            </p>

            <p>I eventually went onto Phaser’s website</p>

            <blockquote className="block-quote"><p><a className='anchors' href='https://phaser.io/' target="_blank" rel="noreferrer">Phaser</a></p></blockquote>

            <p>
                They have a great introduction to their engine on their website including a very simple tutorial on how to make a 
                first game. I got through the tutorial in a couple hours with a pretty much fully functional mini game.
            </p>

            <p>
                Phaser already has collisions, overlaps, camera settings, scene settings, gravity attributes, colors, text 
                setting, position getting/setting of every game component and a library of nearly every type of game need, 
                organized and ready to go, and if you need something else you can add a custom class of whatever you feel like. 
                Additionally, they have a great deal of user contributed tutorials and examples to get more ideas or see how 
                something can work, an amazing documentation site and links to many other resources. Once I got the hang of 
                Phaser as well, it was extremely easy to figure out how to manipulate my own objects and game elements by 
                console.log(ing) the game element in question and having a look at its lengthy list of attributes, very intuitive 
                from there on.
            </p>

            <p>I discovered other game making resources, free to use game art, for example, from 
            <a className='anchors' href='https://opengameart.org/' target="_blank" rel="noreferrer">Open Game Art</a>.<br/>However, I couldn’t help but want to make my own art, got a little 
                stuck on what my game art theme and game may even be, so, while working through various phaser tutorials I 
                started attempting my own game art, primarily on <a className='anchors' href='https://www.pixilart.com/draw#' target="_blank" rel="noreferrer">PixilArt</a><br/>I
                 eventually decided to use a random image I drew with Krita drawing software, a pink night sky with silhouetted 
                 black grass and trees as sort of a game’s title scene or landing page and figured to make game art based on this 
                 image, thus I came up with my game art theme. I made my animation frames for the player, enemy and an item to 
                 collect all on pixilart.com.
            </p>

            <p>
                Many of these ideas and possibilities of integration came from the very first phaser tutorial showing player 
                movement based on keyboard input, collision detection and player animation. Previously, with vanilla javascript 
                I was ready to settle for a player with no animation that perhaps moved around and collected something on boring 
                map and did nothing else.
            </p>

            <p>
                Working through further Phaser tutorials with <a className='anchors' href='https://academy.zenva.com/' target="_blank" rel="noreferrer">Zenva</a><br/>I found a great 
                deal of tilemap based games with a great deal of examples of different elements to add to a game and different 
                playing styles. I had planned to add a few more such as NPC’s and different scene or level transitions, but in the 
                interest of time I left it to one, at least for now.
            </p>

            <p>
                I’m not sure what I would have come up with had I decided to keep this project simple and do enough just to meet 
                the requirements, but I’m glad I ventured into some processes of game making in collaboration with web 
                development.
            </p>
            <a className='anchors' href='https://youtu.be/MamqFgSoqq8' target="_blank" rel="noreferrer">YouTube Demonstration</a>
            <a className='anchors' href='https://github.com/Tsunamins/a-cats-dream' target="_blank" rel="noreferrer">GitHub</a>
        </div>,
        date: '1/4/2020',
        tags: ['Flatiron', 'Bootcamp', 'JavaScript', 'Ruby', 'Ruby on Rails', 'DOM', 'Vanilla JS', 'Phaser'],
        blogURL: 'a-cats-dream',
    },
    {
        title: 'Fauxtel Hotels - The Final Project',
        content:
        <div className='blog-content-read-wrapper'>
            <p>
                When I first started my bootcamp I wanted to be done in 4 months or so. Since then, I’ve 
                had a million soul draining restaurant shifts, two moves to new apartments, a handful of car troubles, financial 
                worry over my restaurant based income, a viral pandemic and economic lockdown coupled with more anxious thoughts 
                on financial stability. Four months came and went fast, considering, but finally the final project is ready.
            </p>

            <p>
                The Project:<br/>I had a few different ideas for a final, but ended up deciding on something I thought was 
                interesting, a hotel brand’s single page application. Hotel brand websites often don’t do justice to the ease and 
                convenience of booking everything all in one place, such as on websites like kayak.com.
            </p>

            <p>
                I had a million ideas for how I could address pain points of a hotel brands website with a single page web 
                application and the use of React.
            </p>

            <p>
                I ended up with a project, for the respect of time and moving forward, that is a good start to a hotel brand’s 
                booking app, and could easily be expanded and improved upon, with time, which I plan to do, of course.
            </p>

            <div className="">
                <img className='accent-image-right' src='/blog/fauxtellogo2.png' alt='fauxtel logo'></img>
                <p>It works, meets requirements and probably goes a little beyond.</p>

                <p>For this blog I think I’m going to just do a simple listing of things accomplished or features used:</p>

                <p>
                    <strong><a className='anchors' href='https://www.npmjs.com/package/react-day-picker' target="_blank" rel="noreferrer">React-day-picker:</a></strong> <br/>What seems most popular is 
                    the integration of a calendar view with user selected dates or date ranges is airbnb’s react-dates npm package. And 
                    yeah it’s fine. I tried 4 different calendar view packages in a separate program to see which one I liked working with 
                    best. Another reason my project took so long, more than likely! I ended up choosing, what I think part of react-dates 
                    uses actually is react-day-picker. I came across this while browsing hotel websites to see what they used, or to see 
                    if I found any calendar integration that I favored, on <a className='anchors' href='https://www.loewshotels.com/' target="_blank" rel="noreferrer">Loews Hotels</a>. The understanding of how to 
                    style this calendar, enable the user to select a date range and, set dates disabled, I happened to find a little 
                    more straightforward to use. Also with easy access and I plan to integrate it eventually, is the ability to add 
                    data to each calendar day. The original Loew’s hotel calendar I stumbled upon had prices and hotel availability 
                    embedded into the calendar view itself, fancy! I think, not sure, due to hotel closures those date previews have 
                    been removed for the time being.
                </p>
            </div>

            <p><strong><a className='anchors' href='https://guides.rubyonrails.org/action_mailer_basics.html' target="_blank" rel="noreferrer">Action Mailer:</a></strong> <br/>Action Mailer, is a 
                good time. A little tricky to get setup so you can see that you have actually sent out an email, once all the 
                settings are correct, it is easily integrated into other actions in the controllers. It was a lot of fun after 
                sitting at my computer for hours seeing an email that came from my localhost:3000. Currently, I have it set up 
                to send an email on registration of a user and on new reservation. Plan to do more of course and go further to style 
                the emails. Overall, I thought it was a quick and easy tool to enhance a project; perhaps also a good learning 
                experience when integrating mailer’s from other backend technologies.
            </p>

            <p>
                <strong>JWT web tokens:</strong><br/>I actually had wanted to do something like this for my javascript/rails 
                project, but didn’t bother since it wasn’t required. Researching and deciding on which method of 
                authentication/authorization to use for a single page web app: tokens, sessions, some other 3rd party integration 
                like firebase or OAuth, was strenuous and probably added a few weeks of time to my project. Found lots of examples, 
                some using redux but were a little disorganized, some using OAuth but a little tricky to understand as a first time 
                integration. Also found lots of debates and articles and user comments on the downfalls of security in using tokens 
                and the downfalls of using sessions instead. I ended up latching onto some of the videos in Learn Instruct on how to 
                go about auth-ing and went with JWT tokens stored in localstorage. These videos were from globetrotter and react 
                based authentication videos from Howard’s recorded lectures just to give at least semi-formal reference and 
                acknowledgement. I understand the security implications and if I were to do a hotel web app for a company, 
                I would look into the most secure measures, however, the thing I just wanted to do was understand the process of 
                token based authentication and the basic use of jwt. Later, I plan to incorporate the session version back into 
                my previous javascript/rails project, for the same purpose and reasoning and, as I move on, I’ll look into some 
                3rd party integration.
            </p>

            <p>
                Might be missing other integrations here and there is overall, a great deal more I wanted to incorporate, which I 
                probably will in the near future. In particular, my plans are to generate reservation codes via a gem available 
                for rails and allow a user to make a reservation without logging in. I have an interest in incorporating a 
                payment system, airline fares or at least trends and perhaps the “local” weather. Also wanted to dabble more 
                in React native and would like to do a small mobile app as a companion to this web app that perhaps allows 
                mobile check in and, in theory, door unlocking. So perhaps these are enhancements to accomplish in the near 
                future!
            </p>
            
            <a className='anchors' href='https://www.youtube.com/G4u_KgDfBYI' target="_blank" rel="noreferrer">YouTube Demonstration</a>
            <a className='anchors' href='https://github.com/Tsunamins/FauxtelHotels' target="_blank" rel="noreferrer">GitHub Repo</a>
        </div>,
        date: '5/23/2020',
        tags: ['Flatiron', 'Bootcamp', 'JavaScript', 'Ruby', 'Ruby on Rails', 'DOM', 'React', 'Redux', 'Final Project' ],
        blogURL: 'fauxtel-hotels',
    },
    {
        title: 'Blog Inspiration, Interview Prep Warm-ups',
        content:
        <div className='blog-content-read-wrapper'>
            <div  className=''>
                <img className='accent-image-right' src='/blog/keyboard.png' alt='backlit keyboard'></img>

                <p className=''>
                    I found I didn't get as much practice as I would have liked in my bootcamp like the coding exercises found on <em>
                    <a className='anchors' href="https://marketing.hackerrank.com/" target="_blank" rel="noreferrer">Hacker Rank</a>
                    </em> and <em><a className='anchors' href="https://www.codewars.com/" target="_blank" rel="noreferrer">Codewars</a></em> during the length of my 
                    self-paced bootcamp.  
                    The work-school game, plus labs and projects hanging over my head, often left me with a lack of dedicated time, 
                    or semantically, anxiety of time dedication. However, now that I am graduated, I have more time!  Coding exercise 
                    can be fun again, and a necessary step in light of potential, upcoming interviews.
                </p>
            </div>

            <p>
                I dabbled in Hacker Rank's <em>10 Days of JavaScript</em> and then moved onto 
                <em> Interview Prep</em>, starting with the 
                <em>
                    <a className='anchors' href="https://www.hackerrank.com/interview/interview-preparation-kit/warmup/challenges" target="_blank" rel="noreferrer"> Warm-Up Challenges</a>
                </em>.  
                So I thought I would highlight any setbacks, key points, maybe some initial thinking vs. finalized 
                thinking, etc.  I suppose my plan with these types of posts will be to go in and occasionally optimize code or 
                add more content to the process here, something like that!
            </p>

            <h3 className='core-subsection'>
                <a 
                    className='anchors'
                    href="https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup"
                    target="_blank"
                    rel="noreferrer">
                    Sock Merchant
                </a>
            </h3>

            <p>
                See the full description by visiting the link above in the section header.  In summary, the problem presents a 
                pile of socks, unmatched, and numbers representing colors provided in the form of an array.  The idea is to 
                find how many pairs of matching socks are in the array.  The exercise also provides the total number of socks 
                in the pile.
            </p>

            <h3 className='core-subsection'>This one was pretty straightforward, my initial thoughts were:</h3>

            <ul className='ul-squares'>
                <li className='li-squares'>I'll need to provide some count of each sock color/number</li>
                <li className='li-squares'>Once I have that number I'll need to divide by 2 and subsequently round down</li>
                <li className='li-squares'>I'll need to isolate each color type</li>
            </ul>

            <h3 className='core-subsection'>What I used...</h3>

            <p>Isolate each color type, by filtering unique numbers with <strong>Set</strong>:</p>

            <pre className="pre-block"><code className="code-block">let unique = &#091;...new Set(ar)]</code></pre>

            <p>Count occurrence of each unique sock color with <strong>reducer</strong>:</p>

            <pre className="pre-block">
                <code className="code-block">
                    (array, number) =&gt; array.reduce((acc, val) =&gt; (val === number ? acc + 1 : acc), 0);
                </code>
            </pre>

            <p>Add the reducer to a <strong>for loop</strong>, passing in the iterated unique socks array:</p>

            <pre className="pre-block code-block jsx">{
            `for (let i = 0; i &lt; unique.length; i++) {
    let count = (countUnique(ar, unique&#091;i]))
}`
            }</pre>

            <p>Round down  unique sock count divided by 2, in case of an odd number with <strong>Math.floor()</strong></p>

            <pre className="pre-block"><code className="code-block">let detMatchQty = Math.floor(count/2)</code></pre>

            <p>Cool! I have matching socks, unlike my sock drawer!</p>

            <p>Full code if a reader might like:</p>

            <pre className="pre-block code-block jsx">{
            `function sockMerchant(n, ar) {
    let matchCount = 0
    let unique = [...new Set(ar)]
    for(let i = 0; i &lt; unique.length; i++){
        let count = (countUnique(ar, unique[i]))
        if(count &gt; 1){
            let detMatchQty = Math.floor(count/2)
            matchCount = matchCount + detMatchQty
        }
    }
    return matchCount
}

const countUnique = (array, number) =&gt; 
array.reduce((acc, val) =&gt; 
(val === number ? acc + 1 : acc), 0);`
        }</pre>

            <h3 className='core-subsection'>
                <a 
                    className='anchors'
                    href="https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup"
                    target="_blank"
                    rel="noreferrer">
                    Counting Valleys
                </a>
            </h3>

            <p>
                The exercise presents the idea of creating a hiking tracker, so not just amount of steps during a hike but the type of 
                step in terms of it being uphill or downhill.  The challenge gives a string of letters, denoting the journey, 
                indicating "U" or "D" for the type of step taken.  The rules, thankfully, state a hike will always begin and end at 
                sea level and the goal of the exercise is to determine the amount of valleys entered and exited.
            </p>

            <h3 className='core-subsection'>Initial thoughts...</h3>

            <ul className='ul-squares'>
                <li className='li-squares'>Will probably want to use an array instead of a string</li>
                <li className='li-squares'>Something seemed like I would need to keep track of the reference to sea level</li>
                <li className='li-squares'>I would probably need a separate array to track and identify elevation</li>
                <li className='li-squares'>I may need something to identify being above or below sea level</li>
                <li className='li-squares'>Maybe some logic after this to demonstrate entering into a valley based on these ideas of elevation, altitude, sea 
                    level, etc.
                </li>
            </ul>

            <p>
                With this exercise, I got the idea well, but had a million notes and a million ideas of things I would need, kind of like 
                the above notes.  I also got caught up in some worry over what if it doesn't go back up to where it came from in the data 
                given is that considered an exit from a valley?  Oops, forgot what the instructions said, hikes given will begin and end 
                at sea level.
            </p>

            <h3 className='core-subsection'>What I used...</h3>

            <p>
                Most important things to address, in the end, was, yes, keeping track of altitude in some way, (I didn't need all the ways 
                I was originally thinking), but also establishing a distinction of what it means to at least enter a valley or exit a 
                valley.
            </p>

            <p>
                I kept a working reference to number of times a valley was entered, to be incremented, tracked altitude to be modified 
                based on movement in the array steps, also ended up going with splitting the string into an array with 
                <strong> .split()</strong>:
            </p>

            <pre className='pre-block'>
                <code className='code-block'>
                    let enteredValley = 0;<br/>
                    let altitude = 0;<br/>
                    let steps = s.split("");
                </code>
            </pre>

            <p>I used a helper function to track altitude:</p>

            <pre className="pre-block code-block jsx">{
            `function handleAltitude(step, alt){
    if(step === "D"){
        alt--
    } else {
        alt++
    }
    return alt++
}`
                }</pre>

            <p>
                Then I tracked the steps in a <strong>for loop</strong> incrementing 'enteredValley' when altitude was at 0 &amp;&amp; 
                the next step === "D"
            </p>

            <pre className="pre-block code-block jsx">{
            `for (let i = 0; i &lt; steps.length; i++){
    if (altitude === 0 &amp;&amp; steps&#091;i] === "D"){
        enteredValley++
    }
}`
            }</pre>

            <p>And...eventually, I tracked some valley hiking!</p>

            <pre className="pre-block code-block jsx">{
            `function countingValleys(n, s) {
    let enteredValley = 0
    let altitude = 0
    let steps = s.split("");
            
    for (let i = 0; i &lt; steps.length; i++){
        if (altitude === 0 &amp;&amp; steps[i] === "D"){
            enteredValley++
        }
        altitude = handleAltitude(steps[i], altitude)
    }
    return enteredValley
}

function handleAltitude(step, alt){
    if (step === "D"){
        alt--
    } else {
        alt++
    }
    return alt++
}`
        }</pre>

            <h3 className='core-subsection'>
                <a 
                    className='anchors'
                    href="https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup"
                    target="_blank"
                    rel="noreferrer">
                    Repeated String
                </a>
            </h3>

            <p>
                In repeated string, a number is given (i.e. n = 15), along with a string of characters, always including at least one a 
                (i.e. 'acdca').  The goal is to find, as this string repeats infinitely (i.e. 'acdcaacdcaacdcaacdcaacdca....'), the 
                umber of a's within the first n characters (i.e. the amount of a's occurring within the first 15 characters of the, 
                above repeated string, in this case that would be 6 a's).
            </p>

            <h3 className='core-subsection'>My initial thoughts...</h3>

            <ul className='ul-squares' >
                <li className='li-squares'>The string is to be extended at least to mock in finitely for the needed character quantity so I'll probably need .
                    concat()
                </li>
                <li className='li-squares'>It involves finding occurrences, maybe it will be better to .split() and .join() at times</li>
                <li className='li-squares'>could use a regex</li>
                <li className='li-squares'>maybe some reducing</li>
                <li className='li-squares'>ohhhh, but wait, this problem offers the possibility of the string going up to 100 characters and n with the 
                    possibility of equaling up to 10^12, so scratch concat(ing), I'm sure HackerRank's tests don't have all day to 
                    see if I'm right</li><li>Also, some quick match should demonstrate how many a's would occur.  The given string 
                        is 5 letters and contains 2 a's, n = 15; with string.length, some regex to count a's, followed by some math 
                        basics: 15/5 = 3, 3 *2 = 6; that should help me solve
                </li>
            </ul>

            <h3 className='core-subsection'>next...</h3>

            <p>
                In my first attempt, I was correct, dividing n by the string length and multiplying by the a count in the 
                initial string passed a lot of tests.  However, many other tests failed, oops!  I had only been considering 
                where n % string.length === 0 (where it divides evenly, with no remainder, just in case).  Oh of course, nothing 
                said they were going to give me evenly divisible data.  I came up with a mini example to explain to myself what 
                was needed next:
            </p>

            <p>
                Take n = 10 and string = 'aba', if this string were to be considered infinitely, or at least, in this case, 
                repeated to cover 10 characters, I would have 'abaabaabaaba...'.  At 10/3, I have 3.3333, rounded down to 3, 
                I have 6 a's + some overflow into the next 'aba' set.
            </p>

            <p>
                abaabaaba | aba     So, I've worked with 9/10 characters, I need to consider, 10 - 9 = 1 more character.  So I 
                need abaabaaba + a, in this case.  So I need the sub-string to position 1 of the next string set 'a', had the 
                string been 'aaba', I would have gotten to 8/10 characters and need the sub-string up to position '2' of the next 
                set, etc.
            </p>

            <h3 className='core-subsection'>What I Used</h3>

            <p>I counted the a's in the given string with .match(regex) and .length</p>
            
            <pre className="pre-block"><code className='code-block'>const a_Count = (s.match(/a/g)||&#091;]).length</code></pre>

            <p>
                Used an if/else to go ahead and calculate if n % string.length === 0 and called the following external function, 
                calculateA() if it was:
            </p>

            <pre className="pre-block code-block jsx">{
             `function calculateA(n, sLength, a_Count){
    const stringRepeat = Math.floor(n / sLength) 
    return a_Count * stringRepeat
}`
                }</pre>

            <p>
                To tackle when n % string.length !== 0, first rounded down the division, multiplied by string.length 
                (here defined it as sLength) and subtracted that from n, to find how many characters into the next string set 
                would be needed, keeping it in the variable leftOver:
            </p>

            <pre className="pre-block">
                <code className='code-block'>
                    const roundRepeat = Math.floor(n / sLength) <br/>
                    const leftOver = n - (roundRepeat * sLength)
                </code>
            </pre>

            <p>
                I then used .slice(start, end), to cut string segment to the needed portion and followed up with another 
                regex/match to count the a's within the new string:
            </p>

            <pre className="pre-block">
                <code className='code-block'>
                    const addPortion = s.slice(0, leftOver)<br/>
                    const additionalAs = (addPortion.match(/a/g)||&#091;]).length
                </code>
            </pre>

            <p>
                Then called stored the returned value of calculateA() in a variable, followed by adding the amount of 
                additional As to the answer:
            </p>

            <pre className="pre-block">
                <code className='code-block'>
                    let roundedAnswer = calculateA(n, sLength, a_Count)<br/>
                    answer = additionalAs + roundedAnswer
                </code>
            </pre>

            <p>So that, is, my version of this exercise and the whole code below:</p>

            <pre className="pre-block code-block jsx">{
            `function repeatedString(s, n) {
    let answer;
    const sLength = s.length
    const a_Count = (s.match(/a/g)||[]).length
            
    if(n % sLength === 0){
        answer = calculateA(n, sLength, a_Count)
    } else {
        const roundRepeat = Math.floor(n / sLength)
        const leftOver = n - (roundRepeat * sLength)
        const addPortion = s.slice(0, leftOver)
        const additionalAs = (addPortion.match(/a/g)||[]).length
        let roundedAnswer = calculateA(n, sLength, a_Count)
        answer = additionalAs + roundedAnswer
    }
    return answer
}

function calculateA(n, sLength, a_Count){
    const stringRepeat = Math.floor(n / sLength)
    return a_Count * stringRepeat
}`
        }</pre>
            
            <h3 className='core-subsection'>
                <a 
                    className='anchors'
                    href="https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup"
                    target="_blank"
                    rel="noreferrer">
                    Jumping on Clouds
                </a>
            </h3>

            <p>
                This problem, gives an array of 0's and 1's, the idea is the 0's are safe clouds to jump on, while the 1's are not safe 
                to jump on.  The array always starts and ends with 0 and 1's always have a 0 immediately before or after themselves.  
                Given an array as the example highlights: c=[0, 1, 0, 0, 0, 1, 0], the idea would be to avoid jumping onto indices 1 and 5.
                  The current cloud number a player is on, is the current element number, a player can then jump to clouds that equal the 
                  current cloud number plus 1 or 2, whichever would be more helpful in that move.  Player starts at cloud 0, for example, 
                  has the choice of jumping to cloud with a number of 0 + 1 or 0 + 2, for the first jump the player must jump 0 + 2 to 
                  skip 1.
            </p>

            <h3 className='core-subsection'>My initial thoughts...</h3>

            <p>
                My initial thoughts were that, before I iterate through arrays and establish positions and jumps and path's 1 vs. 
                2 and all I anticipated, shouldn't I be able to apply some math principle to always get to the right number?  
                Well I don't know, I sort of figured that out, there is a pattern regarding how many 0's and how many jumps 
                might take place, but the 1's and the variation of their placement, weren't becoming a clear pattern.  
                So...besides that I thought I may need to have a function to calculate the player cloud number plus options 
                1 or 2.  I thought I might need to go to the trouble of defining whether a move was possible or not.  
                I thought I might need to compare one path to another, which seemed excessive.  I thought I might need to 
                keep track of the "player position."  I thought I might need to keep track of what happens in array iteration 
                at and the next potential values in iteration at array[i] and array[i + 1] and if array[i+1] be the better 
                result, then to go with that from an if statement  In the end I spend a lot of time on this one, got some things 
                to pass with my first answer, but not enough of them to pass. 
            </p>

            <p>
                I was sort of on the right track, but after some review of the discussions I realized: 1) I had worked on 
                problems too long that day. 2) I wasn't considering the right + 1 or + 2 moves during the correct iteration. 3) 
                Player position was something to keep track of, but better to do so relative to iteration. 4) The total number 
                of jumps could simply just be incremented based on checking for the availability of a +2 jump before a +1 jump. 
                That would end up reflecting the minimum number of jumps.
            </p>

            <h3 className='core-subsection'>What I used:</h3>

            <p>I set a jumps and position variable to 0 outside the loops:</p>

            <pre className="pre-block">
                <code className='code-block'>
                    let jumps = 0;<br/>
                    let position = 0;
                </code>
            </pre>

            <p>I used a <strong>while loop</strong> that set iteration condition based on the changing position:</p>

            <pre className="pre-block">
                <code className='code-block'>
                    {`while (position &lt; c.length - 1) {`}
                </code>
            </pre>

            <p>
                I checked for the ability to change position with a jump of 2 first, and if not a jump of 1, during each logic 
                check, I incremented a jump by 1, and thus the rest of the code.  Break keyword I don't think is actually 
                necessary, but in the discussions many used continue or break, so I thought I'd give it a try:
            </p>


            <pre className="pre-block code-block jsx">{
            `function jumpingOnClouds(c) {
    let jumps = 0;
    let position = 0;
    while (position &lt; c.length - 1) {
        if (c[position + 2] == 0) {
            position = position + 2;
            jumps++;
        } else if (c[position + 1] == 0) {
            position = position + 1;
            jumps++;
        } else {
            break;
        }
    }
    return jumps;
}`
        }</pre>

            <p>So, that, was interview warm-ups!</p>

        </div>,
        date: '6/20/2020',
        tags: ['JavaScript', 'practice'],
        blogURL: 'interview-prep-warmups',
    },
    {
        title: 'Rails Project, Amateur Wine Reviewer: some reference points',
        date: '9/6/2019',
        blogURL: 'rails-amateur-wine',
        tags: ['Ruby on Rails', 'Flatiron School', 'CRUD', 'REST', 'MVC', 'Bcrypt', 'SSO', 'Google Sign In', 'Auths'],
        content:
        <div className='blog-content-read-wrapper'>
            <p>
                Rails added some excitement and dynamic features to the developer learning process. It was also a long 4 
                weeks worth of work. So for this blog about this post I’m going to make a sheet of references for frequently 
                forgotten or frequently used code snippets, terminal commands and any other relevant items of interest; I will 
                explain their importance where applicable.
            </p>
            
            <h3 className='core-subsection'>
                Generating a new skeleton of a Rails app, still frequently forgotten for now:
            </h3>
            
            <div className='code-block-snippet'>rails new &lt;filename-here&gt;</div>
                            
             <ul className='ul-squares'>
                <li className='li-squares'>
                    Why it’s important: creates nearly all the file structure necessary within the rails app, 
                    includes most needed gems and dependencies, and allows easy inclusion for reference to images 
                    and css sheets, among others.
                </li>
            </ul>
            <h3 className='core-subsection'>
                Git local directory vs. rails command to build a new application:
            </h3>
            
            <p>
                It was tricky to get my local environment file structure on the same page after git cloning my repository down 
                but also initiating a new rails app, tried restarting the process several times to consistently end up with 
                a project folder within a project folder.
            </p>
            
            <p><strong>My solution, instead of re-starting a new directory and new rails app:</strong></p>
            
            <ol className='numbered-blog'>
                <li>Moved the files in the file explorer up one directory</li>
                <li>git Commit command</li>
            </ol>
            
            <div className="code-block-snippet">git commit - m “message here”</div>
            
            <ol className='numbered-blog' start={3}>
                <li>
                    <em>Error message: untracked files</em>
                </li>
                <li>Git track files/add files command <br/>
                    <div className="code-block-snippet">git add &lt;filename&gt;/</div><br/>
                    (In this case I added all the files listed as untracked, individually)
                </li>
            </ol>
            
            <ol className='numbered-blog' start={5}>
                <li>
                    All the files were in the same directory now, in both local and remote environments. One last push:
                </li>
            </ol>
            
            <div className="code-block-snippet">git push -u origin master</div>
            
            <ul className='ul-squares'>
                <li className='li-squares'>
                    Push all the changes to the master branch that have been tracked/staged/committed/etc
                </li>
            </ul>
            
            <h3 className='core-subsection'>Frequently used, and finally not too frequently forgotten</h3>
            
            <div className="code-block-snippet">
                        rake db:migrate
            </div>
            
            <ul className='ul-squares'>
                <li className='li-squares'>
                    run migrations on all the migrate files recently created
                </li>
            </ul>
            

            <div className="code-block-snippet">rake routes</div>

            
            <ul className='ul-squares'>
                <li className='li-squares'>find all available routes as are currently defined in config/routes.rb</li>
            </ul>
            
            <h3 className='core-subsection'>Links and redirects within rails</h3>
            
            <div className="code-block-snippet">
                redirect_to &lt;some_named_path&gt;(optional variable depending)
            </div>
            
            <ul className='ul-squares'>
                <li className='li-squares'>
                    If the path has an :id, then a variable will need to be placed as a parameter
                </li>
            </ul>
            
            <div className="code-block-snippet">
                &lt;%= link_to “What you want the link to say”, &lt;some_named_path&gt;(variable depending) %&gt;
            </div>
            
            <p>Variation<br/>If the link needs to say what’s stored in a variable:</p>
            
            <div className="code-block-snippet">
                &lt;%= link_to post.title, &lt;some_named_path&gt;(variable depending) %&gt;
            </div>
            
            <h3 className='core-subsection'>Various Migrations</h3>
            
            <p>
                <strong>Basic table creations: with a variety of types</strong><br/>
                Within -class CreateTableName &lt; ActiveRecord::Migration[5.2]
            </p>
            
            <div className='code-block-large'>{
            `def change
    create_table :table_name do |t|
        t.string :name
        t.string :password_digest
        t.date :today 
        t.boolean :yes-or-no 
        t.integer :quantity 
        t.belongs_to :user, index: true, foreign_key: true
        t.references :favorited, polymorphic: true, index: true
    end
end`

            }
</div>
            
            <p><strong>Table additions, subractions and changes, within def change:</strong></p>
            
            <p>Drop table:</p>
    
            <div className="code-block-snippet">drop_table :table_name</div>

            <p>Add column:</p>
            
            <div className="code-block-snippet">add_column :table_name, :column_name, :column_type</div>

            
            <p>Delete column:</p>
            
            <div className="code-block-snippet">remove_column :table_name, :column_name</div>

            
            <p>Change column type:</p>
            
            <div className="code-block-snippet">change_column :table_name, :column_name, :new_type</div>

            <h3 className='core-subsection'>
                Explanation of Associations, as it applies to my project, * The Amateur Wine Reviewer *
            </h3>
            
            <p>4 models were needed to ensure I was covering all the requirements, or so I thought, as I went along 
                checking them off. The models are 
                <div className="code-block-snippet">wine</div> 
                <div className="code-block-snippet">review</div> 
                <div className="code-block-snippet">user</div>
                <div className="code-block-snippet">liked_review</div>
                <div className="code-block-snippet">liked_review</div>
                was added last in case review to user to wine was not sufficient enough for 2 of the 
                requirements for the project<br/>
                <em>I adapted this example from the following resource on stackoverflow: 
                    <a className='anchors' href="https://stackoverflow.com/questions/13240109/implement-add-to-favorites-in-rails-3-4" target='_blank' rel="noreferrer">
                    Stackoverflow: Add Favorites Rails
                    </a>
                </em>
            </p>
            
            <div className="code-block-large">{
            `in: class User

has_many :reviews    
has_many :wines, through: :reviews  
has_many :liked_reviews
has_many :likes, through: :liked_reviews, source: :review
                `}
                </div>
            
                <div className="code-block-large">
            {`in: class LikedReview

belongs_to :user
belongs_to :review`}
    </div>
            
    <div className="code-block-large">
            {`in: class Review

belongs_to :user
belongs_to :wine 
has_many :liked_reviews
has_many :liked_by, through: :liked_reviews, source: :user`}
   </div>
            
   <div className="code-block-large">
            {`in: class Wine

has_many :reviews  
has_many :users, through: :reviews`}
                
</div>
            
            <p>
                I knew I had enough nearly enough association requirements met between 
                <div className="code-block-snippet">User</div>, 
                <div className="code-block-snippet">Wine</div> and 
                <div className="code-block-snippet">Review</div>, 
                however, I wasn’t sure about user submittable attributes so I added in the dynamic source based associations 
                with <div className="code-block-snippet">LikedReview</div>,
                this allowed to change the tense of the has_many through 
                the liked_reviews to allow a differentiation in chaining against users vs. reviews themselves, 
                all via the opposite source.
            </p>
            
            <p>
                <strong>This required a couple other modifications</strong><br/>
                Instead of a 
                <div className="code-block-snippet">LikedReviews controller</div>
                <div className="code-block-snippet">#like</div> was added to the 
                <div className="code-block-snippet">ReviewsController</div> as its own method:
            </p>
            
            <div className='code-block-large'>
            {`def like
    @review = Review.find(params[:id])
    type = params[:type]
    if type == "like"

        current_user.likes &lt;&lt; @review
        redirect_to like_review_path(current_user)

    elsif type == "unlike"
        current_user.likes.delete(@review)          
    end
end`}
</div>
            
            <p>**Additionally a new nested path was built specifying additional routes: **</p>
            
            <div className="code-block-large">
                {`resources :reviews do
    put :like, on: :member
    get :like, on: :member
end`}
</div>
            
            <ul className='ul-squares'>
                < li className='li-squares'>
                    This added 2 routes necessary:
                </li>
            </ul>
            
            <div className="code-block-large">
                {`like_review 
PUT /reviews/:id/like(.:format)   reviews#like 
GET /reviews/:id/like(.:format)   reviews#like`}
          </div>
            
            <ul className='ul-squares'>
                <li className='li-squares'>
                    PUT was used in /reviews/show.html.erb:<br/>
                    To add the “like” or “unlike” functions that were sent back to reviews#like<br/>
                    And essentially become the user submittable attribute upon a review created
                </li>
                <li className='li-squares'>
                    GET was used in /reviews/like.html.erb<br/>
                    To visit the current users liked reviews with the url /reviews/:id/like<br/>
                    Can of course do much more with it, however I was ready to turn the project in
                </li>
            </ul>
            
            <h3 className='core-subsection'>Places OmniAuth must appear:</h3>
            
            <p>
                <em>And also noteworthy this is my quick summary, but I didn’t remember or discover all this on my own, I was 
                referred to the following resource, describing most of these steps in greater detail at: 
                <a className='anchors' href="https://medium.com/@rachel.hawa/google-authentication-strategy-for-rails-5-application-cd37947d2b1b" target='_blank' rel="noreferrer">
                    Google Authentication Strategy
                </a>
                </em>
            </p>
            
            <p><strong>In this case google based login:</strong></p>
            
            <ol className='numbered-blog'>
                <li>
                    Setting this up with google at, approximately <a className='anchors' href="https://console.developers.google.com" target='_blank' rel="noreferrer">Google Developers</a>
                </li>
                <li>
                    Generally speaking create a new app and work with the omniauth tabs, there’s more to it than that, but that’s the gist
                </li>
                <li>Gemfile - needs three things added:</li>
            </ol>
            
            <blockquote className="block-quote">
                <div className="code-block-snippet">Gem ‘omniauth’</div>
                <div className="code-block-snippet">gem 'dotenv-rails'</div>
                <div className="code-block-snippet">Gem 'omniauth-google-oauth2'</div>
            </blockquote>
            
            <ol className='numbered-blog' start={4}>
                <li>
                    Create an {" "} 
                    <span className='inline-code-emphasis'>.env</span> 
                    {" "} root of the app to add the google client_id and client_secret, 
                        found while setting new app within google developers console
                </li>
            </ol>
            
            <div className="code-block-large">
                {`So within the new .env file:
            
GOOGLE_CLIENT_ID=&lt;generated number from google here&gt;'\u0300'

GOOGLE_CLIENT_SECRET=&lt;generated number from google here&gt;'\u0300'`}
                

            </div>
            
            <p>5) add .env to .gitignore file, just type in</p>
            
            <div className="code-block-snippet">.env</div>
            
            <ul className='ul-squares'><li className='li-squares'>add to the list of items ignored by github</li></ul>
            
            <p>6) Create a omniauth.rb in /config/initializers, add all of this:</p>
            
            <div className="code-block-large">
            {`Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"],ENV["GOOGLE_CLIENT_SECRET"], skip_jwt: true
end
`}    
            
</div>
            
            <p>7) In routes.rb add:</p>
            
                <div className='code-block-snippet'>get '/auth/:provider/callback' =&gt; 'sessions#omniauth'</div>
            
            <p>8) In user.rb</p>
            
            <div className="code-block-large">
                {`def self.from_omniauth(auth)
    where(email: auth.info.email).first_or_initialize do |user|
        user.username = auth.info.name
        user.email = auth.info.email
        user.password = SecureRandom.hex
    end
end`}
                
</div>
            
            <p>9) In SessionsController</p>
            
            <div className="code-block-large">
                {`def omniauth
    @user = User.from_omniauth(auth)
    @user.save
    session[:user_id] = @user.id
    redirect_to user_path(@user)
end
`}      
</div>
            
            <p>as well as:</p>
            
            <div className="code-block-snippet">
            {`private
            
def auth
    request.env['omniauth.auth']
end`}
            </div>
            
            <p>9) Basic link to use this to make a login/signup with google, placed wherever necessary:</p>

            <div className='code-block-large'>&lt;%= link_to "Log In with Google", '/auth/google_oauth2' %&gt;</div>
            
            <div className="code-block-large">
                &lt;%= link_to "Log In with Google", '/auth/google_oauth2' %&gt;
            </div>
            
            <p>10) Optional: I found the branding icons at</p>
            
            <p><a className='anchors' href="https://developers.google.com/identity/branding-guidelines" target='_blank' rel="noreferrer">Google Branding Guidelines</a></p>
            
            <ul className='ul-squares'>
                <li className='li-squares'>With a set of downloads of different types of google images and instructions for use</li>
            </ul>
            
            <h3 className='core-subsection'>Speaking of logging, in don’t forget about in user.rb</h3>
            
            <div className="code-block-snippet">has_secure_password</div>
            
            <figure className="">
                <img src="/blog/bottlewitheffects.png" alt="artistic wine bottle" className="feature-image" />
                <figcaption className='caption'>Also had fun in a photo editor!</figcaption>
            </figure>
        </div>,

    }
    
]