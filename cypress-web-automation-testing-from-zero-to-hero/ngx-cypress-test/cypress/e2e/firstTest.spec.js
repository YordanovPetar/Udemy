// use describe or context
describe('Our first suite', () => {
    
    // Types of Locators
    it('first test', () => {

        cy.visit('./');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // by Tag Name
        cy.get('input');

        // by ID
        cy.get('#inputEmail1');

        // by Class name
        cy.get('.input-full-width');

        // by Attribute name
        cy.get('[placeholder]');

        // by Attribute name and value
        cy.get('[placeholder="Email"]');

        // by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]');
        
        // by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]');

        // by two or more different attributes
        cy.get('[placeholder="Email"][fullwidth][type="email"]');
    
        // by Tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');
    
        // The most recommended way by Cypress by own attribute
        cy.get('[data-cy="imputEmail1"]');
    });

    // Finding Web Elements
    it('second test', () => {

        cy.visit('./');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // get searches in the entire DOM
        cy.get('[data-cy="signInButton"]');

        cy.contains('Sign in');

        cy.contains('[status="warning"]', 'Sign in');

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click();

        // contains can search by Text, or Web selector and Text
        // find - finds child elements from parent elemnts
        cy.contains('nb-card', 'Horizontal form')
            .find('[type="email"]');
    });

    // Saving Subject of the Command
    it('then and wrap methods', () => {
        
        cy.visit('./');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // Cypress format. With Cypress format we are not abvle to salve the result of the function
        // For Assertions using the Cypress format we should use the Cypress library (should)
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address');
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password');

        // selenium style (not working because cypress is asynchronous, in cypress we should use then)
        // const firstForm = cy.contains('nb-card', 'Using the Grid');
        // firstForm.find('[for="inputEmail1"]').should('contain', 'Email');
        // firstForm.find('[for="inputPassword2"]').should('contain', 'Password');

        // JQuery syntax. With it we are able to save the result of the function and user it later on
        // With JQuery format we are not able to use Cypress methods like type(), click(), etc.
        // firstForm stand for function(firstForm)
        // firstForm stand for function SomeName (firstForm)
        // For Assertions using the JQuery format we should use the Chai library (expect)
        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLabelFirsForm = firstForm.find('[for="inputEmail1"]').text();
            const passwordFirstForm = firstForm.find('[for="inputPassword2"]').text();
            expect(emailLabelFirsForm).to.equal('Email');
            expect(passwordFirstForm).to.equal('Password');

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                const passwordLabelSecondForm = secondForm.find('[for="exampleInputPassword1"]').text();
                expect(passwordFirstForm).to.equal(passwordLabelSecondForm);

                // Cypress syntax (Convert from JQuery to Cypress with the wrap() function)
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password');
            });
        });

        // When we want to save the context, we should use the then function
    });

    // Invoke Command
    it('invoke command', () => {

        cy.visit('./');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // Example1
        cy.get('[for="exampleInputEmail1"]')
            .should('contain', 'Email address')
            .should('have.class', 'label')
            .and('have.text', 'Email address');

        // Example2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address');
            expect(label).to.have.class('label');
            expect(label).to.have.text('Email address');
        });

        // Example3 using invoke command to grab some text and save it into parameter
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address');
        });

        // Example4 using invoke command
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            //.should('contain', 'checked')
            .then( classValue => {
                expect(classValue).to.contain('checked');
            });
    });

    // Example5 using invoke
    it('assert property', () => {

        cy.visit('./');
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click();
            cy.get('nb-calendar-day-picker').contains('17').click();
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jan 17, 2023');
        });
    });

    // Checkboxes and Radiobuttons
    it('radio button', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layout').click();

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons)
                .first()
                .check({ force: true })
                .should('be.checked');

            cy.wrap(radioButtons)
                .eq(1)
                .check({ force: true })
                .should('be.checked');

            cy.wrap(radioButtons)
                .first()
                .should('not.be.checked');

            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled');
        });
    });

    it('checkboxes', () => {
        cy.visit('/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Toastr').click();

        // cy.get('[type="checkbox"]').check({ force: true})
        cy.get('[type="checkbox"]').eq(0).click({ force: true});
        cy.get('[type="checkbox"]').eq(1).check({ force: true});
    });

    // Lists and Dropdowns
    it('lists and dropdowns', () => {
        cy.visit('/');
        
        // 1
        // cy.get('nav nb-select').click();
        // cy.get('.options-list').contains('Dark').click();
        // or cy.get('[ng-reflect-value="dark"]').click();
        // cy.get('nav nb-select').should('contain', 'Dark');
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)');

        // 2
        cy.get('nav nb-select').then( dropdown => {
            cy.wrap(dropdown).click();
            cy.get('.options-list nb-option').each( (listItem, index) => {
                const itemText = listItem.text().trim();

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }

                cy.wrap(listItem).click();
                cy.wrap(dropdown).should('contain', itemText);
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText]);
                if(index < 3) {
                    cy.wrap(dropdown).click();
                }
            });
        });
    });

    // Web Tables
    it('Web tables', () => {
        cy.visit('/');
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();

        // 1 - Change table field and verify the new value
        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click();
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25');
            cy.wrap(tableRow).find('.nb-checkmark').click();
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25');
        });

        // 2 - add table row
        cy.get('thead').find('.nb-plus').click();

        // cy.get('[ng-reflect-name="id"]').type('1');
        // cy.get('[ng-reflect-name="firstName"]').type('Ivan');
        // cy.get('[ng-reflect-name="lastName"]').type('Dimitroc');
        // cy.get('[ng-reflect-name="username"]').type('ivdim');
        // cy.get('[ng-reflect-name="email"]').type('ivdim@ivdim.com');
        // cy.get('[ng-reflect-name="age"]').type('33');
        // cy.get('.nb-checkmark').click();

        cy.get('thead').find('tr').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('[placeholder="ID"]').type('1');
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('John');
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Smith');
            cy.wrap(tableRow).find('[placeholder="Username"]').type('josmi');
            cy.wrap(tableRow).find('[placeholder="E-mail"]').type('josmi@josmi.com');
            cy.wrap(tableRow).find('[placeholder="Age"]').type('34');
            cy.wrap(tableRow).find('.nb-checkmark').click();
        });

        cy.get('tbody tr').first().find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'John');
            cy.wrap(tableColumns).eq(3).should('contain', 'Smith');
        });

        // 3 - search in table by age
        const age = [20, 30, 40, 200];

        cy.wrap(age).each( age => {
            cy.get('thead [placeholder="Age"]').clear().type(age);
            cy.wait(500);
            cy.get('tbody tr').each( tableRow => {
                if (age === 200) {
                    cy.wrap(tableRow).should('contain', 'No data found');
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age);
                }
            });
        });
        
    });

    // Web Datepickers
    it.only('Wb datepickers', () => {

        function selectDayFromCurrent(day) {
            let date = new Date();
            date.setDate(date.getDate() + day);
            let futureDay = date.getDate();
            let futureMonth = date.toLocaleString('default', {month: 'short'});
            let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear();

            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                if (!dateAttribute.includes(futureMonth)) {
                    cy.get('[data-name="chevron-right"]').click();
                    selectDayFromCurrent(day);
                } else {
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click();
                }
            });

            return dateAssert;
        }

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click();
            let dateAssert = selectDayFromCurrent(5);
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert);
            cy.wrap(input).should('have.value', dateAssert);
        });
    });

    // PopUps and ToolTips
    it('tooltip', () => {
        cy.visit('/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Tooltip').click();

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click();
        cy.get('nb-tooltip').should('contain', 'This is a tooltip');
    });

    it('dialog box', () => {
        cy.visit('/');
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();

        // 1 - check if event for dialog box is generated 
        cy.get('tbody tr').first().find('.nb-trash').click();
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.equal('Are you sure you want to delete?');
        });

        // 2 - check if dialog box is created
        const stub = cy.stub();
        cy.on('window:confirm', stub);
        cy.get('tbody tr').first().find('.nb-trash').click().then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?');
        });

        // 3 - select cancel on the dialog box
        cy.get('tbody tr').first().find('.nb-trash').click();
        cy.on('window:confirm', (confirm) => false);
    });

    // Cypress Assertions
    // Check Cypress Documentation
    // expect().to.equal(); assert; Chai-jQuery expect().to.have();
    // should('contain', 'something') user part of the Chai-jQuery -> check the invoke and Wb datepickers sections above
})

// describe('Our second suite', () => {

//     describe('Our suite section', () {

//         beforeEach('code for every test', () => {
//             // repetitive code
//         })

//         it('some test name', () => {

//         })

//     })

//     it('first test', () => {

//     })

//     it('second test', () => {

//     })

//     it('third test', () => {

//     })

//     it('fourth test', () => {

//     })

// })

// describe('Our third suite', () => {

//     it('first test', () => {

//     })

//     it('second test', () => {

//     })

//     it('third test', () => {

//     })

//     it('fourth test', () => {

//     })

// })
