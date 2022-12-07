import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Map, { Marker }  from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MCPTable from '../components/MCPTable';
import mcpList from '../data/mcps.json'
import './MCPSelection.css'

const MCPSelection = () => {
    const mcps = mcpList
    const [viewport, setViewport] = useState({})

    const [markers, setMarkers] = useState([])
    const theads = [
        {id: 'id', label: "MCP"}, 
        {id: 'address', label: "Địa chỉ"}, 
        {id: 'janitors', label: "Janitors"}, 
    ] 
    
    const navigate = useNavigate();
    const handleJanitorsList = (id) => {
        const url = `/route/${id}`
        navigate(url, {state:{info:mcps[id]}})
    }
    useEffect(() => {
        let adds = []
        mcps.map((mcp) => {
            axios
            .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${mcp.address}.json?access_token=pk.eyJ1IjoibWFwdGVzdHR0dHR0dCIsImEiOiJjbGIyajBvcnYwNHU2M29wY3Zsc3loa3JyIn0.rTklVzpwyl1ckew09uFPSQ`)
            .then((res) => {
                adds.push({
                    longitude: res.data.features[0].center[0],
                    latitude: res.data.features[0].center[1]})
            })
            .then(() => {
                setMarkers(adds)
            })
        })
    }, [])

    return (
        <div className="map-page">
                <Map 
                        className='map'
                        initialViewState={{latitude: 10.762622, longitude: 106.660172, zoom: 8}} 
                        style={{width: '100%', height: '100vh'}}
                        mapStyle="mapbox://styles/mapbox/streets-v11" 
                        mapboxAccessToken="pk.eyJ1IjoibWFwdGVzdHR0dHR0dCIsImEiOiJjbGIyajBvcnYwNHU2M29wY3Zsc3loa3JyIn0.rTklVzpwyl1ckew09uFPSQ"
                        onMove={(viewport) => setViewport(viewport)}>
                    {
                        markers.map((marker) => (
                            <Marker
                                latitude={marker.latitude}
                                longitude={marker.longitude}
                            />
                        ))
                    }
                </Map>
                <div className="mcp-right">
                    <h1 className='header-text'>CÁC MCP TRÊN TUYẾN ĐƯỜNG TĐ/LT</h1>
                    <MCPTable />
                    <button style={{marginTop: "10px"}}>
                        Lưu thay đổi
                    </button>
                </div>
        </div>
    )
}

export default MCPSelection