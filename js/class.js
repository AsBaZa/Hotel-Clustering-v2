////////////////////////////////////////
//Create 'Plot' class for the 4 charts//
////////////////////////////////////////
class Plot{
  constructor(){
    //Get 'upper-select' buttons to create interaction with them
    this.select1 = document.getElementById("input_cluster");
    this.select2 = document.getElementById("input_category");
    this.select3 = document.getElementById("input_province");
    this.select4 = document.getElementById("input_stratum");
    //Specify which type of clustering is selected: ABS, NOR, VOL.
    this.selectedClus = "CLUSTERABS";
  }

  /*This is the function that returns the numbers to plot in the bar-charts and
   *in the map. It takes the 'honEST' variable and it filters.
   */
  subsetLength(x, extraFilter = false, index = false){
    return honEST.filter(function (obj) {
      //////////////////////////////////////////////
      //Filter for the 'StratumPlot' and 'HeatMap'//
      //////////////////////////////////////////////

      if(index === false){
        /*If the selected value for 'Stratum' is 'All' or if the selected
         *value in 'Stratum' is the same that we are analysing in the 'for'
         *loop, then we must continue the filtering. Otherwise, the value will
         *be directly 0 (obj.KATEGORIA === null).
        */
        if(this.select4.value === "denak" || this.select4.value === x){
          //Firstly, filter by the selected 'Stratum'
          return obj.ESTRATO === x &&
                 //Filter by 'Province'
                 (this.select3.value !== "denak" ?
                 obj.PROBINTZIA === this.select3.value : obj) &&
                 /*Filter by category selected in 'Category'. The filter must be
                  *done with the selected value in 'Category'. Take into account
                  *that if 'this.select1.value === "denak"' or
                  *'extraFilter === true', we are counting the total amount of
                  *establishments in the selected 'Cluster', 'Stratum' and
                  *'Province'. Otherwise, we will decrease that amount of
                  *establishments, applying another filter for the stratum.
                  */
                 ((this.select2.value !== "denak" &&
                  (this.select1.value === "denak" || extraFilter === true)) ?
                 obj.KATEGORIA === this.select2.value : obj) &&
                 /*In this case, we will filter by the establishments that
                  *belong to the selected 'Cluster'.
                 */
                 (extraFilter === true ?
                 obj[this.selectedClus] == this.select1.value : true);
        }
        else{
          return obj.ESTRATO === null;
        }
      }

      ///////////////////////////////////////
      //Filter for the 'CategoryPlot' chart//
      ///////////////////////////////////////
      else{
        /*If the selected value for 'Category' is 'All' or if the selected
         *value in 'Category' is the same that we are analysing in the 'for'
         *loop, then we must continue the filtering. Otherwise, the value will
         *be directly 0 (obj.KATEGORIA === null).
        */
        if(this.select2.value === "denak" || this.select2.value === x){
          //Firstly, filter by the selected 'Category'
          return obj.KATEGORIA === x &&
                 //Filter by the province selected in the 'for' loop
                 obj.PROBINTZIA === this.provinces[index] &&
                 //Filter by provinces selected in 'Province'
                 (this.select3.value !== "denak" ?
                 obj.PROBINTZIA === this.select3.value : obj) &&
                 /*Filter by stratum selected in 'Stratum'. The filter must be
                  *done with the selected value in 'Stratum'. Take into account
                  *that if 'this.select1.value === "denak"' or
                  *'extraFilter === true', we are counting the total amount of
                  *establishments in the selected 'Cluster', 'Category' and
                  *'Province'. Otherwise, we will decrease that amount of
                  *establishments, applying another filter for the stratum.
                 */
                 ((this.select4.value !== "denak" &&
                  (this.select1.value === "denak" || extraFilter === true)) ?
                 obj.ESTRATO === this.select4.value : obj) &&
                 /*In this case, we will filter by the establishments that
                  *belong to the selected 'Cluster'.
                 */
                 (extraFilter === true ?
                 obj[this.selectedClus] == this.select1.value : obj);
        }
        else{
          return obj.KATEGORIA === null;
        }
      }
    }, this).length;
  }
}

