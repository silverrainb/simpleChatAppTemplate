// Timestamp for messages
getTime = function(){
    let ts = new Date()
    return ts.toLocaleString()
}

// Incoming Random Messages
function getRandomMsg() {
    let len = randomMsg.length - 1
    return randomMsg[Math.floor(Math.random() * Math.floor(len))]
}

// create random message array
const randomMsg = ["According to the United Nations, how many countries are in Africa?",
    "After the 'Mona Lisa' was stolen from the Louvre in 1911, which famous artist was considered a suspect?",
    "Who was the first president to be inaugurated in Washington, D.C.?",
    "What real-life shipwreck inspired Herman Melville's 'Moby-Dick'?",
    "When scientists first saw specimens of this Australian mammal, they thought it was a hoax.",
    "he term 'EGOT'—which stands for Emmy, Grammy, Oscar, Tony—was coined by which 'Miami Vice' actor?",
    "These birds are excellent parents and can find their way back to their nest from 1300 miles away.",
    "It's true that we don't know what we've got until we lose it, but it's also true that we don't know what we've been missing until it arrives.",
    "The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not.",
    "The average woman would rather have beauty than brains, because the average man can see better than he can think.",
    "One of the great things about books is sometimes there are some fantastic pictures.",
    "Always remember: you're unique, just like everyone else.",
    "The road to success is always under construction.",
    "Where there is a will, there are 500 relatives.",
    "Wear short sleeves. Support your right to bare arms!",
    "When everything's coming your way, you're in the wrong lane.",
    "Join The Army. Visit exotic places, meet strange people, then kill them.",
    "I poured spot remover on my dog. Now he's gone.",
    "Death is hereditary.",
    "When you're right, no one remembers. When you're wrong, no one forgets.",
    "Cheer up, the worst is yet to come.",
    "If you can't see the bright side of life, polish the dull side.",
    "Everybody wants to go to heaven, but nobody wants to die.",
    "I stopped fighting my inner demons, we're on the same side now.",
    "Well-behaved women rarely make history.",
    "I would never die for my beliefs because I might be wrong.",
    "He who laughs last, didn't get it.",
    "We live in an age where pizza gets to your home before the police.",
    "I'm an excellent housekeeper. Every time I get a divorce, I keep the house.",
    "Cheese . . . milk's leap toward immortality.",
    "You have a cough? Go home tonight, eat a whole box of Ex-Lax. Tomorrow you'll be afraid to cough.",
    "He's so optimistic he'd buy a burial suit with two pairs of pants.",
    "Half of the people in the world are below average.",
    "A clear conscience is usually the sign of a bad memory.",
    "It is not my fault that I never learned to accept responsibility!",
    "Advice is what we ask for when we already know the answer but wish we didn't.",
    "USA Today has come out with a new survey: Apparently three out of four people make up 75 percent of the population.",
    "Constipated people don't give a crap.",
    "Why does a slight tax increase cost you $200 and a substantial tax cut save you 30 cents?",
    "My wife made me join a bridge club. I jump off next Tuesday.",
    "Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy.",
    "A word to the wise ain’t necessary, it is the stupid ones who need all the advice.",
    "Chuck Norris frequently donates blood to the Red Cross. Just never his own.",
    "Middle age is when your age starts to show around your middle.",
    "Ham and eggs—a day's work for a chicken; a lifetime commitment for a pig.",
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "When it comes to thought, some people stop at nothing.",
    "You have the right to remain silent. Anything you say will be misquoted, then used against you.",
    "If you can’t live without me, why aren’t you dead yet?",
    "I’d like to help you out. Which way did you come in?",
    "If you can't beat them, arrange to have them beaten.",
    "It is a damned poor mind indeed that can't think of at least two ways of spelling any word.",
    "In three words I can sum up everything I've learned about life: It goes on.",
    "Human beings are the only creatures that allow their children to come back home.",
    "Horse sense is a good judgment which keeps horses from betting on people.",
    "I don't deserve this award, but I have arthritis and I don't deserve that either.",
    "Age is a question of mind over matter. If you don't mind, age don't matter.",
    "Happiness is having a large, loving, caring, close-knit family in another city.",
    "Don't tell me the sky is the limit when there are footprints on the moon.",
    "Why do psychics have to ask you for your name?",
    "I don’t suffer from insanity, I enjoy every minute of it.",
    "I get enough exercise pushing my luck.",
    "Sometimes I wake up grumpy; other times I let her sleep.",
    "I want to die in my sleep like my grandfather . . . not screaming and yelling like the passengers in his car.",
    "We are Microsoft. Resistance is futile. You will be assimilated.",
    "The more people I meet, the more I like my dog.",
    "You’re just jealous because the voices only talk to me.",
    "I got a gun for my wife—best trade I’ve ever made.",
    "Beauty is in the eye of the beer holder.",
    "To all you virgins, thanks for nothing.",
    "Beauty is a light switch away . . .",
    "The evening news is where they start by saying “good evening,” and proceed by telling you why it’s not.",
    "There are three kinds of people in this world: those who can count and those who can't.",
    "When life hands you lemons, make lemonade, find the person that life handed vodka to, and have a party.",
    "if Barbie is so popular then why do we buy her friends and boyfriends?",
    "God created the world, everything else is made in China.",
    "Before you criticize someone, walk a mile in their shoes. That way, you’ll be a mile from them, and you’ll have their shoes.",
    "Why do they sterilize the needles for lethal injections?",
    "Practice doesn't make perfect. Perfect practice makes perfect.",
    "Those who throw dirt only lose ground.",
    "You never truly understand something unless you can explain it to your grandmother.",
    "Error. No keyboard. Press F1 to continue.",
    "Experience is what you get when you didn’t get what you wanted.",
    "Birthdays are good for you. Statistics show that people who have the most live the longest.",
    "hey occifer i swear to drunk im not as god as you think i am.",
    "This sentence is a lie.",
    "Men are like parking stalls. All the good ones are taken and the rest are handicapped!",
    "Change is good, but dollars are better.",
    "How is it that “fat chance” and “slim chance” mean the same thing?",
    "1492: Native Americans discover Columbus lost at sea.",
    "Laugh and the world laughs with you. Cry and the world laughs harder.",
    "Solution to two of the world’s problem: feed the homeless to the hungry.",
    "You laugh because I’m different, I laugh because I just farted!",
    "Whoever said nothing is impossible never tried slamming a revolving door!",
    "Silence is golden, but duck tape is silver.",
    "When life gives you melons . . . you might be dyslexic.",
    "There’s no 'I' in team, but there is in 'win.'",
    "Those who criticize our generation seem to forget who raised it!",
    "Man who goes to bed with an itchy butt . . . wakes up with a stinky finger!",
    "Children in the back seat cause accidents, accidents in the back seat cause children!",
    "How do you know when you are too drunk to drive? When you swerve to miss a tree . . . and then realize it was your air-freshener."]

