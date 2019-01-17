
  var questions, i, j, x = "";
      questions = [{
        "options": [
          {"name":"Likes Authority","value":"0"},
          {"name":"Enthusiastic","value":"0"},
          {"name":"Sensitive Feelings","value":"0"},
          {"name":"Likes Instructions","value":"0"}
        ]},
        {"options": [
          {"name":"Takes Charge","value":"0"},
          {"name":"Takes Risks","value":"0"},
          {"name":"Loyal","value":"0"},
          {"name":"Accurate","value":"0"}
        ]},
        {"options": [
          {"name":"Determined","value":"0"},
          {"name":"Visionary","value":"0"},
          {"name":"Calm, Even Keel","value":"0"},
          {"name":"Consistent","value":"0"}
        ]},
        {"options": [
          {"name":"Enterprising","value":"0"},
          {"name":"Very Verbal","value":"0"},
          {"name":"Enjoys Routine","value":"0"},
          {"name":"Predictable","value":"0"}
        ]},
        {"options": [
          {"name":"Competitive","value":"0"},
          {"name":"Promoter","value":"0"},
          {"name":"Dislikes Change","value":"0"},
          {"name":"Practical","value":"0"}
        ]},
        {"options": [
          {"name":"Problem Solver","value":"0"},
          {"name":"Enjoys Popularity","value":"0"},
          {"name":"Gives In to Others","value":"0"},
          {"name":"Factual","value":"0"}
        ]},
        {"options": [
          {"name":"Productive","value":"0"},
          {"name":"Fun-Loving","value":"0"},
          {"name":"Avoids&nbsp;Confrontations","value":"0"},
          {"name":"Conscientious","value":"0"}
        ]},
        {"options": [
          {"name":"Bold","value":"0"},
          {"name":"Likes Variety","value":"0"},
          {"name":"Sympathetic","value":"0"},
          {"name":"Perfectionist","value":"0"}
        ]},
        {"options": [
          {"name":"Decision Maker","value":"0"},
          {"name":"Spontaneous","value":"0"},
          {"name":"Nurturing","value":"0"},
          {"name":"Detail-Oriented","value":"0"}
        ]},
        {"options": [
          {"name":"Persistent","value":"0"},
          {"name":"Inspirational","value":"0"},
          {"name":"Peacemaker","value":"0"},
          {"name":"Analytical","value":"0"}
        ]}
      ];
  function show(){
createmenu();
x="<form onsubmit='return result()' id='f1'>";
for(i=0;i<questions.length;i++)
{
x+="<div class='row'><div class='trait-group'>";
for(j=0;j<questions[i].options.length;j++)
{
x+="<div class='col-md-3 col-sm-12 trait-item'><div class='row'><div class='col-xs-10 col-md-9 '>";
x+="<label class='lead'  for='trait'>"+questions[i].options[j].name+": </label></div>"
x+="<div class='col-xs-2 col-md-3'><select id="+i+"-"+j+" onchange='chkVal("+i+","+j+")' required style='width:100%'>";
  x+="<option value=''>---</option><option>1</option><option>2</option><option>3</option><option>4</option>"
x+="</select></div>";
x+="</div></div>";
//console.log(questions[i].options[j].name);
}
x+="</div></div>";
}
x+="<div class='text-center'><br><input type='submit' class='btn btn-info' style='background-color:#336B87' value='Get Result'/> &nbsp; <input type='button' onClick='clearform()' class='btn btn-warning' style='background-color:#d19745' value='Reset'/></div></form>";
document.getElementById("demo").innerHTML = x;
}
function chkVal(r,c)
{
dropdown=document.getElementById(r+"-"+c);
chk=0;
for(j=0;j<questions[r].options.length;j++)
{
  if(dropdown.value==questions[r].options[j].value)
  {
    chk=1;
    alert("you have already given value "+dropdown.value+" for "+ questions[r].options[j].name);
    break;
  }
}
if(chk==0)
{
  questions[r].options[c].value=dropdown.value;
}
else {
  dropdown.value="";
  questions[r].options[c].value=0;
}
}
function clearform()
{
document.getElementById('f1').reset();
for(i=0;i<questions.length;i++)
{
  for(j=0;j<questions[i].options.length;j++)
  {
    questions[i].options[j].value="0";
  }
}
}
function result(event)
{
l=0;o=0;g=0;b=0;
x=0;
for(i=0;i<questions.length;i++)
{
  l+=parseInt(questions[i].options[0].value);
  o+=parseInt(questions[i].options[1].value);
  g+=parseInt(questions[i].options[2].value);
  b+=parseInt(questions[i].options[3].value);
}
console.log("l="+l);
console.log("o="+o);
console.log("g="+g);
console.log("b="+b);
r="";
if(l>=o&&l>=g&&l>=b)
{x++;
r+=`<h1>L = Lions</h1>
<p>Lions are leaders. They are usually the bosses at work... or at least they think they are! They are decisive, bottom line folks who are observers,
not watchers or listeners. They love to solve problems. They are usually individualists who love to seek new adventures and opportunities.
<br>
<br>
Lions are very confident and self-reliant. In a group setting, if no one else instantly takes charge, the Lion will.
Unfortunately, if they don't learn how to tone down their aggressiveness, their natural dominating traits can cause problems with others.
Most enterpreneurs are strong lions, or at least have a lot of lion in them.
</p>
<div class='row'>
<div class="col-sm-6">
<b>Natural Strengths</b>
<ul>
  <li>Decisive</li>
  <li>Goal-oriented</li>
  <li>Achievement driven</li>
  <li>Gets results</li>
  <li>Independent</li>
  <li>Risk-taker</li>
  <li>Takes charge</li>
  <li>Takes initiative</li>
  <li>Self-starter</li>
  <li>Persistent</li>
  <li>Efficient</li>
  <li>Competitive</li>
  <li>Enjoys challenges, variety and change</li>
  <li>Driven to complete projects quickly and effectively.</li>
</ul>
</div>

<div class="col-sm-6">
  <b>Natural Weaknesses</b>
  <ul>
    <li>Impatient</li>
    <li>Blunt</li>
    <li>Poor listener</li>
    <li>Impulsive</li>
    <li>Demanding</li>
    <li>May view projects more important than people</li>
    <li>Can be insensitive to the feelings of others</li>
    <li>May "run over" others who are slower to act or speak</li>
    <li>Fears inactivity, relaxation</li>
    <li>Quickely bored by routine or mechanics</li>

  </ul>
</div>
</div>
<table class='table table-responsive'>
<tr>
<td><b>Basic Disposition:</b></td>
<td>Fast-paced, task oriented.</td>
</tr>
<tr>
<td><b>Motivated by:</b></td>
<td>Results; challenge, action,power and credit for achievement.</td>
</tr>
<tr>
<td><b>Time Management:</b></td>
<td>Lions focuse on NOW instead of distant future. They get a lot more done in a lot less time than their peers. Hate wasting time; and like to get <i>right</i> to the point.</td>
</tr>
<tr>
<td><b>Communication Style:</b></td>
<td>Great at initiating communication;l not good at listening (one way communication).</td>
</tr>
<tr>
<td><b>Decision Making:</b></td>
<td>Impulsive; makes quick decisions with goal or end results in mind, result-focused. Needs very few facts to make decision.</td>
</tr>

<tr>
<td><b>In Pressure or Tense Situations:</b></td>
<td>The lion takes <i>command</i> and become autocratic.</td>
</tr>
<tr>
<td><b>Greatest Needs:</b></td>
<td>The lion needs to see results, experience variety, and face new challenges, He needs to solve problems and wants <i>direct</i> answers.</td>
</tr>
<tr>
<td><b>What the Lion Desires:</b></td>
<td>Freedom, authority, variety, difficult assignments, opportunity for advancement.</td>
</tr>

</table>
`;
}
if(o>=l&&o>=g&&o>=b)
{x++;
r+=`<h1>O = Otters</h1>
<p>Otters are excitable, fun seeking, cheerleader types who love to talk! They're great at motivating others and need to be in an environment where they can talk and have a vote on major decisions.
The otters' outgoing nature makes them great <i>networkers-</i> they usually know a lot of people who know a lot of people.
They can be very loving and encouraging unless under pressure, when they tend to use their verbal skills to attack.
They have a strong desire to be liked and enjoy being the center of attention. They are often very attentive to style, clothes and <i>flash</i>.
Otters are the life of any party; and most people really enjoy being around them.
</p>
<div class='row'>
<div class="col-sm-6">
<b>Natural Strengths</b>
<ul>
  <li>Enthusiastic</li>
  <li>Optimistic</li>
  <li>Good Communicator</li>
  <li>Emotional and Passionate</li>
  <li>Motivational and Inspirational</li>
  <li>Outgoing</li>
  <li>Personal</li>
  <li>Dramatic</li>
  <li>Fun-loving</li>
</ul>
</div>

<div class="col-sm-6">
  <b>Natural Weaknesses</b>
  <ul>
    <li>Unrealistic</li>
    <li>Non detail-oriented</li>
    <li>Disorganized</li>
    <li>Impulsive</li>
    <li>Listens to <i>feelings</i> above Logic</li>
    <li>Reactive</li>
    <li>Can be too talkative</li>
    <li>Excitable</li>
  </ul>
</div>
</div>
<table class='table table-responsive'>
<tr>
<td><b>Basic Disposition:</b></td>
<td>Fast-paced, task oriented.</td>
</tr>
<tr>
<td><b>Motivated by:</b></td>
<td>Recognition and approval of others.</td>
</tr>
<tr>
<td><b>Time Management:</b></td>
<td>Otters focus on the future and have a tendency to rush to the next exciting thing.</td>
</tr>
<tr>
<td><b>Communication Style:</b></td>
<td>Enthusiastic and stimulating, often one-way; but can inspire and motivate others.</td>
</tr>
<tr>
<td><b>Decision Making:</b></td>
<td>Intuative and fast. Makes lots of "right calls" and lots of wrong ones.</td>
</tr>

<tr>
<td><b>In Pressure or Tense Situations:</b></td>
<td>The Otters ATTACKS. Can be more concerned about their popularity than about achieving tangible results.</td>
</tr>
<tr>
<td><b>Greatest Needs:</b></td>
<td>The Otters needs social activities and recognition; activities that are fun, and freedon from details.</td>
</tr>
<tr>
<td><b>What the Otters Desires:</b></td>
<td>Prestige, friendly relationshops, opportunity to help and motivate others, and opportunities to verbally share their ideas.</td>
</tr>

</table>
`;
}

if(g>=l&&g>=o&&g>=b)
{x++;
r+=`<h1>G = Golden Retrivers</h1>
<p>
One word describes these people: LOYAL. They're so loyal, in fact, that they can absorb the most emotional pain and punishment in a relationship and still stay committed.
They are great listeners, incredibly empathetic and warm encouragers, However, they tend to be such pleasers that they can have great diffulty being assertive in a situation or relationship when it's needed.
</p>
<div class='row'>
<div class="col-sm-6">
<b>Natural Strengths</b>
<ul>
  <li>Patient</li>
  <li>Easy-going</li>
  <li>Team player</li>
  <li>Stable</li>
  <li>Empathetic</li>
  <li>Compassionate</li>
  <li>Sensitive to feelings of others</li>
  <li>Tremendously loyal</li>
  <li>Dependable</li>
  <li>Reliable</li>
  <li>Supportive</li>
  <li>Aggreable</li>
</ul>
</div>

<div class="col-sm-6">
  <b>Natural Weaknesses</b>
  <ul>
    <li>Indecisive</li>
    <li>Over-accommodating</li>
    <li>May sacrifice results for the sake of harmony</li>
    <li>Slow to initiate</li>
    <li>Avoids confrontation even when needed</li>
    <li>Tends to hold grudes and remember hurts inflicted by others</li>
    <li>Fears change</li>
  </ul>
</div>
</div>
<table class='table table-responsive'>
<tr>
<td><b>Basic Disposition:</b></td>
<td>Slow-paced, people-oriented.</td>
</tr>
<tr>
<td><b>Motivated by:</b></td>
<td>Desire for good relationship and appreciation of others.</td>
</tr>
<tr>
<td><b>Time Management:</b></td>
<td>Golden Retrivers focus on the present and devotes lots of time to helping others and building relationships.</td>
</tr>
<tr>
<td><b>Communication Style:</b></td>
<td>Two-way Communicator;  great listener and provide empathetic response.</td>
</tr>
<tr>
<td><b>Decision Making:</b></td>
<td>Makes decisions more slowly, wants input from others, and often yeilds to the input.</td>
</tr>

<tr>
<td><b>In Pressure or Tense Situations:</b></td>
<td>The Golden Retrivers gives in to opinions, ideas and wishes of others, Often too tolerant.</td>
</tr>
<tr>
<td><b>Greatest Needs:</b></td>
<td>The Golden Retrievers needs security; gradual change and time to adjust to it; an environment free of conflict.</td>
</tr>
<tr>
<td><b>What the Golden Retrivers Desires:</b></td>
<td>Quality relationships; security; consistent known environment; a relaxed and friendly environment; freedom to work at own pace.</td>
</tr>

</table>
`;
}

if(b>=l&&b>=l&&b>=g)
{x++;
r+=`<h1>B = Beavers</h1>
<p>Beavers have a strong need to do things right and <i>by the book</i>. In fact, they are the kind of people who actually read the instruction mannuals.
They are great in providing quality control in an office, and will provide quality control in any situation or field that demands accuracy such as accounting , engineering etc.
Because rules, consistency and high standards are so important to beavers, they are often frustrated with others who do not share these same characteristics.
Their strong need for maintaining high (and oftentimes unrealistic) standards can short-circuit their ability to express warmth in a relationship.
</p>
<div class='row'>
<div class="col-sm-6">
<b>Natural Strengths</b>
<ul>
  <li>Accurate</li>
  <li>Analytical</li>
  <li>Detail-oriented</li>
  <li>Thoroughness</li>
  <li>Industrious</li>
  <li>Orderly</li>
  <li>Methodical and exhaustive</li>
  <li>High strandards</li>
  <li>Intuitive</li>
  <li>Controlled</li>
</ul>
</div>

<div class="col-sm-6">
  <b>Natural Weaknesses</b>
  <ul>
    <li>Too hard on self</li>
    <li>Too critical of others</li>
    <li>Perfectionist</li>
    <li>Overly cautious</li>
    <li>Won't make decisions without "all" the facts</li>
    <li>Too picky</li>
    <li>Overly Sensitive</li>
  </ul>
</div>
</div>
<table class='table table-responsive'>
<tr>
<td><b>Basic Disposition:</b></td>
<td>Slow-paced, task-oriented.</td>
</tr>
<tr>
<td><b>Motivated by:</b></td>
<td>The desire to be right and maintain quality.</td>
</tr>
<tr>
<td><b>Time Management:</b></td>
<td>Beavers tend to work slowly to make sure they are accurate.</td>
</tr>
<tr>
<td><b>Communication Style:</b></td>
<td>Beavers are good listeners,  communicate details, and are usually diplomatic.</td>
</tr>
<tr>
<td><b>Decision Making:</b></td>
<td>Avoids making decisions; needs lots of information before they will make a decision.</td>
</tr>

<tr>
<td><b>In Pressure or Tense Situations:</b></td>
<td>The Beavers tries to avoid pressure or tense situation, They can ignore deadlines.</td>
</tr>
<tr>
<td><b>Greatest Needs:</b></td>
<td>The Beaver needs security, gradual change and time to adjust to it.</td>
</tr>
<tr>
<td><b>What the Beaver Desires:</b></td>
<td>Clearly defined tasks, stability, security, low risk, and tasks that require precision and planning.</td>
</tr>

</table>
`;
}
if(x>1)
{
document.getElementById("modal-result").innerHTML="<p>You are a unique combinantion of following "+x+" personality types</p>"+r;
}
else {
document.getElementById("modal-result").innerHTML=r;
}
$('#myModal').modal('show');
//event.preventDefault();
return false;
}

function createmenu(){
menu=`<nav class="navbar navbar-inverse" style="border-radius:0px">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.html">Know Yourself</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="personality-types.html">Personality Types</a></li>
      </ul>
     </div>
  </div>
</nav> `;
  document.getElementById('menu').innerHTML=menu;
}

