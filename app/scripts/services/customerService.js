'use strict';

cmApp.service('CustomerService', function(){


    this.getCustomers = function(){
        return customers;
    };

    var customers = [
        {
            id: 1,
            firstName: 'Oshri',
            lastName: 'Kdoshim',
            company: 'Widexposure',
            email: 'oshri@widexposure.co.il',
            webSite: 'www.widexposure.co.il',
            phoneNumber: '+972-54-7272554'
        },
        {
            id: 2,
            firstName: 'Yana',
            lastName: 'Kdoshim',
            company: '',
            email: 'yana8pk@gmail.com',
            webSite: '',
            phoneNumber: '+972-54-4683821'
        }
    ];


});