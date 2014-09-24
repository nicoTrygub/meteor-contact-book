Template.createContact.events({
    'submit form': function(e) {
        e.preventDefault();

        var contact = {
            firstName: util.pretifyStr($(e.target).find('[name=first-name]').val()),
            lastName: util.pretifyStr($(e.target).find('[name=last-name]').val()),
            email: $(e.target).find('[name=user-email]').val(),
            phone: $(e.target).find('[name=user-tel]').val(),
            groupID: $(e.target).find('[name="group-list"]').val()
        }

        // str Trim + validation

        Meteor.call('newContact', contact, function(error, id) {
            if (error) return console.log(error);

            Router.go('contactPage', {_id: id});
        });
    }
});