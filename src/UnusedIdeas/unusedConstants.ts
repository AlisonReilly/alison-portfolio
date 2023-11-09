 export const unusedExport = '';
 
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














