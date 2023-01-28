import React from 'react'
import { Col, Row,Container } from 'react-bootstrap';
import { useDispatch} from 'react-redux'
import { getAllMovie,getSearch } from "../redux/actions/movieAction";
import icon from './images/favicon.svg'


const NavBar = () => {
    const onsearch=(filmToSearch)=>{
        search(filmToSearch)
    }
    const dispatch=useDispatch(); 
      // search
const search=async (filmToSearch)=>{
    if (filmToSearch==='') {
        dispatch(getAllMovie())
    }else
    {
    dispatch(getSearch(filmToSearch))
    }
  }

    return (
    <div className='nav-style w-100'>
        <Container>
            <Row className='pt-12'>
                <Col xs='2' lg='1'>
                    <a href='/'>
                        <img className='logo' src={icon} alt='icon'/>
                    </a>
                </Col>
                <Col xs='10' lg='11' className='d-flex align-items-center'>
                    <div className='search w-100'>
                        <i className='fa fa-search'></i>
                        <input onChange={(e)=>onsearch(e.target.value)} type='text' className='form-control' placeholder='search'></input>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default NavBar