///////////////////////////////////////////////////////
//Create 'PlotPlotly' class for the 3 plotly elements//
///////////////////////////////////////////////////////
class PlotPlotly extends Plot{
  constructor(id,lang){
    super();
    //Get the 'div' where the plot will be located
    this.element = document.getElementById(id);
    this.language = lang;
  }
}



//////////////////////////////
//Create 'ClusterPlot' class//
//////////////////////////////
class ClusterPlot extends PlotPlotly{
  constructor(id,lang){
    //Inheritance
    super(id,lang);
    //Colors used for the medoids in the 'clusterplot'
    this.colors = ["#1f77b4","#ff7f0e","#2ca02c","#d62728",
                   "#9467bd","#8c564b","#e377c2"];
    //Initial Data
    this.dataRaw = dfABS;
    //Paint the chart
    this.paint();
  }

  //Transform data in order to plot it
  createData(){
    this.data = [];
    //Create the time-series for each cluster if 'All' is selected
    if (this.select1.value === "denak"){
      for (let i = 1; i < Object.keys(this.dataRaw).length; i++){
        this.data.push(
          {
            x: this.dataRaw.FECHA,
            y: this.dataRaw[i],
            name: this.language === "en" ? "Group " + i :
                  this.language === "es" ? "Grupo " + i :
                  i + ". Taldea",
            line: {
              color: this.colors[i - 1]
            }
          }
        );
      }
    }
    //Create only the selected time-series
    else{
      this.data.push(
        {
          x: this.dataRaw.FECHA,
          y: this.dataRaw[this.select1.selectedIndex],
          name: this.language === "en" ? "Group " + this.select1.selectedIndex :
                this.language === "es" ? "Grupo " + this.select1.selectedIndex :
                this.select1.selectedIndex + ". Taldea",
          fill: 'tozeroy',
          line: {
            color: this.colors[this.select1.selectedIndex - 1]
          }
        }
      );
    }
  }

  //Function that paints the chart using Plotly
  paint(dataRaw = null){
    if (dataRaw !== null){
      this.dataRaw = dataRaw;
    }
    this.createData();
    //Plot it using 'Plotly'
    Plotly.newPlot(this.element, this.data,
      {
        yaxis: {
          title: this.language === "en" ? "Price €":
                 this.language === "es" ? "Precio €":
                 "Prezioa €",
          rangemode: "tozero",
          autorange: true
        },
        xaxis: {
          rangeslider: {
            borderwidth: 1
          }
        },
        margin: {
          b: 5,
          t: 8,
          l: 45,
          r: 20
        }
      },{locale: this.language, responsive: true}
    );
  }
};


///////////////////////////////
//Create 'CategoryPlot' class//
///////////////////////////////
class CategoryPlot extends PlotPlotly{
  //Inheritance, provinces and categories
  constructor(id,lang){
    //Inheritance
    super(id,lang);
    //Provinces
    this.provinces = ['Araba','Bizkaia','Gipuzkoa'];
    this.name = ['Ara','Biz','Gip'];
    //Categories
    this.categories = ['H1','H2','H3','H4','H5','P1','P2'];
    this.starCategories = ['&#9734;',
                           '2&#9734;',
                           '3&#9734;',
                           '4&#9734;',
                           '5&#9734;',
                           'P1','P2'];
   this.colors = ["#ff7f0e","#2ca02c","#d62728"];
    //Paint the chart
    this.paint();
  }

  paintY(index){
    //If Cluster select element is 'All'
    if (this.select1.value === "denak"){
      //For each category
      return this.categories.map(function(x){
          return this.subsetLength(x,false,index);
      }, this);
    }
    //If Cluster select element is DIFFERENT to 'All'
    else{
      return this.categories.map(function(x){
        //Return value in percentage (0%-100%) with 2 decimals
        return Math.round(10000 * (this.subsetLength(x,true,index) /
               this.subsetLength(x,false,index))) / 100;
      }, this);
    }
  }

