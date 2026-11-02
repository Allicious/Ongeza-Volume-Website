/* Events: to add one, copy an entry below and edit it. */
(function(){
  var events=[
    {
      title:"EQUAL x Ongeza Volume Workshop",
      when:"Thursday 23 July 2026, 10 AM",
      where:"Heltz House, 34 Ngara Road, Nairobi. Invite only.",
      blurb:"A workshop for women in the creative and music ecosystem, held with Spotify Greasy Tunes Nairobi and Spotify EQUAL. Ongeza Volume curated the day and Abigael Diana moderated, with sessions led by four facilitators. Spotify Africa described it as a day of learning, sharing and being inspired.",
      people:["Njoki Karu","Jentrix","Cardine","Kophen"],
      poster:{src:"equal-poster.jpg",alt:"Poster for the EQUAL x Ongeza Volume Workshop at Spotify Greasy Tunes Nairobi"},
      photo:{src:"equal-group.jpg",alt:"Attendees of the workshop holding Greasy Tunes tote bags in front of a Spotify sign"}
    }
  ];
  var list=document.getElementById('events-list');
  if(!list)return;
  events.forEach(function(e){
    var a=document.createElement('article');
    a.className='event';
    a.innerHTML=
      '<img src="'+e.poster.src+'" alt="'+e.poster.alt+'">'+
      '<div class="body">'+
        '<h3>'+e.title+'</h3>'+
        '<p class="when">'+e.when+'</p>'+
        '<p class="where">'+e.where+'</p>'+
        '<p>'+e.blurb+'</p>'+
        '<small>Facilitators</small>'+
        '<div class="chips">'+e.people.map(function(p){return '<span>'+p+'</span>';}).join('')+'</div>'+
        (e.photo?'<img class="shot" src="'+e.photo.src+'" alt="'+e.photo.alt+'">':'')+
      '</div>';
    list.appendChild(a);
  });
})();
