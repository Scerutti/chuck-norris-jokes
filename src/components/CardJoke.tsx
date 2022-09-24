import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Joke } from "../interfaces/Interfaces";

const image = 'https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png';

export const CardJoke = (props:Joke) => {
    const { value } = props;
    return(
        <Card className="cards">
            <CardHeader title="It's a Joke"  avatar={
                <Avatar src={image} sx={{ width: 56, height: 56 }}/>
            }/>
            <CardContent>
                <Typography>
                    {value}
                </Typography>
            </CardContent>
        </Card>
    )
}