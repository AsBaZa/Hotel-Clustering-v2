const dict = {
	"es": {
		"Cluster":"Cluster",
		"Category":"Categoría",
		"Province":"Territoria Histórico"	,
		"Stratum":"Estrato",
		"All":"Todos",
		"Araba":"Álava",
		"Gipuzkoa":"Guipúzcoa",
		"Bizkaia":"Vizcaya",
		"Clustering with Hotel/Pension price time-series":"Clustering con las series temporales de los precios de los Hoteles/Pensiones",
		"Clustering Type":"Tipo de Clustering",
		"Absolute Price":"Precio Absoluto",
		"Normalized Price":"Precio Normalizado",
		"Volatility":"Volatilidad",
		"Clustering Information":"Información del Clustering",
		"Clustering type selected:":"Tipo de clustering selectionado:",
		"Cluster selected:":"Cluster seleccionado:",
		"Hotel Distribution by Category":"Distribución de los Hoteles por Categoría",
		"Stratum Map":"Mapa de los Estratos",
		"Hotel Distribution by Stratum":"Distribución de los Hoteles por Estrato",
		"ClusterText" : "Este clustering se ha realizado utilizando los precios absolutos de los establecimientos. Se puede observar que hay diferentes niveles y tendencias de precios.",
		CLUSTERABS: {
			title: "Precio Absoluto",
			text: "Este clustering se ha realizado utilizando los precios absolutos de los establecimientos. Se puede observar que hay diferentes niveles y tendencias de precios.",
			number: {
				1: "Estos establecimientos tienen precios bastante constantes durante el año, alrededor de 100-120€. Muchos de ellos son hoteles de 3 y 4 estrellas de Vizcaya, pero hay muy pocos en capitales como Vitoria-Gasteiz o Donostia-San Sebastián.",
				2: "These establishments have quite constant prices during the year, around 70-80€. There are many establishments of this kind in the Basque Country and most of them have less than 4-star rating. Donostia-San Sebastián offers very few of this kind of hotels and pensions.",
				3: "These establishments are the cheapest ones. There are many pensions and hotels with low star rate in this cluster, as it could be expected. More than the 40% of the establishments of Araba (except Rioja Alavesa) and the Metropolitan Area of Bilbao are also in this cluster.",
				4: "These establishments have big seasonal changes in price with 60-120€ price ranges. The coast of Gipuzkoa has a special importance in this cluster and many of them are pensions. In contrast, more than the 40% of 4 and 5-star rating hotels of Araba are also in this group.",
				5: "These establishments are the most expensive ones. Even the mean price is between 160-200€, this group has big price variance because the luxury hotels are also included on it.",
				6: "These establishments have big seasonal changes in price with 70-200€ price ranges. Every establishment of this cluster is located on the coast of the Basque Country or in Bilbao, being Donostia-San Sebastián the most relevant stratum."
			}
		},
    CLUSTERNOR: {
      title: "Precio Normalizado",
      text: "This clustering has been done using the normalized prices of the establishments. The objective is to group by different price trends without taking into account the real price. The hotels and pensions with constant prices have the constant value of 100.",
      number: {
        1: "These establishments have the biggest seasonal changes in their prices and it has special relevance in coast of Gipuzkoa and in Bilbao.",
        2: "These establishments have small seasonal changes in their prices and most of them are away from the inner cities.",
        3: "These establishments have very few seasonal changes, but comparing with the cluster 4, they have price changes during the year (due to the weekend or special events). In this case, the relevant areas are the inner cities of Biscay and Araba.",
        4: "These establishments have constant or almost constant prices during all the year. The most relevant stratums are the inner ones and the category of the establishments is low in general.",
      }
    },
    CLUSTERVOL: {
      title: "Volatilidad",
      text: "This clustering has been done taking into account the price volatility between different days. The objective is to group establishments that change their prices almost daily and the ones that hardly ever change their prices.",
      number: {
        1: "These establishments have the lowest volatility. They hardly ever or never change their prices. There are located above all on the inner cities and have low star rating.",
        2: "These establishments have low volatility. There are located on the Metropolitan Areas and they change prices once or twice per week and those changes usually are not very big.",
        3: "These establishments have quite a lot volatility and they make big changes in their prices. There are many 4 and 5-star rating hotels in this cluster and more than the 40% of the establishments of Rioja Alavesa and Bilbao are in this cluster.",
        4: "These establishments have the highest volatility and most of them are pensions of Donostia-San Sebastián.",
      }
    }
	},
	"eu": {
		"Cluster":"Cluster",
		"Category":"Kategoria",
		"Province":"Lurralde Historikoa"	,
		"Stratum":"Estratoa",
		"All":"Denak",
		"Araba":"Araba",
		"Gipuzkoa":"Gipuzkoa",
		"Bizkaia":"Bizkaia",
		"Clustering with Hotel/Pension price time-series":"Hotel/Pentsioen prezioen serie denboralen clustering-a",
		"Clustering Type":"Clustering Mota",
		"Absolute Price":"Prezio Absolutua",
		"Normalized Price":"Prezio Normalizatua",
		"Volatility":"Aldakortasuna",
		"Clustering Information":"Clustering-aren Informazioa",
		"Clustering type selected:":"Aukeratutako clustering mota:",
		"Cluster selected:":"Aukeratutako cluster-a:",
		"Hotel Distribution by Category":"Hotelen Banaketa Kategoriaka",
		"Stratum Map":"Estratoen Mapa",
		"Hotel Distribution by Stratum":"Hotelen Banaketa Estratoka",
		"ClusterText" : "Clustering hau establezimenduen prezio absolutuak erabiliz egin da. Ikus daitekeenez, prezioan maila eta tendentzia ezberdinak ageri dira.",
		CLUSTERABS: {
			title: "Prezio Absolutua",
			text: "This clustering has been done using the absolute prices of the establishments. It can be observed that there are many different price levels and trends.",
			number: {
				1: "These establishments have quite constant prices during the year, around 100-120€. Many of them are 3 and 4-star hotels from Biscay, but there are only a few in cities like Vitoria-Gasteiz or Donostia-San Sebastián.",
				2: "These establishments have quite constant prices during the year, around 70-80€. There are many establishments of this kind in the Basque Country and most of them have less than 4-star rating. Donostia-San Sebastián offers very few of this kind of hotels and pensions.",
				3: "These establishments are the cheapest ones. There are many pensions and hotels with low star rate in this cluster, as it could be expected. More than the 40% of the establishments of Araba (except Rioja Alavesa) and the Metropolitan Area of Bilbao are also in this cluster.",
				4: "These establishments have big seasonal changes in price with 60-120€ price ranges. The coast of Gipuzkoa has a special importance in this cluster and many of them are pensions. In contrast, more than the 40% of 4 and 5-star rating hotels of Araba are also in this group.",
				5: "These establishments are the most expensive ones. Even the mean price is between 160-200€, this group has big price variance because the luxury hotels are also included on it.",
				6: "These establishments have big seasonal changes in price with 70-200€ price ranges. Every establishment of this cluster is located on the coast of the Basque Country or in Bilbao, being Donostia-San Sebastián the most relevant stratum."
			}
		},
    CLUSTERNOR: {
      title: "Prezio Normalizatua",
      text: "This clustering has been done using the normalized prices of the establishments. The objective is to group by different price trends without taking into account the real price. The hotels and pensions with constant prices have the constant value of 100.",
      number: {
        1: "These establishments have the biggest seasonal changes in their prices and it has special relevance in coast of Gipuzkoa and in Bilbao.",
        2: "These establishments have small seasonal changes in their prices and most of them are away from the inner cities.",
        3: "These establishments have very few seasonal changes, but comparing with the cluster 4, they have price changes during the year (due to the weekend or special events). In this case, the relevant areas are the inner cities of Biscay and Araba.",
        4: "These establishments have constant or almost constant prices during all the year. The most relevant stratums are the inner ones and the category of the establishments is low in general.",
      }
    },
    CLUSTERVOL: {
      title: "Aldakortasuna",
      text: "This clustering has been done taking into account the price volatility between different days. The objective is to group establishments that change their prices almost daily and the ones that hardly ever change their prices.",
      number: {
        1: "These establishments have the lowest volatility. They hardly ever or never change their prices. There are located above all on the inner cities and have low star rating.",
        2: "These establishments have low volatility. There are located on the Metropolitan Areas and they change prices once or twice per week and those changes usually are not very big.",
        3: "These establishments have quite a lot volatility and they make big changes in their prices. There are many 4 and 5-star rating hotels in this cluster and more than the 40% of the establishments of Rioja Alavesa and Bilbao are in this cluster.",
        4: "These establishments have the highest volatility and most of them are pensions of Donostia-San Sebastián.",
      }
    }
	},
	"en": {
		"Cluster":"Cluster",
		"Category":"Category",
		"Province":"Province"	,
		"Stratum":"Stratum",
		"All":"All",
		"Araba":"Araba",
		"Gipuzkoa":"Gipuzkoa",
		"Bizkaia":"Bizkaia",
		"Clustering with Hotel/Pension price time-series":"Clustering with Hotel/Pension price time-series",
		"Clustering Type":"Clustering Type",
		"Absolute Price":"Absolute Price",
		"Normalized Price":"Normalized Price",
		"Volatility":"Volatility",
		"Clustering Information":"Clustering Information",
		"Clustering type selected:":"Clustering type selected",
		"Cluster selected:":"Cluster selected:",
		"Hotel Distribution by Category":"Hotel Distribution by Category",
		"Stratum Map":"Stratum Map",
		"Hotel Distribution by Stratum":"Hotel Distribution by Stratum",
		"ClusterText" : "This clustering has been done using the absolute prices of the establishments. It can be observed that there are many different price levels and trends.",
		CLUSTERABS: {
			title: "Absolute Price",
			text: "This clustering has been done using the absolute prices of the establishments. It can be observed that there are many different price levels and trends.",
			number: {
				1: "These establishments have quite constant prices during the year, around 100-120€. Many of them are 3 and 4-star hotels from Biscay, but there are only a few in cities like Vitoria-Gasteiz or Donostia-San Sebastián.",
				2: "These establishments have quite constant prices during the year, around 70-80€. There are many establishments of this kind in the Basque Country and most of them have less than 4-star rating. Donostia-San Sebastián offers very few of this kind of hotels and pensions.",
				3: "These establishments are the cheapest ones. There are many pensions and hotels with low star rate in this cluster, as it could be expected. More than the 40% of the establishments of Araba (except Rioja Alavesa) and the Metropolitan Area of Bilbao are also in this cluster.",
				4: "These establishments have big seasonal changes in price with 60-120€ price ranges. The coast of Gipuzkoa has a special importance in this cluster and many of them are pensions. In contrast, more than the 40% of 4 and 5-star rating hotels of Araba are also in this group.",
				5: "These establishments are the most expensive ones. Even the mean price is between 160-200€, this group has big price variance because the luxury hotels are also included on it.",
				6: "These establishments have big seasonal changes in price with 70-200€ price ranges. Every establishment of this cluster is located on the coast of the Basque Country or in Bilbao, being Donostia-San Sebastián the most relevant stratum."
			}
		},
    CLUSTERNOR: {
      title: "Normalized Price",
      text: "This clustering has been done using the normalized prices of the establishments. The objective is to group by different price trends without taking into account the real price. The hotels and pensions with constant prices have the constant value of 100.",
      number: {
        1: "These establishments have the biggest seasonal changes in their prices and it has special relevance in coast of Gipuzkoa and in Bilbao.",
        2: "These establishments have small seasonal changes in their prices and most of them are away from the inner cities.",
        3: "These establishments have very few seasonal changes, but comparing with the cluster 4, they have price changes during the year (due to the weekend or special events). In this case, the relevant areas are the inner cities of Biscay and Araba.",
        4: "These establishments have constant or almost constant prices during all the year. The most relevant stratums are the inner ones and the category of the establishments is low in general.",
      }
    },
    CLUSTERVOL: {
      title: "Volatility",
      text: "This clustering has been done taking into account the price volatility between different days. The objective is to group establishments that change their prices almost daily and the ones that hardly ever change their prices.",
      number: {
        1: "These establishments have the lowest volatility. They hardly ever or never change their prices. There are located above all on the inner cities and have low star rating.",
        2: "These establishments have low volatility. There are located on the Metropolitan Areas and they change prices once or twice per week and those changes usually are not very big.",
        3: "These establishments have quite a lot volatility and they make big changes in their prices. There are many 4 and 5-star rating hotels in this cluster and more than the 40% of the establishments of Rioja Alavesa and Bilbao are in this cluster.",
        4: "These establishments have the highest volatility and most of them are pensions of Donostia-San Sebastián.",
      }
    }
	}
};
