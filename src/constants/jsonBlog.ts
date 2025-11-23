// COPY public.dev_blog (id, "createdAt", "originalDate", title, content, "blogURL", tags) FROM stdin;
export const JSON_BLOG = [
    {
        id: '56120683-427e-4201-92b5-4e36c86502f7',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2019-01-01 15:36:29',
        title: 'Why Software Development - Blog Post 1',
        blogURL: 'why-software',
        tags: ['Flatiron', 'Bootcamp', 'Coding', 'Philosophical'],
        content: [
            {
                "text": "Over time, I've explored a lot of different industries: writing, nursing, politics, massage therapy, and more, trying to find something I could really immerse myself in. But for a mix of life and practical reasons, none of them quite stuck. I kept asking myself: what's next? I knew I'd keep taking classes, but I wanted to find something that felt like a true direction for a long-term career.",
                "element": "p",
                "sequence": 0
            },
            {
                "text": "After one more financial setback trying to afford a college that just wasn't realistic for my income and circumstances, I returned to my community college. I focused on higher-level math and science courses, subjects that would keep the door open to any science or engineering degree. I figured, I'll keep going and see what inspires me.",
                "element": "p",
                "sequence": 1
            },
            {
                "text": "To my surprise, I really enjoyed the math. I had always assumed I was just 'okay' at it, unless I had some extraordinary teacher (a rarity). But I found myself doing well, even in Calculus I, which started to feel more like solving a puzzle than anything else. That experience gave me confidence that I could handle whatever math was required for a STEM path.",
                "element": "p",
                "sequence": 2
            },
            {
                "text": "Somewhere between semesters, I started a little WordPress blog to post a few essays I'd written. I thought it might be a fun creative outlet beyond academics. I've only posted two things so far—maybe more will come—but that small project turned out to be pivotal in a completely unexpected way.",
                "element": "p",
                "sequence": 3
            },
            {
                "text": "Playing with the blog design got me curious about the tech behind it. I liked using the pre-designed templates but kept wanting more flexibility—more control. That led me down a rabbit hole of plugins, FTP, HTML, and CSS. I was watching YouTube tutorials, reading eBooks, and trying to recreate custom designs for my blog just for the fun of it.",
                "element": "p",
                "sequence": 4
            },
            {
                "text": "Pretty soon, I realized I wanted to go deeper. I enrolled in an Intro to Computer Science class using C++. That first semester was a revelation. I got so absorbed in solving problems that I'd forget to eat. I'd step away from a problem, only to find my mind was still quietly working on it, coming back with fresh ideas later. I'd never had that kind of focused engagement with anything before.",
                "element": "p",
                "sequence": 5
            },
            {
                "text": "It clicked: I loved this. I wanted to spend my time solving these intricate problems, these little puzzles that, when scaled up, power everything from video games and self-driving cars to medical devices and space tech. The potential applications are endless.",
                "element": "p",
                "sequence": 6
            },
            {
                "text": "Ready to leave New York and return to warm weather, I started planning my next steps. Rather than waiting years to complete a degree, I decided to accelerate things. I applied to the Flatiron School to get hands-on and dive straight into the industry. Technology evolves quickly, and I felt the best way to keep up, and contribute, was to get involved as soon as possible.",
                "element": "p",
                "sequence": 7
            }
        ]
    },
    {
        id: '5a31f0b4-8a63-451d-985b-3fd18593fd79',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2019-01-04 17:36:20',
        title: 'Randomness',
        blogURL: 'randomness',
        tags: ['Flatiron', 'Bootcamp', 'Philosophical', 'Ruby', 'C++', 'Random Numbers'],
        content: [
            {
                "text": "For this blog, I wanted to explore the philosophical and mathematical implications of randomness, and use that as a thoughtful, approachable entry point into the concept of randomness in computer code. What started as a quick idea turned into a deeper rabbit hole than expected. I found myself tangled in theories, interpretations, and edge cases. I knew I'd get stuck there for days if I let myself, so I'm going to save the full deep-dive for later. For now, I'll open with a couple of quotes that captured the spirit of what I was thinking:",
                "element": "p",
                "sequence": 0
            },
            {
                "text": "From philosopher Eric Hoffer: 'Creativity is the ability to introduce order into the randomness of nature.'",
                "element": "p",
                "sequence": 1,
                "className": "block-quote"
            },
            {
                "text": "From mathematician and computer scientist Robert R. Coveyou: 'The generation of random numbers is too important to be left to chance.'",
                "element": "p",
                "sequence": 2,
                "className": "block-quote"
            },
            {
                "rel": "noreferrer",
                "href": "www.random.org/quotations",
                "text": "www.random.org/quotations",
                "target": "_blank",
                "element": "a",
                "sequence": 3,
                "className": "reference anchors"
            },
            {
                "text": "One of my earliest favorite topics in my Introduction to Computer Science class was randomness: how to generate it in code, and what it actually means. On the surface, it seems like a practical task, pick a number at random, but as I spent more time on it, randomness in programming began to mirror bigger questions in math and philosophy. What is random? Is anything truly random, or just outside our ability to predict?",
                "element": "p",
                "sequence": 4
            },
            {
                "text": "To unpack this, I'll start with how I encountered randomness in C++, then look at how Ruby handles it, which I've been exploring more recently",
                "element": "p",
                "sequence": 5
            },
            {
                "text": "C++ Random",
                "element": "h3",
                "sequence": 6,
                "className": "core-subsection"
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "In C++ the, " },
                    { "text": "rand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "function generates a sequence of seemingly random numbers. Here's a basic example of how it works:" }
                ],
                "sequence": 7
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 8,
                "className": "figure-pres",
                "subElements": [
                    { "altText": "C++ Code for random setup", "element": "img", "imageSrc": "/blog/cpprandomintro.jpg", "imageCaption": "Code", "classNameCaption": "caption-pres" }
                ]
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 9,
                "className": "figure-pres",
                "subElements": [
                    { "altText": "Run 1 result", "element": "img", "imageSrc": "/blog/cpprandomintrorun1.jpg", "imageCaption": "Run 1", "classNameImage": "output", "classNameCaption": "caption-pres" },
                    { "altText": "Run 2 result", "element": "img", "imageSrc": "/blog/cpprandomintrorun2.jpg", "imageCaption": "Run 2", "classNameImage": "output", "classNameCaption": "caption-pres" }
                ]
            },
            {
                "text": "Running this code might seem random at first. But if you re-run the compiled program, you'll get the same number every time. That's because the underlying sequence isn't actually random, just deterministic and hidden from view.",
                "element": "p",
                "sequence": 10
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "To get a different sequence, you can use " },
                    { "text": "rand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "to seed the random number generator " },
                    { "text": "srand(somenumberyouwanthere)", "element": "span", "className": "inline-code-emphasis" }
                ],
                "sequence": 11
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 12,
                "className": "figure-pres",
                "subElements": [
                    { "altText": "C++ Code for srand() setup", "element": "img", "imageSrc": "/blog/cppseedintro.jpg", "imageCaption": "Code", "classNameCaption": "caption-pres" }
                ]
            },
            {
                "text": "Running this code might seem random at first. But if you re-run the compiled program, you'll get the same number every time. That's because the underlying sequence isn't actually random, just deterministic and hidden from view.",
                "element": "p",
                "sequence": 13
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 14,
                "className": "figure-pres",
                "subElements": [
                    { "altText": "Run 1 result", "element": "img", "imageSrc": "/blog/cppseedintrorun1.jpg", "imageCaption": "Run 1", "classNameImage": "output", "classNameCaption": "caption-pres" },
                    { "altText": "Run 2 result", "element": "img", "imageSrc": "/blog/cppseedintrorun2.jpg", "imageCaption": "Run 2", "classNameImage": "output", "classNameCaption": "caption-pres" }
                ]
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "A do while loop in C++ using " },
                    { "text": "rand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "can generate a different looking set of random numbers each time the user calls for it, but starting the program over again, generates the same set each time. Note, " },
                    { "text": "srand(somenumberyouwanthere)", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "srand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "with a parameter could still be incorporated into this but would have the similar conundrum noted above." }
                ],
                "sequence": 15
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 16,
                "className": "figure-pres",
                "subElements": [
                    { "altText": "C++ Code", "element": "img", "imageSrc": "/blog/cppconundrum.jpg", "imageCaption": "Code", "classNameCaption": "caption-pres" }
                ]
            },
            {
                "text": "Compilers are built on various logic and mathematical reasoning, so the interesting part is, at least for the moment in programming today, there is no true sense of random to a machine, a computer, a compiler, nor in computer language, and that is to say, no true sense of random in terms of its philosophical human experience. So what needs to be done, at least in C++ to make patterns stop repeating? What needs to happen so that the user can experience what they are used to calling random, even if just for that moment in time?",
                "element": "p",
                "sequence": 17
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "Noteworthy from the question above is that computer language can use exactly that, time. In C++ to do so, " },
                    { "text": "ctime", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "is an inclusion necessary in C++ files to utilize time functions. From the " },
                    { "text": "ctime", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "inclusion " },
                    { "text": "time()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "can be incorporated into the " },
                    { "text": "srand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "setting the current time the program is executed, or the code is asked for, as the seed specifier and setting " },
                    { "text": "time()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "to " },
                    { "text": "NULL", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", 0, or nullptr depending on C++ version." }
                ],
                "sequence": 18
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "Once ctime is included " },
                    { "text": "srand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "seed is set to " },
                    { "text": "time()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "with NULL " },
                    { "text": "srand(time(NULL);", "element": "span", "className": "inline-code-emphasis" }
                ],
                "sequence": 19
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "From here,  " },
                    { "text": "rand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "is utilized once again for output as in the above examples, or of course whatever one's program may call for. The example below uses a combined version of all the techniques above to demonstrate the results of setting time as the " },
                    { "text": "srand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "seed parameter." }
                ],
                "sequence": 20
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 21,
                "className": "figure-pres",
                "subElements": [
                    { "altText": "C++ Code", "element": "img", "imageSrc": "/blog/cppseedwithtime.jpg", "imageCaption": "Code", "classNameCaption": "caption-pres" }
                ]
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 22,
                "className": "figure-pres",
                "subElements": [
                    { "altText": "Run 1 result", "element": "img", "imageSrc": "/blog/cppseedwithtimerun1.jpg", "imageCaption": "Run 1", "classNameImage": "output", "classNameCaption": "caption-pres" },
                    { "altText": "Run 2 result", "element": "img", "imageSrc": "/blog/cppseedwithtimerun2.jpg", "imageCaption": "Run 2", "classNameImage": "output", "classNameCaption": "caption-pres" },
                    { "altText": "Run 3 result", "element": "img", "imageSrc": "/blog/cppseedwithtimerun3.jpeg", "imageCaption": "Run 3", "classNameImage": "output", "classNameCaption": "caption-pres" }
                ]
            },
            {
                "text": "Wouldn't it be wonderful now, to go off on some tangent regarding physics having no concept of time beyond elapsed time for calculation? That would be a lot of fun, but for now, I'll have to move on to how random works in Ruby.",
                "element": "p",
                "sequence": 23
            },
            {
                "text": "Random Ruby",
                "element": "h3",
                "sequence": 24,
                "className": "core-subsection"
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "Of course, in ruby, there are methods on hand and ready to go simplifying the code involved. The primary method involves the use of " },
                    { "text": "#rand", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ". Calling " },
                    { "text": "rand", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "by itself yields a random float. If a whole integer is desired typically " },
                    { "text": "rand(1000)", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", for example, will generate a random number between 0 and 1000. I tried to find a general maximum number available as in C++ but was unsuccessful so far. " }
                ],
                "sequence": 25
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 26,
                "className": "figure-pres",
                "subElements": [
                    {
                        "altText": "rand - no specification",
                        "element": "img",
                        "imageSrc": "/blog/rubyrandom1.jpg",
                        "imageCaption": "rand - no specification",
                        "classNameImage": "output",
                        "classNameCaption": "caption-pres"
                    },
                    {
                        "altText": "float result",
                        "element": "img",
                        "imageSrc": "/blog/rubyrandom2.jpg",
                        "imageCaption": "float result",
                        "classNameImage": "output",
                        "classNameCaption": "caption-pres"
                    }
                ]
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 27,
                "className": "figure-pres",
                "subElements": [
                    {
                        "altText": "rand - with integer range",
                        "element": "img",
                        "imageSrc": "/blog/rubyrandom3.jpg",
                        "imageCaption": "rand - with integer range",
                        "classNameImage": "output",
                        "classNameCaption": "caption-pres"
                    },
                    {
                        "altText": "integer result",
                        "element": "img",
                        "imageSrc": "/blog/rubyrandom4.jpg",
                        "imageCaption": "integer result",
                        "classNameImage": "output",
                        "classNameCaption": "caption-pres"
                    }
                ]
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "In contrast to C++, Ruby " },
                    { "text": "rand", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "methods are already setup to refer to a timestamp along with 'the process id, and a sequence number (ruby-doc.org).' " },
                    { "text": "rand(1000)", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "is sufficient in a while loop: " }
                ],
                "sequence": 28
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 29,
                "className": "figure-pres",
                "subElements": [
                    {
                        "altText": "rand in a loop and called twice",
                        "element": "img",
                        "imageSrc": "/blog/rubyrandom5.jpg",
                        "imageCaption": "rand in a loop and called twice",
                        "classNameImage": "output",
                        "classNameCaption": "caption-pres"
                    },
                    {
                        "altText": "result - different numbers",
                        "element": "img",
                        "imageSrc": "/blog/rubyrandom6.jpg",
                        "imageCaption": "result - different numbers",
                        "classNameImage": "output",
                        "classNameCaption": "caption-pres"
                    }
                ]
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": " Similar to C++, " },
                    { "text": "srand(somenumberhere)", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", will cause a repeat of the same series each time a program is started or method is called once again. So, in Ruby, in particular, " },
                    { "text": "srand()", "element": "span", "className": "inline-code-emphasis" },
                    { "text": "is helpful if one would like to repeat the same values by some seed." }
                ],
                "sequence": 30
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 31,
                "className": "figure-pres",
                "subElements": [
                    {
                        "altText": "srand used with parameter",
                        "element": "img",
                        "imageSrc": "/blog/rubyrandom7.jpg",
                        "imageCaption": "srand used with parameter",
                        "classNameImage": "output",
                        "classNameCaption": "caption-pres"
                    },
                    {
                        "altText": "result - same numbers",
                        "element": "img",
                        "imageSrc": "/blog/rubyrandom8.jpg",
                        "imageCaption": "result - same numbers",
                        "classNameImage": "output",
                        "classNameCaption": "caption-pres"
                    }
                ]
            },
            {
                "text": "Personally, I like the C++ version a bit more. There's something satisfying about seeing exactly how the randomness is being constructed—how it hinges on time, on the logic of the machine, on math underneath the surface. It pushes you to ask, What does 'random' really mean?",
                "element": "p",
                "sequence": 32
            },
            {
                "text": "Ruby, on the other hand, makes randomness effortless. You just call rand, and it works. That elegance is part of why I've enjoyed learning Ruby overall.",
                "element": "p",
                "sequence": 33
            },
            {
                "text": "Ultimately, the best language depends on the project—but both offer a fascinating way to think about randomness in a machine-driven world. And both invite the kind of questions that go beyond syntax and into something much more human.",
                "element": "p",
                "sequence": 34
            },
            {
                "text": "So I think those opening quotes were the right choice after all.",
                "element": "p",
                "sequence": 35
            },
            {
                "text": "Random Ruby",
                "element": "h3",
                "sequence": 36,
                "className": "core-subsection"
            },
            {
                "rel": "noreferrer",
                "href": "https://ruby-doc.org/core-2.2.0/Random.html",
                "text": "Britt, James and Neurogami. 'Random' Ruby-doc.org.",
                "target": "_blank",
                "element": "a",
                "sequence": 36,
                "className": "anchors"
            },
            {
                "rel": "noreferrer",
                "href": "https://www.random.org/quotations/",
                "text": "RANDOM.ORG. ",
                "target": "_blank",
                "element": "a",
                "sequence": 37,
                "className": "anchors"
            }
        ]
    },
    {
        id: '21bfc7b5-e7c6-4577-8b40-bf26c5a93833',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2019-02-12 17:58:23',
        title: 'CLI Project, Noteworthy Points',
        blogURL: 'cli-project',
        tags: ['Flatiron', 'Bootcamp', 'Ruby', 'CLI'],
        content: [
            {
                "text": "The idea of my CLI project was a quick search for things to do in Miami today (or another date specified), scraping from Perez Art Museum and the Frost Science Museum's Laser Friday's page. Of course there are many more things to do in Miami on any given day, but the trick of this project was to demonstrate web scraping, object-oriented programming and also just make a nice clean code.",
                "element": "p",
                "sequence": 0
            },
            {
                "text": "Project Setup: File setup was a little tricky when first creating a gem projects files, it is handy however that initial file structure and the necessary inclusions, requirements and calls to certain files are incorporated automatically when using bundle gem \"project-name\". However the file setup is simplified, there are a few details to iron out in advance and upon project setup:",
                "element": "p",
                "sequence": 1
            },
            {
                "text": "Project naming:",
                "element": "h3",
                "sequence": 2,
                "className": "core-subsection"
            },
            {
                "text": "A different file structure is created with something such as miami_venues_today and miami_venues.",
                "element": "p",
                "sequence": 3
            },
            {
                "inline": true, "element": "p", "richText":
                    [
                        { "text": "• " },
                        { "text": "bundle gem miami_venues_today", "element": "span", "className": "inline-code-emphasis" },
                        { "text": " will create several layers of files, one nested under the other, the file structure ends up looking a little more complicated, " },
                        { "text": "lib/miami/venues/today", "element": "span", "className": "inline-code-emphasis" },
                        { "text": " is generated in this example, but also affects the require parameters and adds unnecessary files to a simple project. Other projects could perhaps use such naming and file system, however, so it is still useful to know." }
                    ],
                "sequence": 4
            },
            {
                "inline": true, "element": "p", "richText":
                    [
                        { "text": "• " }, { "text": "bundle gem miami_venues", "element": "span", "className": "inline-code-emphasis" },
                        { "text": " will create less file nests, making the require parameters much more simple and manageable, " },
                        { "text": "lib/miami_venues", "element": "span", "className": "inline-code-emphasis" },
                        { "text": ". These initial naming and file conventions are however manageable in either case, files can be easily deleted, added, renamed and the overall file structure changed, one just needs to makes sure all file inclusions match throughout the project’s files." }
                    ],
                "sequence": 5
            },
            {
                "inline": true, "element": "p", "richText":
                    [
                        { "text": "The .gemspec file: " },
                        { "text": "miami_venues.gemspec", "element": "span", "className": "inline-code-emphasis" },
                        { "text": ", for example has a great deal of specifiers for publishing which need to be filled out especially if publishing. Generally, anything that has a “TODO” needs to be filled out with the appropriate value, or this publishing section could use to be commented out, if not publishing the gem." }
                    ],
                "sequence": 6
            },
            {
                "text": "More importantly, in the .gemspec file, at the bottom, various dependencies are added. Some are added initially, but for this particular project, pry and Nokogiri needed to be added in order to debug efficiently with pry and to utilize web scraping with nokogiri, the main focus of the project:",
                "element": "p",
                "sequence": 7
            },
            {
                "text": 'spec.add_development_dependency "pry"\nspec.add_development_dependency "nokogiri"',
                "element": "div",
                "sequence": 8,
                "className": "code-block-snippet"
            },
            {
                "text": "Config or environment files:",
                "element": "h3",
                "sequence": 9,
                "className": "core-subsection"
            },
            {
                "inline": true, "element": "p", "richText":
                    [
                        { "text": "In the " },
                        { "text": "/lib", "element": "span", "className": "inline-code-emphasis" },
                        { "text": " directory, " }, { "text": "miami_venues.rb", "element": "span", "className": "inline-code-emphasis" },
                        { "text": ", was added as a means to ensure all the other files are incorporated, it is an environment or configuration type of file seen in other Ruby programs and setup. For example, I was used to the environment.rb file in a config folder from exercises I completed in the past. While researching other file setups for a gem CLI project I came across this particular setup: a " },
                        { "text": "/config", "element": "span", "className": "inline-code-emphasis" },
                        { "text": " folder is added, an " },
                        { "text": "environment.rb", "element": "span", "className": "inline-code-emphasis" },
                        { "text": " includes the necessary files to be used in the program and the " },
                        { "text": "lib/miami_venues.rb", "element": "span", "className": "inline-code-emphasis" },
                        { "text": " includes the environment file. There are a other, more concise examples to follow, but also interesting to see exactly how that file structure is initially created while creating a new gem, and good to know how all those files work together." }
                    ],
                "sequence": 10
            },
            {
                "text": "Learned some new things – dates and ranges",
                "element": "h3",
                "sequence": 11,
                "className": "core-subsection"
            },
            {
                "text": "The goals of the project were date focused, the CLI would have to ask for some user input and match today's date or match some other specified date to what the user wants to find. The date specified would have to easily match to a list of event dates and pull those details up for the user. Each of the two websites I was interested in scraping had not only different date format's within the text of an element, but had date ranges to work with as well. So, I had to research the ruby date methods. In order to use various the predefined date class and its methods, require 'date' had to be included at the top of the file along with pry, nokogiri and open-uri. Three date methods were extremely useful, DateTime.Parse(), .strftime() and Time.new:",
                "element": "p",
                "sequence": 12
            },
            {
                "inline": true, "element": "p", "richText":
                    [
                        { "text": "DateTime.parse(‘date here in almost any format’)", "element": "span", "className": "inline-code-emphasis" },
                        { "text": ", changes a date such as January, 1 2018 and makes the value a standardized version of time:" }
                    ],
                "sequence": 13
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 14,
                "className": "figure-pres",
                "subElements": [
                    {
                        "altText": "Run 1 result",
                        "element": "img",
                        "imageSrc": "/blog/prydate1.jpeg",
                        "imageCaption": null,
                        "classNameImage": "outlet",
                        "classNameCaption": null
                    }
                ]
            },
            {
                "inline": true, "element": "p", "richText":
                    [
                        { "text": "Once this date was standardized a specific formatted output can be returned with " },
                        { "text": ".strftime(“'%a %d %b %Y'”)", "element": "span", "className": "inline-code-emphasis" },
                        { "text": ", these representing name value of the day, numerical value of the day, month and year, respectively :" }
                    ],
                "sequence": 15
            },
            {
                "type": "imageSeries",
                "element": "div",
                "sequence": 16,
                "className": "figure-pres",
                "subElements": [
                    {
                        "altText": "Run 2 result",
                        "element": "img",
                        "imageSrc": "/blog/prydate2.jpg",
                        "imageCaption": null,
                        "classNameImage": "outlet",
                        "classNameCaption": null
                    }
                ]
            },
            {
                "text": "These methods were included in a helper method to pass in any date data gathered from the website and process them back out with the format above, in order to match the user date specified later.",
                "element": "p",
                "sequence": 17
            },
            {
                "text": "Within the CLI if the user wants to check events for the current date and time, Time.new is called set to a variable. In order to display this time, puts needs to be...",
                "element": "p",
                "sequence": 18
            },
            {
                "text": "Works Cited",
                "element": "h3",
                "sequence": 19,
                "className": "core-subsection"
            },
            {
                "rel": "noreferrer",
                "href": "https://youtu.be/IZuhB9wp3Wo'",
                "text": "YouTube Demonstration",
                "target": "_blank",
                "element": "a",
                "sequence": 36,
                "className": "anchors"
            },
            {
                "rel": "noreferrer",
                "href": "https://github.com/AlisonReilly/miami_venues.git",
                "text": "GitHub Repo",
                "target": "_blank",
                "element": "a",
                "sequence": 37,
                "className": "anchors"
            }
        ]
    },
    {
        id: '2ed35d22-7d30-41c9-850d-8ac79e2dd415',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2019-06-11 18:24:56',
        title: 'Sinatra Project: Miami Rooftop Pools',
        blogURL: 'miami-rooftop-pools',
        tags: ['Flatiron', 'Bootcamp', 'Sinatra', 'Ruby'],
        content: [
            {
                "text": "'Something to keep track of,' the project mode page described on Flatiron School curriculum, well I had a million thoughts on things I could use to keep track of, some too simple some too complex. I thought, not that it is a realistic web app for a variety of reasons, but maybe a simple web based app to keep track of details of various rooftop pools, primarily at hotels, that are easy to visit, have special events where you can visit easily, that hold special events often, or if you had to book a room for a night or two to relax at the pool's site.",
                "element": "p",
                "sequence": 0
            },
            {
                "text": "File Setup - first things, first",
                "element": "h3",
                "sequence": 1,
                "className": "core-subsection"
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 2,
                "className": "code-block-large",
                "codeContent": ["if ActiveRecord::Migrator.needs_migration?", "  raise 'Migrations are pending.", "  Run rake 'db:migrate' to resolve the issue.'", "End"]
            },
            {
                "text": "To this:",
                "element": "p",
                "sequence": 3
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 4,
                "className": "code-block-large",
                "codeContent": ["if ActiveRecord::Base.connection.migration_context.needs_migration?", "  raise 'Migrations are pending. Run 'rake db:migrate' to resolve the issue.'", "End"]
            },
            {
                "text": "At the moment I don't remember the error code, but if I can reproduce it or find it, I will add it here.",
                "element": "p",
                "sequence": 5
            },
            {
                "text": "Excellent, everything is setup and a little test to see that everything is in place:",
                "element": "p",
                "sequence": 6
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 7,
                "className": "code-block-snippet",
                "codeContent": ["get '/' do", "  \"Hello World, Can this App Start?\"", "End"]
            },
            {
                "text": "Run shotgun in the terminal and…No. It can't start.",
                "element": "p",
                "sequence": 8
            },
            {
                "text": "Run shotgun……and……Shotgun Error, or shotgun related error.",
                "element": "p",
                "sequence": 9,
                "className": "example or emphasis-block"
            },
            {
                "text": "After researching this further, I could not run shotgun on windows, or windows as is, I needed Linux or a Linux emulated system in place.",
                "element": "p",
                "sequence": 10
            },
            {
                "text": "I had a ton of trouble with the learn in browser IDE, I thought no way I'm only working through the learn browser, I will go crazy and abandon my studies. I almost set it up a week or so prior but held off, so, I decided to take out some extra time during my project and dual boot windows by installing linux and following a couple of setup instructions from Flatiron School help pages and setup guides (that is another blog post in itself). It was something I would have to do later, so, all the better to get it set up in advance, and, I like it better!",
                "element": "p",
                "sequence": 11
            },
            {
                "text": "After getting the whole thing setup, including a few extra steps to get my wifi adapter working in Ubuntu/linux, I cloned my files, ran shotgun successfully and had a look at my '/' route in the browser:",
                "element": "p",
                "sequence": 12
            },
            {
                "text": "Hello World, Can this App Start?",
                "element": "p",
                "sequence": 13,
                "className": "quote-block"
            },
            {
                "text": "It could start!! Celebration.",
                "element": "p",
                "sequence": 14
            },
            {
                "text": "Continuing the sinatra app setup, what was next?",
                "element": "h3",
                "sequence": 15,
                "className": "core-subsection"
            },
            {
                "text": "All the labs had some paralleled example to work with, but I knew I may like some of my flow of controllers to work a little differently, but where to get started. Generally, I worked back and forth between pages and views, how will the first page look, make the page, make that route; how will the sign up page work, make the page, make the route.",
                "element": "p",
                "sequence": 16
            },
            {
                "text": "This is where I developed a clearer understanding as well between when I was specifying a route and when I was specifying an erb page within other directories. The previous labs always had similar names, so I was generalizing a lot and putting them into kind of the same category, even though I knew something was different.",
                "element": "p",
                "sequence": 17
            },
            {
                "text": "The sinatra project was really giving a good opportunity to see exactly what was happening in routes and page rendering and why it was happening, something I was not getting in the labs quite as much.",
                "element": "p",
                "sequence": 18
            },
            {
                "text": "Styling - an external css sheet and what to do with it:",
                "element": "h3",
                "sequence": 19,
                "className": "core-subsection"
            },
            {
                "text": "Early on while making the pages I thought it best to get started on some styling. I added some initial style modifications and linked the file in the layout.erb page and…nothing happened. I looked up a few references to adding css styling in sinatra, found out stylesheets, images, etc. have to be in a directory called public. After setting that up, still nothing, until I found out a while later I had the public folder in the wrong place, hanging out in the app folder, it just needed to be a folder at the start of the root of the project. Css, finally worked after making this change, I then spent about 8 hours seeing how I could make my app look less 1996, semi-successfully.",
                "element": "p",
                "sequence": 20
            },
            {
                "text": "Weird sinatra shotgun/terminal errors:",
                "element": "h3",
                "sequence": 21,
                "className": "core-subsection"
            },
            {
                "text": "I was working from VSCode via recommendation from one of Flatiron School's local environment setup guides and I got the following error after working a while, or something similar.",
                "element": "p",
                "sequence": 22
            },
            {
                "text": "start_tcp_server': no acceptor (port is in use or requires root privileges) (RuntimeError)",
                "element": "p",
                "sequence": 23,
                "className": "block-quote"
            },
            {
                "text": "Cool, what does that mean? After some searching I found a few references to the fact that too many shotgun processes are working at once or a port is already in use, something to that effect, and the new process is interfering with an old running process. More often than not it has to do with not closing out shotgun properly with Ctrl+C. A variety of solutions are presented to find the processes that are causing the problem within the terminal:",
                "element": "p",
                "sequence": 24
            },
            {
                "type": "code",
                "language": "bash",
                "sequence": 25,
                "className": "code-block-snippet",
                "codeContent": ["$ ps"]
            },
            {
                "type": "code",
                "language": "bash",
                "sequence": 26,
                "className": "code-block-snippet",
                "codeContent": ["$ ps ax | grep rails"]
            },
            {
                "type": "code",
                "language": "bash",
                "sequence": 27,
                "className": "code-block-snippet",
                "codeContent": ["$ ps ax | grep thin"]
            },
            {
                "type": "code",
                "language": "bash",
                "sequence": 28,
                "className": "code-block-snippet",
                "codeContent": ["$ ps ax | grep ruby"]
            },
            {
                "text": "All of these return some type of numbers, the solution next to enter in the terminal:",
                "element": "p",
                "sequence": 29
            },
            {
                "type": "code",
                "language": "bash",
                "sequence": 30,
                "className": "code-block-snippet",
                "codeContent": ["$ kill -9 #one of the numbers here"]
            },
            {
                "text": "I ran into the problem a couple of times while working and found that the most relevant to my current setup was ps ax | grep ruby. Each time I got a list with 2 or 3 entries, different numbers some with question marks, those with question marks were the ones to use to solve the problem.",
                "element": "p",
                "sequence": 31
            },
            {
                "text": "Overall the project was an excellent way to solidify my understanding of sinatra, routes, CRUD, etc and help me to move on successfully to the next section, Rails. It may have taken some extra time, but to start working with linux and a local environment a little ahead of schedule I can already see will be a big help when I am ready to start working locally on the rails section, no more IDE crashes, among other things. I already also have become familiarized with some common errors working in my own environment, so I think the delay on the project to set up the environment will end up speeding me up in the end.",
                "element": "p",
                "sequence": 32
            },
            {
                "rel": "noreferrer",
                "href": "https://youtu.be/rlPety4CSeY",
                "text": "YouTube Demonstration",
                "target": "_blank",
                "element": "a",
                "sequence": 33,
                "className": "anchors"
            },
            {
                "rel": "noreferrer",
                "href": "https://github.com/AlisonReilly/miami_rooftop_pools",
                "text": "GitHub Repo",
                "target": "_blank",
                "element": "a",
                "sequence": 34,
                "className": "anchors"
            }
        ]

    },
    {
        id: '214e8893-4b8d-4f56-bfa7-21c2f7a09445',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2019-10-04 18:48:51',
        title: 'Bcrypt Mysteries',
        blogURL: 'bcrypt-mysteries',
        tags: ['Flatiron', 'Bootcamp', 'Bcrypt', 'Ruby', 'Ruby on Rails', 'Encryption', 'Authentication'],
        content: [
            {
                "text": "Sometimes, while working through my coursework on Flatiron School, I have a tendency to generalize topics, methods, dependencies etc., in order to keep moving along at a somewhat efficient pace. And such generalization is likely fine, most of the time. Using 'pry', for example, I don't need to go into lengthy detail as to how that works, so long as I use it successfully and figure out what is needed. If I'm rounding down in ruby I can call .floor on a variable and not worry over how it happened I can just rely on it, probably only useful in the future if I were to build my own rounding technique or function in the future, for fun or whatever reason.",
                "element": "p",
                "sequence": 0
            },
            {
                "text": "Bcrypt was another gem I generalized, to move forward, I knew the components and where they needed to be placed:",
                "element": "p",
                "sequence": 1
            },
            {
                "ol": [
                    {
                        "text": "Including the gem 'bcrypt' in the Gemfile",
                        "element": "li",
                        "codeContent": ["gem 'bcrypt', '~> 3.1.7'"]
                    },
                    {
                        "text": "Incorporating a string based attribute in the User table called 'password_digest'",
                        "element": "li",
                        "codeContent": ['t.string "password_digest"']
                    },
                    {
                        "text": "Adding/calling the method has_secure_password within the User model",
                        "element": "li",
                        "sequence": 2
                    }
                ]
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 3,
                "className": "code-block-snippet",
                "codeContent": ["class User < ActiveRecord::Base", "  has_secure_password", "end"]
            },
            {
                "start": 4,
                "element": "ol",
                "sequence": 4,
                "className": "numbered-blog",
                "subElements": [
                    {
                        "text": "Using the method .authenticate() in a sessions controller while checking the validity of the password in combination with the user's username or other identifier",
                        "element": "li",
                        "sequence": 0,
                        "codeBlock": "if @user && @user.authenticate(params[:user][:password])"
                    }
                ]
            },
            {
                "text": "What is happening behind all of these components? Bcrypt itself? passworddigest? hassecurepassword? .authenticate()?",
                "element": "p",
                "sequence": 5,
                "className": "quote-block"
            },
            {
                "text": "What is bcrypt doing in the first place?",
                "element": "h3",
                "sequence": 6,
                "className": "core-subsection"
            },
            {
                "text": "According to the gem description:",
                "element": "p",
                "sequence": 7
            },
            {
                "element": "div",
                "sequence": 8,
                "className": "block-quote",
                "subElements": [
                    {
                        "text": "'bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project for hashing passwords. The bcrypt Ruby gem provides a simple wrapper for safely handling passwords' ",
                        "element": "p",
                        "sequence": 0
                    },
                    {
                        "rel": "noreferrer",
                        "href": "https://rubygems.org/gems/bcrypt/versions/3.1.12",
                        "text": "Bcrypt, Ruby Gem",
                        "target": "_blank",
                        "element": "a",
                        "sequence": 1,
                        "className": "anchors"
                    }
                ]
            },
            {
                "text": "That's cool, but what is a hash algorithm?",
                "element": "p",
                "sequence": 9
            },
            {
                "element": "div",
                "sequence": 10,
                "className": "block-quote",
                "subElements": [
                    {
                        "text": "'Hash algorithms take a chunk of data (e.g., your user's password) and create a \"digital fingerprint,\" or hash, of it. Because this process is not reversible, there's no way to go from the hash back to the password' ",
                        "element": "p",
                        "sequence": 0
                    },
                    {
                        "rel": "noreferrer",
                        "href": "https://github.com/codahale/bcrypt-ruby",
                        "text": "Codahale Github, Bcrypt",
                        "target": "_blank",
                        "element": "a",
                        "sequence": 1,
                        "className": "anchors"
                    }
                ]
            },
            {
                "text": "Ok, that's fine. But what does that mean? What is a hash of something in this context? How does one go from a 'chunk of data' to a 'digital fingerprint?'",
                "element": "p",
                "sequence": 11
            },
            {
                "text": "The rest of that answer complexly comes from discrete mathematics and combinatorics, if one wants to dive in that far (I do but not in this blog). However, after some light reading, the process of hashing involves mapping (creating a relationship between objects), data of random size, to another object of a fixed size. The idea of these functions, or why they are advantageous to using within encryption, is that they are very difficult to reverse, they are considered 'one-way functions'",
                "element": "p",
                "richText": [
                    {
                        "rel": "noreferrer",
                        "href": "https://en.wikipedia.org/wiki/Cryptographic_hash_function",
                        "text": "Wiki Cryptographic Hash Function",
                        "target": "_blank",
                        "element": "a",
                        "sequence": 13,
                        "className": "anchors"
                    }
                ],
                "sequence": 12
            },
            {
                "text": "So Bcrypt essentially uses a mathematical function called hashing to scramble up passwords, nearly irreversibly. There are several different types of hashing functions or techniques, mathematically speaking. Several are listed here:",
                "element": "p",
                "richText": [
                    {
                        "rel": "noreferrer",
                        "href": "https://en.wikipedia.org/wiki/Hash_function#Hashing_variable-length_data",
                        "text": "Wiki Hash function",
                        "target": "_blank",
                        "element": "a",
                        "sequence": 15,
                        "className": "anchors"
                    },
                    {
                        "text": "In this context, it doesn't always refer to security encryption, but is relevant, or at least interesting to me, to read about some of these processes, but a bit too much to go into for this blog purpose.",
                        "element": "p",
                        "sequence": 16
                    }
                ],
                "sequence": 14
            },
            {
                "text": "Why Password_digest?",
                "element": "h3",
                "sequence": 17,
                "className": "core-subsection"
            },
            {
                "element": "p",
                "richText": [
                    { "text": "password_digest" },
                    { "text": "password_digest", "element": "span", "className": "inline-code-emphasis" },
                    { "text": " is a requirement specific to bcrypt, likely a word chosen from and whatever way the developers of bcrypt wanted to name the handling of password attributes. However, it is interesting that the output of mathematical hash functions can be referred to as: hash values, hashes, digests or message digests, among other" },
                    {
                        "rel": "noreferrer",
                        "href": "https://en.wikipedia.org/wiki/Cryptographic_hash_function",
                        "text": "Wiki Cryptographic Hash Function",
                        "target": "_blank",
                        "element": "a",
                        "sequence": 0,
                        "className": "anchors"
                    },
                    { "text": " & " },
                    {
                        "rel": "noreferrer",
                        "href": "https://en.wikipedia.org/wiki/Hash_function#Hashing_variable-length_data",
                        "text": "Wiki Hashing Variable Length Data",
                        "target": "_blank",
                        "element": "a",
                        "sequence": 1,
                        "className": "anchors"
                    },
                    { "text": "Also noteworthy, according to the documentation it has to be " },
                    { "text": "someword_digest", "element": "code", "className": "inline-code-emphasis" },
                    { "text": " in terms of calling has_secure_password, as it is looking for _digest, in particular and is the topic of the next section " },
                    {
                        "rel": "noreferrer",
                        "href": "https://github.com/codahale/bcrypt-ruby",
                        "text": "Github Ruby Bcrypt",
                        "target": "_blank",
                        "element": "a",
                        "sequence": 20,
                        "className": "anchors"
                    }
                ],
                "sequence": 18
            },
            {
                "text": "has_secure_password, is it really that easy, is that all I have to do?",
                "element": "h3",
                "sequence": 21,
                "className": "core-subsection"
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "There was a reading on it describing it, linking to documentation about it, etc. However, to move forward, I generalized " },
                    { "text": "has_secure_password", "element": "code", "className": "inline-code-emphasis" },
                    { "text": ", and put it on the back burner as something I should just go with and place into a User model, accepted it and called it a day." }
                ],
                "sequence": 22
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "Reading further on bcrypt's github page, I discovered that the initial way to incorporate bcrypt into ruby is described a bit more complexly than simply " },
                    { "text": "has_secure_password", "element": "code", "className": "inline-code-emphasis" },
                    { "text": ", for example:" }
                ],
                "sequence": 23
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 24,
                "className": "code-block-large",
                "codeContent": ["require 'bcrypt'", " ", "class User < ActiveRecord::Base", "    #users.password_hash in the database is a :string", "    include BCrypt", " ", "    def password", "        @password ||= Password.new(password_hash)", "    end", " ", "    def password=(new_password)", "      @password = Password.create(new_password)", "      self.password_hash = @password", "    end", "end"]
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "-From: " },
                    {
                        "rel": "noreferrer",
                        "href": "https://github.com/codahale/bcrypt-ruby",
                        "text": "Github Bcrypt",
                        "target": "_blank",
                        "element": "a",
                        "className": "anchors"
                    }
                ],
                "sequence": 25
            },
        {
            "inline": true, "element": "p", "richText":
                [
                    { "text": "Their documentation goes onto mention, however, that later versions of rails incorporate this process within " },
                    { "text": "ActiveModel::SecurePassword", "element": "code", "className": "inline-code-emphasis" },
                    { "text": ", allowing usage of " }, { "text": "has_secure_password", "element": "code", "className": "inline-code-emphasis" }, { "text": ". Oh so that’s why, but how does that work exactly, what does it do?" }
                ],
            "sequence": 26
        },
        {
            "inline": true, "element": "p", "richText":
                [
                    { "text": "The definition of " },
                    { "text": "has_secure_password", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", incorporates a great deal necessary for password handling, including active record validations for the usage of an attribute with digest and password length, as there are limitations to the byte size a password should be for this algorithm. I found it a great deal more interesting to view the source/definition of " },
                    { "text": "has_secure_password", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", maybe that should be obvious, but I don't always look:" }

                ],
            "sequence": 27
        },
        {
            "type": "code", "language": "ruby", "sequence": 28, "className": "code-block-large", "codeContent":
                [
                    "#File activemodel/lib/active_model/secure_password.rb, line 61",
                    " ",
                    "def has_secure_password(attribute = :password, validations: true)",
                    "#Load bcrypt gem only when has_secure_password is used.",
                    "#This is to avoid ActiveModel (and by extension the entire framework)",
                    "#being dependent on a binary library.",
                    " ",
                    "    begin",
                    "        require \"bcrypt\"",
                    "    rescue LoadError",
                    "        $stderr.puts \"You don\'t have bcrypt installed in your application. Please add it to your Gemfile and run bundle install\"",
                    "        raise",
                    "    end",
                    " ",
                    "    include InstanceMethodsOnActivation.new(attribute)",
                    " ",
                    "    if validations",
                    "        include ActiveModel::Validations",
                    "        #This ensures the model has a password by checking whether the password_digest",
                    "        #is present, so that this works with both new and existing records. However, ",
                    "        #when there is an error, the message is added to the password attribute instead",
                    "        #so that the error message will make sense to the end-user.",
                    " ",
                    "        validate do |record|",
                    "            record.errors.add(attribute, :blank) unless record.send(\"#attribute_digest\").present?",
                    "        end",
                    " ",
                    "        validates_length_of attribute, maximum: ActiveModel::SecurePassword::MAX_PASSWORD_LENGTH_ALLOWED",
                    "  validates_confirmation_of attribute, allow_blank: true",
                    "    end",
                    "end"
                ]
        },
        {
            "inline": true, "element": "p", "richText":
                [
                    { "text": "-From: " },
                    { "rel": "noreferrer", "href": "https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password", "text": "Has Secure Password", "target": "_blank", "element": "a", "className": "anchors" }
                ],
            "sequence": 29
        },
            {
                "text": ".authenticate",
                "element": "h3",
                "sequence": 30,
                "className": "core-subsection"
            },
            {
                "text": "I never thought about .authenticate either, and I didn't suppose it was just mysteriously picked up by bcrypt, so looking at the documentation on .authenticate, I noticed it does get reference from the Bcrypt class:",
                "element": "p",
                "sequence": 31
            },
            {
                "text": "Authenticating a session has one more reference to bcrypt, this built method also refers to bcrypt within its definition:",
                "element": "p",
                "sequence": 32
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 33,
                "className": "code-block-large",
                "codeContent": [
                    "#File activemodel/lib/active_model/secure_password.rb, line 96",
                    "def authenticate(unencrypted_password)",
                    "  BCrypt::Password.new(password_digest).is_password?(unencrypted_password) && self",
                    "end"
                ]
            },
            {
                "inline": true,
                "element": "p",
                "richText": [
                    { "text": "-From: " },
                    {
                        "rel": "noreferrer",
                        "href": "https://apidock.com/rails/ActiveModel/SecurePassword/InstanceMethodsOnActivation/authenticate",
                        "text": "Secure Password Instance Methods",
                        "target": "_blank",
                        "element": "a",
                        "className": "anchors"
                    }
                ],
                "sequence": 34
            }
        ]
    },
    {
        id: 'f95aabf3-ea17-4c85-a4ae-44c573502ae5',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2019-09-06 19:28:30',
        title: 'Rails Project, Amateur Wine Reviewer: some reference points',
        blogURL: 'rails-amateur-wine',
        tags: ['Ruby on Rails', 'Flatiron', 'CRUD', 'REST', 'Bcrypt', 'SSO', 'Google Sign In', 'Auths'],
        content: [
            {
                "text": "Rails added some excitement and dynamic features to the developer learning process. It was also a long 4 weeks worth of work. So for this blog about this post I'm going to make a sheet of references for frequently forgotten or frequently used code snippets, terminal commands and any other relevant items of interest; I will explain their importance where applicable.",
                "element": "p",
                "sequence": 0
            },
            {
                "text": "Generating a new skeleton of a Rails app, still frequently forgotten for now:",
                "element": "h3",
                "sequence": 1,
                "className": "core-subsection"
            },
            {
                "type": "code",
                "language": "bash",
                "sequence": 2,
                "className": "code-block-snippet",
                "codeContent": ["rails new <filename-here>"]
            },
            {
                "ul": [
                    {
                        "text": "Why it's important: creates nearly all the file structure necessary within the rails app, includes most needed gems and dependencies, and allows easy inclusion for reference to images and css sheets, among others.",
                        "className": "li-squares"
                    }
                ],
                "element": "ul",
                "sequence": 3,
                "className": "ul-squares"
            },
            {
                "text": "Git local directory vs. rails command to build a new application:",
                "element": "h3",
                "sequence": 4,
                "className": "core-subsection"
            },
            {
                "text": "It was tricky to get my local environment file structure on the same page after git cloning my repository down but also initiating a new rails app, tried restarting the process several times to consistently end up with a project folder within a project folder.",
                "element": "p",
                "sequence": 5
            },
            {
                "element": "p",
                "richText": [
                    {
                        "text": "My solution, instead of re-starting a new directory and new rails app:",
                        "element": "strong"
                    }
                ],
                "sequence": 6
            },
            {
                "ol": [
                    {
                        "text": "Moved the files in the file explorer up one directory"
                    },
                    {
                        "text": "git Commit command",
                        "codeContent": ["git commit - m 'message here'"]
                    },
                    {
                        "text": "Error message: untracked files",
                        "element": "li"
                    },
                    {
                        "text": "Git track files/add files command",
                        "codeContent": ["git add <filename>/", "(In this case I added all the files listed as untracked, individually)"]
                    },
                    {
                        "text": "All the files were in the same directory now, in both local and remote environments. One last push:",
                        "codeContent": ["git push -u origin main", "(Push all the changes to the master branch that have been tracked/staged/committed/etc)"]
                    }
                ],
                "start": 1,
                "element": "ol",
                "sequence": 7,
                "className": "numbered-blog"
                },
            {
                "text": "Frequently used, and finally not too frequently forgotten",
                "element": "h3",
                "sequence": 13,
                "className": "core-subsection"
            },
            {
                "type": "code",
                "language": "bash",
                "sequence": 14,
                "className": "code-block-snippet",
                "codeContent": ["rake db:migrate"]
            },
            {
                "ul": [
                    {
                        "text": "run migrations on all the migrate files recently created",
                        "className": "li-squares"
                    }
                ],
                "element": "ul",
                "sequence": 15,
                "className": "ul-squares"
            },
            {
                "type": "code",
                "language": "bash",
                "sequence": 16,
                "className": "code-block-snippet",
                "codeContent": ["rake routes"]
            },
            {
                "ul": [
                    {
                        "text": "find all available routes as are currently defined in config/routes.rb",
                        "className": "li-squares"
                    }
                ],
                "element": "ul",
                "sequence": 17,
                "className": "ul-squares"
            },
            {
                "text": "Links and redirects within rails",
                "element": "h3",
                "sequence": 18,
                "className": "core-subsection"
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 19,
                "className": "code-block-snippet",
                "codeContent": ["redirect_to <some_named_path>(optional variable depending)"]
            },
            {
                "ul": [
                    {
                        "text": "If the path has an :id, then a variable will need to be placed as a parameter",
                        "className": "li-squares"
                    }
                ],
                "element": "ul",
                "sequence": 20,
                "className": "ul-squares"
            },
            {
                "type": "code",
                "language": "erb",
                "sequence": 21,
                "className": "code-block-snippet",
                "codeContent": ["<%= link_to \"What you want the link to say\", <some_named_path>(variable depending) %>"]
            },
            {
                "text": "Variation - If the link needs to say what's stored in a variable:",
                "element": "p",
                "sequence": 22
            },
            {
                "type": "code",
                "language": "erb",
                "sequence": 23,
                "className": "code-block-snippet",
                "codeContent": ["<%= link_to post.title, <some_named_path>(variable depending) %>"]
            },
            {
                "text": "Various Migrations",
                "element": "h3",
                "sequence": 24,
                "className": "core-subsection"
            },
            {
                "text": "Basic table creations: with a variety of types: ",
                "element": "p"
            },
            {
                "text": "Within -class CreateTableName < ActiveRecord::Migration[5.2]",
                "element": "p"
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 26,
                "className": "code-block-large",
                "codeContent": ["def change", "    create_table :table_name do |t|", "        t.string :name", "        t.string :password_digest", "        t.date :today", "        t.boolean :yes-or-no", "        t.integer :quantity", "        t.belongs_to :user, index: true, foreign_key: true", "        t.references :favorited, polymorphic: true, index: true", "    end", "end"]
            },
            {
                "element": "p",
                "richText": [
                    {
                        "text": "Table additions, subractions and changes, within def change:",
                        "element": "strong"
                    }
                ],
                "sequence": 27
            },
            {
                "text": "Drop table:",
                "element": "p",
                "sequence": 28
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 29,
                "className": "code-block-snippet",
                "codeContent": ["drop_table :table_name"]
            },
            {
                "text": "Add column:",
                "element": "p",
                "sequence": 30
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 31,
                "className": "code-block-snippet",
                "codeContent": ["add_column :table_name, :column_name, :column_type"]
            },
            {
                "text": "Delete column:",
                "element": "p",
                "sequence": 32
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 33,
                "className": "code-block-snippet",
                "codeContent": ["remove_column :table_name, :column_name"]
            },
            {
                "text": "Change column type:",
                "element": "p",
                "sequence": 34
            },
            {
                "type": "code",
                "language": "ruby",
                "sequence": 35,
                "className": "code-block-snippet",
                "codeContent": ["change_column :table_name, :column_name, :new_type"]
            },
            {
                "text": "Explanation of Associations, as it applies to my project, * The Amateur Wine Reviewer *",
                "element": "h3",
                "sequence": 36,
                "className": "core-subsection"
            },
            {
                "element": "br",
                "sequence": 37
            },
            {
                "text": "4 models were needed to ensure I was covering all the requirements, or so I thought, as I went along checking them off.",
                "element": "p"
            },
            {
                "text": "The models created:",
                "element": "p",
                "richText": [
                    { "text": "wine", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", " },
                    { "text": "review", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", " },
                    { "text": "user", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", " },
                    { "text": "liked_review", "element": "span", "className": "inline-code-emphasis" },
                    { "text": ", " },
                    { "text": "liked_review", "element": "span", "className": "inline-code-emphasis" }
                ],
                "sequence": 38
            },
        { "text": "I adapted this example from the following resource on stackoverflow:", "element": "p", "richText": 
            [
                { 
                    "href": "https://stackoverflow.com/questions/13240109/implement-add-to-favorites-in-rails-3-4", 
                    "text": "Stackoverflow: Add Favorites Rails", 
                    "element": "a", 
                    "className": "anchors" 
                }
            ] 
        }, 
        { 
            "type": "code", "language": "ruby", "sequence": 39, "className": "code-block-large", "codeContent": 
                [
                    "in: class User",
                    "", "has_many :reviews",
                    "has_many :wines, through: :reviews",
                    "has_many :liked_reviews", "has_many :likes, through: :liked_reviews, source: :review"
                ] 
            }, 
            { 
                "type": "code", "language": "ruby", "sequence": 40, "className": "code-block-large", "codeContent": 
                    [
                        "in: class LikedReview",
                        "",
                        "belongs_to :user",
                        "belongs_to :review"
                    ] 
            }, 
            {
                "type": "code", "language": "ruby", "sequence": 41, "className": "code-block-large", "codeContent":
                    [
                        "in: class Review",
                        "",
                        "belongs_to :user",
                        "belongs_to :wine",
                        "has_many :liked_reviews",
                        "has_many :liked_by, through: :liked_reviews, source: :user"
                    ]
            }, 
            { 
                "type": "code", "language": "ruby", "sequence": 42, "className": "code-block-large", "codeContent": 
                    [
                        "in: class Wine", "", "has_many :reviews", "has_many :users, through: :reviews"
                    ]
            },                        
            { 
                "text": "I knew I had enough nearly enough association requirements met between ", "inline": true, "element": "p", "richText": 
                    [
                        { "text": "User", "element": "span", "className": "inline-code-emphasis" }, 
                        { "text": ", " }, 
                        { "text": "Wine", "element": "span", "className": "inline-code-emphasis" }, 
                        { "text": " and " }, { "text": "Review", "element": "span", "className": "inline-code-emphasis" }, 
                        { "text": ". However, I wasn’t sure about user submittable attributes so I added in the dynamic source based associations with " }, 
                        { "text": "LikedReview", "element": "span", "className": "inline-code-emphasis" }, 
                        { "text": ", this allowed to change the tense of the has_many through the liked_reviews to allow a differentiation in chaining against users vs. reviews themselves, all via the opposite source." }
                    ], 
            "sequence": 43 
            }, 
            { 
                "text": "This required a couple other modifications. Instead of a ", "element": "p", "richText": 
                [
                    { "text": "LikedReviews controller", "element": "span", "className": "inline-code-emphasis" }, 
                    { "text": ", " }, 
                    { "text": "#like", "element": "span", "className": "inline-code-emphasis" }, 
                    { "text": " was added to the " }, 
                    { "text": "ReviewsController", "element": "span", "className": "inline-code-emphasis" }, 
                    { "text": " as its own method:" }
                ] 
            }, 
            { 
                "type": "code", "language": "ruby", "sequence": 45, "className": "code-block-large", "codeContent": 
                    [
                        "def like",
                        "    @review = Review.find(params[:id])",
                        "    type = params[:type]",
                        "    if type == \"like\"",
                        "        current_user.likes <<; @review",
                        "        redirect_to like_review_path(current_user)",
                        "    elsif type == \"unlike\"",
                        "        current_user.likes.delete(@review)",
                        "    end", "end"
                    ] 
            }, 
            { "text": "**Additionally a new nested path was built specifying additional routes: **", "element": "p", "sequence": 46 }, 
            { 
                "type": "code", "language": "ruby", "sequence": 47, "className": "code-block-large", "codeContent": 
                [
                    "resources :reviews do", "    put :like, on: :member", "    get :like, on: :member", "end"
                ] 
            }, 
            { 
                "ul": 
                    [
                        { "text": "This added 2 routes necessary:", "element": "li", "className": "li-squares" }
                    ], 
                    "element": "ul", 
                    "sequence": 48, 
                    "className": "ul-squares" 
            }, 
            { "type": "code", "language": "ruby", "sequence": 49, "className": "code-block-large", "codeContent": 
                [
                    "like_review", "PUT /reviews/:id/like(.:format)   reviews#like",
                    "GET /reviews/:id/like(.:format)   reviews#like"
                ] 
            },
            { 
                "ul": 
                [
                    { 
                        "text": "PUT was used in /reviews/show.html.erb: To add the “like” or “unlike” functions that were sent back to reviews#like And essentially become the user submittable attribute upon a review created", "element": "li", "className": "li-squares" },
                    { "text": "GET was used in /reviews/like.html.erb To visit the current users liked reviews with the url /reviews/:id/like Can of course do much more with it, however I was ready to turn the project in", "element": "li", "className": "li-squares" }
                ], "element": "ul", "sequence": 50, "className": "ul-squares" 
            }, 
            { "text": "Places OmniAuth must appear:", "element": "h3", "sequence": 51, "className": "core-subsection" },
             { "element": "p", "richText": 
                [
                    { "text": "And also noteworthy this is my quick summary, but I didn’t remember or discover all this on my own, I was referred to the following resource, describing most of these steps in greater detail at: ", "element": "em" },
                    { "href": "https://medium.com/@rachel.hawa/google-authentication-strategy-for-rails-5-application-cd37947d2b1b", "text": "Google Authentication Strategy", "element": "a", "className": "anchors" }
                ], 
                "sequence": 52 
            }, 
            { "element": "p", "richText": [{ "text": "In this case google based login:", "element": "strong" }], "sequence": 53 },
            { 
                "ol": [
                    { "text": "Setting this up with google at, approximately ", "element": "li", "richText": 
                        [
                            { "href": "https://console.developers.google.com", "text": "Google Developers", "element": "a", "className": "anchors" 

                            }
                        ] }, 
                    { "text": "Generally speaking create a new app and work with the omniauth tabs, there’s more to it than that, but that’s the gist", "element": "li" }, 
                    { "text": "Gemfile - needs three things added:", "className": "code-block-snippet block-quote", "codeContent": ["Gem ‘omniauth’", "gem 'dotenv-rails'", "Gem 'omniauth-google-oauth2'"] }, 
                    { "text": "Create an .env file at the root of the app to add the google client_id and client_secret, found while setting new app within google developers console", "codeContent": ["# Within the .env file: ", "GOOGLE_CLIENT_ID=<generated number from google here>", "GOOGLE_CLIENT_SECRET=<generated number from google here>"] }, 
                    { "text": "Add .env to .gitignore file" }, 
                    { "text": "Create a omniauth.rb in /config/initializers, add all of this:", "codeContent": ["Rails.application.config.middleware.use OmniAuth::Builder do", "    provider :google_oauth2, ENV[\"GOOGLE_CLIENT_ID\"],ENV[\"GOOGLE_CLIENT_SECRET\"], skip_jwt: true", "end"] }, 
                    { "text": "In routes.rb add:", "codeContent": ["get '/auth/:provider/callback' => 'sessions#omniauth'"] }, 
                    { "text": "In user.rb:", "codeContent": ["def self.from_omniauth(auth)", "    where(email: auth.info.email).first_or_initialize do |user|", "        user.username = auth.info.name", "        user.email = auth.info.email", "        user.password = SecureRandom.hex", "    end", "end"] }, { "text": "In SessionsController", "codeContent": ["def omniauth", "    @user = User.from_omniauth(auth)", "    @user.save", "    session[:user_id] = @user.id", "    redirect_to user_path(@user)", "end"] }, 
                    { "text": "as well as:", "codeContent": ["private", "", "def auth", "    request.env['omniauth.auth']", "end"] }, 
                    { "text": "Basic link to use this to make a login/signup with google, placed wherever necessary:", "codeContent": ["<%= link_to \"Log In with Google\", '/auth/google_oauth2' %>", "<%= link_to \"Log In with Google\", '/auth/google_oauth2' %>"] }, 
                    { "text": "Optional: I found the branding icons at " }
                ] 
            }, 
            { "rel": "noreferrer", "href": "https://developers.google.com/identity/branding-guidelines", "text": "Google Branding Guidelines", "target": "_blank", "element": "a", "className": "anchors" }, 
            { "text": "Speaking of logging, in don’t forget about in user.rb", "element": "h3", "sequence": 77, "className": "core-subsection" }, 
            { "type": "code", "language": "ruby", "sequence": 78, "className": "code-block-snippet", "codeContent": 
                ["has_secure_password"] 
            }, 
            { "element": "div", "sequence": 4, "className": "figure-image", "subElements": 
                [
                    { "altText": "photo effects wine bottle", "element": "img", "imageSrc": "/blog/bottlewitheffects.png", "className": "feature-image", "imageCaption": "Also had fun in a photo editor!", "classNameCaption": "caption" }

                ] 
            }
        ]
    },
    {
        id: 'c8412f14-fccd-454f-b347-01adc1a7bef4',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2024-08-31 19:32:05',
        title: 'Adding Vite to Replace react-scripts in a Firebase Hosted Project',
        blogURL: 'replace-react-scripts',
        tags: ['vite', 'typescript', 'firebase', 'react-scripts', 'react'],
        content: [
            {
                "text": "For personal projects, I have an endless amount of ideas on new features, things to refactor or uplift, different approaches to implement, and, most of all, the quirky design ideas that usually first come to mind before refining them. One that had been bothering me for sometime and was a bit behind on the times: ",
                "element": "p",
                "richText": [
                    {
                        "text": "react-scripts",
                        "element": "span",
                        "className": "inline-code-emphasis"
                    }
                ],
                "sequence": 0
            },
            {
                "text": "After exploring a few options, I decided to replace react-scripts from what I reasoned as the most expedient way, at least for now, using Vite. Noteworthy, had I deliberated on it more, it might not have gotten done at all (peculiarities of the mind). In boxing, a coach said once, you all get in your own way deciding what to do during freestyle, just hit the bag! this is the moment I realized this applied to me and my deliberations in all matters. Hit the bag, install Vite.",
                "element": "p",
                "sequence": 1
            },
            {
                "text": "Some common steps I found among various guides to get started: ",
                "element": "p",
                "sequence": 2
            }, 
            {
                "ol": [
                    {
                        "element": "li",
                        "codeContent": ["npm install --save-dev vite @vitejs/plugin-react vite-tsconfig-paths vite-plugin-svgr"]
                    },
                    {
                        "text": "Adding a vite.config.js file with the following at the root:",
                        "element": "li",
                        "codeContent": [
                            "import { defineConfig } from 'vite';",
                            "import react from '@vitejs/plugin-react';",
                            "import viteTsconfigPaths from 'vite-tsconfig-paths';",
                            "import svgr from 'vite-plugin-svgr';",
                            "\\n",
                            "export default defineConfig({",
                            "  plugins: [",
                            "    react(),",
                            "    viteTsconfigPaths(),",
                            "    svgr({",
                            "      include: '**/*.svg?react',",
                            "    }),",
                            "  ],",
                            "});"
                        ]
                    },
                    {
                        "ul": [
                            {
                                "text": "Remove any uri prefixes of ",
                                "element": "li",
                                "className": "li-squares",
                                "subElements": [
                                    {
                                        "text": "react-scripts",
                                        "element": "span",
                                        "className": "inline-code-emphasis"
                                    }
                                ]
                            },
                            {
                                "text": "Add a ",
                                "element": "li",
                                "className": "li-squares",
                                "subElements": [
                                    {
                                        "text": "<script>",
                                        "element": "span",
                                        "className": "inline-code-emphasis"
                                    },
                                    {
                                        "text": " tag to the "
                                    },
                                    {
                                        "text": "<body>",
                                        "element": "span",
                                        "className": "inline-code-emphasis"
                                    },
                                    {
                                        "element": "div",
                                        "className": "code-block-large",
                                        "codeContent": ["<script type=\"module\" src=\"/src/index.tsx\"></script>"]
                                    }
                                ] 
                            }
                        ],
                        "text": "Move index.html to the root of the project along with some additional changes:",
                        "element": "li"
                    }, 
                {
                    "ul": 
                        [
                            { 
                                "text": "\"target\" property from \"ES5\" to \"ESNext\"", "element": "li", "className": "li-squares", "subElements": 
                                    [
                                        { "text": "\"target\": \"ESNext\"", "element": "div", "className": "code-block-snippet" },
                                        { "text": "What is this for? This ensures using the highest JavaScript version per the current Typescript version.", "element": "div", "richText": 
                                            [
                                                { "rel": "noreferrer", "href": "https://www.typescriptlang.org/tsconfig/#target", "text": "TypeScript Docs: Target", "target": "_blank", "element": "a", "className": "reference anchors" 

                                                }
                                            ], "className": "block-quote special-note" 
                                        }
                                    ] 
                            }, 
                            {
                                "text": "Add new property \"types\"", "element": "li", "className": "li-squares", "subElements": 
                                    [
                                        { "text": "\"types\": [\"vite/client\", \"vite-plugin-svgr/client\"]", "element": "div", "className": "code-block-large" },
                                        { "text": "What are some of these for? \"vite/client\" in particular can be used instead of adding a separate file called ", "element": "div", "richText": 
                                            [
                                                { "text": "vite-env.d.ts", "element": "span", "className": "inline-code-emphasis" }, 
                                                { "text": " with just this one line: " }, 
                                                { "text": "v/// <reference types='vite/client' />", "element": "span", "className": "inline-code-emphasis" }, 
                                                { "text": "The intention of this is to stabilize 'the environment of client side code' per " }, 
                                                { "href": "https://vite.dev/guide/features.html#client-types", "text": "Vite Docs. ", "element": "a", "className": "reference anchors" }, 
                                                { "text": "To make the blog an interesting read, fun fact, they use the word 'shim' to describe this, this is a device sold at the Home Depot, a retail organization I hailed from before hailing from the restaurant industry. It's a device meant to stabilize larger objects on the fly. In the restaurant industry, the next chapter of work, we called these Wobble Wedges, a common brand of restaurant table stabilization to keep your cell phone and drink from flailing off the table, a must have to keep complaints at bay." }
                                             ], "className": "block-quote special-note" 
                                }
                            ]
                }, 
                { "text": "Changed ", "element": "li", "className": "li-squares", "subElements": 
                    [
                        { "text": "esModuleInterop", "element": "span", "className": "inline-code-emphasis" }, 
                        { "text": "I saw this in many configurations, could be useful to remain true after reading the ", "element": "div", "richText": 
                            [
                                { "href": "https://www.typescriptlang.org/tsconfig/#esModuleInterop", "text": "TypeScript docs", "element": "a", "className": "reference anchors" }, 
                                { "text": ", but leaving it for now. It is meant to handle some possible misinterpretation of different styles of imports such as 'require'." }
                            ], "className": "block-quote special-note" }
                        ] 
                    }, 
                    { "text": "Changed ", "element": "li", "className": "li-squares", "subElements": 
                        [
                            { "text": "skipLibCheck", "element": "span", "className": "inline-code-emphasis" }, 
                            { "text": "This is another setting that could come in handy as true, it could make compilation time faster, it skips checks on type differentiation that could occur in perhaps your own project or numerous versions of the same package in node_modules. ", "element": "div", "richText": 
                                [
                                    { "href": "https://www.typescriptlang.org/tsconfig/#skipLibCheck", "text": "Typescript skipLibCheck.", "element": "a", "className": "reference anchors" 

                                    }
                                ], "className": "block-quote special-note" 
                        }
                    ] }
                ],
                 "text": "Change a variety of properties in tsconfig.json, under the compilerOptions parent attribute: ", "element": "li"
            },
             { "text": "Change the scripts property in package.json: ", "element": "li", "codeContent": 
                ["\"scripts\": {", "  \"start\": \"vite\",", "  \"build\": \"tsc && vite build\",", "  \"serve\": \"vite preview\"", "},"] 
            }
        ], "element": "ol", "sequence": 3, "className": "numbered-blog"
        }, 
        { "text": "After these general steps, I was on the edge of my seat waiting for this part, it’s time to npm uninstall react scripts and delete the react-app-env.d.ts file!!!", "element": "p", "sequence": 5 }, 
        { "text": "Some noteworthy errors and warnings per my setup: ", "element": "p", "sequence": 6 }, 
        { "text": "On npm start, I got an error:", "element": "p", "sequence": 7 }, 
        { "element": "div", "codeContent": [
            "The plugin \"externalize-deps\" was triggered by this import", "vite.config.ts:3:30:", "3 │ import viteTsconfigPaths from 'vite-tsconfig-paths';"] }, 
        { "text": "The rest of the error noted some documentation. Essentially it reflects there's an issue loading modules with require, noteworthy the esModuleInterop property set to true might have helped with this as well, something to try later. Either way, the docs pointing to the issue recommended, as one solution, setting a property \"type\" to \"module\" in the package.json. This resolved the issue.", "element": "p", "sequence": 8 }, 
        { "text": "A new warning based on the way file paths can be referenced, noted asset files such as images could have improved imports: ", "element": "p", "sequence": 9 }, 
        { "element": "div", 
            "codeContent": 
            ["Files in the public directory are served at the root path.", "Instead of /public/BGDiagramSteamPunk.png, use /BGDiagramSteamPunk.png."

            ] 
        },
        { "text": "One final error, needed to npm run build to firebase deploy the latest changes but: ", "element": "p", "sequence": 10 }, 
        { "element": "div", "sequence": 11, "codeContent": 
                ["Found 1 error in node_modules/phaser/types/phaser.d.ts:9766’", "https://github.com/phaserjs/phaser/issues/4661", "This is a TypeScript requirement, not a polyfill. In your tsconfig.json file add \"scripthost\" in the lib array otherwise you won't get the ActiveXObject types included."

                ] 
            }, 
            { "text": "So with this error, as it recommends, simply adding to the array in the \"lib\" property of tsconfig resolved the issue.", "element": "p", "sequence": 12 }, 
            { "element": "p", "richText": 
                [
                    { "text": "Wait there's more........", "element": "em" }], "sequence": 13 }, 
                    { "text": "Upon writing my blog post and getting thrilled to stay relevant in society today, I discovered npm run build and firebase deploy were not showing changes to my site. Apparently, there are some recommended firebase settings to coordinate this. In the end, I had to change the \"public\" property to \"dist\" and remove the items from my \"ignore\" property array. This was noted on ", "element": "p", "richText": 
                        [
                            { "href": "https://vitejs.dev/guide/static-deploy.html#google-firebase", "text": "Vite Docs: Google Firebase", "element": "a", "className": "reference anchors" }
                        ], "sequence": 14 
                    }, 
                            { "text": "An opportunity to learn something new, uplift something quickly and get an up to date blog post out there!", "element": "p", "sequence": 16 

                            }
                        ]

    },
    {
        id: 'b71530db-1c96-4f9f-a1f6-b33c3028368f',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2020-01-04 18:56:17',
        title: 'Prototype I: A Cat\'s Dream - JS/Rails Project',
        blogURL: 'a-cats-dream',
        tags: ['Flatiron', 'Bootcamp', 'JavaScript', 'Ruby on Rails', 'Vanilla JS', 'Phaser'],
        content: [
            {
                "text": "JavaScript was a little weird at first after spending so much time on Rails. Eventually it all became clearer, so that's fine.  I equated it to how I usually think about thinking about my thoughts stemming from some other thought.",
                "element": "p",
                "sequence": 0
            },
            {
                "text": "Time for the project, a single page web application. I browsed the project examples and wasn't sure what I would want to do, but my first thought was some type of game that moves a character around on the screen via keyboard controls and does something fetch-worthy.",
                "element": "p",
                "sequence": 1
            },
            {
                "text": "I started looking into javascript based games, hoping to stick with the essentials by just writing something from vanilla javascript. I started down a path of viewing and working with a variety of youTube tutorials, basically making mini game engines:",
                "element": "p",
                "sequence": 2
            },
            {
                "element": "div",
                "sequence": 3,
                "className": "block-quote flexcolumn",
                "subElements": [
                    {
                        "href": "https://www.youtube.com/channel/UCzQvgRgjjxhzEORvefubDPw",
                        "text": "JavaScript Teacher",
                        "element": "a",
                        "className": "anchors"
                    },
                    {
                        "href": "https://www.youtube.com/channel/UCHpHBzk4fz3oeQ31hmCreGg",
                        "text": "Technologies4me",
                        "element": "a",
                        "className": "anchors"
                    },
                    {
                        "href": "https://www.youtube.com/channel/UCdS3ojA8RL8t1r18Gj1cl6w",
                        "text": "PothOnProgramming",
                        "element": "a",
                        "className": "anchors flex"
                    }
                ]
            },
            {
                "element": "div",
                "sequence": 4,
                "className": "figure-image",
                "subElements": [
                    {
                        "altText": "a cat's dream tilesheet",
                        "element": "img",
                        "imageSrc": "/blog/pinktilesheet-1.png",
                        "className": "accent-image-right",
                        "imageCaption": "The Tilemap Result",
                        "classNameCaption": "caption"
                    }
                ]
            },
            {
                "text": "During these tutorials, I discovered the process of converting a png image into a tile map based on parsing array values into pixel based coordinates of the png image. I discovered the use of Tiled to make a tile map with a little more ease, rather than typing in the array values needed, manually. Along with this I found a lot of details about animating images based on sprite sheets with different character positions. I found an excellent tutorial on the use of the program Tiled as well",
                "element": "p",
                "sequence": 5
            },
            {
                "element": "div",
                "sequence": 6,
                "className": "block-quote",
                "subElements": [
                    {
                        "href": "https://www.youtube.com/channel/UCr-5TdGkKszdbboXXsFZJTQ",
                        "text": "GamesFromScratch",
                        "element": "a",
                        "className": "anchors"
                    }
                ]
            },
            {
                "text": "All the tutorials were extremely interesting and amazingly detailed, hoping to not overcomplicate was not a success yet",
                "element": "p",
                "sequence": 7
            },
            {
                "text": "It was wonderful to learn how to work with computer language to get positions of the mouse, keys, input, tile types and set up collision and I wanted to go through and understand all of them thoroughly, however, I worried over the time it would take me to custom make my own version of these games. The Tiled tutorials brought my attention to Phaser, a game engine built in javascript, and I was reluctant to try it right away to the point I spent some days brainstorming other ideas for fear of this whole tile game idea was going to take me too long and turn out to be a bad idea.",
                "element": "p",
                "sequence": 8
            },
            {
                "text": "I eventually went onto Phaser's website",
                "element": "p",
                "sequence": 9
            },
            {
                "element": "div",
                "sequence": 10,
                "className": "block-quote",
                "subElements": [
                    {
                        "href": "https://phaser.io/",
                        "text": "Phaser",
                        "element": "a",
                        "className": "anchors"
                    }
                ]
            },
            {
                "text": "They have a great introduction to their engine on their website including a very simple tutorial on how to make a first game. I got through the tutorial in a couple hours with a pretty much fully functional mini game.",
                "element": "p",
                "sequence": 11
            },
            {
                "text": "Phaser already has collisions, overlaps, camera settings, scene settings, gravity attributes, colors, text setting, position getting/setting of every game component and a library of nearly every type of game need, organized and ready to go, and if you need something else you can add a custom class of whatever you feel like. Additionally, they have a great deal of user contributed tutorials and examples to get more ideas or see how something can work, an amazing documentation site and links to many other resources. Once I got the hang of Phaser as well, it was extremely easy to figure out how to manipulate my own objects and game elements by console.log(ing) the game element in question and having a look at its lengthy list of attributes, very intuitive from there on.",
                "element": "p",
                "sequence": 12
            },
            {
                "text": "I discovered other game making resources, free to use game art, for example, from",
                "element": "p",
                "richText": [
                    {
                        "href": "https://opengameart.org/",
                        "text": "Open Game Art",
                        "element": "a",
                        "className": "anchors"
                    },
                    {
                        "text": ". However, I couldn't help but want to make my own art, got a little stuck on what my game art theme and game may even be, so, while working through various phaser tutorials I started attempting my own game art, primarily on ",
                        "element": "p"
                    },
                    {
                        "href": "https://www.pixilart.com/draw#",
                        "text": "PixilArt",
                        "element": "a",
                        "className": "anchors"
                    }
                ],
                "sequence": 13
            },
            {
                "text": "I eventually decided to use a random image I drew with Krita drawing software, a pink night sky with silhouetted black grass and trees as sort of a game's title scene or landing page and figured to make game art based on this image, thus I came up with my game art theme. I made my animation frames for the player, enemy and an item to collect all on pixilart.com.",
                "element": "p",
                "sequence": 15
            },
            {
                "text": "Many of these ideas and possibilities of integration came from the very first phaser tutorial showing player movement based on keyboard input, collision detection and player animation. Previously, with vanilla javascript I was ready to settle for a player with no animation that perhaps moved around and collected something on boring map and did nothing else.",
                "element": "p",
                "sequence": 16
            },
            {
                "text": "Working through further Phaser tutorials with",
                "element": "p",
                "richText": [
                    {
                        "href": "https://academy.zenva.com/",
                        "text": "Zenva",
                        "element": "a",
                        "className": "anchors"
                    },
                    {
                        "text": ", I found a great deal of tilemap based games with a great deal of examples of different elements to add to a game and different playing styles. I had planned to add a few more such as NPC's and different scene or level transitions, but in the interest of time I left it to one, at least for now.",
                        "element": "p"
                    }
                ],
                "sequence": 17
            },
            {
                "text": "I'm not sure what I would have come up with had I decided to keep this project simple and do enough just to meet the requirements, but I'm glad I ventured into some processes of game making in collaboration with web development.",
                "element": "p",
                "sequence": 19
            },
            {
                "href": "https://youtu.be/MamqFgSoqq8",
                "text": "YouTube Demonstration",
                "element": "a",
                "className": "anchors"
            },
            {
                "href": "https://github.com/AlisonReilly/a-cats-dream",
                "text": "GitHub",
                "element": "a",
                "className": "anchors"
            }
        ]

    },
    {
        id: '32f4eb8a-b89a-4731-b836-2ae6245c7539',
        createdAt: '2025-05-09 19:37:06+00',
        originalDate: '2020-05-23 19:03:33',
        title: 'Fauxtel Hotels - The Final Project',
        blogURL: 'fauxtel-hotels',
        tags: ['Flatiron', 'Bootcamp', 'JavaScript', 'Ruby', "Ruby on Rails", 'React', 'Redux', 'Final Project'],
        content: [
            {
                "text": "When I first started my bootcamp I wanted to be done in 4 months or so. Since then, I've had a million soul draining restaurant shifts, two moves to new apartments, a handful of car troubles, financial worry over my restaurant based income, a viral pandemic and economic lockdown coupled with more anxious thoughts on financial stability. Four months came and went fast, considering, but finally the final project is ready.",
                "element": "p",
                "sequence": 0
            },
            {
                "text": "The Project: I had a few different ideas for a final, but ended up deciding on something I thought was interesting, a hotel brand's single page application. Hotel brand websites often don't do justice to the ease and convenience of booking everything all in one place, such as on websites like kayak.com.",
                "element": "p",
                "sequence": 1
            },
            {
                "text": "I had a million ideas for how I could address pain points of a hotel brands website with a single page web application and the use of React.",
                "element": "p",
                "sequence": 2
            },
            {
                "text": "I ended up with a project, for the respect of time and moving forward, that is a good start to a hotel brand's booking app, and could easily be expanded and improved upon, with time, which I plan to do, of course.",
                "element": "p",
                "sequence": 3
            },
            {
                "element": "div",
                "subElements": [
                    {
                        "altText": "fauxtel logo",
                        "element": "img",
                        "imageSrc": "/blog/fauxtellogo2.png",
                        "className": "accent-image-right"
                    },
                    {
                        "text": "It works, meets requirements and probably goes a little beyond.",
                        "element": "p",
                        "sequence": 4
                    },
                    {
                        "text": "For this blog I think I'm going to just do a simple listing of things accomplished or features used:",
                        "element": "p",
                        "sequence": 5
                    }
                ]
            },
            {
                "href": "https://www.npmjs.com/package/react-day-picker",
                "text": "React-day-picker: ",
                "element": "a",
                "className": "anchors"
            },
            {
                "text": "What seems most popular is the integration of a calendar view with user selected dates or date ranges is airbnb's react-dates npm package. And yeah it's fine. I tried 4 different calendar view packages in a separate program to see which one I liked working with best. Another reason my project took so long, more than likely! I ended up choosing, what I think part of react-dates uses actually is react-day-picker. I came across this while browsing hotel websites to see what they used, or to see if I found any calendar integration that I favored, on",
                "richText": [
                    {
                        "href": "https://www.loewshotels.com/",
                        "text": "Loews Hotels",
                        "element": "a",
                        "className": "anchors"
                    },
                    {
                        "text": ". The understanding of how to style this calendar, enable the user to select a date range and, set dates disabled, I happened to find a little more straightforward to use. Also with easy access and I plan to integrate it eventually, is the ability to add data to each calendar day. The original Loew's hotel calendar I stumbled upon had prices and hotel availability embedded into the calendar view itself, fancy! I think, not sure, due to hotel closures those date previews have been removed for the time being."
                    }
                ]
            },
            {
                "href": "https://guides.rubyonrails.org/action_mailer_basics.html'",
                "text": "Action Mailer:",
                "element": "a",
                "className": "anchors"
            },
            {
                "text": "Action Mailer, is a good time. A little tricky to get setup so you can see that you have actually sent out an email, once all the settings are correct, it is easily integrated into other actions in the controllers. It was a lot of fun after sitting at my computer for hours seeing an email that came from my localhost:3000. Currently, I have it set up to send an email on registration of a user and on new reservation. Plan to do more of course and go further to style the emails. Overall, I thought it was a quick and easy tool to enhance a project; perhaps also a good learning experience when integrating mailer's from other backend technologies.",
                "element": "p",
                "sequence": 7
            },
            {
                "href": "https://jwt.is/",
                "text": "JWT web tokens:",
                "element": "a",
                "className": "anchors"
            },
            {
                "text": "I actually had wanted to do something like this for my javascript/rails project, but didn't bother since it wasn't required. Researching and deciding on which method of authentication/authorization to use for a single page web app: tokens, sessions, some other 3rd party integration like firebase or OAuth, was strenuous and probably added a few weeks of time to my project. Found lots of examples, some using redux but were a little disorganized, some using OAuth but a little tricky to understand as a first time integration. Also found lots of debates and articles and user comments on the downfalls of security in using tokens and the downfalls of using sessions instead. I ended up latching onto some of the videos in Learn Instruct on how to go about auth-ing and went with JWT tokens stored in localstorage. These videos were from globetrotter and react based authentication videos from Howard's recorded lectures just to give at least semi-formal reference and acknowledgement. I understand the security implications and if I were to do a hotel web app for a company, I would look into the most secure measures, however, the thing I just wanted to do was understand the process of token based authentication and the basic use of jwt. Later, I plan to incorporate the session version back into my previous javascript/rails project, for the same purpose and reasoning and, as I move on, I'll look into some 3rd party integration.",
                "element": "p",
                "sequence": 8
            },
            {
                "text": "Might be missing other integrations here and there is overall, a great deal more I wanted to incorporate, which I probably will in the near future. In particular, my plans are to generate reservation codes via a gem available for rails and allow a user to make a reservation without logging in. I have an interest in incorporating a payment system, airline fares or at least trends and perhaps the 'local' weather. Also wanted to dabble more in React native and would like to do a small mobile app as a companion to this web app that perhaps allows mobile check in and, in theory, door unlocking. So perhaps these are enhancements to accomplish in the near future!",
                "element": "p",
                "sequence": 9
            },
            {
                "rel": "noreferrer",
                "href": "https://www.youtube.com/G4u_KgDfBYI",
                "text": "YouTube Demonstration",
                "target": "_blank",
                "element": "a",
                "sequence": 10,
                "className": "anchors"
            },
            {
                "rel": "noreferrer",
                "href": "https://github.com/AlisonReilly/FauxtelHotels",
                "text": "GitHub Repo",
                "target": "_blank",
                "element": "a",
                "sequence": 11,
                "className": "anchors"
            }
        ]
    }
]