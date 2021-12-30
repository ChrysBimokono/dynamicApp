var users= {
 'user1' :{
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 4.79+'M',
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
},

 'user2' : {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
}
}
console.log(users.user1)
//our code was refactored to include query string
window.onload = function(){
    try{
      var url_string= (window.location.href).toLocaleLowerCase();
      var url= new URL(url_string);
      console.log(url.href)
    
    var us=url.searchParams.get('user');

    console.log(us)
    if(us === 'user1'){
       data= users.user1
       console.log(data)
    }
    if(us === 'user2'){
        data= users.user2
        console.log(data)
     }

// rendering the name
var container= document.getElementById('container')
var names= document.getElementsByClassName('name')
console.log(names)
for(var n of names){
    n.innerHTML= data.displayName
}
document.getElementsByClassName('name').innerHTML= data.displayName

// number of Tweets
var number= document.getElementsByClassName('numberOftweets')[0];
console.log(number)
number.innerHTML= data.tweets.length+' '+'Tweets'
//surname
var surnames = document.getElementsByClassName('surname')
for(var sur of surnames){
    sur.innerHTML= data.userName
}

// Rendering the date
var date= document.getElementById('date');
date.innerHTML= data.joinedDate

// rendering number of followers

var follow= document.getElementById('following');
var followers= document.getElementById('followers')
follow.innerHTML= `<div id="following"><span style="font-weight:bold">${data.followingCount}</span><span class="text-grey">Following</span></div>`
followers.innerHTML= `<div id="following"><span style="font-weight:bold">${data.followerCount}</span><span class="text-grey">Followers</span></div>`

// rendering the background and profile pictures
var backgroundP= document.getElementsByClassName('profil-background');
var profilePic= document.getElementsByClassName('image-container')[0];
console.log(profilePic)
console.log(backgroundP[0])

backgroundP[0].innerHTML=`<img src="./your-turn-dynamic-twitter/${data.coverPhotoURL}"></img>`;
profilePic.innerHTML= `<img src="./your-turn-dynamic-twitter/${data.avatarURL}" class="profil-picture">`;

// Now rendering tweets
var tweetContent= document.getElementsByClassName('content')[0];
var container= document.getElementById('container');
console.log(tweetContent)

console.log(data.tweets)

for(var i=0; i<data.tweets.length;i++){
    var tweets= data.tweets[i]
    console.log(tweets)
    rowDiv= document.createElement('div');
    rowDiv.classList.add('content');
   console.log(rowDiv)
 rowDiv.innerHTML = `
  <div class="left-section">
  <span><img src="./your-turn-dynamic-twitter/${data.avatarURL}" class="image-content"></span>
</div>
<div class="tab-content">
     <div class="inner-content">
        <span class="name ">${data.displayName}</span>
        <span> <img src="./your-turn-dynamic-twitter/assets/twitter-icon.png" class="twitter-icon"></span>
        <span class="surname text-grey">${data.userName} . ${new Date(tweets.timestamp).getMinutes()}m</span>
        <p class="tweet-text">${tweets.text}</p>
        <div class= "outer-content flex">
                <div class="tweet hovering">
                    <div class="inner-tweet"><img class="icons" src="./your-turn-dynamic-twitter/assets/comment-icon.jpg"></div>
                    <div class="comment-number"><span>2.3k</span></div>
              </div>
              <div class="tweet">
                <div class="inner-tweet"><img class="icons" src="./your-turn-dynamic-twitter/assets/retweet4.png"></div>
                <div class="comment-number"><span>2.3k</span></div>
              </div>
              <div class="tweet hovering">
                <div class="inner-tweet"><img class="icons" src="./your-turn-dynamic-twitter/assets/like.png"></div>
                <div class="comment-number"><span>2.3k</span></div>
              </div>
              <div class="tweet hovering">
                <div class="inner-tweet"><img class="icons" src="./your-turn-dynamic-twitter/assets/share.png"></div>
                <div class="comment-number"><span></span></div>
              </div>
        </div>
     </div>
</div>
<div class="right-section">
    ...
</div>`;
rowDiv.style.display= "flex";
container.appendChild(rowDiv)
}
console.log(rowDiv)
} catch(err){
    console.log('Issues with parsing URL parameters'+ err)
  }
}

