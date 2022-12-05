import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ReactMapGL, { Marker }  from 'react-map-gl';
import { useState, useEffect} from 'react';
import mcpList from '../data/mcps.json'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useNavigate } from "react-router-dom";
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
        <div className="container-fluid" style={{height: "100vh"}}>
            <div className="row">
                <div className="col-8" style={{height: '100vh'}}>
                    <ReactMapGL initialViewState={{latitude: 10.762622, longitude: 106.660172, zoom: 5}} style={{width: '100%', height: '100vh'}}
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
                    </ReactMapGL>
                </div>
                <div className="col-4" style={{paddingTop: '30px'}}>
                    <h1 className='header-text'>CÁC MCPs TRÊN TUYẾN ĐƯỜNG TĐ/LT</h1>
                    <Table>
                        <thead>
                            <tr>
                            <th></th>
                            {
                                theads.map((thead, index) => (
                                    <th key={index}>{thead.label}</th>
                                ))
                            }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mcps.map((mcp, index) => (
                                    <tr key={index} className="link" onClick={() => handleJanitorsList(index)}>
                                        
                                        {
                                            theads.map((thead, index) => (
                                                thead.id === "janitors" ? <td key={index}>{mcp[thead.id]}/{mcp.max}</td> : <td key={index}>{mcp[thead.id]}</td>
                                            ))
                                        }
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>   
        </div>
    )
}

export default MCPSelection