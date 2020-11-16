/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        // Elenco contatti
        newMessageContent: '',
        contactActive: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Giorgio',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '13/01/2020 16:30:55',
                        message: 'Usciamo per una birra stasera',
                        status: 'sent'
                    },
                    {
                        date: '13/01/2020 17:50:00',
                        message: 'Si, ma solo se andiamo in quel nuovo locale che ha aperto in centro',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Paolo',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '12/01/2020 19:30:35',
                        message: 'Vieni in palestra domani?',
                        status: 'sent'
                    },
                    {
                        date: '12/01/2020 15:50:00',
                        message: 'Si, devo fare petto e gambe',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Lorenzo',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '9/01/2020 10:30:25',
                        message: 'Stasera pizza fuori?',
                        status: 'sent'
                    },
                    {
                        date: '9/01/2020 15:55:00',
                        message: 'Si, ma per le 21.30 che prima ho la partita',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luigi',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '28/11/2020 9:30:15',
                        message: 'E se ti dicessi che dobbiamo iniziare ad organizzare capodanno...',
                        status: 'sent'
                    },
                    {
                        date: '28/11/2020 17:05:00',
                        message: 'Ti risponderei che hai sbagliato numero...',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        contactAction(index) {
            this.contactActive = index;
        },
        addMessage() {
            if(this.newMessageContent.trim() != '') {
                this.contacts[this.contactActive].messages.push({
                    date: dayjs().format('dddd, DD/MM/YYYY, HH:mm:ss'),
                    message: this.newMessageContent, 
                    status: 'sent' 
               });

               this.newMessageContent = '';
            }
        }
    }
});
