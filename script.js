    require([
      "esri/WebScene",
      "esri/views/SceneView",
	  "esri/widgets/Search",
	  "esri/widgets/Legend",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Search, Legend) {

      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"fbbbaa2fbfda41b8b3f96427c3ac5c79" 
        }
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:'local'
      });
	  
	  var searchWidget = new Search({
        view: view
      });

      // Add the search widget to the top right corner of the view
      view.ui.add(searchWidget, {
        position: "top-right"
      });
	  
	    view.when(function() {
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
          var featureLayer = scene.layers.getItemAt(0);

          var legend = new Legend({
            view: view,
            layerInfos: [{
              layer: featureLayer,
              title: "World Population"
            }]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "bottom-right");
        });

    });
