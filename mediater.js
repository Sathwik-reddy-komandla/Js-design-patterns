var Participant = function (name){
    this.name=name
    this.chatroom=null
};

Participant.prototype={
    send:function(message,to){
        this.chatroom.send(message,this,to);
    },
    receive: function(message,from){
        console.log(from.name +' to ' +this.name +' : '+message)
    }
};


var Chatroom=function(){
    var participants={};
    return {
        register: function(participant){
            participants[participant.name]=participant;
            participant.chatroom=this;
        },
        send: function(message,from,to){
            if(to){
                to.receive(message,from);
            }else{
                for (key in participants){
                    if(participants[key]!=from){
                      
                        participants[key].receive(message,from)
                       
                    }
                }
            }
        }
    };
};

var beau =new Participant('Beau');
var sathwik =new Participant('sathwik');
var enes =new Participant('enes');
var nick =new Participant('nick');
var chatroom=new Chatroom();

chatroom.register(beau)
chatroom.register(sathwik)
chatroom.register(nick)
chatroom.register(enes)


beau.send("How's it Going");
sathwik.send('Hello Guys ')
enes.send('Hi, Sathwik',sathwik)
nick.send('Hi enes',enes)

