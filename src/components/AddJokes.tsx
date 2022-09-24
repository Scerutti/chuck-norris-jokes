import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import api from "../api/api";
import { Joke, Status } from "../interfaces/Interfaces";
import { CardJoke } from "./CardJoke";
import Swal from 'sweetalert2';
import './styles.css';

export const AddJokes = () =>{
    const [jokes, setJokes] = useState<Joke []>([]);
    const [status, setStatus] = useState<Status>(Status.Init);

    const getJoke =() =>{
        api
        .fetch()
        .then((joke)=> {
          succesAddJoke()
          setTimeout(()=>{
            setJokes((jokes)=>jokes.concat(joke));
            setStatus(Status.Resolved)
          },1000)
        })
        .catch(()=>setStatus(Status.Rejected))
    }

    const cleanScreen = () =>{
        setJokes([]);
    }


    const succesAddJoke = () => {
      Swal.fire({
        title:'Adding ...',
        text:'Wait, we are adding a joke',
        showConfirmButton: false,
        timer:1000,
        // timerProgressBar: true,
        didOpen:()=>{
          Swal.showLoading()
        }
      }).then(()=>
        Swal.fire({
          title:'Adding complete',
          showConfirmButton: false,
          icon:'success',
          timer:1000
        })
      )
    }

    return(
      <div className="App">
          <Typography variant="h3" >Chuck Norris Jokes</Typography>
        {
          jokes.length? 
            <Grid container mt={2} spacing={2}>
              
                {
                  jokes.map((joke)=>(
                    <Grid item xs={12} id={joke.id ? joke.id : joke.value} >
                      <CardJoke id={joke.id} value={joke.value}/>
                    </Grid >
                  ))
                }
            </Grid>
          :
            <Typography> No jokes yet</Typography>
          
        }
        {/* <div  className="Buttons"> */}

          <Stack direction='row' spacing={3} padding={2} sx={{justifyContent:'center'}} >
            <Button disabled={status===Status.Pending} onClick={getJoke} size='medium' variant='contained' color='success'>
            {
              !jokes.length ? 'Add Jokes' : 'Add more jokes'
            }
            </Button>
            <Button onClick={cleanScreen} disabled={!jokes.length} size='medium' variant='contained' color='error'>
              Clear screen
            </Button>
          </Stack>
          
        {/* </div> */}
        </div>         
    )
}