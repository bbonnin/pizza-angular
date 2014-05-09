
angular.module('PopulationApp', ['Pizza'])

    .controller('PopulationAppCtrl', function () {
        $(document).foundation();
    })

    /*
     * Controller for the population pie.
     */
    .controller('PopulationPizzaCtrl', function ($scope) {

        $scope.worldPopulation = [
            { value : 4342255000, label : 'Asia (4342255000)' },
            { value : 1138229000, label : 'Africa (1138229000)' },
            { value : 742813000, label : 'Europe (742813000)' },
            { value : 623422000, label : 'South America (623422000)' },
            { value : 358236000, label : 'North America (358236000)' },
            { value : 38829000, label : 'Oceania (38829000)' }
        ];

        /* These options can also be put directly
           in the HTML (attribute 'options' of 'pizza') */ 
        $scope.pizzaOptions = {
            percent_offset:40,
            animation_type: 'backout',
            stroke_color: '#DDD',
            stroke_width: 0
        };

    });