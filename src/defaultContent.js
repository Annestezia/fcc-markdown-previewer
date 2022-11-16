const defaultContent = `# Ok, heres markup example \`h1\`
## Let me tell you a bit about the previewer \`h2\`
> You can see 
- editor window (you can change text or delete completely and write your own stuff) and 
- compiled version (you can see result there).
Links
--
You can create a link like this
[Google](https://google.com)
or a re-usable thing 

[Marked]: https://github.com/markedjs/marked/

Now  everytime you write [marked]  in square brackets, you get the link, kinda cool huh?)

Markdown style for   h1
==
and h2 , pick  you  fav  =)
--

_List name in italic github style_
- item 1
- **bold item 2**
- item 3


## \`About code\`
\`alert('Hola'); \\\\ inline code\`

\`\`\`
this
is a code block
()=>{}
\`\`\`


<pre>mycode and evenmore code
and  on another line yep</pre>
And an _image_ , just like a _link_ but with an exclamation mark in front

![img](https://findicons.com/files/icons/1316/futurama_vol_1/256/bender.png)

>> ***W. Shakespeare***

> <pre>When most I wink, then do mine eyes best see,
For all the day they view things unrespected;
But when I sleep, in dreams they look on thee,
And darkly bright are bright in dark directed.
Then thou, whose shadow shadows doth make bright,
How would thy shadow's form form happy show
To the clear day with thy much clearer light,
When to unseeing eyes thy shade shines so!
How would, I say, mine eyes be blessed made
By looking on thee in the living day, 
When in dead night thy fair imperfect shade
Through heavy sleep on sightless eyes doth stay!
All days are nights to see till I see thee,
And nights bright days when dreams do show thee me.</pre><br />

And  heres is [marked.js docs](https://marked.js.org/) in case you want more details.
`;

export default defaultContent;