define([
  "ojs/ojcore",
  "knockout",
  "jquery",
  "ojs/ojlabel",
  "ojs/ojselectcombobox",
  "ojs/ojchart",
  "ojs/ojinputtext",
  "ojs/ojbutton"
], function(oj, ko, $) {
  function DashboardViewModel() {
    var self = this;

    //initiating variables
    self.val = ko.observable("pie");
    self.rawData = ko.observable("");

    /* toggle button variables */
    self.stackValue = ko.observable("off");
    self.orientationValue = ko.observable("vertical");

    /* chart data */
    var barSeries = [
      { name: "Baseball", items: [42, 34] },
      { name: "Bicycling", items: [55, 30] },
      { name: "Skiing", items: [36, 50] },
      { name: "Soccer", items: [22, 46] }
    ];
    var barGroups = ["Group A", "Group B"];

    //conversion methods
    const convert = data =>
      data
        .split("\n")
        .filter(line => line)
        .map(function(ln) {
          return ln.split("\t").filter(cell => cell);
        })
        .filter(row => row !== []);

    const construct = array => {
      const data = [];
      array.forEach(element => {
        const entry = { name: element[0] };
        entry.items = element.slice(1);
        data.push(entry);
      });
      return data;
    };
    const constructGroups = data => {
      const groupsNumbers = convert(data)[0].length;
      const groups = [];
      for (let i = 0; i < groupsNumbers - 1; i++) {
        groups.push("Group " + i);
      }
      return groups;
    };

    //Event Listener

    self.convertData = function(event, data, bindingContext) {
      barSeries = construct(convert(self.rawData));
      barGroups = constructGroups(self.rawData);
    };

    self.barSeriesValue = ko.observableArray(barSeries);
    self.barGroupsValue = ko.observableArray(barGroups);

    // The following 3 functions are not addressed in this tutorial.

    // Below are a set of the ViewModel methods invoked by the oj-module component.
    // Please reference the oj-module jsDoc for additional information.

    /**
     * Optional ViewModel method invoked after the View is inserted into the
     * document DOM.  The application can put logic that requires the DOM being
     * attached here.
     * This method might be called multiple times - after the View is created
     * and inserted into the DOM and after the View is reconnected
     * after being disconnected.
     */
    self.connected = function() {
      // Implement if needed
    };

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    self.disconnected = function() {
      // Implement if needed
    };

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    self.transitionCompleted = function() {
      // Implement if needed
    };
  }

  /*
   * Returns a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.  Return an instance of the ViewModel if
   * only one instance of the ViewModel is needed.
   */
  return new DashboardViewModel();
});