  //Transform data in order to plot it
  createData(){
    this.data = [];
    //For each province
    for (let i = 0; i < 3; i++){
      //For each category
      this.data.push(
        {
          x: this.starCategories,
          y: this.paintY(i),
          name: this.name[i],
          type: 'bar',
          text: this.provinces[i],
          marker: {
            color: this.colors[i]
          }
        }
      );
    }
  }

  paint(){
    this.createData();
    //Plot it using 'Plotly'
    Plotly.newPlot(this.element, this.data,
      {
        yaxis: {
          zeroline: false,
          title: this.select1.value === "denak" ?
                    this.language === "en" ? "Total Number of Hotels" :
                    this.language === "es" ? "Número Total de Hoteles":
                    "Hotel Kopuru Totala"
                 :
                    this.language === "en" ? "Percentage % of Hotels" :
                    this.language === "es" ? "Porcentaje % de Hoteles":
                    "Hotel Portzentaia %",
          rangemode: "tozero"
        },
        barmode: this.select1.value === 'denak' ? 'group' : 'group',
        margin: {
          b: 30,
          t: 5,
          l: 45,
          r: 0
        }
      },{responsive: true}
    );
  }

};



//////////////////////////////
//Create 'StratumPlot' class//
//////////////////////////////
class StratumPlot extends PlotPlotly{
  constructor(id,lang){
    //Inheritance
    super(id,lang);
    this.x_vector = [['Bes','Err','Gas'],['BarB','KosB','MetB','Bil'],
                     ['BarG','KosG','MetD','Don']];
    this.y_vector = [["Resto Alava","Rioja Alavesa","Vitoria-Gasteiz"],
                     ["Bizkaia interior","Bizkaia costa",
                     "Area Metropolitana de Bilbao","Bilbao"],
                     ["Gipuzkoa interior","Gipuzkoa costa",
                     "Area Metropolitana de Donostia-San Sebastián",
                     "Donostia-San Sebastián"]];
    this.name = ['Ara','Biz','Gip'];
    this.text = [['Araba: Besteak','Errioxa Arabarra', 'Gasteiz'],
                 ['Bizkaia Barrualdea','Bizkaia Kostaldea',
                 'Bilbao Metropolialdea','Bilbao'],
                 ['Gipuzkoa Barrualdea','Gipuzkoa Kostaldea',
                 'Donostia Metropolialdea','Donostia']];
    this.colors = ["#ff7f0e","#2ca02c","#d62728"];
    this.paint();
  }

  paintY(index){
    if (this.select1.value === "denak"){
      return this.y_vector[index].map(function(x){
          return this.subsetLength(x);
      }, this);
    }
    else{
      return this.y_vector[index].map(function(x){
          //Return value in percentage (0%-100%) with 2 decimals
          return Math.round(10000 * (this.subsetLength(x,true) /
                 this.subsetLength(x))) / 100;
      }, this);
    }
  }

  createData(){
    this.data = [];
    //For each province
    for (let i = 0; i < 3; i++){
      //For each stratum of the province
      this.data.push(
        {
          x: this.x_vector[i],
          y: this.paintY(i),
          name: this.name[i],
          type: 'bar',
          text: this.text[i],
          marker: {
            color: this.colors[i]
          }
        }
      );
    }
  }

  paint(){
    this.createData();
    Plotly.newPlot(this.element, this.data,
      {
        yaxis: {
          zeroline: false,
          title: this.select1.value === "denak" ?
                      this.language === "en" ? "Total Number of Hotels" :
                      this.language === "es" ? "Número Total de Hoteles":
                      "Hotel Kopuru Totala"
                :
                      this.language === "en" ? "Percentage % of Hotels" :
                      this.language === "es" ? "Porcentaje % de Hoteles":
                      "Hotel Portzentaia %",
          rangemode: "tozero"
        },
        margin: {
          b: 40,
          t: 5,
          l: 45,
          r: 0
        }
      },{responsive: true}
    );
  }
};


