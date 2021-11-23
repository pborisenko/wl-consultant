let WL_Consultant = {
    
    container: 'wl-consultant',
    
    options: {
        contacts: [
            {
                contact: '#',
                image: 'img/whatsapp-circle.png'
            },
            {
                contact: '#',
                image: 'img/viber-circle.png'
            },
            {
                contact: '#',
                image: 'img/telegram-circle.png'
            }
        ]
    },

    elements: {},
    
    init: function(options = []) {
        
        /** Установка пользователских опций */
        for (key in options) {
            if (key in this.options) this.options[key] = options[key];
        }
        
        this.elements['main'] = document.createElement('div');
        this.elements['main'].setAttribute('class', this.container + ' hidden');
        
        this.elements['header'] = document.createElement('div');
        this.elements['header'].setAttribute('class', this.container+'_header');
        this.elements['header'].innerHTML = '<span>Персональный консультант</span>';
        this.elements['header'].addEventListener('click', this.actionView.bind(this));

        this.elements['contacts'] = document.createElement('div');
        this.elements['contacts'].setAttribute('class', this.container+'_contacts');

        if (this.options['contacts'].length > 0) {
            for (let i = 0; i < this.options['contacts'].length; i++) {
                this.elements['contact_' + i] = document.createElement('a');
                this.elements['contact_' + i].setAttribute('class', this.container+'_contact');
                this.elements['contact_' + i].setAttribute('style', 'background-image: url("' + this.options['contacts'][i]['image'] + '")');
                this.elements['contact_' + i].setAttribute('href', this.options['contacts'][i]['contact']);
                this.elements['contact_' + i].setAttribute('target', '_blank');
                this.elements['contacts'].insertAdjacentElement('beforeend', this.elements['contact_' + i]);
            }
        }

        document.body.insertAdjacentElement('beforeend', this.elements['main']);
        this.elements['main'].insertAdjacentElement('beforeend', this.elements['header']);
        this.elements['main'].insertAdjacentElement('beforeend', this.elements['contacts']);
    },

    actionView: function() {
        this.elements['main'].setAttribute('class', this.container + ' visible');
        this.elements['header'].removeEventListener('click', this.actionView);
        this.elements['header'].addEventListener('click', this.actionHide.bind(this));
    },

    actionHide: function() {
        this.elements['main'].setAttribute('class', this.container + ' hidden');
        this.elements['header'].removeEventListener('click', this.actionHide);
        this.elements['header'].addEventListener('click', this.actionView.bind(this));
    }
}