import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Paper ,AppBar,TextField,Button } from "@mui/material";
import { useNavigate, useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input'

import Posts from '../../components/Posts/Posts.js';
import Form from '../../components/Form/Form.js';

import {getPosts,getPostsBySearch} from '../../actions/posts';
import { useDispatch } from 'react-redux'
import useStyles from './styles.js'
import Paginate from '../Pagination.jsx';

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId,setCurrentId]=useState(null);
    const dispatch=useDispatch();
    const classes =useStyles();
    const query=useQuery();
    const Navigate=useNavigate();
    const page =query.get('page')|| 1;
    const seachQuery=query.get('searchQuery');
    const [search,setSearch]=useState('');
    const [tags,setTags]=useState([]);
  
  const searchPost=()=>{
    if(search.trim()|| tags){
      dispatch(getPostsBySearch({search,tags:tags.join(',')}));
      Navigate(`/posts/search?searchQuery=${search||'none'}&tags=${tags.join(',')}`)
    } else{
      Navigate('/')
    }
  }

  const handleKeyPress=(e)=>{
    if(e.keyCode===13){
      searchPost();
    }
  }

  const handleAdd=(tag)=>setTags([...tags,tag]);

  const handleDelete=(tagToDelete)=>setTags(tags.filter((tag)=>tag!==tagToDelete))

  return (
    <Grow in>
        <Container maxWidth='xl'>
          <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
               <Posts setCurrentId={setCurrentId}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                <TextField name='search' variant='outlined' label="Search Memories" fullWidth value={search} onChange={(e)=>{setSearch(e.target.value)}}
                onKeyPress={handleKeyPress} />
                <ChipInput style={{margin:'10px 0'}}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label='Search Tags'
                variant='outlined'
                />
                <Button onClick={searchPost} className={classes.searchButton} variant="outlined" color='primary'>Search</Button>
              </AppBar>
               <Form currentId={currentId} setCurrentId={setCurrentId}/>
               <Paper elevation={6}>
                  <Paginate page={page}/>
               </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home