// Message Control
function sendMessage(outgoingMsg) {
    // =========================== Outgoing Messages ===========================
    // assign the outgoing msg element
    let outgoingElement = $('<div>').addClass('outgoing-chat')
        .append(
            $('<div>').addClass('outgoing-message')
                // this is where message is inserted
                .append('<p>' + outgoingMsg + '</p>')
                .append('<span class="time">' + getTime() + '</span>')
        )
        .append($('<div>').addClass('outgoing-chat-img')                                                                    
            .append('<img id="user1" src="assets/img/user1.jpg" />')
        )
    // append the outgoing msg element to the message page
    $(".message-page").append(outgoingElement)
    // clear the input text
    $("input[type='text']").val("")
    // =========================== Incoming Messages ===========================
    let incomingElement = $('<div>').addClass('incoming-chat')
        .append($('<div>').addClass('incoming-chat-img').append('<img id="user2" src="assets/img/user2.jpg" />'))
        .append(
            $('<div>').addClass('incoming-message')
                .append(
                    $('<div>').addClass('incoming-message-inbox')
                        // rotate over random message array
                        .append('<p>' + getRandomMsg() + '</p>')
                        .append('<span class="time">' + getTime() + '</span>')
                )
        )
    // append input msg element to the message page
    $(".message-page").append(incomingElement)
    // update scroll to the bottom
    $(".message-page").animate({scrollTop: 20000000}, "slow");
}

// sending allowed only when text is typed
function filterTextLen(outgoingMsg) {
    // if outgoingMsg is typed
    if (outgoingMsg.length > 0) {
        // send message
        sendMessage.call(this, outgoingMsg);
    }
}

// hit enter to send message
$("input[type='text']").keypress(function(event){
    // when hit enter
    if(event.which === 13){
        // assign input as outgoing message
        let outgoingMsg = $(this).val()
        filterTextLen.call(this, outgoingMsg);
    }
})

// click paper plane button to send message
$(".input-group-append").on('click', 'span', function(){
    let outgoingMsg = $("input[type='text']").val()
    filterTextLen.call(this, outgoingMsg);
})
