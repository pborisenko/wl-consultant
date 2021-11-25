let WL_Consultant = {
    
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
        ],
        logo: 'img/logo.png',
        theme: 'default-dark',
    },

    container: 'wl-consultant',

    elements: {},
    
    init: function(options = []) {
        
        /** Установка пользователских опций */
        for (key in options) {
            if (key in this.options) this.options[key] = options[key];
        }
        
        this.elements['main'] = document.createElement('div');
        this.elements['main'].classList.add(this.container);
        this.elements['main'].classList.add('theme_main-' + this.options['theme']);
        this.elements['main'].classList.add('hidden');
        this.elements['main'].addEventListener('mouseleave', () => this.actionHide());

        this.elements['header'] = document.createElement('div');
        this.elements['header'].classList.add(this.container+'_header');
        this.elements['header'].classList.add('theme_header-' + this.options['theme']);
        this.elements['header'].onclick = () => this.actionView();

        this.elements['logo'] = document.createElement('div');
        this.elements['logo'].classList.add(this.container+'_logo');
        this.elements['logo'].setAttribute('style', 'background-image: url("' + this.options['logo'] + '")');

        this.elements['title'] = document.createElement('span');
        this.elements['title'].classList.add(this.container+'_title');
        this.elements['title'].classList.add('theme_title-' + this.options['theme']);
        this.elements['title'].innerHTML = 'Свяжитесь с нами';
        if (document.documentElement.clientWidth > 425 ) {
            this.elements['title'].classList.add('title-visible');
        }else {
            this.elements['title'].classList.add('title-hidden');
        }
        
        this.elements['header_right'] = document.createElement('div');
        this.elements['header_right'].classList.add(this.container+'_header_right');

        this.elements['contacts'] = document.createElement('div');
        this.elements['contacts'].setAttribute('class', this.container+'_contacts');
        this.elements['contacts'].classList.add(this.container+'_contacts');

        if (this.options['contacts'].length > 0) {
            for (let i = 0; i < this.options['contacts'].length; i++) {
                this.elements['contact_' + i] = document.createElement('a');
                this.elements['contact_' + i].classList.add(this.container+'_contact');
                this.elements['contact_' + i].setAttribute('style', 'background-image: url("' + this.options['contacts'][i]['image'] + '")');
                this.elements['contact_' + i].setAttribute('href', this.options['contacts'][i]['contact']);
                this.elements['contact_' + i].setAttribute('target', '_blank');
                this.elements['contacts'].insertAdjacentElement('beforeend', this.elements['contact_' + i]);
            }
        }

        document.body.insertAdjacentElement('beforeend', this.elements['main']);
        this.elements['main'].insertAdjacentElement('beforeend', this.elements['header']);
        this.elements['main'].insertAdjacentElement('beforeend', this.elements['contacts']);
        this.elements['header'].insertAdjacentElement('beforeend', this.elements['logo']);
        this.elements['header'].insertAdjacentElement('beforeend', this.elements['title']);
        this.elements['header'].insertAdjacentElement('beforeend', this.elements['header_right']);
    },

    actionView: function() {
        this.elements['main'].classList.remove('hidden');
        this.elements['main'].classList.add('visible');
        this.elements['title'].classList.remove('title-hidden');
        this.elements['title'].classList.add('title-visible');
        this.elements['header'].onclick = () => this.actionHide();
    },

    actionHide: function() {
        this.elements['main'].classList.remove('visible');
        this.elements['main'].classList.add('hidden');
        if (document.documentElement.clientWidth <= 425 ) {
            this.elements['title'].classList.remove('title-visible');
            this.elements['title'].classList.add('title-hidden');
        }
        this.elements['header'].onclick = () => this.actionView();
    }
}