import{Header, Button, Grid, Image } from 'semantic-ui-react';
import Container from "../Container";
import marvelImage from "../../img/marvel.png";

import './BestCharacters.scss';

export default function BestCharacters() {

    return(
        <Container>
          <div className='best-characters'>
            <Grid columns={2} divided="vertically">
             <Grid.Column>
                <Header as="h1">
                The best characters everyone talks about
                </Header>
                <Header as = "h3">Enjoy awesome content</Header>
                <Button> See all characters</Button>
             </Grid.Column>
             <Grid.Column className="image-container">
                <Image src={marvelImage} alt="Marvel APP" />
             </Grid.Column>
            </Grid>
          </div>
        </Container>
         );

    }