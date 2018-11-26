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
		"Clustering type selected:":"Tipo de clustering seleccionado:",
		"Cluster selected:":"Cluster seleccionado:",
		"Hotel Distribution by Category":"Distribución de los Hoteles por Categoría",
		"Stratum Map":"Mapa de los Estratos",
		"Hotel Distribution by Stratum":"Distribución de los Hoteles por Estrato",
		CLUSTERABS: {
			title: "Precio Absoluto",
			text: "Este clustering se ha realizado utilizando los precios absolutos de los establecimientos. Se puede observar que hay diferentes niveles y tendencias de precios.",
			number: {
				1: "Estos establecimientos tienen precios bastante constantes durante el año, alrededor de 100-120€. Muchos de ellos son hoteles de 3 y 4 estrellas de Vizcaya, pero hay muy pocos en capitales como Vitoria-Gasteiz o Donostia-San Sebastián.",
				2: "Estos establecimientos tienen unos precios bastante constantes, alrededor de 70-80€. Hay muchos establecimientos de este tipo en la CAE y la mayoría de ellos tienen menos de 4 estrellas. Donostia-San Sebastián es una de las excepciones que oferta muy pocos alojamientos de este tipo.",
				3: "Estos establecimientos son los más baratos. Aquí se encuentran muchas de las pensiones y hoteles con pocas estrellas, como era de esperar. Más del 40% de los establecimientos de Álava (exceptuando Rioja Alavesa) están en este grupo, al igual en la zona Metropolitana de Bilbao.",
				4: "Estos establecimientos tienen grandes cambios estacionales en el precio, que pueden rondar entre 60-120€. La costa de Guipúzcoa tiene especial relevancia en este grupo y muchos de los establecimientos son pensiones. Por otro lado, más del 40% de los hoteles de 4 y 5 estrellas de Álava también se encuentran en este cluster.",
				5: "Estos establecimientos son los más caros. Aunque el precio medio se sitúe entre 160-200€, este grupo tiene una gran varianza de precios debido a que los hoteles de lujo se encuentran también dentro de este cluster.",
				6: "Estos establecimientos tienen grandes cambios estacionales en los precios, con rangos de entre 70 y 200€. Todos los establecimientos están situados cerca de la costa, siendo Donostia-San Sebastián el estrato más relevante."
			}
		},
    CLUSTERNOR: {
      title: "Precio Normalizado",
      text: "Este clustering se ha realizado utilizando los precios normalizados de los hoteles. El objetivo es agruparlos por diferentes tendencias de precios sin tener en cuenta su precio absoluto. A los hoteles hoteles y a las pensiones con precios con precios constantes, se les ha asignado el precio constante 100.",
      number: {
        1: "Estos establecimientos tienen los mayores cambios estacionales en los precios y tienen especial relevancia en la costa de Guipúzcoa y en Bilbao.",
        2: "Estos establecimientos tienen pequeños cambios estacionales en los precios y la mayoría de ellos están alejados de las localidades de interior.",
        3: "Estos establecimientos tienen muy pocos cambios estacionales en los precios, pero comparando con el grupo 4 tienen cambios de precios durante el año (debido a eventos especiales o días festivos). En este caso, las localidades de interior de Vizcaya y Álava cobran especial relevancia.",
        4: "Estos establecimientos tienen precios constantes o prácticamente constantes durante todo el año. Los estratos más relevantes son los de interior y la categoría de los establecimientos es en general baja.",
      }
    },
    CLUSTERVOL: {
      title: "Volatilidad",
      text: "Este clustering se ha realizado teniendo en cuenta la volatilidad de los precios entre diferentes días. El objetivo es agrupar los establecimientos que cambian muchas o pocas veces los precios.",
      number: {
        1: "Estos establecimientos tienen la menor volatilidad, nunca o casi nunca cambian sus precios. Están situados sobre todo en el interior y tienen pocas estrellas.",
        2: "Estos establecimientos tienen poca volatilidad. Están situados en las zonas metropolitanas de Bilbao y Donostia-San Sebastián y en promedio cambian una o dos veces por semana los precios. Esos cambios de precios suelen ser además bastante leves.",
        3: "Estos establecimientos tienen bastante volatilidad y cambian bastante los precios. Hay muchos hoteles de 4 y 5 estrellas en este grupo y más del 40% de los establecimientos de Rioja Alavesa o de Bilbao se encuentran en este cluster.",
        4: "Estos establecimientos tienen la mayor volatilidad y la mayoría de ellos son pensiones de Donostia-San Sebastián.",
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
		CLUSTERABS: {
			title: "Prezio Absolutua",
			text: "Clustering hau establezimenduen prezio absolutuak erabiliz egin da. Ikus daitekeenez, prezioan maila eta tendentzia ezberdinak ageri dira.",
			number: {
				1: "Establezimendu hauek prezio nahiko konstanteak dituzte, 100-120€ inguru. Horietako asko, 3 eta 4 izarreko hotel bizkaitarrak dira. Donostia-San Sebastián eta Vitoria-Gasteiz bezalako hirietan aldiz, horrelako establezimendu gutxi daude.",
				2: "Establezimendu hauek prezio nahiko konstanteak dituzte, 70-80€ inguru. Mota honetako establezimendu asko daude EAE-n eta gehientsuenak 4 izar baino gutxiagoko hotelak edo pentsioak dira. Donostia-San Sebastián-ek era honetako hotel eta pentsio oso gutxi eskaintzen ditu.",
				3: "Establezimendu hauek merkeenak dira. Pentsioak eta izar gutxiko hotel asko talde honetan aurkitzen dira, espero zitekeen bezala. Arabako establezimenduen %40-a baino gehiago (Errioxa Arabarra kontutan hartu gabe) talde honetan aurkitzen da, baita Bilbao Metropolialdekoak ere.",
				4: "Establezimendu hauek prezio aldaketa handiak jasaten dituzte urte sasoi ezberdinetan, 60-120€-ko tartean mugitzen direlarik. Gipuzkoako kostaldeak garrantzia berezia du talde honetan eta gehientsuenak pentsioak dira. Hala ere, beste alde batetik Arabako 4 eta 5 izarreko hotelen %40 baino gehiago ere talde honetan aurkitzen da.",
				5: "Establezimendu hauek garestienak dira. Bataz besteko prezioa 160-200€ tartean dabilen arren, talde honetan prezio bariantza oso handia dago, luxuzko hotelak ere hemen kokatzen direlako.",
				6: "Establezimendu hauek prezio aldaketa handiak jasaten dituzte urte sasoi ezberdinetan, 70-200€-ko tartean mugitzen direlarik. Cluster honetako establezimendu guztiak kosta inguruan kokatzen dira, Donostia-San Sebastián delarik estratorik esanguratsuena."
			}
		},
    CLUSTERNOR: {
      title: "Prezio Normalizatua",
      text: "Clustering hau establezimenduen prezio normalizatuak erabiliz egin da. Helburua talde ezberdinak sortzea da, prezioen tendentzia ezberdinak aztertuz eta beraien prezio absolutua kontutan izan gabe. Prezio konstantedun hotel eta pentsioei 100 balio konstantea esleitu zaie.",
      number: {
        1: "Establezimendu hauek urte sasoi ezberdinetan aldaketa handienak jasaten dituztenak dira. Garrantzia berezia dute Gipuzkoa kostaldekoek eta Bilbokoek.",
        2: "Establezimendu hauek aldaketa txikiak dituzte urte sasoiaren arabera eta gehienak barrualdeko herrietatik kanpo daude.",
        3: "Establezimendu hauek oso aldaketa txikiak jasaten dituzte urte sasoiaren arabera. Hala ere, 4. taldearekin alderatuz, prezio aldaketak izaten dituzte bai astebukaeretan prezio ezberdinak izaten dituztelako edota egun berezietan prezioak aldatzen dituztelako. Kasu honetan, Araba eta Bizkaia barnealdeko herriekin dute garrantzia berezia talde honetan.",
        4: "Establezimendu hauek prezio konstanteak edo ia konstanteak dituzte urte guztian zehar. Bereziki barrualdeko estratoetan kokatzen dira izar gutxiko hotelak eta pentsioak izaten dira.",
      }
    },
    CLUSTERVOL: {
      title: "Aldakortasuna",
      text: "Clustering hau prezioen egunez eguneko aldakortasuna kontutan izanda egin da. Helburua prezioak sarritan edo gutxitan aldatzen dituztenak taldekatzea da.",
      number: {
				1: "Establezimendu hauek aldakortasunik baxuena dute. Ez dute inoiz edo ia inoiz ere ez prezioa aldatzen eta batik bat barrualdean kokatzen diren izar gutxiko hotel eta pentsioak dira.",
        2: "Establezimendu hauek aldakortasun baxua dute. Metropolialdeetan kokatzen dira eta astean pare bat aldiz aldatzen dituzte prezioak bataz bestean. Prezio aldaketa horiek ez dira orokorrean oso handiak izaten.",
        3: "Establezimendu hauek aldakortasun dezente dute eta prezio aldaketa horiek nahiko handiak izaten dira. 4 eta 5 izarreko hotel asko talde honetan daude eta Errioxa Arabarreko eta Bilboko hotel eta pentsioen %40-a baino gehiago hemen kokatzen dira.",
        4: "Establezimendu hauek aldakortasunik handiena dute eta gehienak Donostia-San Sebastián-eko pentsioak dira.",
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
		"Clustering type selected:":"Clustering type selected:",
		"Cluster selected:":"Cluster selected:",
		"Hotel Distribution by Category":"Hotel Distribution by Category",
		"Stratum Map":"Stratum Map",
		"Hotel Distribution by Stratum":"Hotel Distribution by Stratum",
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
        4: "These establishments have the highest volatility and most of them are pensions of Donostia-San Sebastián."
      }
    }
	}
};
