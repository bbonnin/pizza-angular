## Pizza-angular

Angular directive for Zurb Pizza Pie Charts 

To find more information about Pizza Pie Charts, consult the [Zurb page of "Pizza Pie Charts"](http://zurb.com/playground/pizza-pie-charts) et the [github of this project](https://github.com/zurb/pizza/)


### First step : HTML

Use the `pizza` tag with the following attributes:
* pie-id : html unique identifier that will be associated to the chart
* data : property name in the controller of the data
* options : property name in the controller or object with the options

Do not forget to declare your controller !

```html
<pizza pie-id="population" data="worldPopulation" 
            options="pizzaOptions"></pizza> 

or

<pizza pie-id="population" data="worldPopulation" 
            options='{"donut":"true"}'></pizza> 

```

### Second step : JS

You have to define the properties declared in your HTML file :

```javascript
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
```

### Example

You can look at the basic example provided in the project: `population.html` and `scripts/app.js`.

