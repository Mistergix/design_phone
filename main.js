var app = new Vue({
    el : "#app",
    data :{
        selectedIcon : 0,
        icons : [
            {
                title : "Heure et date",
                description : "Plus toutes les notifications",
            },
            {
                title : "Contacts",
                description : "L’utilisateur peut appeler quelqu’un de manière très simple, en ayant directement accès à ses contacts. Il cherche le nom de la personne puis à seulement deux choix : appeler ou envoyer un message",
            },
            {
                title : "Post-it",
                description : "L’utilisateur peut enregistrer des rappels qui lui permettront de rester organisé et de ne rien oublier. Il peut aussi modifier l’horaire pour qu’on lui rappelle une action à un moment donné.",
            },
            {
                title : "Urgences",
                description : "L’utilisateur peut appeler de manière très simple les pompiers ou le SAMU. En cliquant sur ce bouton, la position de l’utilisateur est aussi directement envoyé à une liste de proches qui aura été préalablement définis. Il envoie aussi une notification à un contact, qui saura donc qu’il y a eu un problème.",
            },
            {
                title : "Plus",
                description : "L’utilisateur peut accéder à d’autres applications, un store et les réglages de l’appareil.",
            },
        ]
    },
    methods :{
        updateText: function(index){
            this.selectedIcon = index;
        }
    },
    computed :{
        title : function()
        {
            return this.icons[this.selectedIcon].title;
        },
        description : function()
        {
            return this.icons[this.selectedIcon].description;
        },
    }
});