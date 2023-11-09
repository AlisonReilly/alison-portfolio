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

            <p className='quote'>
                From philosopher Eric Hoffer: “Creativity is the ability to introduce order into the randomness of nature.”
            </p>

            <p className='quote'>I really enjoyed my higher level math courses, I had always thought of myself as being a 
                little mediocre at math unless I had some phenomenal teacher which rarely exists. I decided I could definitely 
                handle the rest of the math required for any major and continued on into Calculus I, which also went very well, 
                it was like a math puzzle.
            </p>

            <p className='quote'>
                From mathematician and computer scientist Robert R. Coveyou: “The generation of random numbers is too important 
                to be left to chance.”
            </p>
            
            <a className='quote-reference' href='www.random.org/quotations'>www.random.org/quotations</a>

            <p>
                One of my first favorite topics and exercises in my Introduction to Computer Science class was producing a 
                random number or series of random numbers by code and understanding its implications. Computer science labs 
                in randomness not only demonstrate the practicality of generating some random number simply for programming 
                purposes. Randomness in computer language also innately triggers a deeper thought process on the concept of 
                random in life, mathematics and philosophy. In order to explain this thought process further, I will reference 
                C++ code I worked with in my Intro class and later to expand this fascination into Ruby language, I am currently 
                learning, by exploring and reflecting on how random is accomplished in Ruby as well.
            </p>
            
            <h4>C++ Random</h4>
            
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
            
            <h4>Random Ruby</h4>
            
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

            <h4>Works Cited </h4>
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

            <h4>Project naming:</h4>

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
            
            <p className='quote-block or code-block'>
                spec.add_development_dependency "pry" | spec.add_development_dependency "nokogiri"
            </p>
            
            
            <h4>Config or environment files:</h4>
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

            <h4>Learned some new things – dates and ranges</h4>
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
            
            <h4>Self.ishness:</h4>
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

            <h4>I discovered an em dash:</h4>

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
            
            {/* todo anchors below - or move these outside the main blog area in the reading view*/}
            <p>For a YouTube demonstration: https://youtu.be/IZuhB9wp3Wo</p>
            <p>For the GitHub repository: https://github.com/Tsunamins/miami_venues.git</p>
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
            
            <h4>File Setup - first things, first</h4>

            <p className='quote-block or code-block'>
                if ActiveRecord::Migrator.needs_migration?
                    raise 'Migrations are pending.
                    Run rake 'db:migrate' to resolve the issue.'
                End
            </p>

            <p>To this:</p>

            <p className='quote-block or code-block'>
                if ActiveRecord::Base.connection.migration_context.needs_migration?
                raise 'Migrations are pending. Run 'rake db:migrate' to resolve the issue.'
                End
            </p>

            <p>At the moment I don’t remember the error code, but if I can reproduce it or find it, I will add it here.</p>
            <p>Excellent, everything is setup and a little test to see that everything is in place:</p>

            <p className='quote-block or code-block'>
                get '/' do
                "Hello World, Can this App Start?"
                End 
            </p>
            
            <p>Run shotgun in the terminal and…No. It can't start.</p>
            <p className='quote-block or code-block'>Run shotgun……and……Shotgun Error, or shotgun related error.</p>
            
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

            <p className='quote-block or code-block'>Hello World, Can this App Start?</p>

            <p>It could start!! Celebration.</p>

            <h4>Continuing the sinatra app setup, what was next?</h4>

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

            <h4>Styling - an external css sheet and what to do with it:</h4>
            
            <p>
                Early on while making the pages I thought it best to get started on some styling. I added some initial style modifications 
                and linked the file in the layout.erb page and…nothing happened. I looked up a few references to adding css styling in 
                sinatra, found out stylesheets, images, etc. have to be in a directory called public. After setting that up, still 
                nothing, until I found out a while later I had the public folder in the wrong place, hanging out in the app folder, 
                it just needed to be a folder at the start of the root of the project. Css, finally worked after making this change, 
                I then spent about 8 hours seeing how I could make my app look less 1996, semi-successfully.
            </p>            
            
            <h4>Weird sinatra shotgun/terminal errors:</h4>
            <p>
                I was working from VSCode via recommendation from one of Flatiron School's local environment setup guides and I got the 
                following error after working a while, or something similar.
            </p>
            
            <p className='quote-block or code-block'>
                start_tcp_server': no acceptor (port is in use or requires root privileges) (RuntimeError)
            </p>

            <p>
                Cool, what does that mean? After some searching I found a few references to the fact that too many shotgun processes 
                are working at once or a port is already in use, something to that effect, and the new process is interfering with an 
                old running process. More often than not it has to do with not closing out shotgun properly with Ctrl+C.
                A variety of solutions are presented to find the processes that are causing the problem within the terminal:
            </p>
            
            <p className='quote-block or code-block'>$ ps</p>
            <p className='quote-block or code-block'>$ ps ax | grep rails</p>
            <p className='quote-block or code-block'>$ ps ax | grep thin</p>
            <p className='quote-block or code-block'>$ ps ax | grep ruby</p>

            <p>All of these return some type of numbers, the solution next to enter in the terminal:</p>

            <p className='quote-block or code-block'>$ kill -9 #one of the numbers here</p>

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
            {/* todo anchors below - or move these outside the main blog area in the reading view*/}
            <p>For a YouTube demonstration: https://youtu.be/rlPety4CSeY</p>
            <p>For the GitHub repository:  https://github.com/Tsunamins/miami_rooftop_pools</p>
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

            <ol>
                <li>
                    Including the <strong>gem 'bcrypt'</strong> in the Gemfile<br/>example:
                    <br/><code>gem 'bcrypt', '~&gt; 3.1.7'</code>
                </li>
                <li>
                    Incorporating a string based attribute in the User table called “<strong>password_digest</strong>”
                    <br/>example:
                    <br/>within a migration file:
                    <br/>
                    <code>t.string "password_digest"</code>
                </li>
                <li>
                    Adding/calling the method <strong>has_secure_password</strong> within the User model
                    <br/>example:
                </li>
            </ol>

            <div className="code-block">
                class User &lt; ActiveRecord::Base
                has_secure_password
                end
            </div>

            <ol start={4}>
                <li>
                    Using the method <strong>.authenticate()</strong> in a sessions controller while checking the validity of the password 
                    in combination with the user’s username or other identifier
                    <br/>Example<br/>In the <code>def create</code> of a sessions controller:<br/><code>if @user &amp;&amp; 
                        @user.authenticate(params[:user][:password])</code>
                </li>
            </ol>
             
            <p>
                <em>What is happening behind all of these components? Bcrypt itself? passworddigest? hassecurepassword? .authenticate()?</em>
            </p>

            <h3>What is bcrypt doing in the first place?</h3>
             
            <p>According to the gem description:</p>

            <blockquote className="block-quote">
                <p>
                    “bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project for hashing passwords. The 
                    bcrypt Ruby gem provides a simple wrapper for safely handling passwords” 
                    (https://rubygems.org/gems/bcrypt/versions/3.1.12).
                    </p>
            </blockquote>

             
            <p>That’s cool, but what is a hash algorithm?</p>

            <blockquote className="block-quote">
                <p>“Hash algorithms take a chunk of data (e.g., your user's password) and create a "digital fingerprint," or hash, 
                    of it. Because this process is not reversible, there's no way to go from the hash back to the password”
                    <br/>(https://github.com/codahale/bcrypt-ruby).
                </p>
            </blockquote>

             
            <p>
                Ok, that’s fine. But what does that mean? What is a hash of something in this context? How does one go from a 
                ‘chunk of data’ to a ‘digital fingerprint?’
            </p>
             
             
            <p>The rest of that answer complexly comes from discrete mathematics and combinatorics, if one wants to dive in that 
                far (I do but not in this blog). However, after some light reading, the process of hashing involves mapping 
                (creating a relationship between objects), data of random size, to another object of a fixed size. The idea of 
                these functions, or why they are advantageous to using within encryption, is that they are very difficult to 
                reverse, the are considered “one-way functions” (https://en.wikipedia.org/wiki/Cryptographic_hash_function).
            </p>
             
            <p>So Bcrypt essentially uses a mathematical function called hashing to scramble up passwords, nearly irreversibly. 
                There are several different types of hashing functions or techniques, mathematically speaking. Several are listed 
                here: https://en.wikipedia.org/wiki/Hash_function#Hashing_variable-length_data. In this context, it doesn’t always 
                refer to security encryption, but is relevant, or at least interesting to me, to read about some of these 
                processes, but a bit too much to go into for this blog purpose.
            </p>

            <h3>Why Password_digest?</h3>
             
            <p><code>password_digest</code> is a requirement specific to bcrypt, likely a word chosen from and whatever way the 
                developers of bcrypt wanted to name the handling of password attributes. However, it is interesting that the output 
                of mathematical hash functions can be referred to as: hash values, hashes, digests or message digests, among others 
                (https://en.wikipedia.org/wiki/Cryptographic_hash_function &amp; 
                https://en.wikipedia.org/wiki/Hash_function#Hashing_variable-length_data). Also noteworthy, according to the 
                documentation it has to be <code>someword_digest</code> in terms of calling has_secure_password, as it is looking 
                for _digest, inparticular and is the topic of the next section (https://github.com/codahale/bcrypt-ruby).
            </p>
             
            <h3><code>has_secure_password</code>, is it really that easy, is that all I have to do?</h3>

            <p>
                There was a reading on it describing it, linking to documentation about it, etc. However, to move forward, I 
                generalized <code>has_secure_password</code>, and put it on the back burner as something I should just go with 
                and place into a User model, accepted it and called it a day.
            </p>
             
            <p>
                Reading further on bcrypts github page, I discovered that the initial way to incorporate bcrypt into ruby is 
                described a bit more complexly than simply <code>has_secure_password</code>, for example:
            </p>

            <pre className="code-block">require 'bcrypt'

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
            end</pre>
             
            <p>-From: https://github.com/codahale/bcrypt-ruby</p>
             
            <p>
                Their documentation goes onto mention, however, that later versions of rails incorporate this process within 
                <code>ActiveModel::SecurePassword</code>, allowing usage of <code>has_secure_password</code>. Oh so that’s why, 
                but how does that work exactly, what does it do?
            </p>
             
            <p>
                The definition of <code>has_secure_password</code>, incorporates a great deal necessary for password handling, 
                including active record validations for the usage of an attribute with digest and password length, as there are 
                limitations to the byte size a password should be for this algorithm. I found it a great deal more interesting to 
                view the source/definition of <code>has_secure_password</code>, maybe that should be obvious, but I don't always 
                look:
            </p>

            <div className='code-block'>
                #File activemodel/lib/active_model/secure_password.rb, line 61

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
            end
            </div>
             
            <p>
                -From: https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password
            </p>
            

            <h3>.authenticate</h3>
             
            <p>
                I never thought about .authenticate either, and I didn't suppose it was just mysteriously picked up by bcrypt, so looking 
                at the documentation on .authenticate, I noticed it does get reference from the Bcrypt class:
            </p>
             
            <p>
                Authenticating a session has one more reference to bcrypt, this built method also refers to bcrypt within its definition:
            </p>
            
            <div className="code-block">#File activemodel/lib/active_model/secure_password.rb, line 96
                def authenticate(unencrypted_password)
                    BCrypt::Password.new(password_digest).is_password?(unencrypted_password) &amp;&amp; self
                end
            </div>
  
            <p>-From: https://apidock.com/rails/ActiveModel/SecurePassword/InstanceMethodsOnActivation/authenticate</p>
             
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
                    JavaScript Teacher <code>https://www.youtube.com/channel/UCzQvgRgjjxhzEORvefubDPw</code>
                </p>
                <p>
                    Technologies4me <code>https://www.youtube.com/channel/UCHpHBzk4fz3oeQ31hmCreGg</code>
                </p>
                <p>
                    PothOnProgramming <code>https://www.youtube.com/channel/UCdS3ojA8RL8t1r18Gj1cl6w</code>
                </p>
            </blockquote>

            <div className="">
                <figure className="">
                    {/* todo add image */}
                    <figcaption>The Tilemap Result</figcaption>
                </figure>
            </div>

            <p>
                During these tutorials, I discovered the process of converting a png image into a tile map based on parsing array 
                values into pixel based coordinates of the png image. I discovered the use of Tiled to make a tile map with a 
                little more ease, rather than typing in the array values needed, manually. Along with this I found a lot of 
                details about animating images based on sprite sheets with different character positions. I found an excellent 
                tutorial on the use of the program Tiled as well
            </p>

            <blockquote className="block-quote"><p>GamesFromScratch </p>
                <p>
                    <code>https://www.youtube.com/channel/UCr-5TdGkKszdbboXXsFZJTQ</code>
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

            <blockquote className="block-quote"><p><code>https://phaser.io/</code></p></blockquote>

            <p>
                They have a great introduction to their engine on their website including a very simple tutorial on how to make a 
                first game. I got through the tutorial in a couple hours with a pretty much fully functional mini game.
            </p>

            <p>
                Phaser already has collisions, overalaps, camera settings, scene settings, gravity attributes, colors, text 
                setting, position getting/setting of every game component and a library of nearly every type of game need, 
                organized and ready to go, and if you need something else you can add a custom class of whatever you feel like. 
                Additionally, they have a great deal of user contributed tutorials and examples to get more ideas or see how 
                something can work, an amazing documentation site and links to many other resources. Once I got the hang of 
                Phaser as well, it was extremely easy to figure out how to manipulate my own objects and game elements by 
                console.log(ing) the game element in question and having a look at its lengthy list of attributes, very intuitive 
                from there on.
            </p>

            <p>I discovered other game making resources, free to use game art, for example, from 
                <code>https://opengameart.org/</code>.<br/>However, I couldn’t help but want to make my own art, got a little 
                stuck on what my game art theme and game may even be, so, while working through various phaser tutorials I 
                started attempting my own game art, primarily on pixilart.com <code>https://www.pixilart.com/draw#</code><br/>I
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
                Working through further Phaser tutorials with zenva <code>https://academy.zenva.com/</code><br/>I found a great 
                deal of tilemap based games with a great deal of examples of different elements to add to a game and different 
                playing styles. I had planned to add a few more such as NPC’s and different scene or level transitions, but in the 
                interest of time I left it to one, at least for now.
            </p>

            <p>
                I’m not sure what I would have come up with had I decided to keep this project simple and do enough just to meet 
                the requirements, but I’m glad I ventured into some processes of game making in collaboration with web 
                development.
            </p>
            {/* todo anchors below - or move these outside the main blog area in the reading view*/}
            <p>For a YouTube demonstration: https://youtu.be/MamqFgSoqq8</p>
            <p>For the GitHub repository:  https://github.com/Tsunamins/a-cats-dream</p>
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
                Well, I said I wanted to be finished with my bootcamp, when I first started, in 4 months or so. Since then, I’ve 
                had a million soul draining restaurant shifts, two moves to a new apartment, a handful of car troubles, financial 
                worry over my restaurant based income, a viral pandemic and economic lockdown coupled with more anxious thoughts 
                on financial stability. Four months came and went fast, then I said, well I’ll have it done in July, oh well in 
                September then, ok maybe by the end of the year, so 18 months later, and right up until my administrative 
                deadline for the program, I have finished my last project.
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
                <figure className="">
                    {/* todo add image */}
                </figure>
            </div>

            <p>It works, meets requirements and probably goes a little beyond.</p>

            <p>For this blog I think I’m going to just do a simple listing of things accomplished or features used:</p>

            <p>
                <strong>React-day-picker:</strong> https://www.npmjs.com/package/react-day-picker<br/>What seems most popular is 
                the integration of a calendar view with user selected dates or date ranges is airbnb’s react-dates npm package. And 
                yeah it’s fine. I tried 4 different calendar view packages in a separate program to see which one I liked working with 
                best. Another reason my project took so long, more than likely! I ended up choosing, what I think part of react-dates 
                uses actually is react-day-picker. I came across this while browsing hotel websites to see what they used, or to see 
                if I found any calendar integration that I favored, on https://www.loewshotels.com/. The understanding of how to 
                style this calendar, enable the user to select a date range and, set dates disabled, I happened to find a little 
                more straightforward to use. Also with easy access and I plan to integrate it eventually, is the ability to add 
                data to each calendar day. The original Loew’s hotel calendar I stumbled upon had prices and hotel availability 
                embedded into the calendar view itself, fancy! I think, not sure, due to hotel closures those date previews have 
                been removed for the time being.
            </p>

            <p><strong>Action Mailer:</strong> https://guides.rubyonrails.org/action_mailer_basics.html<br/>Action Mailer, is a 
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
            
            {/* todo anchors below - or move these outside the main blog area in the reading view*/}
            <p>For a YouTube demonstration: https://www.youtube.com/G4u_KgDfBYI</p>
            <p>For the GitHub repository:  https://github.com/Tsunamins/FauxtelHotels</p>
        </div>,
        date: '5/23/2020',
        tags: ['Flatiron', 'Bootcamp', 'JavaScript', 'Ruby', 'Ruby on Rails', 'DOM', 'React', 'Redux', 'Final Project' ],
        blogURL: 'fauxtel-hotels',
    },
    {
        title: 'Blog Inspiration, Interview Prep Warm-ups',
        content:
        <div className='blog-content-read-wrapper'>
            <h2>Reflection on problem solving</h2>

            <div  className=''>
                <img className='accent-image-right' src='keyboard.png' alt='backlit keyboard'></img>

                <p className=''>
                    I found I didn't get as much practice as I would have liked in my bootcamp like the coding exercises found on <em>
                    <a href="https://marketing.hackerrank.com/">Hacker Rank</a>
                    </em> and <em><a href="https://www.codewars.com/">Codewars</a> </em>during the length of my self-paced bootcamp.  
                    The work-school game, plus labs and projects hanging over my head, often left me with a lack of dedicated time, 
                    or semantically, anxiety of time dedication. However, now that I am graduated, I have more time!  Coding exercise 
                    can be fun again, and a necessary step in light of potential, upcoming interviews.
                </p>
            </div>

            <p>
                I dabbled in Hacker Rank's <em>10 Days of JavaScript</em> and then moved onto 
                <em> Interview Prep</em>, starting with the 
                <em>
                    <a href="https://www.hackerrank.com/interview/interview-preparation-kit/warmup/challenges"> Warm-Up Challenges</a>
                </em>.  
                So I thought I would highlight any setbacks, key points, maybe some initial thinking vs. finalized 
                thinking, etc.  I suppose my plan with these types of posts will be to go in and occasionally optimize code or 
                add more content to the process here, something like that!
            </p>

            <h3 className='core-subsection'>
                <a href="https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup">
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

            <pre className="pre-code"><code className="code-block">let unique = &#091;...new Set(ar)]</code></pre>

            <p>Count occurrence of each unique sock color with <strong>reducer</strong>:</p>

            <pre className="pre-code">
                <code className="code-block">
                    (array, number) =&gt; array.reduce((acc, val) =&gt; (val === number ? acc + 1 : acc), 0);
                </code>
            </pre>

            <p>Add the reducer to a <strong>for loop</strong>, passing in the iterated unique socks array:</p>

            <pre className="pre-code code-block jsx">{
            `for (let i = 0; i &lt; unique.length; i++) {
    let count = (countUnique(ar, unique&#091;i]))
}`
            }</pre>

            <p>Round down  unique sock count divided by 2, in case of an odd number with <strong>Math.floor()</strong></p>

            <pre className="pre-code"><code className="code-block">let detMatchQty = Math.floor(count/2)</code></pre>

            <p>Cool! I have matching socks, unlike my sock drawer!</p>

            <p>Full code if a reader might like:</p>

            <pre className="pre-code code-block jsx">{
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
                <a href="https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup">
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

            <pre className='pre-code'>
                <code className='code-block'>
                    let enteredValley = 0;<br/>
                    let altitude = 0;<br/>
                    let steps = s.split("");
                </code>
            </pre>

            <p>I used a helper function to track altitude:</p>

            <pre className="pre-code code-block jsx">{
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

            <pre className="pre-code code-block jsx">{
            `for (let i = 0; i &lt; steps.length; i++){
    if (altitude === 0 &amp;&amp; steps&#091;i] === "D"){
        enteredValley++
    }
}`
            }</pre>

            <p>And...eventually, I tracked some valley hiking!</p>

            <pre className="pre-code code-block jsx">{
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
                <a href="https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup">
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
            
            <pre className="pre-code"><code className='code-block'>const a_Count = (s.match(/a/g)||&#091;]).length</code></pre>

            <p>
                Used an if/else to go ahead and calculate if n % string.length === 0 and called the following external function, 
                calculateA() if it was:
            </p>

            <pre className="pre-code code-block jsx">{
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

            <pre className="pre-code">
                <code className='code-block'>
                    const roundRepeat = Math.floor(n / sLength) <br/>
                    const leftOver = n - (roundRepeat * sLength)
                </code>
            </pre>

            <p>
                I then used .slice(start, end), to cut string segment to the needed portion and followed up with another 
                regex/match to count the a's within the new string:
            </p>

            <pre className="pre-code">
                <code className='code-block'>
                    const addPortion = s.slice(0, leftOver)<br/>
                    const additionalAs = (addPortion.match(/a/g)||&#091;]).length
                </code>
            </pre>

            <p>
                Then called stored the returned value of calculateA() in a variable, followed by adding the amount of 
                additional As to the answer:
            </p>

            <pre className="pre-code">
                <code className='code-block'>
                    let roundedAnswer = calculateA(n, sLength, a_Count)<br/>
                    answer = additionalAs + roundedAnswer
                </code>
            </pre>

            <p>So that, is, my version of this exercise and the whole code below:</p>

            <pre className="pre-code code-block jsx">{
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
                <a href="https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup">
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

            <pre className="pre-code">
                <code className='code-block'>
                    let jumps = 0;<br/>
                    let position = 0;
                </code>
            </pre>

            <p>I used a <strong>while loop</strong> that set iteration condition based on the changing position:</p>

            <pre className="pre-code">
                <code className='code-block'>
                    {`while (position &lt; c.length - 1) {`}
                </code>
            </pre>

            <p>
                I checked for the ability to change position with a jump of 2 first, and if not a jump of 1, during each logic 
                check, I incremented a jump by 1, and thus the rest of the code.  Break keyword I don't think is actually 
                necessary, but in the discussions many used continue or break, so I thought I'd give it a try:
            </p>


            <pre className="pre-code code-block jsx">{
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
    // {
    //     title: 'Blog Inspiration, Interview Prep - Array Manipulation',
    //     content:
//         <div className='blog-content-read-wrapper'>

    //         <p>Well.............This is the intro to this problem:</p>

    //         <blockquote className="block-quote">
    //             <p>
    //                 Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each 
    //                 of the array element between two given indices, inclusive. Once all operations have been performed, return 
    //                 the maximum value in your array.
    //             </p>
    //         </blockquote>

    //         <p>
    //             Hmmm, ok.....After first reading through the intro, I wasn't sure what it was saying.  So I continued onto the 
    //             illustrated example, which usually clarifies things:
    //         </p>

    //         <blockquote className="block-quote">
    //             <p>
    //                 For example, the length of your array of zeros n=10&nbsp;. Your list of queries is as follows:
    //             </p>
    //         </blockquote>

    //         <pre className="">    
    //             a b k
    //             1 5 3
    //             4 8 7
    //             6 9 1
    //         </pre>

    //         <blockquote className="block-quote">
    //             <p>
    //                 Add the values of&nbsp;&nbsp;between the indices&nbsp;&nbsp;and&nbsp;&nbsp;inclusive:
    //             </p>
    //         </blockquote>

    //         <pre className="">
    //             index-&gt;	 1 2 3  4  5 6 7 8 9 10
    //             [0,0,0, 0, 0,0,0,0,0, 0]
    //             [3,3,3, 3, 3,0,0,0,0, 0]
    //             [3,3,3,10,10,7,7,7,0, 0]
    //             [3,3,3,10,10,8,8,8,1, 0]
    //         </pre>

    //         <blockquote className="block-quote">
    //             <p>The largest value is 10&nbsp;&nbsp;after all operations are performed.</p>
    //             <cite>
    //                 <a href="https://www.hackerrank.com/challenges/crush/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=arrays">
    //                     https://www.hackerrank.com/challenges/crush/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=arrays
    //                 </a>
    //             </cite>
    //         </blockquote>

    //         <p>
    //             For whatever reason, when I first read through all this I didn't understand what it was saying.  So, just in case 
    //             I thought I'd provide my own explanation to elaborate on the examples illustration:
    //         </p>


    //         <div className="">
    //             <figure className="">
    //                 {/* todo add image */}
    //             </figure>
    //         </div>

    //         <p>
    //             This was the part of the problem expressing "list of operations, for each operation add a value to each of the 
    //             array element between two given indices, inclusive," and "list of queries."
    //         </p>

    //         <p></p>

    //         <div className="">
    //             <figure className="">
    //                 {/* todo add image */}
    //             </figure>
    //         </div>

    //         <p>
    //             Column k is meant to be added to the array of 0's at the 1-indexed indices starting from column a and continuing on 
    //             through column b. So column k are the "operations" the problem discusses, and column a b are the ranges, I suppose 
    //             together one could classify each sub-array as the 'query.'
    //         </p>

    //         <p>The illustration provided was referencing each step of the query and the operation to be performed, in effect, but 
    //             I made my own version below, with the example of n=10:   So as in the example n = 10:
    //         </p>

    //         <figure className="">
    //             {/* todo add image */}
    //             <figcaption>
    //                 The reference to the 1-indexed array, meaning, in theory, if the array was indexed starting at 1 instead of 0. The second 
    //                 line, referred to what the problem would be "Starting with a 1-indexed array of zeros...," this being defined in the 
    //                 problem by n.
    //             </figcaption>
    //         </figure>

    //         <p>The rest of the illustration comes from incorporating the first sub array, query, then adds the next, then the final,
    //              etc. As I highlighted  more below:
    //         </p>

    //         <figure className="">
    //             {/* todo add image */}
    //             <figcaption>
    //                 So from the first row queries and operations where k = 3 and a b = 1, 5; add 3 to each index 1 through 5
    //             </figcaption>
    //         </figure>

    //         <figure className="">
    //             {/* todo add image */}
    //             <figcaption>
    //                 Next row, where k = 7 and a, b = 4, 8; add 7 to each
    //             </figcaption>
    //         </figure>

    //         <figure className="">
    //             {/* todo add image */}
    //             <figcaption>And finally, I won't describe, but</figcaption>
    //         </figure>

    //         <p>
    //             So the final modification to the original array of 0's is arr = [3, 3, 3, 10, 10, 8, 8, 8, 1, 0].  The actual goal 
    //             of the problem was to find the highest number within here, that being 10.
    //         </p>

    //         <p>So, onto, solving...Well I'll add it here tonight or tomorrow, I forgot I have followers and they might read it!  
    //             I've gotten sleepy and hungry!
    //         </p>

    //         <h4>My Initial thoughts...</h4>

    //         <p>
    //             Once I figured out what the problem meant the solution seemed simple.  I would need some means of looping through 
    //             each sub array, iterating through each sub arrays indices and adding on the value of k to that index.
    //         </p>

    //         <p>
    //             My first solution, passed the initial tests and half of the tests or so in the final submission. The rest of the 
    //             tests failed, because my code processing exceeded the time limits.  I went back to the drawing board and came up 
    //             with a completely different solution, that also passed half the tests, and failed for time.  I kind of didn't think 
    //             the second solution would have passed for time either, but I thought it was fun that I had two different approaches 
    //             work, not sure why I find that fun since it didn't pass all the tests, but in case you want to know more:
    //         </p>

    //         <h4>What I used #1:</h4>

    //         <p>In either case I started by filling an empty array of n length and filled it with 0's</p>
    //     </div>,
    //     date: '6/28/2020',
    //     tags: ['JavaScript', 'practice'],
    //     blogURL: 'interview-prep-arrays',
    // },

]













