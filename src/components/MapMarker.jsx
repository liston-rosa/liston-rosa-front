import Loading from "@/app/loading/Loading";
import { Marker, Popup } from "react-leaflet";
import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png";


import L from "leaflet";
import Link from "next/link";
import MapModal from "./MapModal";
import btnB from '@/images/btnB.png'


//test
// const markers = [
//   { coordinates: [-34.24645105115282, -60.18303749273784], _id: "1" },
//   { coordinates: [-31.157789592568857, -64.17554913878544], _id: "2" },
//   { coordinates: [-28.156617664981248, -63.98152188773538], _id: "3" },
//   { coordinates: [-26.649268215591853, -61.241665567017805], _id: "4" },
//   { coordinates: [-27.16544258247618, -66.91432583667252], _id: "5" },
//   { coordinates: [-32.875066753560276, -67.91765350341417], _id: "6" },
//   { coordinates: [-40.71134224773552, -66.75996773409689], _id: "7" },
//   { coordinates: [-26.99364686830475, -54.4884985793336], _id: "8" },
//   { coordinates: [-30.311575095573687, -60.77859125929088], _id: "9" },
//   { coordinates: [-32.62929697436347, -59.12998000628648], _id: "10" },
// ];

const MapMarker = ({ artWork }) => {
  const markers = artWork?.map((e) => e.coordinates); //Array
  
  const all = artWork.map(({ _id, coordinates, name }) => ({
    _id,
    coordinates,
    name,
  }));

  return markers ? (
    all.map((e, i) => (
      <div key={`${i + e._id}`}>
        <Link href={<MapModal id={e._id} />}>
          <Marker
            icon={
              new L.Icon({
                iconUrl: MarkerIcon.src,
                iconRetinaUrl: MarkerIcon.src,
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: MarkerShadow.src,
                shadowSize: [41, 41],
              })
            }
            position={e.coordinates}
            title={e.name ? e.name : ""}
          >
            <Popup>
              <MapModal id={e._id?.toString()} />
            </Popup>
          </Marker>
        </Link>
      </div>
    ))
  ) : (
    <Loading />
  );
};

export default MapMarker;
