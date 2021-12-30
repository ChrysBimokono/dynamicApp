 var data=  [
      {"user":1,
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
   
     { "user2":2,
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
   
   ]
//creating one array having the sum of all tweets
var users= data;
 var alltweets= [];
users.forEach(function(user){
   // console.log(user.tweets);
    tweet= user.tweets;
    alltweets.push(tweet);
    console.log(alltweets)

})

//Sorting our tweet by timestamp
for(var j=0;j<alltweets.length;j++){
    alltweets[j].sort(function(a,b) {
        return new Date(a.timestamp)- new Date(b.timestamp)
      })
}
    console.log(alltweets)
//rendering our sorted tweets on the DOM
for(var tweetuser of alltweets){
    for(var i=0;i<tweetuser.length;i++){
        console.log(tweetuser[i])
        var paragraph= document.createElement('p')
        paragraph.innerHTML= tweetuser[i].text + ' '+' ' +tweetuser[i].timestamp
        document.getElementById('all-tweets').appendChild(paragraph)
    }
}
