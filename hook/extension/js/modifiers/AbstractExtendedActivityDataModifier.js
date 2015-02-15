var AbstractExtendedActivityDataModifier = Fiber.extend(function(base) {

    return {
        init: function(analysisData, appResources, userSettings, athleteId, athleteIdAuthorOfActivity) {
            console.log('AbstractExtendedActivityDataModifier::init');

            this.analysisData_ = analysisData;
            this.appResources_ = appResources;
            this.userSettings_ = userSettings;
            this.athleteId_ = athleteId;
            this.athleteIdAuthorOfActivity_ = athleteIdAuthorOfActivity;

            // Add Show extended statistics to page
            this.placeExtendedStatsButton();
        },

        placeExtendedStatsButton: function(buttonAdded) {

            var htmlButton = '<section>';
            htmlButton += '<a class="button btn-block btn-primary" id="extendedStatsButton" href="#">';
            htmlButton += 'Show extended statistics';
            htmlButton += '</a>';
            htmlButton += '</section>';

            jQuery('.inline-stats.section').first().after(htmlButton).each(function() {

                jQuery('#extendedStatsButton').click(function() {

                    jQuery.fancybox(this.content); // Content is the html computed by implementations

                }.bind(this));

                if (buttonAdded) buttonAdded();
                
            }.bind(this));
        }
    }
});