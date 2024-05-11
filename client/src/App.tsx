import Map from "ol/Map"
import View from "ol/View"
import TileLayer from "ol/layer/Tile"
import XYZ from "ol/source/XYZ"

function App() {
	new Map({
		target: "map",
		layers: [
			new TileLayer({
				source: new XYZ({
					url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
				}),
			}),
		],
		view: new View({
			center: [0, 0],
			zoom: 2,
		}),
	})

	return (
		<div>
			<h1 className=' text-2xl font-bold'>Backhaul Builder</h1>
		</div>
	)
}

export default App
