import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import './SearchStudent.css';
import { StudentController } from '../classes/StudentController';

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ShowStudent.css';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

export function SearchStudent() {
    let studImpl = new StudentController();
    let { id } = useParams();
    let studentArr = useSelector((reducer) => reducer.StudReducer)
    let student = studentArr.find(ele => ele.id == id);
    console.log(student === undefined);
    return (
        <div className='show'>
            {student === undefined ? <h2 className='no'>No Student with id {id}</h2> :
                <Card className="card" key={student.id}>
                    <CardContent className="cardcontent">
                        <Typography gutterBottom variant="h4" component="h2">
                            {student.name}
                        </Typography>
                        <Typography variant="h6" color="primary" component="p">
                            Student Id : {student.id}
                        </Typography>
                        <Typography variant="h6" color="primary" component="p">
                            Student Dept: {student.department}
                        </Typography>
                        <Typography variant="h6" color="primary" component="p">
                            Student Standard: {student.standard}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing className="cardactions">
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <NavLink className="edit" to={`/edit/${student.id}`}>Edit</NavLink>
                        <NavLink className="delete" to={`/delete/${student.id}`}>Delete</NavLink>
                    </CardActions>
                </Card>
            }
        </div>
    )
}