//////////////////////////
//Create 'HeatMap' class//
//////////////////////////
class HeatMap extends Plot{
  constructor(){
    super();
    this.stratum = ["Vitoria-Gasteiz","Donostia-San Sebastián",
    "Area Metropolitana de Donostia-San Sebastián","Gipuzkoa interior",
    "Gipuzkoa costa","Resto Alava","Rioja Alavesa","Bilbao",
    "Area Metropolitana de Bilbao","Bizkaia interior","Bizkaia costa"];
    //Set the leaflet map in <div id='heatmap'>
    //setView: lat-lon --->  43 North 2.59 West
    //setView: zoom ---> 8
    this.map = L.map('heatmap',{zoomControl:false}).setView([42.965, -2.59], 8);

    //Block map, we don't want to move it
    this.map.dragging.disable();
    this.map.boxZoom.disable();
    this.map.keyboard.disable();
    if (this.map.tap) this.map.tap.disable();
    this.map.touchZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.scrollWheelZoom.disable();

    //Empty Layer
    L.tileLayer('').addTo(this.map);

    //Change margin-right of 'Leaflet' hyperlink
    document.getElementsByClassName("leaflet-control-attribution")[0]
      .style.marginRight = "-53px";

    //Define stratum with shapefile order/number
    const estratoak = {
      1:'Gasteiz',
      10:'Donostia',
      12:'Donostia Metropolialdea',
      13:'Gipuzkoa Barrualdea',
      14:'Gipuzkoa Kostaldea',
      3:'Araba: Besteak',
      4:'Errioxa Arabarra',
      5:'Bilbao',
      7:'Bilbao Metropolialdea',
      8:'Bizkaia Barrualdea',
      9:'Bizkaia Kostaldea'
    };

    //Load Shapefile of the Basque Country by stratum
    this.shpfile = new L.geoJson(geoEAE,{});

    //Add Shapefile to map
    this.shpfile.addTo(this.map);

    //Once Shapefile is loaded, paint it
    this.shpfile.once("data:loaded", this.firstPaint());

  }

  firstPaint(){
    this.paintStratum();
    this.addLegend();
  }

  //Set color per each interval, from yellow to red
  getColor(d) {
      return d > 70 ? '#800026' :
             d > 60 ? '#BD0026' :
             d > 50 ? '#E31A1C' :
             d > 40 ? '#FC4E2A' :
             d > 30 ? '#FD8D3C' :
             d > 20 ? '#FEB24C' :
             d > 10 ? '#FED976' :
             d > 0  ? '#FFEDA0' :
                      '#FFFFFF';
  }

  //Add Legend to HeatMap
  addLegend(){
    let self = this;
    //Add the legend at the 'bottomright'
    const legend = L.control({position: 'bottomright'});
    legend.onAdd = function () {
        let div = L.DomUtil.create('div', 'info legend'),
            grades = [1, 10, 20, 30, 40, 50, 60, 70],
            labels = [];
        //Loop through our density intervals and generate a label with a
        //colored square for each interval
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + self.getColor(grades[i] + 1) +
                '"></i> ' + grades[i] +
                (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
    };
    legend.addTo(this.map);
  }

  count(x){
    if (this.select1.value === "denak"){
      return this.subsetLength(x);
    }
    else{
      //Return percentage
      return Math.round(10000 * (this.subsetLength(x,true) /
             this.subsetLength(x))) / 100;
    }
  }

  //This function paints the map using 'getColor()' function for each stratum
  paintStratum(){
    let vector = Object.assign([],this.stratum);
    for (let item in this.shpfile._layers){
      let contador = this.count(vector.shift());
      this.shpfile._layers[item].setStyle(
        {
          color: 'black',
          fillColor: this.getColor(contador),
          fillOpacity: 0.75,
          weight: 0.5
        }
      );
    }
  }
}
