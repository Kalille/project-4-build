import React from 'react'

import { Box, Button } from "../styles";
import { Link, useParams } from "react-router-dom";

function AddToMyPage({cid}){

    return(
        <div>  <Button as={Link} to={`/comic/${cid}`}>
     Add Your Thoughts
      </Button>
      </div>



    )
}

export default AddToMyPage